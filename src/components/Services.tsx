'use client';

import React, { useState } from 'react';
import { 
  Smartphone, 
  Globe, 
  Cloud, 
  Sparkles, 
  ChevronDown, 
  ArrowUpRight,
  Globe2
} from 'lucide-react';
import styles from './Services.module.css';

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const servicesList = [
    {
      num: '(01)',
      title: 'Mobile App Development',
      icon: <Smartphone size={20} />,
      details: [
        'Single codebase multi-platform architectures with 60fps Flutter UI',
        'Robust state management with Bloc / Riverpod and clean layer separation',
        'Offline-first synchronization with SQLite, Hive, and REST background tasks',
        'Full deployment lifecycle to Google Play Store & Apple App Store',
      ],
    },
    {
      num: '(02)',
      title: 'Full-Stack Web Development',
      icon: <Globe size={20} />,
      details: [
        'Modern React & Next.js 14 App Router applications with Server Actions',
        'TypeScript-first architecture for clean, scalable, maintainable codebases',
        'Dynamic animations, dark mode obsidian aesthetics, and responsive bento layouts',
        'SEO-optimized, accessible, high-performance web applications',
      ],
    },
    {
      num: '(03)',
      title: 'Cloud Architecture & APIs',
      icon: <Cloud size={20} />,
      details: [
        'Firebase Authentication, Cloud Firestore, Cloud Functions, and Storage',
        'Supabase PostgreSQL relational schemas with Row Level Security (RLS)',
        'RESTful API design, third-party webhook integrations, and real-time sockets',
        'Fast and secure serverless deployments with edge optimization',
      ],
    },
    {
      num: '(04)',
      title: 'UI/UX & Interactive Engineering',
      icon: <Sparkles size={20} />,
      details: [
        'Modern micro-interactions, scroll-driven reveals, and spring physics',
        'Figma designs translated into pixel-perfect, accessible web & mobile code',
        'Smooth transitions with GSAP and hardware-accelerated animations',
        'Dark mode first, glassmorphism design systems with tailored HSL tokens',
      ],
    },
  ];

  return (
    <section id="services" className={styles.section}>
      <div className={styles.dotBefore}>My Services</div>
      
      {/* Accordion Wrap matching tatheer.dev */}
      <div className={styles.accordionWrap}>
        {servicesList.map((svc, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`${styles.accordionItem} ${isOpen ? styles.accordionItemActive : ''}`}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
            >
              <div className={styles.accordionHead}>
                <div className={styles.titleWrap}>
                  <span className={styles.iconWrap}>{svc.icon}</span>
                  <span>{svc.title}</span>
                </div>
                <div className={styles.headRight}>
                  <span className={styles.num}>{svc.num}</span>
                  <ChevronDown 
                    size={18} 
                    className={`${styles.chevron} ${isOpen ? styles.chevronActive : ''}`}
                  />
                </div>
              </div>

              {isOpen && (
                <div className={styles.accordionContent}>
                  <ul className={styles.detailsList}>
                    {svc.details.map((point, pIdx) => (
                      <li key={pIdx}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* More Info Footer matching tatheer.dev */}
      <div className={styles.servicesFooter}>
        <div className={styles.worldWide}>
          <Globe2 size={18} color="#005fea" />
          <span>Available to <strong style={{ color: '#fff' }}>Worldwide</strong></span>
        </div>
        <a 
          href="#contact" 
          className={styles.contactMeLink}
        >
          <span>Contact me</span>
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
