'use client';

import { useEffect, useRef } from 'react';
import styles from './Leadership.module.css';

const president = {
    name: 'Ma. Christine Torralba',
    role: '2026 Local Chapter President',
    description: 'Leading JCI Boholana Kisses under the PRISTINE banner — championing innovation, inclusive leadership, and community impact across Bohol.',
    emoji: '👑',
};

const boardMembers = [
    {
        name: 'Zoila Jean Cenabre',
        role: 'Immediate Past President (2025)',
        emoji: '🌟',
    },
    {
        name: 'Francis Diane Cimafranca',
        role: 'Executive Vice President — Internal',
        emoji: '👩‍💼',
    },
    {
        name: 'Alennith Mae Fajardo',
        role: 'Executive Vice President — External',
        emoji: '🤝',
    },
    {
        name: 'John Sean Rupert Hone',
        role: 'Secretary',
        emoji: '📋',
    },
    {
        name: 'Jessa Marie Caborte',
        role: 'Treasurer',
        emoji: '💰',
    },
    {
        name: 'Joyce Trexie Marie Cambangay',
        role: '2026 Region VII Local Skills Development Director',
        emoji: '⭐',
    },
    {
        name: 'Atty. Frank Lorenzo Pizarras',
        role: 'Legal Counsel',
        emoji: '⚖️',
    },
    {
        name: 'Warren Ronell Flores',
        role: 'Vice-President for Training',
        emoji: '🎓',
    },
    {
        name: 'Lovely Mariz Quirol',
        role: 'VP for Community Development',
        emoji: '🏘️',
    },
    {
        name: 'Frazi Anne Egagamao',
        role: 'Director for Youth Development',
        emoji: '🌱',
    },
    {
        name: 'Ruby Jane Ebol',
        role: 'Director for Public Health',
        emoji: '🏥',
    },
    {
        name: 'Samantha Mari Hibaya',
        role: 'Director for Membership',
        emoji: '👥',
    },
    {
        name: 'Jomarleh I. Ucang',
        role: 'Director for Community Action Program',
        emoji: '💪',
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
        <section id="leadership" className={styles.leadership} ref={sectionRef}>
            <div className="container">
                <div className={styles.header}>
                    <span className={`section-label ${styles.animateOnScroll}`}>Batch MASARIG — PRISTINE 2026</span>
                    <h2 className={styles.animateOnScroll}>
                        Our <span style={{ color: 'var(--jci-red)' }}>Leaders</span>
                    </h2>
                </div>

                {/* President Spotlight */}
                <div className={`card-rounded ${styles.presidentCard} ${styles.animateOnScroll}`}>
                    <div className={styles.presidentEmoji}>{president.emoji}</div>
                    <div className={styles.presidentInfo}>
                        <h3 className={styles.presidentName}>{president.name}</h3>
                        <span className={styles.presidentRole}>{president.role}</span>
                        <p className={styles.presidentDesc}>{president.description}</p>
                    </div>
                </div>

                {/* Board of Directors */}
                <h3 className={`${styles.boardTitle} ${styles.animateOnScroll}`}>Board of Directors</h3>
                <div className={styles.grid}>
                    {boardMembers.map((member, index) => (
                        <div
                            key={member.name}
                            className={`card-rounded ${styles.card} ${styles.animateOnScroll}`}
                            style={{ transitionDelay: `${index * 0.05}s` }}
                        >
                            <div className={styles.cardEmoji}>{member.emoji}</div>
                            <h3 className={styles.cardName}>{member.name}</h3>
                            <span className={styles.cardRole}>{member.role}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
