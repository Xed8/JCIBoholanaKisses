'use client';

import { useEffect, useRef } from 'react';
import styles from './Leadership.module.css';

const president = {
    name: 'Ma. Christine O. Torralba',
    role: 'President',
    description: 'Leading JCI Boholana Kisses under the PRISTINE banner — championing innovation, inclusive leadership, and community impact across Bohol.',
    image: '/images/BOARD-OF-DIRECTORS/MA. CHRISTINE O. TORRALBA.JPG',
};

const boardMembers = [
    {
        name: 'Zoila Jean Cenabre',
        role: 'Immediate Past President',
        image: '/images/BOARD-OF-DIRECTORS/ZOILA JEAN CENABRE.jpg',
    },
    {
        name: 'Frank Lorenzo R. Pizarras',
        role: 'Legal Counsel',
        image: '/images/BOARD-OF-DIRECTORS/FRANK LORENZO R. PIZARRAS.jpg',
    },
    {
        name: 'Francis Diane F. Cimafranca',
        role: 'EVP – Internal Affairs',
        image: '/images/BOARD-OF-DIRECTORS/FRANCIS DIANE F. CIMAFRANCA.jpg',
    },
    {
        name: 'Alennith Mae J. Fajardo',
        role: 'EVP – External Affairs',
        image: '/images/BOARD-OF-DIRECTORS/ALENNITH MAE J. FAJARDO.jpg',
    },
    {
        name: 'John Sean Rupert G. Hene',
        role: 'LO Secretary General',
        image: '/images/BOARD-OF-DIRECTORS/JOHN SEAN RUPERT G. HENE.jpg',
    },
    {
        name: 'Jessa Marie B. Caberte',
        role: 'LO Treasurer',
        image: '/images/BOARD-OF-DIRECTORS/JESSA MARIE B CABERTE.jpg',
    },
    {
        name: 'Joyce Trexie Marie B. Cabagnot',
        role: 'Local Skills Development Director',
        image: '/images/BOARD-OF-DIRECTORS/JOYCE TREXIE MARIE B. CABAGNOT.jpg',
    },
    {
        name: 'Lovely Mariz B. Quirol',
        role: 'VP for Community Development',
        image: '/images/BOARD-OF-DIRECTORS/LOVELY MARIZ B. QUIROL.jpg',
    },
    {
        name: 'Melody Joy G. Malinao',
        role: 'VP for Business Development',
        image: '/images/BOARD-OF-DIRECTORS/MELODY JOY G. MALINAO.jpg',
    },
    {
        name: 'Ma. Christie A. Acero',
        role: 'VP for Linkages',
        image: null,
    },
    {
        name: 'Samantha Mari A. Hibaya',
        role: 'VP for Membership Development',
        image: '/images/BOARD-OF-DIRECTORS/SAMANTHA MARI A. HIBAYA.jpg',
    },
    {
        name: 'Rochelle Marie L. Martin',
        role: 'Dir. for National Relations',
        image: '/images/BOARD-OF-DIRECTORS/ROCHELLE MARIE L. MARTIN.png',
    },
    {
        name: 'Teonikka Marie T. Gumila',
        role: 'Dir. for National Programs',
        image: '/images/BOARD-OF-DIRECTORS/TEONIKKA MARIE T. GUMILA.jpg',
    },
    {
        name: 'Ruby Jane L. Ebol',
        role: 'Dir. for Public Health',
        image: '/images/BOARD-OF-DIRECTORS/RUBY JANE L. EBOL.jpg',
    },
    {
        name: 'Christine Marie B. Lañada',
        role: 'Dir. for Internationalism',
        image: '/images/BOARD-OF-DIRECTORS/CHRISTINE MARIE B. LAÑADA.jpg',
    },
];

function getInitials(name) {
    return name
        .replace(/^(Ma\.|Atty\.)\s*/i, '')
        .split(' ')
        .filter((w) => w.length > 1)
        .slice(0, 2)
        .map((w) => w[0])
        .join('')
        .toUpperCase();
}

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
                        Our <span style={{ color: 'var(--jci-maroon)' }}>Leaders</span>
                    </h2>
                </div>

                {/* President Spotlight */}
                <div className={`${styles.presidentCard} ${styles.animateOnScroll}`}>
                    <div className={styles.presidentPhoto}>
                        <img src={president.image} alt={president.name} />
                    </div>
                    <div className={styles.presidentInfo}>
                        <span className={styles.presidentRole}>{president.role}</span>
                        <h3 className={styles.presidentName}>{president.name}</h3>
                        <p className={styles.presidentDesc}>{president.description}</p>
                    </div>
                </div>

                {/* Board of Directors */}
                <h3 className={`${styles.boardTitle} ${styles.animateOnScroll}`}>Board of Directors</h3>
                <div className={styles.grid}>
                    {boardMembers.map((member, index) => (
                        <div
                            key={member.name}
                            className={`${styles.card} ${styles.animateOnScroll}`}
                            style={{ transitionDelay: `${index * 0.05}s` }}
                        >
                            <div className={styles.cardPhotoWrapper}>
                                {member.image ? (
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className={styles.cardPhoto}
                                    />
                                ) : (
                                    <div className={styles.cardInitials}>
                                        {getInitials(member.name)}
                                    </div>
                                )}
                            </div>
                            <h3 className={styles.cardName}>{member.name}</h3>
                            <span className={styles.cardRole}>{member.role}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
