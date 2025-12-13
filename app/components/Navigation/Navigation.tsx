'use client';

import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'portfolio', 'rnd', 'about', 'expertise', 'ai-philosophy', 'why-hire', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsOpen(false);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <button 
            className={styles.logoButton}
            onClick={scrollToTop}
            aria-label="Go to top"
          >
            <span className={styles.logo}>Martin Erlic</span>
          </button>
          
          <button 
            className={styles.hamburgerButton}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <div className={`${styles.menuIcon} ${isOpen ? styles.menuIconOpen : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          {/* Desktop Navigation Items */}
          <div className={styles.desktopNav}>
            <button 
              className={`${styles.desktopNavItem} ${activeSection === 'portfolio' ? styles.active : ''}`}
              onClick={() => scrollToSection('portfolio')}
            >
              Portfolio
            </button>
            <button 
              className={`${styles.desktopNavItem} ${activeSection === 'about' ? styles.active : ''}`}
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
            <button 
              className={`${styles.desktopNavItem} ${activeSection === 'expertise' ? styles.active : ''}`}
              onClick={() => scrollToSection('expertise')}
            >
              Expertise
            </button>
            <button 
              className={`${styles.desktopNavItem} ${activeSection === 'ai-philosophy' ? styles.active : ''}`}
              onClick={() => scrollToSection('ai-philosophy')}
            >
              AI
            </button>
            <button 
              className={`${styles.desktopNavItem} ${activeSection === 'why-hire' ? styles.active : ''}`}
              onClick={() => scrollToSection('why-hire')}
            >
              Why
            </button>
            <button 
              className={`${styles.desktopNavItem} ${styles.contactButton} ${activeSection === 'contact' ? styles.active : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div 
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Fly-out Menu */}
      <div className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
        <div className={styles.menuContent}>
          <button 
            className={`${styles.menuItem} ${activeSection === 'hero' ? styles.active : ''}`}
            onClick={() => scrollToSection('hero')}
          >
            Home
          </button>
          <button 
            className={`${styles.menuItem} ${activeSection === 'portfolio' ? styles.active : ''}`}
            onClick={() => scrollToSection('portfolio')}
          >
            Portfolio
          </button>
          <button 
            className={`${styles.menuItem} ${activeSection === 'about' ? styles.active : ''}`}
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button 
            className={`${styles.menuItem} ${activeSection === 'expertise' ? styles.active : ''}`}
            onClick={() => scrollToSection('expertise')}
          >
            Expertise
          </button>
          <button 
            className={`${styles.menuItem} ${activeSection === 'ai-philosophy' ? styles.active : ''}`}
            onClick={() => scrollToSection('ai-philosophy')}
          >
            AI
          </button>
          <button 
            className={`${styles.menuItem} ${activeSection === 'why-hire' ? styles.active : ''}`}
            onClick={() => scrollToSection('why-hire')}
          >
            Why
          </button>
          <button 
            className={`${styles.menuItem} ${styles.contactButton} ${activeSection === 'contact' ? styles.active : ''}`}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </div>
      </div>
    </>
  );
}
