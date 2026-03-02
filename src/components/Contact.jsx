'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
    const sectionRef = useRef(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Website Inquiry from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.open(`mailto:jciboholanakisses2010@gmail.com?subject=${subject}&body=${body}`);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <section id="contact" className={`section ${styles.contact}`} ref={sectionRef}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.info}>
                        <span className={`section-label ${styles.animateOnScroll}`}>Get in Touch</span>
                        <h2 className={styles.animateOnScroll}>
                            <span style={{ color: 'var(--jci-red)' }}>Contact</span> Us
                        </h2>
                        <p className={`${styles.animateOnScroll}`} style={{ marginBottom: '2rem' }}>
                            Interested in joining JCI Boholana Kisses? Have questions about our programs?
                            We&apos;d love to hear from you.
                        </p>

                        <div className={styles.contactItems}>
                            <a href="mailto:jciboholanakisses2010@gmail.com" className={`${styles.contactItem} ${styles.animateOnScroll}`}>
                                <div className={styles.contactIcon}>✉️</div>
                                <div>
                                    <h4>Email Us</h4>
                                    <p>jciboholanakisses2010@gmail.com</p>
                                </div>
                            </a>
                            <a href="https://maps.google.com/?q=17-E+Carlos+P+Garcia+Avenue+Tagbilaran+City+Bohol" target="_blank" rel="noopener noreferrer" className={`${styles.contactItem} ${styles.animateOnScroll}`}>
                                <div className={styles.contactIcon}>📍</div>
                                <div>
                                    <h4>Visit Us</h4>
                                    <p>17-E Carlos P. Garcia Ave, Tagbilaran City</p>
                                </div>
                            </a>
                            <a href="https://www.facebook.com/JCIBoholanaKisses" target="_blank" rel="noopener noreferrer" className={`${styles.contactItem} ${styles.animateOnScroll}`}>
                                <div className={styles.contactIcon}>📘</div>
                                <div>
                                    <h4>Follow Us</h4>
                                    <p>facebook.com/JCIBoholanaKisses</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className={`${styles.formWrapper} ${styles.animateOnScroll}`}>
                        <form onSubmit={handleSubmit}>
                            <h3>Send a Message</h3>
                            <div className={styles.formGroup}>
                                <label htmlFor="contact-name">Full Name</label>
                                <input id="contact-name" type="text" placeholder="Your full name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="contact-email">Email Address</label>
                                <input id="contact-email" type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="contact-message">Message</label>
                                <textarea id="contact-message" rows="5" placeholder="How can we help you?" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
                            </div>
                            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                                {submitted ? '✓ MESSAGE SENT!' : 'SEND MESSAGE'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
