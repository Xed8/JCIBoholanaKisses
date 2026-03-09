'use client';

import { useEffect, useRef } from 'react';
import styles from './About.module.css';
import { chapterIntro, values } from '@/content/homeContent';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add(styles.visible);
        });
      },
      { threshold: 0.12 }
    );

    const elements = sectionRef.current?.querySelectorAll(`.${styles.animateOnScroll}`);
    elements?.forEach((el) => observer.observe(el));

    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="about" className={styles.aboutSection} ref={sectionRef}>
      <div className="container">
        <div className={styles.topGrid}>
          <div className={styles.copyColumn}>
            <span className={`text-overline ${styles.animateOnScroll}`}>{chapterIntro.eyebrow}</span>
            <h2 className={`${styles.title} ${styles.animateOnScroll}`}>{chapterIntro.title}</h2>

            <div className={styles.paragraphStack}>
              {chapterIntro.intro.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`${styles.bodyCopy} ${styles.animateOnScroll}`}
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <blockquote className={`${styles.pullQuote} ${styles.animateOnScroll}`}>
              <span className={styles.quoteMark}>"</span>
              <p>{chapterIntro.pullQuote}</p>
            </blockquote>
          </div>

          <div className={styles.featureColumn}>
            <figure className={`${styles.imageCard} ${styles.animateOnScroll}`}>
              <img
                src={chapterIntro.featureImage}
                alt="President Christine Torralba portrait from the OTG issue"
              />
            </figure>

            <div className={`${styles.noteCard} ${styles.animateOnScroll}`}>
              <span className={styles.noteLabel}>{chapterIntro.presidentNoteTitle}</span>
              <p className={styles.noteLead}>{chapterIntro.presidentNote}</p>
              <p className={styles.noteExcerpt}>{chapterIntro.presidentExcerpt}</p>
              <a href="#voices" className={`btn btn-primary ${styles.noteAction}`}>
                Read chapter messages
              </a>
            </div>
          </div>
        </div>

        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <article
              key={value.title}
              className={`${styles.valueCard} ${styles.animateOnScroll}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <span className={styles.valueIndex}>{`0${index + 1}`}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
