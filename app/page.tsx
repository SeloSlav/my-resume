'use client';

import styles from './page.module.css';
import { useEffect, useState } from 'react';
import { useTheme } from './context/ThemeContext';
import { content, getContent } from './config/content';

const portfolioLinks = [
  { key: 'selo', url: 'https://www.seloolive.com' },
  { key: 'profind', url: 'https://parts-graph.vercel.app/' },
] as const;

const rndLinks = [
  { key: 'babushka', url: 'https://www.babushkabook.com' },
  { key: 'broth', url: 'https://github.com/SeloSlav/2d-multiplayer-survival-mmorpg' },
  { key: 'zoodio', url: 'https://www.zoodio.ai' },
  { key: 'babaSelo', url: 'https://babaselo.com' },
  { key: 'arkyv', url: 'https://arkyv.org' },
] as const;

const contactLinks = [
  { href: 'mailto:martin.erlic@gmail.com', icon: 'fas fa-envelope', key: 'email' as const },
  { href: 'https://github.com/seloslav', icon: 'fab fa-github', key: 'github' as const },
  { href: 'https://stackoverflow.com/users/4077513/martin-erlic', icon: 'fab fa-stack-overflow', key: 'stackoverflow' as const },
  { href: 'https://www.x.com/seloslav', icon: 'fab fa-x-twitter', key: 'twitter' as const },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { mode } = useTheme();
  const c = content;

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const expertiseGroups = [
    c.expertise.productLeadership,
    c.expertise.engineering,
    c.expertise.innovation,
    c.expertise.operations,
  ];

  return (
    <main className={styles.cv}>
      <div className="container">
        <header className={styles.cvHeader}>
          <div className={styles.cvHeaderIdentity}>
            <span className={styles.cvStatus}>
              {mounted ? getContent(c.hero.status, mode) : (mode === 'tech' ? 'BOOTING' : 'Loading...')}
            </span>
            <h1 className={styles.cvName}>{getContent(c.hero.title, mode)}</h1>
            <p className={styles.cvRole}>{getContent(c.hero.role, mode)}</p>
            <p className={styles.cvTagline}>{getContent(c.hero.tagline, mode)}</p>
          </div>

          <div className={styles.cvHeaderMeta}>
            <p className={styles.cvLocation}>{getContent(c.hero.panel.header.location, mode)}</p>
            <p className={styles.cvAvailability}>
              {getContent(c.contact.status.description, mode)}
            </p>
            <nav className={styles.cvContact} aria-label="Contact links">
              {contactLinks.map(({ href, icon, key }) => (
                <a key={key} href={href} target={key === 'email' ? undefined : '_blank'} rel="noopener noreferrer" className={styles.cvContactLink}>
                  <i className={icon} aria-hidden="true" />
                  <span>{getContent(c.contact.links[key], mode)}</span>
                </a>
              ))}
            </nav>
          </div>
        </header>

        <div className={styles.cvGrid}>
          {/* About */}
          <section className={styles.cvBlock} aria-labelledby="about-heading">
            <h2 id="about-heading" className={styles.cvBlockTitle}>{getContent(c.sections.about, mode)}</h2>
            <p className={styles.cvText}>{getContent(c.about.paragraphs[0], mode)}</p>
            <p className={styles.cvText}>{getContent(c.about.paragraphs[2], mode)}</p>
            <div className={styles.cvInlineTags}>
              {getContent(c.about.values.items, mode).map((item, i) => (
                <span key={i} className={styles.cvTag}>{item}</span>
              ))}
            </div>
            <div className={styles.cvSubBlock}>
              <h3 className={styles.cvSubTitle}>{getContent(c.whyHire.whatIWant.title, mode)}</h3>
              <p className={styles.cvText}>{getContent(c.whyHire.whatIWant.paragraphs[0], mode)}</p>
            </div>
          </section>

          {/* Portfolio */}
          <section className={styles.cvBlock} aria-labelledby="portfolio-heading">
            <h2 id="portfolio-heading" className={styles.cvBlockTitle}>{getContent(c.sections.portfolio, mode)}</h2>
            <ul className={styles.cvList}>
              {portfolioLinks.map(({ key, url }) => {
                const project = c.projects[key];
                return (
                  <li key={key} className={styles.cvListItem}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className={styles.cvLink}>
                      {getContent(project.title, mode)}
                    </a>
                    <span className={styles.cvListMeta}>{getContent(project.subtitle, mode)}</span>
                  </li>
                );
              })}
            </ul>

            <h3 className={styles.cvSubTitle}>{getContent(c.sections.rnd, mode)}</h3>
            <ul className={styles.cvList}>
              {rndLinks.map(({ key, url }) => {
                const project = c.rndProjects[key];
                return (
                  <li key={key} className={styles.cvListItem}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className={styles.cvLink}>
                      {getContent(project.title, mode)}
                    </a>
                    <span className={styles.cvListMeta}>{getContent(project.subtitle, mode)}</span>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* Skills */}
          <section className={styles.cvBlock} aria-labelledby="expertise-heading">
            <h2 id="expertise-heading" className={styles.cvBlockTitle}>{getContent(c.sections.expertise, mode)}</h2>
            {expertiseGroups.map((group, i) => (
              <div key={i} className={styles.cvSkillGroup}>
                <h3 className={styles.cvSubTitle}>{getContent(group.title, mode)}</h3>
                <div className={styles.cvSkillTags}>
                  {getContent(group.skills, mode).map((skill, j) => (
                    <span key={j} className={styles.cvSkill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* AI Philosophy */}
          <section className={styles.cvBlock} aria-labelledby="ai-heading">
            <h2 id="ai-heading" className={styles.cvBlockTitle}>{getContent(c.sections.aiPhilosophy, mode)}</h2>
            <dl className={styles.cvDl}>
              <div className={styles.cvDlRow}>
                <dt>{getContent(c.aiPhilosophy.panel.equipment.label, mode)}</dt>
                <dd>{getContent(c.aiPhilosophy.panel.equipment.value, mode)}</dd>
              </div>
              <div className={styles.cvDlRow}>
                <dt>{getContent(c.aiPhilosophy.panel.approach.label, mode)}</dt>
                <dd>{getContent(c.aiPhilosophy.panel.approach.value, mode)}</dd>
              </div>
              <div className={styles.cvDlRow}>
                <dt>{getContent(c.aiPhilosophy.panel.philosophy.label, mode)}</dt>
                <dd>{getContent(c.aiPhilosophy.panel.philosophy.value, mode)}</dd>
              </div>
            </dl>
            <ul className={styles.cvBeliefs}>
              {c.aiPhilosophy.beliefs.items.map((belief, i) => (
                <li key={i}>{getContent(belief.title, mode)}</li>
              ))}
            </ul>
          </section>

          {/* Writing */}
          <section className={styles.cvBlock} aria-labelledby="writing-heading">
            <h2 id="writing-heading" className={styles.cvBlockTitle}>{getContent(c.sections.writing, mode)}</h2>
            <p className={styles.cvText}>{getContent(c.writing.description, mode)}</p>
            <ul className={styles.cvList}>
              {c.writing.samples.map((sample, i) => (
                <li key={i} className={styles.cvListItem}>
                  {sample.link ? (
                    <a href={sample.link.url} target="_blank" rel="noopener noreferrer" className={styles.cvLink}>
                      {getContent(sample.title, mode)}
                    </a>
                  ) : (
                    <span className={styles.cvLink}>{getContent(sample.title, mode)}</span>
                  )}
                </li>
              ))}
            </ul>
          </section>

          {/* Profile summary panel */}
          <section className={styles.cvBlock} aria-labelledby="profile-heading">
            <h2 id="profile-heading" className={styles.cvBlockTitle}>{getContent(c.hero.panel.header.userId, mode)}</h2>
            <dl className={styles.cvDl}>
              <div className={styles.cvDlRow}>
                <dt>{getContent(c.hero.panel.rows.function.label, mode)}</dt>
                <dd>{getContent(c.hero.panel.rows.function.value, mode)}</dd>
              </div>
              <div className={styles.cvDlRow}>
                <dt>{getContent(c.hero.panel.rows.objective.label, mode)}</dt>
                <dd>{getContent(c.hero.panel.rows.objective.value, mode)}</dd>
              </div>
              <div className={styles.cvDlRow}>
                <dt>{getContent(c.hero.panel.rows.access.label, mode)}</dt>
                <dd>{getContent(c.hero.panel.rows.access.value, mode)}</dd>
              </div>
            </dl>
            <div className={styles.cvSubBlock}>
              <h3 className={styles.cvSubTitle}>{getContent(c.whyHire.workEthic.title, mode)}</h3>
              <p className={styles.cvText}>{getContent(c.whyHire.workEthic.paragraphs[0], mode)}</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
