'use client';

import React, { useState } from 'react';
import { portfolioData, Skill } from '@/data/portfolioData';
import styles from './SkillsGrid.module.css';

export default function SkillsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Mobile', 'Frontend', 'Backend & Cloud', 'Tools & DevOps'];

  // Icons mapping for simpleicons CDN
  const iconSlugs: Record<string, string> = {
    'Flutter': 'flutter',
    'Dart': 'dart',
    'React': 'react',
    'Next.js': 'nextdotjs',
    'Next.js 14': 'nextdotjs',
    'TypeScript / JS': 'typescript',
    'TypeScript': 'typescript',
    'JavaScript': 'javascript',
    'HTML5 & CSS3': 'html5',
    'Firebase': 'firebase',
    'Supabase & SQL': 'supabase',
    'Supabase': 'supabase',
    'REST APIs & Node': 'nodedotjs',
    'Node.js': 'nodedotjs',
    'Git & GitHub': 'git',
    'Figma UI Translation': 'figma',
    'Figma': 'figma',
    'State Management (Bloc/Riverpod)': 'redux',
    'REST APIs': 'postman',
    'PostgreSQL': 'postgresql',
    'SQLite': 'sqlite',
    'Tailwind CSS': 'tailwindcss',
  };

  const filteredSkills = portfolioData.skills.filter((skill) => {
    if (selectedCategory === 'All') return true;
    return skill.category === selectedCategory;
  });

  return (
    <section id="tech-stack" className={styles.section}>
      <div className={styles.dotBefore}>Tech Stack</div>
      <h2 className={styles.heading}>
        Core Technologies & Tools
      </h2>

      {/* Filter Tabs */}
      <div className={styles.filterTabs}>
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`${styles.filterTab} ${isSelected ? styles.filterTabActive : ''}`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Tech Stack Grid matching tatheer.dev */}
      <div className={styles.techStackGrid}>
        {filteredSkills.map((skill: Skill, idx: number) => {
          const slug = iconSlugs[skill.name] || 'code';
          const iconUrl = `https://cdn.simpleicons.org/${slug}/ffffff`;

          return (
            <div key={idx} className={styles.techCard}>
              <div className={styles.iconBox}>
                <img 
                  src={iconUrl} 
                  alt={skill.name} 
                  loading="lazy"
                  className={styles.iconImg}
                  onError={(e) => {
                    // Fallback to text initials if icon fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div className={styles.techInfo}>
                <div className={styles.techName}>{skill.name}</div>
                <div className={styles.techLevel}>{skill.category}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
