'use client';

import React, { useState, useEffect, useRef } from 'react';
import { portfolioData, Project } from '@/data/portfolioData';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import styles from './Projects.module.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Mobile' | 'Web' | 'Full-Stack'>('All');
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category === activeFilter;
  });

  const categories: ('All' | 'Mobile' | 'Web' | 'Full-Stack')[] = ['All', 'Mobile', 'Web', 'Full-Stack'];

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.children;
    gsap.fromTo(
      cards,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, ease: 'power2.out' }
    );
  }, [activeFilter]);

  return (
    <section id="works" className={styles.section}>
      {/* tatheer.dev style Showcase CTA Card */}
      <div className={styles.ctaCard}>
        <div className={styles.ctaPill}>
          Project Showcase
        </div>
        <h3 className={styles.ctaTitle}>
          Explore My Production Project Portfolio
        </h3>
        <p className={styles.ctaDesc}>
          Cross-platform Flutter mobile applications, modern Next.js 14 web platforms, and cloud backend architectures built for speed, scalability, and seamless user interaction.
        </p>
        <a 
          href={portfolioData.socials.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.ctaLink}
        >
          Click here to view detailed repositories on GitHub
          <ArrowUpRight size={18} />
        </a>
      </div>

      {/* Filter Tabs */}
      <div className={styles.filterTabs}>
        {categories.map((cat) => {
          const isSelected = activeFilter === cat;
          const count =
            cat === 'All'
              ? portfolioData.projects.length
              : portfolioData.projects.filter((p) => p.category === cat).length;

          return (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`${styles.filterTab} ${isSelected ? styles.filterTabActive : ''}`}
            >
              <span>{cat}</span>
              <span className={styles.filterTabCount}>
                ({count})
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div ref={gridRef} className={styles.projectsGrid}>
        {filteredProjects.map((project: Project) => (
          <div key={project.id} className={styles.projectCard}>
            <div>
              <div className={styles.cardHeader}>
                <span className={styles.categoryTag}>
                  {project.category}
                </span>
                {project.metrics && (
                  <span className={styles.metricsTag}>
                    {project.metrics}
                  </span>
                )}
              </div>

              <h4 className={styles.projectTitle}>
                {project.title}
              </h4>
              <p className={styles.projectDesc}>
                {project.description}
              </p>
            </div>

            <div>
              <div className={styles.techStackWrap}>
                {project.techStack.map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.cardActions}>
                {project.category === 'Mobile' ? (
                  <span 
                    className={styles.demoUnavailableBtn} 
                    title="Live web demo is unavailable for native mobile applications. Available on-device or via GitHub repository."
                  >
                    <span>Live Demo Unavailable</span>
                  </span>
                ) : project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.demoBtn}
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className={styles.demoUnavailableBtn}>
                    <span>Live Demo Unavailable</span>
                  </span>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.codeBtn}
                >
                  <Github size={14} />
                  <span>View Repository</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
