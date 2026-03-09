'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Voices.module.css';
import { messages, printOnlyMessages } from '@/content/homeContent';

function getInitials(name) {
  return name
    .replace(/^(Atty\.|Pres\.|President)\s*/i, '')
    .replace(/^JCI\s+/i, '')
    .split(' ')
    .filter((word) => word.length > 1)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

function MessagePortrait({ message }) {
  const [hasError, setHasError] = useState(false);

  if (!message.image || hasError) {
    return <div className={styles.cardInitials}>{getInitials(message.author)}</div>;
  }

  return (
    <img
      src={message.image}
      alt={message.author}
      className={styles.cardImage}
      onError={() => setHasError(true)}
    />
  );
}

export default function Voices() {
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
    <section id="voices" className={styles.voices} ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <span className={`text-overline ${styles.animateOnScroll}`}>Voices</span>
          <h2 className={styles.animateOnScroll}>Messages carried into the 2026 issue.</h2>
          <p className={`${styles.intro} ${styles.animateOnScroll}`}>
            The OTG issue turns the homepage into a chapter conversation. National officers, father
            chapter leaders, and sister chapters frame the year with support, challenge, and
            encouragement.
          </p>
        </div>

        {printOnlyMessages.length > 0 && (
          <div className={`${styles.printOnly} ${styles.animateOnScroll}`}>
            {printOnlyMessages.map((message) => (
              <p key={message}>{message}</p>
            ))}
          </div>
        )}

        <div className={styles.grid}>
          {messages.map((message, index) => (
            <article
              key={`${message.author}-${message.sourcePage}`}
              className={`${styles.card} ${styles.animateOnScroll}`}
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <div className={styles.cardTop}>
                <MessagePortrait message={message} />

                <div>
                  <span className={styles.category}>{message.category}</span>
                  <h3>{message.author}</h3>
                  <p className={styles.meta}>
                    {message.role} {message.chapter ? `| ${message.chapter}` : ''}
                  </p>
                </div>
              </div>

              <p className={styles.excerpt}>{message.excerpt}</p>

              <details className={styles.details}>
                <summary>Read full note</summary>
                <div className={styles.detailsBody}>
                  {message.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
