'use client';

import { useEffect, useRef } from 'react';
import styles from './Partners.module.css';

const partnerChapters = [
    'JCI Abuyog',
    'JCI Alangalang',
    'JCI Baliwag Buntal',
    'JCI Bataan',
    'JCI Binangonan',
    'JCI Bohol Sandugo',
    'JCI Burauen Burabod',
    'JCI Caloocan Bantayog',
    'JCI Cagayan De Oro',
    'JCI Carmona',
    'JCI Catbalogan Balud',
    'JCI Cauayan Bamboo',
    'JCI Cebu Mactan Channel',
    'JCI Bulawan',
    'JCI Daet Kabihug',
    'JCI Dagupeñas',
    'JCI Damas',
    'JCI San Pedro',
];

export default function Partners() {
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
        <section className={styles.partners} ref={sectionRef}>
            <div className={styles.redBg}>
                <div className="container">
                    <div className={styles.header}>
                        <h2 className={styles.animateOnScroll}>
                            Our <span style={{ color: 'var(--jci-red)' }}>JCI Network</span>
                        </h2>
                        <p className={`${styles.subtitle} ${styles.animateOnScroll}`}>
                            We believe in the power of collaboration. JCI Boholana Kisses proudly partners with
                            chapters across the Philippines to co-host events, share resources, and amplify our impact nationwide.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className={`card-rounded ${styles.pillCloud} ${styles.animateOnScroll}`}>
                    {partnerChapters.map((chapter) => (
                        <span key={chapter} className={styles.pill}>
                            {chapter}
                        </span>
                    ))}
                </div>

                <div className={`${styles.cta} ${styles.animateOnScroll}`}>
                    <p>Interested in collaborating with our chapter?</p>
                    <a href="#contact" className="btn btn-primary">
                        Partner With Us
                    </a>
                </div>
            </div>
        </section>
    );
}
