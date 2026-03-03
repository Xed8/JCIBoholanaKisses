'use client';

import { useEffect, useRef } from 'react';
import styles from './Partners.module.css';

const partnerChapters = [
    'JCI Bohol Sandugo',
    'JCI Cebu Inc.',
    'JCI Metro Cebu Uptown',
    'JCI Mandaue',
    'JCI Surigao Nickel',
    'JCI Davao Inc.',
    'JCI Angeles City Culiat',
    'JCI Tanauan Pasaka',
    'JCI Makati',
    'JCI Bataan',
    'JCI Cebu Mactan Channel',
    'JCI San Pablo 7 Lakes',
    'JCI Surigao North',
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
                <div className={`${styles.pillCloud} ${styles.animateOnScroll}`}>
                    {partnerChapters.map((chapter) => (
                        <span key={chapter} className={styles.pill}>
                            {chapter}
                        </span>
                    ))}
                </div>


            </div>
        </section>
    );
}
