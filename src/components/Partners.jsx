'use client';

import { useEffect, useRef } from 'react';
import styles from './Partners.module.css';
import {
  networkContent,
  networkHighlights,
  partnerChapters,
} from '@/content/homeContent';

export default function Partners() {
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
    <section id="partners" className={styles.partners} ref={sectionRef}>
      <div className={styles.band}>
        <div className="container">
          <div className={styles.header}>
            <span className={`text-overline ${styles.animateOnScroll}`}>{networkContent.eyebrow}</span>
            <h2 className={styles.animateOnScroll}>{networkContent.title}</h2>
            <p className={`${styles.subtitle} ${styles.animateOnScroll}`}>{networkContent.intro}</p>
          </div>
        </div>
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.highlightGrid}>
          {networkHighlights.map((item, index) => (
            <article
              key={item.title}
              className={`${styles.highlightCard} ${styles.animateOnScroll}`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className={`${styles.pillCloud} ${styles.animateOnScroll}`}>
          {partnerChapters.map((chapter) => (
            <span key={chapter} className={styles.pill}>
              {chapter}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
