'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Impact.module.css';
import { impactStats } from '@/content/homeContent';

function AnimatedCounter({ target, suffix, isVisible, colorClass }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  const display = target >= 1000 ? `${(count / 1000).toFixed(1)}K` : count;

  return (
    <span className={`${styles.statNumber} ${colorClass}`}>
      {display}
      {suffix}
    </span>
  );
}

export default function Impact() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="impact-stats"
      className={`${styles.impact} ${isVisible ? styles.visible : ''}`}
      ref={sectionRef}
    >
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <span className={styles.badge}>Impact Snapshot</span>
        <h2 className={styles.title}>
          The numbers behind this <span className={styles.highlight}>issue.</span>
        </h2>
        <p className={styles.subtitle}>
          These markers connect the chapter's service footprint, leadership scale, and OTG story
          count to the work highlighted across the homepage.
        </p>

        <div className={styles.grid}>
          {impactStats.map((stat) => (
            <article key={stat.label} className={styles.card}>
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
                isVisible={isVisible}
                colorClass={styles.statAccent}
              />
              <span className={styles.statLabel}>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
