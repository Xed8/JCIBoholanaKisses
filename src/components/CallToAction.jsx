'use client';

import { useEffect, useRef } from 'react';
import styles from './CallToAction.module.css';

export default function CallToAction() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add(styles.visible);
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll(`.${styles.animateOnScroll}`);
    elements?.forEach((el) => observer.observe(el));

    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className={styles.cta} ref={sectionRef}>
      <div className={styles.background}>
        <div className={styles.pattern} />
      </div>
      <div className={`container ${styles.content}`}>
        <h2 className={`${styles.title} ${styles.animateOnScroll}`}>
          Be Part of the <span className={styles.highlight}>Movement.</span>
        </h2>
        <p className={`${styles.subtitle} ${styles.animateOnScroll}`}>
          Join a community of empowered leaders creating real, lasting change. Whether you want to
          lead, serve, or partner - there is a place for you here.
        </p>
        <div className={`${styles.actions} ${styles.animateOnScroll}`}>
          <a
            href="https://www.facebook.com/JCIBoholanaKisses"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn ${styles.btnMember}`}
          >
            Become a Member
          </a>
          <a href="#contact" className={`btn ${styles.btnPartner}`}>
            Partner With Us
          </a>
          <a href="#contact" className={`btn ${styles.btnContact}`}>
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
