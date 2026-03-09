'use client';

import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import logoImg from '../../public/images/logo.jpg';
import { navigationLinks } from '@/content/homeContent';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);

      const sections = navigationLinks.map((link) => link.href.replace('#', ''));

      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const element = document.getElementById(sections[i]);

        if (element && element.getBoundingClientRect().top <= 140) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (event, href) => {
    event.preventDefault();
    setMobileOpen(false);

    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#home" className={styles.logo} onClick={(event) => handleLinkClick(event, '#home')}>
          <img src={logoImg.src} alt="JCI Boholana Kisses Logo" className={styles.logoImg} />
          <div className={styles.logoText}>
            <span className={styles.logoName}>JCI Boholana Kisses</span>
          </div>
        </a>

        <div className={`${styles.navLinks} ${mobileOpen ? styles.open : ''}`}>
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${
                activeSection === link.href.replace('#', '') ? styles.active : ''
              }`}
              onClick={(event) => handleLinkClick(event, link.href)}
            >
              {link.label}
            </a>
          ))}

          <a href="#contact" className={`btn btn-primary ${styles.navCta}`}>
            Contact
          </a>
        </div>

        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMobileOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
