'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Leadership.module.css';
import { boardMembers, leadershipContent } from '@/content/homeContent';

function getInitials(name) {
  return name
    .replace(/^(Ma\.|Atty\.)\s*/i, '')
    .split(' ')
    .filter((word) => word.length > 1)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

function BoardPortrait({ member }) {
  const [hasError, setHasError] = useState(false);

  if (!member.image || hasError) {
    return <div className={styles.cardInitials}>{getInitials(member.name)}</div>;
  }

  return (
    <img
      src={member.image}
      alt={member.name}
      className={styles.cardPhoto}
      onError={() => setHasError(true)}
    />
  );
}

export default function Leadership() {
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
    <section id="leadership" className={styles.leadership} ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <span className={`text-overline ${styles.animateOnScroll}`}>{leadershipContent.eyebrow}</span>
          <h2 className={styles.animateOnScroll}>{leadershipContent.title}</h2>
          <p className={`${styles.intro} ${styles.animateOnScroll}`}>{leadershipContent.intro}</p>
        </div>

        <figure className={`${styles.groupFigure} ${styles.animateOnScroll}`}>
          <img
            src={leadershipContent.groupPhoto}
            alt="JCI Boholana Kisses 2026 board group portrait"
            className={styles.groupImage}
          />
          <figcaption className={styles.groupCaption}>
            <strong>Batch MASARIG - PRISTINE 2026</strong>
            <span>{leadershipContent.groupPhotoCaption}</span>
          </figcaption>
        </figure>

        <div className={`${styles.presidentCard} ${styles.animateOnScroll}`}>
          <div className={styles.presidentPhoto}>
            <img
              src={leadershipContent.president.image}
              alt={leadershipContent.president.name}
            />
          </div>
          <div className={styles.presidentInfo}>
            <span className={styles.presidentRole}>{leadershipContent.president.role}</span>
            <h3 className={styles.presidentName}>{leadershipContent.president.name}</h3>
            <p className={styles.presidentDesc}>{leadershipContent.president.description}</p>
          </div>
        </div>

        <h3 className={`${styles.boardTitle} ${styles.animateOnScroll}`}>Board of Directors</h3>
        <div className={styles.grid}>
          {boardMembers.map((member, index) => (
            <article
              key={member.name}
              className={`${styles.card} ${styles.animateOnScroll}`}
              style={{ transitionDelay: `${index * 0.04}s` }}
            >
              <div className={styles.cardPhotoWrapper}>
                <BoardPortrait member={member} />
              </div>
              <h4 className={styles.cardName}>{member.name}</h4>
              <span className={styles.cardRole}>{member.role}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
