'use client';

import styles from './page.module.css';
import { useEffect, useState } from 'react';
import { useTheme } from './context/ThemeContext';
import { content, getContent } from './config/content';

const portfolioLinks = [
  { key: 'profind', url: 'https://profind.shop' },
  { key: 'selo', url: 'https://www.seloolive.com' },
] as const;

const rndLinks = [
  { key: 'babaSelo', url: 'https://github.com/SeloSlav/baba-selo-agentic-recipe-maker' },
  { key: 'babushka', url: 'https://www.babushkabook.com' },
  { key: 'broth', url: 'https://github.com/SeloSlav/2d-multiplayer-survival-mmorpg' },
  { key: 'arkyv', url: 'https://github.com/SeloSlav/arkyv-engine' },
  { key: 'medievalSettlement', url: 'https://github.com/SeloSlav/medieval-settlement-threejs' },
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
  }, []);

  const expertiseGroups = [
    c.expertise.productLeadership,
    c.expertise.productOwnership,
    c.expertise.innovation,
    c.expertise.operations,
    c.expertise.engineering,
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
            <a href="/resume.md" className={styles.cvContactLink}>Read full résumé</a>
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
                    {key === 'babaSelo' && (
                      <>
                        <a href="https://babaselo.com" target="_blank" rel="noopener noreferrer" className={styles.cvLink}>Live app</a>
                      </>
                    )}
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

          {/* Professional experience */}
          <section className={styles.cvBlock} aria-labelledby="experience-heading">
            <h2 id="experience-heading" className={styles.cvBlockTitle}>{getContent(c.sections.experience, mode)}</h2>
            <ul className={styles.cvExperience}>
              {c.experience.map((job) => (
                <li key={job.company}>
                  <h3 className={styles.cvSubTitle}>{job.role} · {job.company}</h3>
                  <p className={styles.cvListMeta}>{job.dates} · {job.location}</p>
                  <p className={styles.cvText}>{job.summary}</p>
                </li>
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

          {/* Education and recruiting details */}
          <section className={styles.cvBlock} aria-labelledby="education-heading">
            <h2 id="education-heading" className={styles.cvBlockTitle}>{getContent(c.sections.education, mode)}</h2>
            <h3 className={styles.cvSubTitle}>{c.education.degree}</h3>
            <p className={styles.cvText}>{c.education.institution} · {c.education.dates}</p>
            <dl className={styles.cvDl}>
              <div className={styles.cvDlRow}>
                <dt>Languages</dt>
                <dd>{c.education.languages}</dd>
              </div>
              <div className={styles.cvDlRow}>
                <dt>Citizenship</dt>
                <dd>{c.education.citizenship}</dd>
              </div>
              <div className={styles.cvDlRow}>
                <dt>Location</dt>
                <dd>Zagreb, Croatia · EU / Canada / Remote</dd>
              </div>
            </dl>
            <div className={styles.cvSubBlock}>
              <h3 className={styles.cvSubTitle}>Recruiting</h3>
              <p className={styles.cvText}>Have a relevant role? Email me with the company, job details, compensation range, and working arrangements.</p>
              <a href="#recruiting-agent-guidance" className={styles.cvLink}>Recruiter & AI agent guidance</a>
            </div>
          </section>
        </div>

        <section id="recruiting-agent-guidance" className={`${styles.cvBlock} ${styles.cvRecruiting}`} aria-labelledby="recruiting-heading">
          <h2 id="recruiting-heading" className={styles.cvBlockTitle}>{c.recruiting.title}</h2>
          <p className={styles.cvText}>{c.recruiting.intro}</p>
          <p className={styles.cvText}>
            <a href="mailto:martin.erlic@gmail.com?subject=Job%20opportunity%20for%20Martin%20Erli%C4%87" className={styles.cvLink}>Contact Martin about a role: martin.erlic@gmail.com</a>
          </p>
          <ul className={styles.cvRecruitingList}>
            {c.recruiting.guidance.map((instruction) => <li key={instruction}>{instruction}</li>)}
          </ul>
          <p className={styles.cvText}>
            <a href="/resume.md" className={styles.cvLink}>Machine-readable résumé</a>
            {' · '}
            <a href="/llms.txt" className={styles.cvLink}>Profile index for agents</a>
          </p>
        </section>
      </div>
    </main>
  );
}
