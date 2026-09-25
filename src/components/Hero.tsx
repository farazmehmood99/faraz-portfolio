'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolioData';
import {
  ArrowUpRight,
  Github,
  Linkedin
} from 'lucide-react';
import { WhatsAppIcon, TwitterIcon } from '@/components/icons/SocialIcons';
import gsap from 'gsap';
import styles from './Hero.module.css';

/**
 * Sticky Left Profile Sidebar Card 
 */
export function ProfileSidebar() {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sidebarRef.current, {
        opacity: 0,
        x: -25,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sidebarRef);

    return () => ctx.revert();
  }, []);

  return (
    <aside ref={sidebarRef} className={styles.leftSidebar} aria-label="Profile Card">
      {/* Ambient Blue Travelling Glow */}
      <div className={styles.sidebarAmbient} aria-hidden="true" />

      {/* Top Header: Logo Mark (Only 'F) */}
      <div className={styles.sidebarHeading}>
        {/* Modern 'F' Logo Mark */}
        <div className={styles.brandLogoMark} aria-label="Faraz Logo">
          <Image
            src="/icon.svg"
            alt="Faraz Logo"
            width={42}
            height={42}
            priority
            className={styles.brandLogoSvg}
          />
        </div>

        {/* Available Pill */}
        <div className={styles.boxStatus}>
          <div className={styles.statusDot} />
          <span>Available for <strong style={{ color: '#fff', fontWeight: 600 }}>new projects</strong></span>
        </div>
      </div>

      {/* Avatar Squircle Frame with new portrait */}
      <div className={styles.avatarWrap}>
        <Image
          src="/images/faraz_avatar.jpg"
          alt={portfolioData.personal.name}
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
          sizes="380px"
        />
      </div>

      {/* Profile Meta: Script Name, Email, Location */}
      <div className={styles.profileMeta}>
        <div className={styles.profileNameScript}>Faraz</div>
        <a href={`mailto:${portfolioData.personal.email}`} className={styles.mail}>
          {portfolioData.personal.email}
        </a>
        <div className={styles.address}>Based in {portfolioData.personal.location}</div>

        {/* 4 Circular Social Icon Buttons */}
        <ul className={styles.socialLinks}>
          <li>
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </li>
          <li>
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </li>
          <li>
            <a
              href={portfolioData.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={styles.whatsappSocialBtn}
            >
              <WhatsAppIcon size={18} />
            </a>
          </li>
        </ul>
      </div>

      {/* Bot Button: Get Started Capsule with White Arrow Circle */}
      <a href="#contact" className={styles.botButton} id="sidebar-cta-btn">
        <span className={styles.text}>Get Started</span>
        <div className={styles.arrowCircle}>
          <ArrowUpRight size={20} strokeWidth={2.4} />
        </div>
      </a>
    </aside>
  );
}

/**
 * Main Stream Hero Section (Exact 1:1 match to tatheer.dev screenshot)
 */
export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const indicatorsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.1,
      });

      if (indicatorsRef.current) {
        gsap.from(indicatorsRef.current.children, {
          opacity: 0,
          y: 25,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.3,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={styles.sectionHero} id="home">
      {/* Location Top Label */}
      <div className={styles.heroLocation}>
        {portfolioData.personal.location}
      </div>

      {/* Dot Subtitle */}
      <div className={styles.dotBefore}>
        Introduction
      </div>

      {/* Giant H1 Main Title */}
      <h1 ref={titleRef} className={styles.heroMainTitle}>
        Faraz Mehmood <br />
        Software Engineer · <br />
        Flutter & Web Development
      </h1>

      {/* Bio Description */}
      <p className={styles.heroDesc}>
        I build full-stack web and mobile products for real businesses. <br />
        Modern stacks, clear communication, and maintainable code.
      </p>

      {/* Pill Tags */}
      <ul className={styles.listTags}>
        <li className={styles.tagPill}>Flutter development</li>
        <li className={styles.tagPill}>Full-stack engineering</li>
        <li className={styles.tagPill}>Mobile & web apps</li>
        <li className={styles.tagPill}>Cloud & Firebase</li>
      </ul>

      {/* Indicators: Two Giant Bento Stat Cards */}
      <div ref={indicatorsRef} className={styles.indicatorsWrap}>
        {/* Card 1: Years in Tech */}
        <div className={styles.indicatorCard}>
          <div className={styles.cardTitle}>Years in Tech</div>
          <div className={styles.cardValueWrap}>
            <span className={styles.cardNumber}>1.5+</span>
          </div>
        </div>

        {/* Card 2: Project Success */}
        {/* <div className={styles.indicatorCard}>
          <div className={styles.cardTitle}>Project Success</div>
          <div className={styles.cardValueWrap}>
            <span className={styles.cardNumber}>99%</span>
          </div>
        </div> */}
        
      </div>
    </section>
  );
}
