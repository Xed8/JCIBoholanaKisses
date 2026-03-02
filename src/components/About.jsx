'use client';

import { useEffect, useRef } from 'react';
import styles from './About.module.css';

const values = [
    {
        title: 'Inclusive Leadership',
        description: 'Empowering women and LGBTQ++ individuals to become change-makers across Bohol.',
    },
    {
        title: 'Community Service',
        description: 'Creating positive change through impactful community projects and outreach programs.',
    },
    {
        title: 'Personal Growth',
        description: 'Providing training, mentorship, and opportunities for professional development.',
    },
];

export default function About() {
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
        <section id="about" className={styles.aboutSection} ref={sectionRef}>
            <div className={`container ${styles.gridContainer}`}>
                {/* Left side: Editorial text */}
                <div className={styles.editorialSide}>
                    <span className={`text-overline ${styles.animateOnScroll}`}>Who We Are</span>
                    <h2 className={`${styles.manifesto} ${styles.animateOnScroll}`}>
                        The <span className={styles.highlight}>all women–LGBTQ++</span> chapter of JCI Philippines.
                    </h2>

                    <div className={`${styles.pullQuoteContainer} ${styles.animateOnScroll}`}>
                        <p className="text-pull-quote">
                            We focus on creating a safe and inclusive space for diverse leaders to grow, serve, and create lasting impact in Tagbilaran City and beyond.
                        </p>
                    </div>

                    <a href="#contact" className={`btn btn-primary ${styles.animateOnScroll}`} style={{ marginTop: '2rem' }}>
                        Join the Movement
                    </a>
                </div>

                {/* Right side: Values cascade */}
                <div className={styles.valuesSide}>
                    <div className={styles.valuesSticky}>
                        {values.map((value, index) => (
                            <div
                                key={value.title}
                                className={`${styles.valueCard} ${styles.animateOnScroll}`}
                                style={{ transitionDelay: `${index * 0.1}s` }}
                            >
                                <span className={styles.valueIndex}>{(index + 1).toString().padStart(2, '0')}</span>
                                <div>
                                    <h4 className={styles.valueTitle}>{value.title}</h4>
                                    <p className={styles.valueDesc}>{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
