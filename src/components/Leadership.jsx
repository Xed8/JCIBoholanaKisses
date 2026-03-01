'use client';

import { useEffect, useRef } from 'react';
import styles from './Leadership.module.css';

const leaders = [
    {
        name: 'Francis Diane Cimafranca',
        role: '2025 Executive Vice President — Internal',
        description: 'Leads internal chapter operations, membership engagement, and organizational development.',
        emoji: '👩‍💼',
    },
    {
        name: 'Joyce Trexie Marie Cambangay',
        role: '2026 Region VII Local Skills Development Director',
        description: 'Represents JCI Boholana Kisses at the regional level, driving skills training and leadership development across the Visayas.',
        emoji: '⭐',
    },
    {
        name: 'Atty. Mary Grace Albaño',
        role: 'Legal Advocate & Key Speaker',
        description: 'Champion of women\'s rights and legal awareness. Lead speaker for the "Love is Not Blind" VAWC advocacy webinar series.',
        emoji: '⚖️',
    },
    {
        name: 'Warren Ronell Flores',
        role: '2026 Region VII Skills Development Director',
        description: 'JCI Cebu collaborator and trainer for the JCI Discover & Explore program, strengthening leadership and organizational management skills.',
        emoji: '🎓',
    },
];

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
        <section className={styles.leadership} ref={sectionRef}>
            <div className="container">
                <div className={styles.header}>
                    <span className={`section-label ${styles.animateOnScroll}`}>The People Behind the Mission</span>
                    <h2 className={styles.animateOnScroll}>
                        Our <span style={{ color: 'var(--jci-red)' }}>Leaders</span>
                    </h2>
                </div>

                <div className={styles.grid}>
                    {leaders.map((leader, index) => (
                        <div
                            key={leader.name}
                            className={`card-rounded ${styles.card} ${styles.animateOnScroll}`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.cardEmoji}>{leader.emoji}</div>
                            <h3 className={styles.cardName}>{leader.name}</h3>
                            <span className={styles.cardRole}>{leader.role}</span>
                            <p className={styles.cardDesc}>{leader.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
