'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/SocialIcons';
import styles from './Footer.module.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.copyright}>
          © {year} <strong> &nbsp; {portfolioData.personal.name}</strong>.
        </p>
      </div>

      <div className={styles.socials}>
        <a
          href={portfolioData.socials.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className={styles.socialLink}
        >
          <Github size={18} />
        </a>
        <a
          href={portfolioData.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className={styles.socialLink}
        >
          <Linkedin size={18} />
        </a>
        <a
          href={portfolioData.socials.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className={styles.socialLink}
        >
          <WhatsAppIcon size={18} />
        </a>

        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={styles.scrollTopBtn}
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
