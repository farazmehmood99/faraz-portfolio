'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Preloader.module.css';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Smooth progress counter from 0 to 100% in ~1.2s
    const startTime = Date.now();
    const duration = 1200; // ms

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoaded(true);
          setTimeout(() => {
            setIsHidden(true);
          }, 600); // Wait for fade-out/slide animation to finish
        }, 200);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  if (isHidden) return null;

  return (
    <div
      className={`${styles.preloaderOverlay} ${isLoaded ? styles.preloaderLoaded : ''}`}
      aria-label="Loading portfolio"
      role="status"
    >
      <div className={styles.preloaderContent}>
        {/* Animated Brand Logo Icon with Glass Glow Ring */}
        <div className={styles.logoWrapper}>
          <div className={styles.glowRing} />
          <div className={styles.logoIcon}>
            <Image
              src="/icon.svg"
              alt="Faraz Logo"
              width={56}
              height={56}
              priority
              className={styles.brandSvg}
            />
          </div>
        </div>

        {/* Name & Tagline */}
        <div className={styles.titleWrap}>
          <h2 className={styles.preloaderName}>Faraz Mehmood</h2>
          <p className={styles.preloaderTagline}>Full-Stack Software Engineer</p>
        </div>

        {/* Progress Bar Container */}
        <div className={styles.progressBarWrap}>
          <div
            className={styles.progressBarFill}
            style={{ width: `${progress}%` }}
          />
        </div>

      </div>
    </div>
  );
}
