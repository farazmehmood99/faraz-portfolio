'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { GraduationCap, Terminal, CheckCircle2, Award } from 'lucide-react';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.dotBefore}>About Me</div>
      <h2 className={styles.heading}>
        Engineering Scalable Mobile Apps & Practical Full-Stack Solutions
      </h2>
      <p className={styles.lead}>
        I am Faraz Mehmood, a Flutter & Mobile Application Developer based in Kohat, Pakistan. Currently developing production applications at LogicCraft Technologies and expanding into full-stack web engineering at Arfa Karim Technology Incubator. My approach prioritizes clean MVVM architecture, 60fps native feel, offline SQLite persistence, and reliable cloud sync with Firebase & Supabase.
      </p>

      <div className={styles.bentoGrid}>
        {/* Story & Philosophy */}
        <div className={styles.bentoCard}>
          <div>
            <div className={styles.cardHeader}>
              <Terminal size={20} color="#005fea" />
              <h3 className={styles.cardTitle}>Engineering Principles & Experience</h3>
            </div>

            <p className={styles.paragraph}>
              {portfolioData.personal.aboutExtended[0]}
            </p>

            <p className={styles.paragraph}>
              {portfolioData.personal.aboutExtended[1]}
            </p>
          </div>

          <div className={styles.principlesGrid}>
            <div className={styles.principleItem}>
              <CheckCircle2 size={15} color="#005fea" />
              <span>60 FPS Native UI</span>
            </div>
            <div className={styles.principleItem}>
              <CheckCircle2 size={15} color="#005fea" />
              <span>Offline-First SQLite</span>
            </div>
            <div className={styles.principleItem}>
              <CheckCircle2 size={15} color="#005fea" />
              <span>MVVM & Provider</span>
            </div>
            <div className={styles.principleItem}>
              <CheckCircle2 size={15} color="#005fea" />
              <span>Firebase & Supabase</span>
            </div>
          </div>
        </div>

        {/* Academic & Certifications Card */}
        <div className={styles.bentoCard}>
          <div>
            <div className={styles.cardHeader}>
              <div className={styles.iconBox}>
                <GraduationCap size={22} />
              </div>
              <div>
                <span className={styles.sublabel}>
                  Education & Background
                </span>
                <h3 className={styles.cardTitle}>
                  {portfolioData.education[0].degree}
                </h3>
              </div>
            </div>

            <div className={styles.eduRow}>
              <span className={styles.institution}>
                {portfolioData.education[0].institution}
              </span>
              <span className={styles.statusPill}>
                {portfolioData.education[0].status}
              </span>
            </div>

            <p className={styles.paragraph} style={{ marginBottom: '16px' }}>
              Rigorous 4-year Computer Science degree (2020–2024) covering Data Structures, Algorithms, Software Engineering, and Mobile App Architecture.
            </p>

            <div className={styles.highlightsWrap}>
              {portfolioData.education[0].highlights.map((highlight, hIdx) => (
                <span key={hIdx} className={styles.highlightPill}>
                  {highlight}
                </span>
              ))}
            </div>

            {/* Certifications Section */}
            <div className={styles.certList}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <Award size={16} color="#005fea" />
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ffffff' }}>Professional Certifications</span>
              </div>
              {portfolioData.certifications?.map((cert, cIdx) => (
                <div key={cIdx} className={styles.certItem}>
                  <span className={styles.certTitle}>{cert.title}</span>
                  <span className={styles.certIssuer}>{cert.issuer} ({cert.year})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

