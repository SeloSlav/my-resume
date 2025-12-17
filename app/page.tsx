'use client';

import Navigation from './components/Navigation/Navigation';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import { useTheme } from './context/ThemeContext';
import { content, getContent } from './config/content';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { mode } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Get content based on mode
  const c = content;

  return (
    <>
      <Navigation />

      <main className={styles.main}>
        {/* Hero Section */}
        <section id="hero" className={`${styles.section} ${styles.hero}`}>
          <div className="container">
            <div className={styles.heroContent}>
              <div className="text-primary mb-6 tracking-widest font-bold border-b border-gray-800 pb-2 inline-block">
                {mounted ? getContent(c.hero.status, mode) : (mode === 'tech' ? 'BOOTING' : 'Loading...')}
              </div>
              
              <h1 className={`display ${styles.heroTitle}`}>
                {getContent(c.hero.title, mode)}
              </h1>
              
              <p className={styles.heroSubtitle}>
                {getContent(c.hero.role, mode)}<br/>
                <span className="text-dim text-small block mt-2">
                  {getContent(c.hero.tagline, mode)}
                </span>
              </p>
              
              <div className={styles.heroActions}>
                <button
                  className="btn btn--primary"
                  onClick={() => scrollToSection('portfolio')}
                >
                  {getContent(c.hero.buttons.portfolio, mode)}
                </button>
                <button
                  className="btn"
                  onClick={() => scrollToSection('contact')}
                >
                  {getContent(c.hero.buttons.contact, mode)}
                </button>
              </div>

              {/* System Panel */}
              <div className={styles.systemPanel}>
                <div className={styles.systemHeader}>
                  <span>{getContent(c.hero.panel.header.userId, mode)}</span>
                  <span>{getContent(c.hero.panel.header.role, mode)}</span>
                  <span>{getContent(c.hero.panel.header.location, mode)}</span>
                </div>
                <div className={styles.systemBody}>
                  <div className={styles.dataRow}>
                    <span className={styles.dataKey}>{getContent(c.hero.panel.rows.function.label, mode)}</span>
                    <span className={styles.dataValue}>{getContent(c.hero.panel.rows.function.value, mode)}</span>
                  </div>
                  <div className={styles.dataRow}>
                    <span className={styles.dataKey}>{getContent(c.hero.panel.rows.traits.label, mode)}</span>
                    <span className={styles.dataValue}>{getContent(c.hero.panel.rows.traits.value, mode)}</span>
                  </div>
                  <div className={styles.dataRow}>
                    <span className={styles.dataKey}>{getContent(c.hero.panel.rows.objective.label, mode)}</span>
                    <span className={styles.dataValue}>{getContent(c.hero.panel.rows.objective.value, mode)}</span>
                  </div>
                  <div className={styles.dataRow}>
                    <span className={styles.dataKey}>{getContent(c.hero.panel.rows.access.label, mode)}</span>
                    <span className={styles.dataValue}>{getContent(c.hero.panel.rows.access.value, mode)}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className={`${styles.section} ${styles.portfolio}`}>
          <div className="container">
            <h2>{getContent(c.sections.portfolio, mode)}</h2>
            <div className="grid grid-3">
              {/* Selo Olive */}
              <div className="card">
                <div className={styles.projectTags}>
                  {getContent(c.projects.selo.tags, mode).map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <h3 className="h3">{getContent(c.projects.selo.title, mode)}</h3>
                <p className="text-dim mb-4 text-small font-bold">
                  {getContent(c.projects.selo.subtitle, mode)}
                </p>
                <p className="text-small mb-6">
                  {getContent(c.projects.selo.description, mode)}
                </p>
                <a href="https://www.seloolive.com" target="_blank" rel="noopener noreferrer" className="btn text-small w-full text-center block">
                  {getContent(c.projects.selo.button, mode)}
                </a>
              </div>

              {/* Veles Vault */}
              <div className="card">
                <div className={styles.projectTags}>
                  {getContent(c.projects.velesVault.tags, mode).map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <h3 className="h3">{getContent(c.projects.velesVault.title, mode)}</h3>
                <p className="text-dim mb-4 text-small font-bold">
                  {getContent(c.projects.velesVault.subtitle, mode)}
                </p>
                <p className="text-small mb-6">
                  {getContent(c.projects.velesVault.description, mode)}
                </p>
                <a href="https://veles-vault.vercel.app" target="_blank" rel="noopener noreferrer" className="btn text-small w-full text-center block">
                  {getContent(c.projects.velesVault.button, mode)}
                </a>
                <p className={`text-dim text-small text-center ${styles.credentials}`} style={{marginTop: 'var(--space-2)'}}>
                  {getContent(c.projects.velesVault.note, mode)}
                </p>
              </div>

              {/* Profind */}
              <div className="card">
                <div className={styles.projectTags}>
                  {getContent(c.projects.profind.tags, mode).map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <h3 className="h3">{getContent(c.projects.profind.title, mode)}</h3>
                <p className="text-dim mb-4 text-small font-bold">
                  {getContent(c.projects.profind.subtitle, mode)}
                </p>
                <p className="text-small mb-6">
                  {getContent(c.projects.profind.description, mode)}
                </p>
                <div className={styles.buttonGroup}>
                  <a href="https://parts-graph.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn text-small w-full text-center block">
                    {getContent(c.projects.profind.buttons.concept, mode)}
                  </a>
                  <div className={styles.devLinkWrapper}>
                    <a href="https://dev.profind.shop/" target="_blank" rel="noopener noreferrer" className="btn text-small w-full text-center block">
                      {getContent(c.projects.profind.buttons.dev, mode)}
                    </a>
                    <p className={styles.credentials}>
                      {getContent(c.projects.profind.credentials, mode)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* R&D Labs Section */}
        <section id="rnd" className={`${styles.section} ${styles.rnd}`}>
          <div className="container">
            <h2>{getContent(c.sections.rnd, mode)}</h2>
            <p className="text-dim text-small mb-8 font-mono">
              {getContent(c.sections.rndSubtitle, mode)}
            </p>
            
            <div className="grid grid-3">
              {/* Babushka Book */}
              <div className="card" style={{borderColor: 'var(--color-secondary)'}}>
                <h3 className="h4 text-secondary">{getContent(c.rndProjects.babushka.title, mode)}</h3>
                <p className="text-dim text-small mb-3">
                  {getContent(c.rndProjects.babushka.subtitle, mode)}
                </p>
                <p className="text-small mb-6">
                  {getContent(c.rndProjects.babushka.description, mode)}
                </p>
                <a href="https://www.babushkabook.com" target="_blank" rel="noopener noreferrer" className="btn text-small w-full text-center block" style={{borderColor: 'var(--color-secondary)', color: 'var(--color-secondary)'}}>
                  {getContent(c.rndProjects.babushka.button, mode)}
                </a>
              </div>

              {/* Broth & Bullets */}
              <div className="card" style={{borderColor: 'var(--color-secondary)'}}>
                <h3 className="h4 text-secondary">{getContent(c.rndProjects.broth.title, mode)}</h3>
                <p className="text-dim text-small mb-3">
                  {getContent(c.rndProjects.broth.subtitle, mode)}
                </p>
                <p className="text-small mb-6">
                  {getContent(c.rndProjects.broth.description, mode)}
                </p>
                <a href="https://www.brothandbullets.com/blog/broth-bullets-alpha-launch" target="_blank" rel="noopener noreferrer" className="btn text-small w-full text-center block" style={{borderColor: 'var(--color-secondary)', color: 'var(--color-secondary)'}}>
                  {getContent(c.rndProjects.broth.button, mode)}
                </a>
              </div>

              {/* Travel Guide */}
              <div className="card" style={{borderColor: 'var(--color-secondary)'}}>
                <h3 className="h4 text-secondary">{getContent(c.rndProjects.travel.title, mode)}</h3>
                <p className="text-dim text-small mb-3">
                  {getContent(c.rndProjects.travel.subtitle, mode)}
                </p>
                <p className="text-small mb-6">
                  {getContent(c.rndProjects.travel.description, mode)}
                </p>
                <a href="https://travel-guide-omega-nine.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn text-small w-full text-center block" style={{borderColor: 'var(--color-secondary)', color: 'var(--color-secondary)'}}>
                  {getContent(c.rndProjects.travel.button, mode)}
                </a>
              </div>

              {/* Zoodio AI */}
              <div className="card" style={{borderColor: 'var(--color-secondary)'}}>
                <h3 className="h4 text-secondary">{getContent(c.rndProjects.zoodio.title, mode)}</h3>
                <p className="text-dim text-small mb-3">
                  {getContent(c.rndProjects.zoodio.subtitle, mode)}
                </p>
                <p className="text-small mb-6">
                  {getContent(c.rndProjects.zoodio.description, mode)}
                </p>
                <a href="https://www.zoodio.ai" target="_blank" rel="noopener noreferrer" className="btn text-small w-full text-center block" style={{borderColor: 'var(--color-secondary)', color: 'var(--color-secondary)'}}>
                  {getContent(c.rndProjects.zoodio.button, mode)}
                </a>
              </div>

              {/* Arkyv Engine */}
              <div className="card" style={{borderColor: 'var(--color-secondary)'}}>
                <h3 className="h4 text-secondary">{getContent(c.rndProjects.arkyv.title, mode)}</h3>
                <p className="text-dim text-small mb-3">
                  {getContent(c.rndProjects.arkyv.subtitle, mode)}
                </p>
                <p className="text-small mb-6">
                  {getContent(c.rndProjects.arkyv.description, mode)}
                </p>
                <a href="https://arkyv.org" target="_blank" rel="noopener noreferrer" className="btn text-small w-full text-center block" style={{borderColor: 'var(--color-secondary)', color: 'var(--color-secondary)'}}>
                  {getContent(c.rndProjects.arkyv.button, mode)}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`${styles.section} ${styles.about}`}>
          <div className="container">
            <h2>{getContent(c.sections.about, mode)}</h2>
            <div className="grid grid-2">
              <div>
                <p className="mb-6 text-primary font-bold">
                  {getContent(c.about.intro, mode)}
                </p>
                {c.about.paragraphs.map((para, i) => (
                  <p key={i} className="mb-6 text-small leading-loose">
                    {getContent(para, mode)}
                  </p>
                ))}
              </div>
              
              <div className={styles.profileCards}>
                <div className={styles.profileCard}>
                  <h4 className={styles.profileCardTitle}>{getContent(c.about.values.title, mode)}</h4>
                  <div className={styles.tagList}>
                    {getContent(c.about.values.items, mode).map((item, i) => (
                      <span key={i} className={styles.tagItem}><i className="fas fa-check"></i> {item}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.profileCard}>
                  <h4 className={styles.profileCardTitle}>{getContent(c.about.availability.title, mode)}</h4>
                  <div className={styles.infoList}>
                    <p><strong className="text-primary">{getContent(c.about.availability.role.label, mode)}</strong> {getContent(c.about.availability.role.value, mode)}</p>
                    <p><strong className="text-primary">{getContent(c.about.availability.zones.label, mode)}</strong> {getContent(c.about.availability.zones.value, mode)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className={`${styles.section} ${styles.expertise}`}>
          <div className="container">
            <h2>{getContent(c.sections.expertise, mode)}</h2>

            <div className="grid grid-2">
              {/* Product Leadership */}
              <div className="card">
                <h3 className="h3 mb-6 text-secondary">{getContent(c.expertise.productLeadership.title, mode)}</h3>
                <div className={styles.skillsList}>
                  {getContent(c.expertise.productLeadership.skills, mode).map((skill, i) => (
                    <span key={i} className={styles.skill}>{skill}</span>
                  ))}
                </div>
              </div>

              {/* Engineering Core */}
              <div className="card">
                <h3 className="h3 mb-6 text-secondary">{getContent(c.expertise.engineering.title, mode)}</h3>
                <div className={styles.skillsList}>
                  {getContent(c.expertise.engineering.skills, mode).map((skill, i) => (
                    <span key={i} className={styles.skill}>{skill}</span>
                  ))}
                </div>
              </div>

              {/* Innovation */}
              <div className="card">
                <h3 className="h3 mb-6 text-secondary">{getContent(c.expertise.innovation.title, mode)}</h3>
                <div className={styles.skillsList}>
                  {getContent(c.expertise.innovation.skills, mode).map((skill, i) => (
                    <span key={i} className={styles.skill}>{skill}</span>
                  ))}
                </div>
              </div>

              {/* Operations & Scale */}
              <div className="card">
                <h3 className="h3 mb-6 text-secondary">{getContent(c.expertise.operations.title, mode)}</h3>
                <div className={styles.skillsList}>
                  {getContent(c.expertise.operations.skills, mode).map((skill, i) => (
                    <span key={i} className={styles.skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Philosophy Section */}
        <section id="ai-philosophy" className={`${styles.section} ${styles.aiPhilosophy}`}>
          <div className="container">
            <h2>{getContent(c.sections.aiPhilosophy, mode)}</h2>
            
            <div className="grid grid-2">
              <div>
                <div className={styles.systemPanel} style={{marginTop: 0}}>
                  <div className={styles.systemHeader}>
                    <span>{getContent(c.aiPhilosophy.panel.status, mode)}</span>
                    <span>{getContent(c.aiPhilosophy.panel.active, mode)}</span>
                  </div>
                  <div className={styles.systemBody}>
                    <div className={styles.dataRow}>
                      <span className={styles.dataKey}>{getContent(c.aiPhilosophy.panel.equipment.label, mode)}</span>
                      <span className={styles.dataValue}>{getContent(c.aiPhilosophy.panel.equipment.value, mode)}</span>
                    </div>
                    <div className={styles.dataRow}>
                      <span className={styles.dataKey}>{getContent(c.aiPhilosophy.panel.approach.label, mode)}</span>
                      <span className={styles.dataValue}>{getContent(c.aiPhilosophy.panel.approach.value, mode)}</span>
                    </div>
                    <div className={styles.dataRow}>
                      <span className={styles.dataKey}>{getContent(c.aiPhilosophy.panel.philosophy.label, mode)}</span>
                      <span className={styles.dataValue}>{getContent(c.aiPhilosophy.panel.philosophy.value, mode)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="h3 mb-4 text-secondary">{getContent(c.aiPhilosophy.beliefs.title, mode)}</h3>
                <div className="mb-6">
                  {c.aiPhilosophy.beliefs.items.map((belief, i) => (
                    <p key={i} className="text-small mb-4 leading-loose">
                      <span className="text-primary font-bold">{getContent(belief.title, mode)}</span><br/>
                      {i === 1 ? (
                        <>
                          Inspired by <a href="https://github.com/opensouls/opensouls" target="_blank" rel="noopener noreferrer" className="text-primary">Open Souls</a>—{getContent(belief.description, mode).replace('Inspired by Open Souls—', '').replace('Working memory architectures create more dynamic, context-aware AI than static fine-tuning.', 'working memory architectures create more dynamic, context-aware AI than static fine-tuning.')}
                        </>
                      ) : (
                        getContent(belief.description, mode)
                      )}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Hire Me Section */}
        <section id="why-hire" className={`${styles.section} ${styles.whyHire}`}>
          <div className="container">
            <h2>{getContent(c.sections.whyHire, mode)}</h2>
            
            <div className="grid grid-2">
              <div className={styles.whyCard}>
                <h3 className="h3 mb-4 text-secondary">{getContent(c.whyHire.workEthic.title, mode)}</h3>
                {c.whyHire.workEthic.paragraphs.map((para, i) => (
                  <p key={i} className="text-small mb-4">
                    {getContent(para, mode)}
                  </p>
                ))}
              </div>

              <div className={styles.whyCard}>
                <h3 className="h3 mb-4 text-secondary">{getContent(c.whyHire.whatIWant.title, mode)}</h3>
                {c.whyHire.whatIWant.paragraphs.map((para, i) => (
                  <p key={i} className="text-small mb-4">
                    {getContent(para, mode)}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`${styles.section} ${styles.contact}`}>
          <div className="container">
            <div className="grid grid-2">
              <div className={styles.contactInfo}>
                <h2>{getContent(c.sections.contact, mode)}</h2>
                <div className={`mb-8 border-l-4 border-primary pl-6 py-2 ${styles.contactStatus}`}>
                  <p className="text-small mb-4 font-bold tracking-widest">
                    <span className={styles.statusIndicator}></span>
                    {getContent(c.contact.status.title, mode)}
                  </p>
                  <p className="text-dim text-small leading-relaxed">
                    {getContent(c.contact.status.description, mode)}
                    <br/>
                    {getContent(c.contact.status.roles, mode)}
                  </p>
                </div>
                
                <div className="mt-8 space-y-4">
                  <a href="mailto:martin.erlic@gmail.com" className={styles.contactLink}>
                    <i className="fas fa-envelope" style={{marginRight: '0.75rem', width: '20px'}}></i>
                    {getContent(c.contact.links.email, mode)}
                  </a>
                  <a href="https://github.com/seloslav" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                    <i className="fab fa-github" style={{marginRight: '0.75rem', width: '20px'}}></i>
                    {getContent(c.contact.links.github, mode)}
                  </a>
                  <a href="https://stackoverflow.com/users/4077513/martin-erlic" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                    <i className="fab fa-stack-overflow" style={{marginRight: '0.75rem', width: '20px'}}></i>
                    {getContent(c.contact.links.stackoverflow, mode)}
                  </a>
                  <a href="https://www.x.com/seloslav" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                    <i className="fab fa-x-twitter" style={{marginRight: '0.75rem', width: '20px'}}></i>
                    {getContent(c.contact.links.twitter, mode)}
                  </a>
                </div>
              </div>

              <form className={styles.contactForm}>
                <div className="mb-6">
                  <label htmlFor="name" className="label">{getContent(c.contact.form.name.label, mode)}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input"
                    placeholder={getContent(c.contact.form.name.placeholder, mode)}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="label">{getContent(c.contact.form.email.label, mode)}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input"
                    placeholder={getContent(c.contact.form.email.placeholder, mode)}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="label">{getContent(c.contact.form.message.label, mode)}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="input"
                    placeholder={getContent(c.contact.form.message.placeholder, mode)}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn--primary w-full py-4 text-lg font-bold tracking-widest">
                  {getContent(c.contact.form.submit, mode)}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
