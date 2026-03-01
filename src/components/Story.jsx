'use client';

import { useEffect, useRef } from 'react';
import styles from './Story.module.css';

const milestones = [
    {
        year: '2009',
        title: 'Chapter Founded',
        description: 'JCI Boholana Kisses was founded on September 13, 2009, in Tagbilaran City — the first all-women and LGBTQ++ inclusive chapter in JCI Philippines.',
    },
    {
        year: '2010',
        title: 'Officially Chartered',
        description: 'On March 21, 2010, JCI Boholana Kisses received its official charter from JCI Philippines, marking its formal recognition as a local chapter.',
    },
    {
        year: '2024',
        title: '44th VIEWCON Host',
        description: 'The chapter hosted the prestigious 44th Visayas Area Conference (VIEWCON) in September 2024 — a major regional milestone showcasing Boholana leadership on the Visayas stage.',
    },
    {
        year: '2025',
        title: 'ON THE GO — VICTORIOUS',
        description: 'Published the February 2025 Souvenir Issue of "ON THE GO Magazine" themed VICTORIOUS, celebrating 16 years of community impact. Held the 16th Anniversary celebration at Sherwood Bay Resort.',
    },
    {
        year: '2026',
        title: 'PRISTINE — Innovate Impact',
        description: 'Under President Ma. Christine Torralba and the PRISTINE banner, the chapter co-hosts a landmark VAWC webinar with 18+ JCI chapters nationwide and leads regional skills development.',
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
                    <span className={`section-label ${styles.animateOnScroll}`}>Since 2009</span>
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
