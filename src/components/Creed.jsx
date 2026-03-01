import styles from './Creed.module.css';

export default function Creed() {
    return (
        <section className={styles.creed}>
            <div className={styles.overlay}></div>
            <div className={`container ${styles.content}`}>
                <span className={styles.badge}>Our Guiding Principle</span>
                <h2 className={styles.title}>The JCI Creed</h2>
                <blockquote className={styles.quote}>
                    <p>
                        We believe that faith in God gives meaning and purpose to human life;
                    </p>
                    <p>
                        That the brotherhood of man transcends the sovereignty of nations;
                    </p>
                    <p>
                        That economic justice can best be won by free men through free enterprise;
                    </p>
                    <p>
                        That government should be of laws rather than of men;
                    </p>
                    <p>
                        That earth&apos;s great treasure lies in human personality;
                    </p>
                    <p>
                        And that service to humanity is the best work of life.
                    </p>
                </blockquote>
                <div className={styles.attribution}>
                    — C. William Brownfield, JCI Senator #1
                </div>
            </div>
        </section>
    );
}
