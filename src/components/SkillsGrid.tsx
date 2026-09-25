'use client';

import React, { useState } from 'react';
import { portfolioData, Skill } from '@/data/portfolioData';
import { 
  Smartphone, 
  Database, 
  Globe, 
  Terminal, 
  Layers, 
  Code2, 
  Cpu, 
  Wrench 
} from 'lucide-react';
import styles from './SkillsGrid.module.css';

// Exact mappings for simpleicons CDN (all tested for 200 HTTP response)
const iconSlugs: Record<string, string> = {
  'Flutter': 'flutter',
  'Dart': 'dart',
  'Provider & MVVM': 'flutter',
  'SQLite': 'sqlite',
  'Firebase (Firestore/Auth)': 'firebase',
  'Firebase': 'firebase',
  'Supabase Storage': 'supabase',
  'Supabase': 'supabase',
  'REST API (HTTP)': 'postman',
  'REST APIs': 'postman',
  'React 18 & Next.js 14': 'react',
  'React': 'react',
  'Next.js': 'nextdotjs',
  'Next.js 14': 'nextdotjs',
  'TypeScript & JavaScript': 'typescript',
  'TypeScript': 'typescript',
  'JavaScript': 'javascript',
  'HTML5 & CSS3 / Tailwind': 'html5',
  'Tailwind CSS': 'tailwindcss',
  'C++ & OOP': 'cplusplus',
  'Java': 'openjdk',
  'VS Code': 'vscodium',
  'Android Studio': 'androidstudio',
  'Git & GitHub': 'git',
  'Postman': 'postman',
  'Figma UI Translation': 'figma',
  'Figma': 'figma',
};

// Skill Card with safe guaranteed icon rendering
function TechIconItem({ skill }: { skill: Skill }) {
  const [hasError, setHasError] = useState(false);
  const slug = iconSlugs[skill.name];
  const iconUrl = slug ? `https://cdn.simpleicons.org/${slug}/ffffff` : null;

  // Fallback icon based on category
  const renderFallbackIcon = () => {
    switch (skill.category) {
      case 'Mobile':
        return <Smartphone size={22} color="#00d2ff" />;
      case 'Backend & Cloud':
        return <Database size={22} color="#3ECF8E" />;
      case 'Frontend':
        return <Globe size={22} color="#61DAFB" />;
      case 'Tools':
        return <Terminal size={22} color="#F05032" />;
      default:
        return <Code2 size={22} color="#005fea" />;
    }
  };

  return (
    <div className={styles.techCard}>
      <div className={styles.iconBox}>
        {iconUrl && !hasError ? (
          <img
            src={iconUrl}
            alt={skill.name}
            loading="lazy"
            className={styles.iconImg}
            onError={() => setHasError(true)}
          />
        ) : (
          renderFallbackIcon()
        )}
      </div>
      <div className={styles.techInfo}>
        <div className={styles.techName}>{skill.name}</div>
        <div className={styles.techLevel}>{skill.category}</div>
      </div>
    </div>
  );
}

export default function SkillsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Mobile', 'Frontend', 'Backend & Cloud', 'Tools'];

  const filteredSkills = portfolioData.skills.filter((skill) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Tools') return skill.category === 'Tools';
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

      {/* Tech Stack Grid */}
      <div className={styles.techStackGrid}>
        {filteredSkills.map((skill: Skill, idx: number) => (
          <TechIconItem key={idx} skill={skill} />
        ))}
      </div>
    </section>
  );
}
