'use client';

import React, { useState, useEffect } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { 
  Home, 
  Briefcase,
  Layers, 
  User, 
  Cpu, 
  Mail, 
  LayoutGrid, 
  X,
  FolderGit2,
  ChevronRight,
  Github,
  Linkedin
} from 'lucide-react';
import { WhatsAppIcon, TwitterIcon } from '@/components/icons/SocialIcons';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'works', 'services', 'about', 'tech-stack', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={18} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
    { id: 'works', label: 'Selected Works', icon: <FolderGit2 size={18} /> },
    { id: 'services', label: 'Services', icon: <Layers size={18} /> },
    { id: 'about', label: 'About', icon: <User size={18} /> },
    { id: 'tech-stack', label: 'Tech Stack', icon: <Cpu size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={18} /> },
  ];

  return (
    <>
      {/* Top Right Circular Bento Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={styles.tfBtnMenu}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? <X size={22} /> : <LayoutGrid size={22} />}
      </button>

      {/* Far-Right Floating Vertical Icon Dock */}
      <ul className={styles.rightNav} role="navigation" aria-label="Quick Nav">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={isActive ? styles.active : ''}
                aria-label={item.label}
              >
                {item.icon}
                <span className={styles.navTooltip}>{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>

      {/* Bottom-Right Floating WhatsApp Button */}
      <a
        href={portfolioData.socials.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.floatingWhatsappBtn}
        aria-label="Direct WhatsApp Chat"
      >
        <WhatsAppIcon size={26} color="#ffffff" />
      </a>

      {/* Slide-out Off-Canvas Drawer Menu */}
      {menuOpen && (
        <div className={styles.drawerWrapper}>
          {/* Backdrop Overlay */}
          <div
            onClick={() => setMenuOpen(false)}
            className={styles.drawerBackdrop}
          />

          {/* Drawer Inner Panel */}
          <div className={styles.drawerPanel}>
            <div>
              {/* Header */}
              <div className={styles.drawerHeader}>
                <div className={styles.drawerTitle}>
                  Navigation Menu
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className={styles.drawerCloseBtn}
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Navigation Links */}
              <ul className={styles.drawerNavList}>
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={() => setMenuOpen(false)}
                        className={`${styles.drawerNavLink} ${isActive ? styles.drawerNavLinkActive : ''}`}
                      >
                        <span className={styles.drawerNavLinkLeft}>
                          {item.icon}
                          {item.label}
                        </span>
                        <ChevronRight size={16} opacity={0.6} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Social Network Links */}
            <div className={styles.drawerFooter}>
              <div className={styles.drawerTitle} style={{ fontSize: '0.85rem', marginBottom: '16px' }}>
                Social Network
              </div>
              <div className={styles.drawerSocials}>
                <a
                  href={portfolioData.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.drawerSocialBtn}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={portfolioData.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.drawerSocialBtn}
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href={portfolioData.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.drawerSocialBtn}
                  aria-label="Twitter / X"
                >
                  <TwitterIcon size={16} />
                </a>
                <a
                  href={portfolioData.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.drawerSocialBtn}
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
