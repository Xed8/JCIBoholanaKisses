'use client';

import { useEffect, useRef } from 'react';
import styles from './About.module.css';

const values = [
    {
        icon: '👩‍💼',
        title: 'Inclusive Leadership',
        description: 'Empowering women and LGBTQ++ individuals to become change-makers and community leaders across Bohol.',
    },
    {
        icon: '❤️',
        title: 'Community Service',
        description: 'Creating positive change through impactful community projects and outreach programs across Bohol.',
    },
    {
        icon: '⭐',
        title: 'Personal Growth',
        description: 'Providing training, mentorship, and opportunities for members to develop professional skills.',
    },
    {
        icon: '🌏',
        title: 'Global Network',
        description: 'Connected to JCI\'s worldwide network of young active citizens in over 100 countries.',
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
        <section id="about" className={styles.aboutWrapper} ref={sectionRef}>
            {/* Overlapping card section — like JCI Manila's Directorates */}
            <div className={`container ${styles.overlapCard} ${styles.animateOnScroll}`}>
                <div className={styles.overlapContent}>
                    <h2 className={styles.overlapTitle}>
                        <span style={{ color: 'var(--jci-red)' }}>About</span> Our Chapter
                    </h2>
                    <p className={styles.overlapText}>
                        JCI Boholana Kisses is proudly the <strong>all women-LGBTQ++ chapter</strong> of Junior
                        Chamber International Philippines. Founded in Tagbilaran City, Bohol, we empower {' '}
                        future leaders through community projects, leadership training, and advocacy. Our chapter
                        focuses on creating a safe and inclusive space for diverse leaders to grow, serve,
                        and create lasting impact.
                    </p>
                    <div style={{ marginTop: '2rem' }}>
                        <a href="#contact" className="btn btn-primary">Join the Movement</a>
                    </div>
                </div>
            </div>

            <div className={`section ${styles.about}`}>
                <div className="container">
                    <div className={styles.valuesGrid}>
                        {values.map((value, index) => (
                            <div
                                key={value.title}
                                className={`card-rounded ${styles.valueCard} ${styles.animateOnScroll}`}
                                style={{ transitionDelay: `${index * 0.1}s` }}
                            >
                                <div className={styles.valueEmoji}>{value.icon}</div>
                                <h4>{value.title}</h4>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Group photo section */}
                    <div className={`card-rounded ${styles.photoSection} ${styles.animateOnScroll}`}>
                        <img src="/images/group-photo.jpg" alt="JCI Boholana Kisses Members" className={styles.groupPhoto} />
                        <div className={styles.photoCaption}>
                            <span>📍 17-E Carlos P. Garcia Avenue, Tagbilaran City, Bohol, Philippines</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
