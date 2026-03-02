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
        description: 'Our signature community outreach project — The Velvet Love Series. A Valentine\'s-themed fellowship and fundraising initiative.',
        tag: 'Community Outreach',
    },
    {
        image: coverImg.src,
        title: 'GABAY 2026',
        description: 'Regional leadership conference at Mezzo Hotel, Cebu City. LSDD Joyce Trexie Marie Cambangay represents our chapter in skills development.',
        tag: 'Skills Development',
    },
    {
        image: photosGridImg.src,
        title: 'Love is Not Blind',
        description: 'Legal awareness webinar series on Violence Against Women and Children. Educating communities about the law, rights, and resources.',
        tag: 'Legal Advocacy',
    }
];

export default function Programs() {
    const sectionRef = useRef(null);
    const scrollRef = useRef(null);

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

    const scrollLeft = () => {
        if (scrollRef.current) scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    };

    const scrollRight = () => {
        if (scrollRef.current) scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    };

    return (
        <section id="programs" className={styles.programs} ref={sectionRef}>
            <div className={`container ${styles.headerContainer}`}>
                <div className={styles.headerText}>
                    <span className={`text-overline ${styles.animateOnScroll}`}>Initiatives</span>
                    <h2 className={`${styles.title} ${styles.animateOnScroll}`}>
                        Impact In <span style={{ color: 'var(--jci-maroon)' }}>Action.</span>
                    </h2>
                </div>
                <div className={`${styles.scrollControls} ${styles.animateOnScroll}`}>
                    <button onClick={scrollLeft} className={styles.controlBtn} aria-label="Scroll left">←</button>
                    <button onClick={scrollRight} className={styles.controlBtn} aria-label="Scroll right">→</button>
                </div>
            </div>

            {/* Horizontal Scroll Track */}
            <div className={`${styles.carouselWrapper} ${styles.animateOnScroll}`}>
                <div className={styles.carouselTrack} ref={scrollRef}>
                    {programs.map((program, index) => (
                        <div key={program.title} className={styles.carouselCard}>
                            <div className={styles.cardImageWrapper}>
                                <img src={program.image} alt={program.title} className={styles.cardImg} />
                                <div className={styles.cardOverlay}></div>
                            </div>
                            <div className={styles.cardContent}>
                                <span className={styles.cardTag}>{program.tag}</span>
                                <h3 className={styles.cardTitle}>{program.title}</h3>
                                <p className={styles.cardDesc}>{program.description}</p>
                            </div>
                        </div>
                    ))}

                    {/* End Card CTA */}
                    <div className={`${styles.carouselCard} ${styles.endCard}`}>
                        <div className={styles.endCardContent}>
                            <h3>See More Projects</h3>
                            <p>Follow our journey and discover how we are making an impact in the community.</p>
                            <a href="https://www.facebook.com/JCIBoholanaKisses" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                Follow Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
