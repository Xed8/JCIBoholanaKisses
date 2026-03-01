'use client';

import { useEffect, useRef } from 'react';
import styles from './Programs.module.css';

const programs = [
    {
        image: '/images/cover2.jpg',
        title: 'JCI Discover & Explore',
        description: 'New member orientation and leadership fundamentals program. Discover the JCI movement and explore your potential as a future leader through hands-on workshops.',
        tag: 'Leadership Training',
    },
    {
        image: '/images/cover1.jpg',
        title: 'Hearts in Bloom',
        description: 'Our signature community outreach project bringing love and support to communities across Bohol — from feeding programs to donations, we bloom where we are planted.',
        tag: 'Community Outreach',
    },
    {
        image: '/images/cover.jpg',
        title: 'GABAY 2026',
        description: 'Skills development and mentorship initiative representing our chapter in the Visayas regional competition. Supporting local skills development through dedicated programs.',
        tag: 'Skills Development',
    },
];

export default function Programs() {
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
        <section id="programs" className={styles.programs} ref={sectionRef}>
            <div className={styles.redBg}>
                <div className="container">
                    <div className={styles.header}>
                        <h2 className={`${styles.title} ${styles.animateOnScroll}`}>
                            Our <span style={{ color: 'var(--jci-navy)' }}>Projects</span>
                        </h2>
                        <p className={`${styles.subtitle} ${styles.animateOnScroll}`}>
                            Our projects are designed to empower leaders to go beyond convention — driving innovation,
                            fostering collaboration, and creating sustainable impact in Bohol and beyond.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className={styles.grid}>
                    {programs.map((program, index) => (
                        <div
                            key={program.title}
                            className={`${styles.card} ${styles.animateOnScroll}`}
                            style={{ transitionDelay: `${index * 0.15}s` }}
                        >
                            <div className={styles.cardImage}>
                                <img src={program.image} alt={program.title} />
                                <div className={styles.cardOverlay}>
                                    <span className={styles.cardTag}>{program.tag}</span>
                                </div>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{program.title}</h3>
                                <p className={styles.cardDescription}>{program.description}</p>
                                <a
                                    href="https://www.facebook.com/JCIBoholanaKisses"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline"
                                    style={{ padding: '10px 24px', fontSize: '0.8rem', width: '100%', marginTop: '1rem' }}
                                >
                                    Learn more
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* VAWC section as a feature banner */}
                <div className={`card-rounded ${styles.featureBanner} ${styles.animateOnScroll}`}>
                    <div className={styles.featureContent}>
                        <span className="section-label" style={{ color: 'var(--jci-red)' }}>LEGAL ADVOCACY</span>
                        <h3 style={{ fontSize: '1.8rem', color: 'var(--jci-navy)', margin: '0.5rem 0 1rem' }}>Love is Not Blind — VAWC Awareness</h3>
                        <p style={{ color: 'var(--text-body)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                            Legal awareness webinar series on Violence Against Women and Children. Educating communities
                            about the law, rights, and resources available for protection and empowerment. Featuring
                            speaker Atty. Mary Grace Albano.
                        </p>
                        <a
                            href="https://www.facebook.com/JCIBoholanaKisses"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ alignSelf: 'flex-start' }}
                        >
                            VIEW ON FACEBOOK
                        </a>
                    </div>
                    <div className={styles.featureImage}>
                        <img src="/images/photos-grid.jpg" alt="JCI Boholana Kisses Photos" />
                    </div>
                </div>
            </div>
        </section>
    );
}
