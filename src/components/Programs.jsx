'use client';

import { useEffect, useRef } from 'react';
import styles from './Programs.module.css';
import coverImg from '../../public/images/cover.jpg';
import cover1Img from '../../public/images/cover1.jpg';
import cover2Img from '../../public/images/cover2.jpg';
import photosGridImg from '../../public/images/photos-grid.jpg';

const programs = [
    {
        image: cover2Img.src,
        title: 'JCI Discover & Explore',
        description: 'New member orientation and leadership fundamentals program. From knowing our purpose in JCI Discover to strengthening leadership and organizational management in JCI Explore.',
        tag: 'Leadership Training',
    },
    {
        image: cover1Img.src,
        title: 'Hearts in Bloom',
        description: 'Our signature community outreach project — The Velvet Love Series. A Valentine\'s-themed fellowship and fundraising initiative in partnership with Brunched by Chill Pill Cafe.',
        tag: 'Community Outreach',
    },
    {
        image: coverImg.src,
        title: 'GABAY 2026',
        description: 'Regional leadership conference at Mezzo Hotel, Cebu City. LSDD Joyce Trexie Marie Cambangay represents our chapter in skills development at the Visayas level.',
        tag: 'Skills Development',
    },
];

const additionalProjects = [
    {
        title: 'Sanitation for the Nation',
        description: 'A community health and hygiene collaboration with JCI Manila, bringing sanitation awareness and resources to underserved communities.',
        tag: 'Health & Hygiene',
        icon: '🧼',
    },
    {
        title: 'TABANG BOHOL',
        description: 'Disaster response initiative mobilized following Typhoon Odette, providing relief goods, rebuilding support, and community aid across affected areas of Bohol.',
        tag: 'Disaster Response',
        icon: '🤲',
    },
    {
        title: 'Kawayanihan 2.0',
        description: 'An environmental sustainability project focused on conservation efforts and eco-friendly community initiatives in Bohol.',
        tag: 'Environment',
        icon: '🌿',
    },
    {
        title: '44th VIEWCON',
        description: 'JCI Boholana Kisses hosted the prestigious 44th Visayas Area Conference (VIEWCON) in September 2024 — a landmark regional event.',
        tag: 'Regional Conference',
        icon: '🏆',
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
                {/* Main project cards with images */}
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

                {/* Additional Projects — compact icon cards */}
                <div className={styles.additionalGrid}>
                    {additionalProjects.map((project, index) => (
                        <div
                            key={project.title}
                            className={`card-rounded ${styles.additionalCard} ${styles.animateOnScroll}`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <span className={styles.additionalIcon}>{project.icon}</span>
                            <div>
                                <span className={styles.additionalTag}>{project.tag}</span>
                                <h4 className={styles.additionalTitle}>{project.title}</h4>
                                <p className={styles.additionalDesc}>{project.description}</p>
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
                            about the law, rights, and resources available for protection and empowerment. Co-hosted with 18+ JCI chapters nationwide, featuring
                            speaker Atty. Mary Grace Albaño.
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
                        <img src={photosGridImg.src} alt="JCI Boholana Kisses Photos" />
                    </div>
                </div>
            </div>
        </section>
    );
}
