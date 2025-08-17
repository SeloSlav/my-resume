'use client';

import { useState } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

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
            onClick={(e) => {
              // Check if we're on desktop (menuIcon is hidden)
              const menuIcon = e.currentTarget.querySelector(`.${styles.menuIcon}`);
              const isDesktop = menuIcon && window.getComputedStyle(menuIcon).display === 'none';
              
              if (isDesktop) {
                scrollToTop();
              } else {
                toggleMenu();
              }
            }}
            aria-label="Toggle navigation menu"
          >
            <span className={styles.logo}>Martin Erlic</span>
            <div className={`${styles.menuIcon} ${isOpen ? styles.menuIconOpen : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          {/* Desktop Navigation Items */}
          <div className={styles.desktopNav}>
            <button 
              className={styles.desktopNavItem}
              onClick={() => scrollToSection('portfolio')}
            >
              Portfolio
            </button>
            <button 
              className={styles.desktopNavItem}
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
            <button 
              className={styles.desktopNavItem}
              onClick={() => scrollToSection('expertise')}
            >
              Expertise
            </button>
            <button 
              className={styles.desktopNavItem}
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
            className={styles.menuItem}
            onClick={() => scrollToSection('hero')}
          >
            Home
          </button>
          <button 
            className={styles.menuItem}
            onClick={() => scrollToSection('portfolio')}
          >
            Portfolio
          </button>
          <button 
            className={styles.menuItem}
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button 
            className={styles.menuItem}
            onClick={() => scrollToSection('expertise')}
          >
            Expertise
          </button>
          <button 
            className={styles.menuItem}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </div>
      </div>
    </>
  );
}
