'use client';

import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';
import { useTheme } from '../../context/ThemeContext';
import { content, getContent } from '../../config/content';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [showModeDialog, setShowModeDialog] = useState(false);
  const [hasSeenDialog, setHasSeenDialog] = useState(false);
  const { mode, toggleMode, isSimpleMode } = useTheme();

  // Check if user has seen the dialog before
  useEffect(() => {
    const seen = localStorage.getItem('hasSeenModeDialog');
    if (seen) {
      setHasSeenDialog(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'portfolio', 'rnd', 'about', 'expertise', 'ai-philosophy', 'writing', 'why-hire', 'contact'];
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

  const handleToggleMode = () => {
    if (!hasSeenDialog) {
      setShowModeDialog(true);
    } else {
      toggleMode();
    }
    setIsOpen(false);
  };

  const handleDialogConfirm = () => {
    localStorage.setItem('hasSeenModeDialog', 'true');
    setHasSeenDialog(true);
    setShowModeDialog(false);
    toggleMode();
  };

  const handleDialogClose = () => {
    localStorage.setItem('hasSeenModeDialog', 'true');
    setHasSeenDialog(true);
    setShowModeDialog(false);
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

  const nav = content.nav;

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <button 
            className={styles.logoButton}
            onClick={scrollToTop}
            aria-label="Go to top"
            data-mode={mode}
          >
            <span className={styles.logo}>{getContent(nav.logo, mode)}</span>
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
              {getContent(nav.items.portfolio, mode)}
            </button>
            <button 
              className={`${styles.desktopNavItem} ${activeSection === 'about' ? styles.active : ''}`}
              onClick={() => scrollToSection('about')}
            >
              {getContent(nav.items.about, mode)}
            </button>
            <button 
              className={`${styles.desktopNavItem} ${activeSection === 'expertise' ? styles.active : ''}`}
              onClick={() => scrollToSection('expertise')}
            >
              {getContent(nav.items.expertise, mode)}
            </button>
            <button 
              className={`${styles.desktopNavItem} ${activeSection === 'ai-philosophy' ? styles.active : ''}`}
              onClick={() => scrollToSection('ai-philosophy')}
            >
              {getContent(nav.items.ai, mode)}
            </button>
            <button 
              className={`${styles.desktopNavItem} ${activeSection === 'writing' ? styles.active : ''}`}
              onClick={() => scrollToSection('writing')}
            >
              {getContent(nav.items.writing, mode)}
            </button>
            <button 
              className={`${styles.desktopNavItem} ${activeSection === 'why-hire' ? styles.active : ''}`}
              onClick={() => scrollToSection('why-hire')}
            >
              {getContent(nav.items.why, mode)}
            </button>
            <button 
              className={`${styles.desktopNavItem} ${styles.contactButton} ${activeSection === 'contact' ? styles.active : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              {getContent(nav.items.contact, mode)}
            </button>
            {/* Mode toggle hidden */}
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
            {getContent(nav.items.home, mode)}
          </button>
          <button 
            className={`${styles.menuItem} ${activeSection === 'portfolio' ? styles.active : ''}`}
            onClick={() => scrollToSection('portfolio')}
          >
            {getContent(nav.items.portfolio, mode)}
          </button>
          <button 
            className={`${styles.menuItem} ${activeSection === 'about' ? styles.active : ''}`}
            onClick={() => scrollToSection('about')}
          >
            {getContent(nav.items.about, mode)}
          </button>
          <button 
            className={`${styles.menuItem} ${activeSection === 'expertise' ? styles.active : ''}`}
            onClick={() => scrollToSection('expertise')}
          >
            {getContent(nav.items.expertise, mode)}
          </button>
          <button 
            className={`${styles.menuItem} ${activeSection === 'ai-philosophy' ? styles.active : ''}`}
            onClick={() => scrollToSection('ai-philosophy')}
          >
            {getContent(nav.items.ai, mode)}
          </button>
          <button 
            className={`${styles.menuItem} ${activeSection === 'writing' ? styles.active : ''}`}
            onClick={() => scrollToSection('writing')}
          >
            {getContent(nav.items.writing, mode)}
          </button>
          <button 
            className={`${styles.menuItem} ${activeSection === 'why-hire' ? styles.active : ''}`}
            onClick={() => scrollToSection('why-hire')}
          >
            {getContent(nav.items.why, mode)}
          </button>
          <button 
            className={`${styles.menuItem} ${styles.contactButton} ${activeSection === 'contact' ? styles.active : ''}`}
            onClick={() => scrollToSection('contact')}
          >
            {getContent(nav.items.contact, mode)}
          </button>
          {/* Mode toggle hidden */}
        </div>
      </div>

      {/* Mode Switch Dialog */}
      {showModeDialog && (
        <div className={styles.dialogOverlay} onClick={handleDialogClose}>
          <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
            <div className={styles.dialogHeader}>
              <span className={styles.dialogIcon}>
                {isSimpleMode ? "🖥️" : "✨"}
              </span>
              <h3>Wait, there&apos;s more!</h3>
            </div>
            <div className={styles.dialogBody}>
              <p>
                You didn&apos;t think I actually spent time developing a dark/light mode before sending out resumes, did you?
              </p>
              <p>
                Well, I went above and beyond—I actually translated all the text too, so it sounds less... <em>cyberpunk terminal operator</em> and more <em>professional human being</em>.
              </p>
              <p className={styles.dialogHint}>
                {isSimpleMode 
                  ? "Tech mode: For those who appreciate a good monospace font and cyber aesthetics."
                  : "Simple mode: Clean, readable, and employer-friendly."}
              </p>
            </div>
            <div className={styles.dialogActions}>
              <button className={styles.dialogButtonSecondary} onClick={handleDialogClose}>
                Stay Here
              </button>
              <button className={styles.dialogButtonPrimary} onClick={handleDialogConfirm}>
                {isSimpleMode ? "Enter the Matrix" : "Keep it Professional"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
