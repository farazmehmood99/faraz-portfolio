'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Compass, Layout, Terminal, Rocket } from 'lucide-react';
import styles from './Workflow.module.css';

const icons = [
  <Compass size={20} key="1" />,
  <Layout size={20} key="2" />,
  <Terminal size={20} key="3" />,
  <Rocket size={20} key="4" />,
];

export default function Workflow() {
  return (
    <section className={styles.section}>
      <div className={styles.dotBefore}>Workflow</div>
      <h2 className={styles.heading}>
        How I Deliver High-Impact Digital Products
      </h2>

      <div className={styles.grid}>
        {portfolioData.workflow.map((item, idx) => (
          <div key={item.step} className={styles.card}>
            <div>
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  {icons[idx]}
                </div>

                <span className={styles.stepNum}>
                  {item.step}
                </span>
              </div>

              <h3 className={styles.stepTitle}>
                {item.title}
              </h3>

              <p className={styles.stepDesc}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
