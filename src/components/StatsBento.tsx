'use client';

import React from 'react';
import styles from './StatsBento.module.css';

export default function StatsBento() {
  const experiences = [
    {
      company: 'LogicCraft Technologies',
      role: 'Flutter & Mobile Application Developer',
      timeline: 'July 2024 — Present',
    },
    {
      company: 'Arfa Karim Technology Incubator',
      role: 'Full Stack Development Trainee',
      timeline: '2026 — Present',
    },
    {
      company: 'Kovue Coffee Ecosystem (Final Year Project)',
      role: 'Lead Flutter Mobile Architect (4 UIs)',
      timeline: '2024',
    },
    {
      company: 'Kohat University of Science & Technology',
      role: 'B.S. in Computer Science',
      timeline: '2020 — 2024',
    },
  ];

  return (
    <div className={styles.wrapper}>
      {/* section-experiences (from tatheer.dev) */}
      <section className={styles.sectionExperiences} id="experience">
        <div className={styles.dotBefore}>Experience</div>
        <h2 className={styles.heading}>
          Experience includes high-performance Flutter mobile applications, production Next.js platforms, Firebase backend architecture, and solid CS foundations.
        </h2>

        <div className={styles.experienceList}>
          {experiences.map((exp, idx) => (
            <div key={idx} className={styles.experienceItem}>
              <div>
                <div className={styles.company}>{exp.company}</div>
                <h3 className={styles.role}>{exp.role}</h3>
              </div>
              <span className={styles.timelineBadge}>{exp.timeline}</span>
            </div>
          ))}
        </div>
      </section>

      {/* section-selected-works marquee banner (from tatheer.dev) */}
      <div className={styles.bannerMarqueeTrack} role="presentation">
        <div className={styles.bannerMarqueeGroup}>
          {[...Array(6)].map((_, i) => (
            <React.Fragment key={i}>
              <span className={styles.bannerText}>Selected Work</span>
              <span className={styles.dotCircle} />
            </React.Fragment>
          ))}
        </div>
        <div className={styles.bannerMarqueeGroup} aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <React.Fragment key={`repeat-${i}`}>
              <span className={styles.bannerText}>Selected Work</span>
              <span className={styles.dotCircle} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
