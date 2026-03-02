'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Impact.module.css';

const stats = [
    { value: 5700, suffix: '+', label: 'Followers' },
    { value: 15, suffix: '+', label: 'Years Active' },
    { value: 18, suffix: '+', label: 'Partner Chapters' },
    { value: 7, suffix: '+', label: 'Community Projects' },
];

function AnimatedCounter({ target, suffix, isVisible, colorClass }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [isVisible, target]);

    const display = target >= 1000
        ? (count / 1000).toFixed(count >= target ? 1 : 1) + 'K'
        : count;

    return (
        <span className={`${styles.statNumber} ${colorClass}`}>
            {display}{suffix}
        </span>
    );
}

export default function Impact() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        entry.target.classList.add(styles.visible);
                    }
                });
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section className={styles.impact} ref={sectionRef}>
            <div className={`container ${styles.content}`}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Our Impact.
                    </h2>
                    <p className={styles.subtitle}>
                        Numbers that represent our commitment to empowering leaders and transforming communities across Bohol.
                    </p>
                </div>

                <div className={styles.statsRow}>
                    {stats.map((stat, index) => (
                        <div key={stat.label} className={`${styles.statWrapper} ${styles.animateOnScroll}`} style={{ transitionDelay: `${index * 0.15}s` }}>
                            <AnimatedCounter
                                target={stat.value}
                                suffix={stat.suffix}
                                isVisible={isVisible}
                                colorClass={index % 2 === 0 ? styles.colorMaroon : styles.colorNavy}
                            />
                            <span className={styles.statLabel}>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
