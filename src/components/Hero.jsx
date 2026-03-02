'use client';

import styles from './Hero.module.css';
import heroBgImg from '../../public/images/group-photo.jpg';
import coverImg from '../../public/images/cover.jpg';

export default function Hero() {
    return (
        <section id="home" className={styles.hero}>
            {/* Cinematic Background Layer */}
            <div className={styles.heroBg}>
                <img
                    src={heroBgImg.src}
                    onError={(e) => { e.target.onerror = null; e.target.src = coverImg.src }}
                    alt="JCI Boholana Kisses Chapter Members"
                    className={styles.heroBgImg}
                />
                <div className={styles.heroOverlayDark}></div>
                <div className={styles.heroOverlayGradient}></div>
            </div>

            <div className={`container ${styles.heroContent}`}>
                <div className={styles.textGrid}>
                    <div className={styles.badgeCol}>
                        <span className={styles.heroBadge}>JCI Boholana Kisses • Tagbilaran</span>
                        <p className={styles.subtitle}>
                            The all women–LGBTQ++ chapter of JCI Philippines — developing inclusive leaders who create lasting impact through service, advocacy, and community action.
                        </p>
                        <div className={styles.actions}>
                            <a href="#programs" className={`btn btn-primary ${styles.ctaBtn}`}>
                                View Projects
                            </a>
                            <a href="https://www.facebook.com/JCIBoholanaKisses" target="_blank" rel="noopener noreferrer" className={`btn btn-outline ${styles.ctaOutline}`}>
                                Join Us
                            </a>
                        </div>
                    </div>

                    <div className={styles.titleCol}>
                        <h1 className={styles.hugeTitle}>
                            <span className={styles.titleLine1}>Empowering</span>
                            <span className={styles.titleLine2}>Leaders.</span>
                        </h1>
                        <span className={styles.titleAccent}>Transforming Communities.</span>
                    </div>
                </div>

                {/* Bottom Anchored Stats */}
                <div className={styles.bottomBar}>
                    <div className={styles.statGroup}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>5.7K</span>
                            <span className={styles.statLabel}>Followers</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>18+</span>
                            <span className={styles.statLabel}>Partner Chapters</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>2009</span>
                            <span className={styles.statLabel}>Established</span>
                        </div>
                    </div>

                    <a href="#about" className={styles.scrollIndicator}>
                        <span className={styles.scrollText}>Scroll to discover</span>
                        <div className={styles.scrollLine}></div>
                    </a>
                </div>
            </div>
        </section>
    );
}
