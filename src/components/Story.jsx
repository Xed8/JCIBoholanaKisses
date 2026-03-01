'use client';

import { useEffect, useRef } from 'react';
import styles from './Story.module.css';

const milestones = [
    {
        year: '2010',
        title: 'Chapter Founded',
        description: 'JCI Boholana Kisses was officially established on March 21, 2010, as a proudly all-women and LGBTQ++ inclusive chapter of JCI Philippines in Tagbilaran City, Bohol.',
    },
    {
        year: '2025',
        title: 'ON THE GO — VICTORIOUS',
        description: 'Published the February 2025 Souvenir Issue of "ON THE GO Magazine" themed VICTORIOUS, celebrating years of community impact and chapter achievements.',
    },
    {
        year: '2026',
        title: 'Leading the Visayas',
        description: 'Joyce Trexie Marie Cambangay represents the chapter as the 2026 Region VII Local Skills Development Director. The chapter co-hosts the landmark VAWC webinar with 18+ JCI chapters nationwide.',
    },
];

export default function Story() {
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
        <section className={styles.story} ref={sectionRef}>
            <div className="container">
                <div className={styles.header}>
                    <span className={`section-label ${styles.animateOnScroll}`}>Since 2010</span>
                    <h2 className={styles.animateOnScroll}>
                        Our <span style={{ color: 'var(--jci-red)' }}>Story</span>
                    </h2>
                    <p className={`${styles.intro} ${styles.animateOnScroll}`}>
                        From a small group of passionate women in Tagbilaran City to a thriving force of inclusive
                        leadership — our journey has been one of service, sisterhood, and sustainable impact.
                    </p>
                </div>

                <div className={styles.timeline}>
                    <div className={styles.timelineLine}></div>
                    {milestones.map((milestone, index) => (
                        <div
                            key={milestone.year}
                            className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right} ${styles.animateOnScroll}`}
                            style={{ transitionDelay: `${index * 0.15}s` }}
                        >
                            <div className={styles.timelineDot}>
                                <span>{milestone.year}</span>
                            </div>
                            <div className={`card-rounded ${styles.timelineCard}`}>
                                <h3>{milestone.title}</h3>
                                <p>{milestone.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
