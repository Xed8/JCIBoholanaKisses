'use client';

import styles from './Hero.module.css';
import heroBgImg from '../../public/images/hero-hg.jpg';
import coverImg from '../../public/images/cover.jpg';

export default function Hero() {
    return (
        <section id="home" className={styles.hero}>
            {/* Background Layer */}
            <div className={styles.heroBg}>
                <img
                    src={heroBgImg.src}
                    onError={(e) => { e.target.onerror = null; e.target.src = coverImg.src }}
                    alt="JCI Boholana Kisses Chapter Members"
                    className={styles.heroBgImg}
                />
                {/* Navy & Orange gradient overlays for that bold Manila look */}
                <div className={styles.heroOverlayDark}></div>
                <div className={styles.heroOverlayGradient}></div>
            </div>

            <div className={`container ${styles.heroContent}`}>
                <div className={styles.textContent}>
                    <div className={styles.labelWrapper}>
                        <span className={styles.heroBadge}>JCI Philippines</span>
                    </div>

                    <h1 className={styles.title}>
                        <span className={styles.titleLine}>Boholana</span>
                        <br />
                        <span className={styles.titleAccent}>Kisses</span>
                    </h1>

                    <p className={styles.subtitle}>
                        Developing leaders for a changing world. Empowering women & LGBTQ++ in Bohol through sustainable and impactful community initiatives.
                    </p>

                    <div className={styles.actions}>
                        <a
                            href="https://www.facebook.com/JCIBoholanaKisses"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Join Our Chapter
                        </a>
                        <a href="#about" className="btn btn-secondary">
                            Learn More
                        </a>
                    </div>

                    {/* Centered Stats in a nested pill container */}
                    <div className={styles.statsRow}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>5.7K</span>
                            <span className={styles.statLabel}>Followers</span>
                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>18+</span>
                            <span className={styles.statLabel}>Partner Chapters</span>
                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>2009</span>
                            <span className={styles.statLabel}>Established</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
