import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: 'Faraz Mehmood | Full Stack Software Engineer · Flutter & Web Development',
  description:
    'Full stack software engineer (Kohat, Pakistan): Flutter mobile apps, modern web platforms, cloud architecture, and maintainable code delivery.',
  keywords: [
    'Faraz Mehmood',
    'Flutter Developer',
    'Full Stack Software Engineer',
    'Next.js Developer',
    'React Portfolio',
    'Mobile App Developer Pakistan',
    'Kohat Developer',
  ],
  authors: [{ name: 'Faraz Mehmood' }],
  creator: 'Faraz Mehmood',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://farazmehmood.dev',
    title: 'Faraz Mehmood | Full Stack Software Engineer · Flutter & Web Development',
    description:
      'I build full-stack web and mobile products for real businesses. Modern stacks, clear communication, and maintainable code.',
    siteName: 'Faraz Mehmood Portfolio',
  },
  icons: {
    icon: [
      { url: '/icon.svg?v=5', type: 'image/svg+xml' },
      { url: '/favicon.ico?v=5', sizes: 'any' },
      { url: '/icon.png?v=5', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png?v=5', type: 'image/png', sizes: '192x192' },
    ],
    shortcut: '/favicon.ico?v=5',
    apple: '/icon-192.png?v=5',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/icon.svg?v=5" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico?v=5" sizes="any" />
        <link rel="icon" href="/icon.png?v=5" type="image/png" sizes="32x32" />
        <link rel="shortcut icon" href="/favicon.ico?v=5" />
        <link rel="apple-touch-icon" href="/icon-192.png?v=5" />
      </head>
      <body>
        {/* Luxury Momentum Smooth Scroll */}
        <SmoothScroll />

        {/* Initial Loading Page / Splash Preloader */}
        <Preloader />

        {/* Custom Interactive Glowing Cursor */}
        <CustomCursor />

        {/* Ambient Blue Glow in Center */}
        <div className="hero-ambient-spotlight" aria-hidden="true" />

        {/* Top Bento, Right Nav Dock, WhatsApp */}
        <Navbar />

        {/* Main Application */}
        <main>{children}</main>
      </body>
    </html>
  );
}
