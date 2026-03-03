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

const corporatePartners = [
    { name: 'Brunched by Chill Pill Cafe', type: 'Community Partner' },
    { name: 'Sherwood Bay Resort', type: 'Event Partner' },
    { name: "Yokoy's Cafe", type: 'Venue Partner' },
    { name: 'Mezzo Hotel, Cebu', type: 'Conference Venue' },
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

                {/* Corporate Partners */}
                <div className={`${styles.corporateSection} ${styles.animateOnScroll}`}>
                    <h4 className={styles.corporateTitle}>Community & Venue Partners</h4>
                    <div className={styles.corporateGrid}>
                        {corporatePartners.map((partner) => (
                            <div key={partner.name} className={styles.corporateCard}>
                                <span className={styles.corporateType}>{partner.type}</span>
                                <span className={styles.corporateName}>{partner.name}</span>
                            </div>
                        ))}
                    </div>
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
