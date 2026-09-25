const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

function crc32(buf) {
  let table = new Int32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let j = 0; j < 8; j++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    table[i] = c;
  }
  let c = -1;
  for (let i = 0; i < buf.length; i++) c = table[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}

function makeChunk(type, data) {
  const len = data.length;
  const chunk = Buffer.alloc(12 + len);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4, 4, 'ascii');
  data.copy(chunk, 8);
  const typeAndData = chunk.subarray(4, 8 + len);
  chunk.writeUInt32BE(crc32(typeAndData), 8 + len);
  return chunk;
}

function createPng(size) {
  const width = size;
  const height = size;
  const rawData = Buffer.alloc((width * 4 + 1) * height);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * (width * 4 + 1);
    rawData[rowOffset] = 0; // Filter None

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;

      // Distance from center for rounded rect (squircle)
      const cx = x - (width - 1) / 2;
      const cy = y - (height - 1) / 2;
      const cornerR = width * 0.24;
      const innerW = width / 2 - cornerR;
      const innerH = height / 2 - cornerR;
      const dx = Math.max(0, Math.abs(cx) - innerW);
      const dy = Math.max(0, Math.abs(cy) - innerH);
      const distFromCorner = Math.sqrt(dx * dx + dy * dy);

      if (distFromCorner > cornerR + 0.6) {
        // Outside squircle: Transparent
        rawData[pxOffset] = 0;
        rawData[pxOffset + 1] = 0;
        rawData[pxOffset + 2] = 0;
        rawData[pxOffset + 3] = 0;
        continue;
      }

      // Smooth anti-aliased edge
      let edgeAlpha = 1.0;
      if (distFromCorner > cornerR - 0.4) {
        edgeAlpha = Math.max(0, Math.min(1, (cornerR + 0.6 - distFromCorner) / 1.0));
      }

      // Diagonal gradient factor (0 to 1)
      const t = (x + y) / (width * 2 - 2);

      // Default Base: Vibrant Royal Blue to Deep Cobalt
      let r = Math.round(0 * (1 - t) + 0 * t);
      let g = Math.round(102 * (1 - t) + 56 * t);
      let b = Math.round(255 * (1 - t) + 179 * t);
      let a = Math.round(255 * edgeAlpha);

      // Cyan to Royal Blue Border (outer 1.8px)
      const borderWidth = Math.max(1.2, width * 0.045);
      if (distFromCorner > cornerR - borderWidth) {
        r = Math.round(56 * (1 - t) + 0 * t);
        g = Math.round(189 * (1 - t) + 80 * t);
        b = Math.round(248 * (1 - t) + 204 * t);
      }

      // Letter 'F' Normalized Coordinates (0 to 64)
      const nx = (x / width) * 64;
      const ny = (y / height) * 64;

      // Stem: x in [21, 29.5], y in [16.5, 47.5]
      const inStem = nx >= 21.0 && nx <= 29.5 && ny >= 16.5 && ny <= 47.5;
      // Top Bar: x in [21, 44.5], y in [16.5, 24.5]
      const inTopBar = nx >= 21.0 && nx <= 44.5 && ny >= 16.5 && ny <= 24.5;
      // Mid Bar: x in [21, 40.0], y in [30.5, 38.0]
      const inMidBar = nx >= 21.0 && nx <= 40.0 && ny >= 30.5 && ny <= 38.0;

      if (inStem || inTopBar || inMidBar) {
        r = 255;
        g = 255;
        b = 255;
        a = Math.round(255 * edgeAlpha);
      }

      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
      rawData[pxOffset + 3] = a;
    }
  }

  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // Bit depth
  ihdrData[9] = 6; // RGBA
  ihdrData[10] = 0; // Compression
  ihdrData[11] = 0; // Filter
  ihdrData[12] = 0; // Interlace

  const ihdr = makeChunk('IHDR', ihdrData);
  const idat = makeChunk('IDAT', zlib.deflateSync(rawData));
  const iend = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([sig, ihdr, idat, iend]);
}

function makeIco(entries) {
  // entries: array of { pngBuffer, size }
  const count = entries.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(count, 4); // Number of images

  let offset = 6 + count * 16;
  const dirBuffers = [];
  const imageBuffers = [];

  for (const entry of entries) {
    const dir = Buffer.alloc(16);
    dir[0] = entry.size >= 256 ? 0 : entry.size; // Width
    dir[1] = entry.size >= 256 ? 0 : entry.size; // Height
    dir[2] = 0; // Palette
    dir[3] = 0; // Reserved
    dir.writeUInt16LE(1, 4); // Planes
    dir.writeUInt16LE(32, 6); // Bits per pixel
    dir.writeUInt32LE(entry.pngBuffer.length, 8); // Image size
    dir.writeUInt32LE(offset, 12); // Image offset
    dirBuffers.push(dir);
    imageBuffers.push(entry.pngBuffer);
    offset += entry.pngBuffer.length;
  }

  return Buffer.concat([header, ...dirBuffers, ...imageBuffers]);
}

const png16 = createPng(16);
const png32 = createPng(32);
const png64 = createPng(64);
const png192 = createPng(192);

const ico = makeIco([
  { pngBuffer: png32, size: 32 },
  { pngBuffer: png16, size: 16 }
]);

const pubDir = path.join(__dirname, '..', 'public');
fs.writeFileSync(path.join(pubDir, 'favicon.ico'), ico);
fs.writeFileSync(path.join(pubDir, 'icon.png'), png32);
fs.writeFileSync(path.join(pubDir, 'icon-64.png'), png64);
fs.writeFileSync(path.join(pubDir, 'icon-192.png'), png192);

console.log('All icons generated successfully with matching royal-blue squircle and bold white F!');
