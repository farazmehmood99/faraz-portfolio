'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { 
  GraduationCap, 
  Award, 
  Code2, 
  Layers, 
  Zap, 
  Database, 
  Cloud 
} from 'lucide-react';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.dotBefore}>About Me</div>
      <h2 className={styles.heading}>
        Engineering Scalable Mobile Apps & Practical Full-Stack Solutions
      </h2>
      <p className={styles.lead}>
        I am Faraz Mehmood, a Flutter & Mobile Application Developer based in Kohat, Pakistan. Currently developing production applications at LogicCraft Technologies and expanding into full-stack web engineering at Arfa Karim Technology Incubator. My approach prioritizes clean MVVM architecture, smooth native feel, offline SQLite persistence, and reliable cloud sync with Firebase & Supabase.
      </p>

      <div className={styles.bentoGrid}>
        {/* Core Capabilities Card - Replaces repetitive text with actionable strengths */}
        <div className={styles.bentoCard}>
          <div>
            <div className={styles.cardHeader}>
              <div className={styles.iconBox}>
                <Code2 size={22} />
              </div>
              <div>
                <span className={styles.sublabel}>Core Competencies</span>
                <h3 className={styles.cardTitle}>Engineering Capabilities</h3>
              </div>
            </div>

            <div className={styles.capabilitiesList}>
              <div className={styles.capabilityItem}>
                <div className={styles.capabilityIconWrap}>
                  <Layers size={18} color="#005fea" />
                </div>
                <div>
                  <h4 className={styles.capabilityTitle}>Clean MVVM Architecture</h4>
                  <p className={styles.capabilityDesc}>
                    Scalable, testable code structure with Provider state management and modular separation of concerns.
                  </p>
                </div>
              </div>

              <div className={styles.capabilityItem}>
                <div className={styles.capabilityIconWrap}>
                  <Zap size={18} color="#00d2ff" />
                </div>
                <div>
                  <h4 className={styles.capabilityTitle}>High-Performance Mobile UI</h4>
                  <p className={styles.capabilityDesc}>
                    Jank-free Flutter rendering, fluid animations, and responsive layouts across iOS & Android devices.
                  </p>
                </div>
              </div>

              <div className={styles.capabilityItem}>
                <div className={styles.capabilityIconWrap}>
                  <Database size={18} color="#3ECF8E" />
                </div>
                <div>
                  <h4 className={styles.capabilityTitle}>Offline-First SQLite Persistence</h4>
                  <p className={styles.capabilityDesc}>
                    Resilient local database caching for seamless data access and continuous usability offline.
                  </p>
                </div>
              </div>

              <div className={styles.capabilityItem}>
                <div className={styles.capabilityIconWrap}>
                  <Cloud size={18} color="#FFCA28" />
                </div>
                <div>
                  <h4 className={styles.capabilityTitle}>Cloud & Real-Time Sync</h4>
                  <p className={styles.capabilityDesc}>
                    Firebase Authentication, Firestore live streams, and Supabase Storage integration for secure operations.
                  </p>
                </div>
              </div>
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', marginTop: '16px' }}>
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
