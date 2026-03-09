'use client';

import { useEffect, useRef } from 'react';
import styles from './Story.module.css';
import { legacyContent, milestones, pastPresidents } from '@/content/homeContent';

export default function Story() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add(styles.visible);
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(`.${styles.animateOnScroll}`);
    elements?.forEach((el) => observer.observe(el));

    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="legacy" className={styles.story} ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <span className={`text-overline ${styles.animateOnScroll}`}>{legacyContent.eyebrow}</span>
          <h2 className={styles.animateOnScroll}>{legacyContent.title}</h2>
          <p className={`${styles.intro} ${styles.animateOnScroll}`}>{legacyContent.intro}</p>
        </div>

        <div className={styles.milestoneGrid}>
          {milestones.map((milestone, index) => (
            <article
              key={milestone.year}
              className={`${styles.milestoneCard} ${styles.animateOnScroll}`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <span className={styles.year}>{milestone.year}</span>
              <h3>{milestone.title}</h3>
              <p>{milestone.description}</p>
            </article>
          ))}
        </div>

        <div className={`${styles.heritageBlock} ${styles.animateOnScroll}`}>
          <div className={styles.heritageHeader}>
            <span className={styles.heritageLabel}>Past presidents</span>
            <h3>The chapter line that carried Boholana Kisses into the current term.</h3>
          </div>

          <div className={styles.presidentStrip}>
            {pastPresidents.map((president) => (
              <article key={`${president.years}-${president.name}`} className={styles.presidentCard}>
                <span className={styles.presidentYears}>{president.years}</span>
                <strong>{president.name}</strong>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
