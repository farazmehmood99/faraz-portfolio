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
                {/* Deployment / Live Demo Status */}
                {project.isDemoPublished && project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.demoBtn}
                    title={`View live demo of ${project.title}`}
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={13} />
                  </a>
                ) : (
                  <span 
                    className={styles.notPublishedBtn} 
                    title="Live production build / store release is not yet published"
                  >
                    <span className={styles.statusDotAmber} />
                    <span>Not Published</span>
                  </span>
                )}

                {/* View Repository Button */}
                {project.isRepoPublished ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.codeBtn}
                    title={`View ${project.title} source code repository on GitHub`}
                  >
                    <Github size={13} />
                    <span>View Repo</span>
                    <ArrowUpRight size={12} className={styles.codeArrow} />
                  </a>
                ) : (
                  <a
                    href={portfolioData.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.repoPendingBtn}
                    title="Repository in private development — click to explore Faraz's GitHub profile"
                  >
                    <Github size={13} />
                    <span>Repo Pending</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
