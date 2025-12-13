'use client';

import Navigation from './components/Navigation/Navigation';
import styles from './page.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

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

  return (
    <>
      <Navigation />

      <main className={styles.main}>
        {/* Hero Section */}
        <section id="hero" className={`${styles.section} ${styles.hero}`}>
          <div className="container">
            <div className={styles.heroContent}>
              <div className="text-primary mb-6 tracking-widest font-bold border-b border-gray-800 pb-2 inline-block">
                SYSTEM_STATUS :: {mounted ? 'ONLINE' : 'BOOTING'}
              </div>
              
              <h1 className={`display ${styles.heroTitle}`}>
                MARTIN ERLIC
              </h1>
              
              <p className={styles.heroSubtitle}>
                PRODUCT ARCHITECT & TEAM LEAD<br/>
                <span className="text-dim text-small block mt-2">
                  // STRATEGIC VISION POWERED BY FULL-STACK MASTERY
                </span>
              </p>
              
              <div className={styles.heroActions}>
                <button
                  className="btn btn--primary"
                  onClick={() => scrollToSection('portfolio')}
                >
                  VIEW PRODUCT LOGS
                </button>
                <button
                  className="btn"
                  onClick={() => scrollToSection('contact')}
                >
                  INITIATE COMMS
                </button>
              </div>

              {/* System Panel */}
              <div className={styles.systemPanel}>
                <div className={styles.systemHeader}>
                  <span>USER_ID: 0x4D415254494E</span>
                  <span>ROLE: LEAD_ARCHITECT</span>
                  <span>LOC: EU_CAN_REMOTE</span>
                </div>
                <div className={styles.systemBody}>
                  <div className={styles.dataRow}>
                    <span className={styles.dataKey}>FUNCTION</span>
                    <span className={styles.dataValue}>Bridging the gap between high-level vision and technical execution.</span>
                  </div>
                  <div className={styles.dataRow}>
                    <span className={styles.dataKey}>TRAITS</span>
                    <span className={styles.dataValue}>[VISIONARY, PRAGMATIC, LEADERSHIP, TINKERER]</span>
                  </div>
                  <div className={styles.dataRow}>
                    <span className={styles.dataKey}>OBJECTIVE</span>
                    <span className={styles.dataValue}>Leading teams to build products that matter, backed by deep technical understanding.</span>
                  </div>
                  <div className={styles.dataRow}>
                    <span className={styles.dataKey}>ACCESS</span>
                    <span className={styles.dataValue}>Open to leadership roles and ambitious product teams.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className={`${styles.section} ${styles.portfolio}`}>
          <div className="container">
            <h2>PRODUCT_DATABASE</h2>
            <div className="grid grid-3">
              {/* Selo Olive */}
              <div className="card">
                <div className={styles.projectTags}>
                  <span className={styles.tag}>PRODUCT_LEAD</span>
                  <span className={styles.tag}>GLOBAL</span>
                </div>
                <h3 className="h3">SELO OLIVE</h3>
                <p className="text-dim mb-4 text-small font-bold">
                  // E-COMMERCE // SUPPLY_CHAIN_ARCH
                </p>
                <p className="text-small mb-6">
                  Orchestrated the entire product lifecycle from international regulatory navigation 
                  to the technical deployment of a global e-commerce platform.
                </p>
                <a href="https://www.seloolive.com" target="_blank" rel="noopener noreferrer" className="btn text-small w-full text-center block">
                  LAUNCH SITE
                </a>
              </div>

              {/* Zoodio AI */}
              <div className="card">
                <div className={styles.projectTags}>
                  <span className={styles.tag}>AI_STRATEGY</span>
                  <span className={styles.tag}>SAAS</span>
                </div>
                <h3 className="h3">ZOODIO AI</h3>
                <p className="text-dim mb-4 text-small font-bold">
                  // G_CLOUD // INTEGRATION_LEAD
                </p>
                <p className="text-small mb-6">
                  Conceptualized and executed a SaaS product integrating AI APIs. 
                  Led the technical architecture to ensure scalability and user retention.
                </p>
                <a href="https://www.zoodio.ai" target="_blank" rel="noopener noreferrer" className="btn text-small w-full text-center block">
                  LAUNCH SITE
                </a>
              </div>

              {/* Profind */}
              <div className="card">
                <div className={styles.projectTags}>
                  <span className={styles.tag}>VISION</span>
                  <span className={styles.tag}>B2B</span>
                </div>
                <h3 className="h3">PROFIND</h3>
                <p className="text-dim mb-4 text-small font-bold">
                  // MCMASTER_FORGE // INNOVATION
                </p>
                <p className="text-small mb-6">
                  Collaborated with accelerators to define a product roadmap for AI-powered industrial parts matching. 
                  Validated technical feasibility of the core algorithms.
                </p>
                <div className={styles.buttonGroup}>
                  <a href="https://parts-graph.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn text-small w-full text-center block">
                    VIEW CONCEPT
                  </a>
                  <div className={styles.devLinkWrapper}>
                    <a href="https://dev.profind.shop/" target="_blank" rel="noopener noreferrer" className="btn text-small w-full text-center block">
                      DEV ENVIRONMENT
                    </a>
                    <p className={styles.credentials}>
                      CREDENTIALS: parker / langlois
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
            <h2>R_AND_D_LABS</h2>
            <p className="text-dim text-small mb-8 font-mono">
              &gt; Exploring new horizons. Validating concepts through rapid prototyping.
            </p>
            
            <div className="grid grid-3">
              {/* Babushka Book */}
              <div className="card" style={{borderColor: 'var(--color-secondary)'}}>
                <h3 className="h4 text-secondary">BABUSHKA BOOK</h3>
                <p className="text-dim text-small mb-3">
                  STAKEHOLDER_MGMT // CREATIVE_DIR
                </p>
                <p className="text-small mb-6">
                  Managed a complex creative project with multiple stakeholders. 
                  A study in narrative consistency and universe building.
                </p>
                <a href="https://www.babushkabook.com" target="_blank" rel="noopener noreferrer" className="btn text-small w-full text-center block" style={{borderColor: 'var(--color-secondary)', color: 'var(--color-secondary)'}}>
                  ACCESS UNIVERSE
                </a>
              </div>

              {/* Broth & Bullets */}
              <div className="card" style={{borderColor: 'var(--color-secondary)'}}>
                <h3 className="h4 text-secondary">BROTH & BULLETS</h3>
                <p className="text-dim text-small mb-3">
                  SYS_ARCHITECTURE // REALTIME
                </p>
                <p className="text-small mb-6">
                  Architected a real-time multiplayer system to understand the constraints 
                  of low-latency state synchronization.
                </p>
                <a href="https://www.brothandbullets.com/blog/broth-bullets-alpha-launch" target="_blank" rel="noopener noreferrer" className="btn text-small w-full text-center block" style={{borderColor: 'var(--color-secondary)', color: 'var(--color-secondary)'}}>
                  READ LOGS
                </a>
              </div>

              {/* Travel Guide */}
              <div className="card" style={{borderColor: 'var(--color-secondary)'}}>
                <h3 className="h4 text-secondary">TRIP PLANNER</h3>
                <p className="text-dim text-small mb-3">
                  RAPID_MVP // AI_VALIDATION
                </p>
                <p className="text-small mb-6">
                  Executed a "Concept-to-Product" sprint in 24 hours. 
                  Demonstrating how AI can compress product development cycles.
                </p>
                <a href="https://travel-guide-omega-nine.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn text-small w-full text-center block" style={{borderColor: 'var(--color-secondary)', color: 'var(--color-secondary)'}}>
                  INITIATE
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`${styles.section} ${styles.about}`}>
          <div className="container">
            <h2>OPERATOR_PROFILE</h2>
            <div className="grid grid-2">
              <div>
                <p className="mb-6 text-primary font-bold">
                  &gt; EXECUTING LEADERSHIP_BIO...
                </p>
                <p className="mb-6 text-small leading-loose">
                  I don&apos;t just write code; I build products. I am a Product Lead and Visionary who uses a deep 
                  full-stack background to bridge the gap between abstract business goals and concrete technical execution.
                </p>
                <p className="mb-6 text-small leading-loose">
                  My strength lies in knowing the &quot;whole in and out&quot; of the stack—from database schema design to 
                  user acquisition strategy. This allows me to lead teams effectively, communicate with engineers in their 
                  own language, and ensure that every technical decision serves the broader product vision.
                </p>
                <p className="mb-6 text-small leading-loose">
                  Whether establishing international trade operations or architecting AI platforms, I bring a pragmatic, 
                  holistic approach to building complex systems.
                </p>
              </div>
              
              <div className={styles.systemPanel} style={{marginTop: 0}}>
                <div className={styles.systemHeader}>
                  <span>FILE: CORE_COMPETENCIES</span>
                  <span>READ_ONLY</span>
                </div>
                <div className={styles.systemBody}>
                  <div className={styles.competencyGrid}>
                    <div className={styles.competencySection}>
                      <p className="text-secondary mb-4 font-bold tracking-widest">LEADERSHIP VALUES</p>
                      <div className="grid grid-2 gap-3">
                        <span className="text-primary border border-primary p-2 text-center font-bold">
                          <i className="fas fa-check" style={{marginRight: '0.5rem', color: 'var(--color-primary)'}}></i>
                          STRATEGIC
                        </span>
                        <span className="text-primary border border-primary p-2 text-center font-bold">
                          <i className="fas fa-check" style={{marginRight: '0.5rem', color: 'var(--color-primary)'}}></i>
                          EMPATHETIC
                        </span>
                        <span className="text-primary border border-primary p-2 text-center font-bold">
                          <i className="fas fa-check" style={{marginRight: '0.5rem', color: 'var(--color-primary)'}}></i>
                          TECHNICAL
                        </span>
                        <span className="text-primary border border-primary p-2 text-center font-bold">
                          <i className="fas fa-check" style={{marginRight: '0.5rem', color: 'var(--color-primary)'}}></i>
                          MENTOR
                        </span>
                      </div>
                    </div>
                    <div className={styles.competencySection}>
                      <p className="text-secondary mb-4 font-bold tracking-widest">AVAILABILITY</p>
                      <p className="text-small border-l-2 border-primary pl-4">
                        <span className="text-primary block mb-2 font-bold">ROLE:</span> 
                        <span className="block mb-3">PRODUCT / TECH LEAD</span>
                        <span className="text-primary block mb-2 font-bold">ZONES:</span> 
                        <span className="block">EU, CANADA</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className={`${styles.section} ${styles.expertise}`}>
          <div className="container">
            <h2>CAPABILITIES_MATRIX</h2>

            <div className="grid grid-2">
              {/* Product Leadership */}
              <div className="card">
                <h3 className="h3 mb-6 text-secondary">PRODUCT_LEADERSHIP</h3>
                <div className={styles.skillsList}>
                  <span className={styles.skill}>VISION_STRATEGY</span>
                  <span className={styles.skill}>ROADMAP_PLANNING</span>
                  <span className={styles.skill}>TEAM_MENTORSHIP</span>
                  <span className={styles.skill}>STAKEHOLDER_MGMT</span>
                  <span className={styles.skill}>AGILE_PROCESS</span>
                </div>
              </div>

              {/* Technical Authority (formerly Tech Stack) */}
              <div className="card">
                <h3 className="h3 mb-6 text-secondary">ENGINEERING_CORE</h3>
                <div className={styles.skillsList}>
                  <span className={styles.skill}>FULL_STACK_ARCH</span>
                  <span className={styles.skill}>TYPESCRIPT/REACT</span>
                  <span className={styles.skill}>PYTHON/AI</span>
                  <span className={styles.skill}>DATABASE_DESIGN</span>
                  <span className={styles.skill}>CLOUD_INFRA</span>
                </div>
              </div>

              {/* AI & Innovation */}
              <div className="card">
                <h3 className="h3 mb-6 text-secondary">INNOVATION_LAYER</h3>
                <div className={styles.skillsList}>
                  <span className={styles.skill}>AI_INTEGRATION</span>
                  <span className={styles.skill}>LLM_PIPELINES</span>
                  <span className={styles.skill}>RAG_SYSTEMS</span>
                  <span className={styles.skill}>RAPID_PROTOTYPING</span>
                  <span className={styles.skill}>TECH_VALIDATION</span>
                </div>
              </div>

              {/* Operations & Scale */}
              <div className="card">
                <h3 className="h3 mb-6 text-secondary">OPERATIONS_&&_SCALE</h3>
                <div className={styles.skillsList}>
                  <span className={styles.skill}>GO_TO_MARKET</span>
                  <span className={styles.skill}>REGULATORY_COMPLIANCE</span>
                  <span className={styles.skill}>CI/CD_DEVOPS</span>
                  <span className={styles.skill}>SCALABILITY</span>
                  <span className={styles.skill}>INTL_OPERATIONS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Philosophy Section */}
        <section id="ai-philosophy" className={`${styles.section} ${styles.aiPhilosophy}`}>
          <div className="container">
            <h2>AI_PHILOSOPHY</h2>
            
            <div className="grid grid-2">
              <div>
                <div className={styles.systemPanel} style={{marginTop: 0}}>
                  <div className={styles.systemHeader}>
                    <span>STATUS: CYBORG_MODE</span>
                    <span>ACTIVE</span>
                  </div>
                  <div className={styles.systemBody}>
                    <div className={styles.dataRow}>
                      <span className={styles.dataKey}>EQUIPMENT</span>
                      <span className={styles.dataValue}>Cursor Ultra, GPT Pro</span>
                    </div>
                    <div className={styles.dataRow}>
                      <span className={styles.dataKey}>APPROACH</span>
                      <span className={styles.dataValue}>Human + AI Symbiosis</span>
                    </div>
                    <div className={styles.dataRow}>
                      <span className={styles.dataKey}>PHILOSOPHY</span>
                      <span className={styles.dataValue}>Tools amplify expertise, not replace it</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="h3 mb-4 text-secondary">CORE_BELIEFS</h3>
                <div className="mb-6">
                  <p className="text-small mb-4 leading-loose">
                    <span className="text-primary font-bold">&gt; CONTEXT {'>'} RAG</span><br/>
                    File search and direct context injection beats RAG architectures. 
                    LLMs need massive amounts of CONTEXT, not clever retrieval tricks.
                  </p>
                  <p className="text-small mb-4 leading-loose">
                    <span className="text-primary font-bold">&gt; WORKING_MEMORY {'>'} FINE_TUNING</span><br/>
                    Inspired by <a href="https://github.com/opensouls/opensouls" target="_blank" rel="noopener noreferrer" className="text-primary">Open Souls</a>—working memory 
                    architectures create more dynamic, context-aware AI than static fine-tuning.
                  </p>
                  <p className="text-small mb-4 leading-loose">
                    <span className="text-primary font-bold">&gt; KNOWLEDGE {'>'} TOOLS</span><br/>
                    MCP tools are overrated. Deep domain expertise + leveraging SOTA models 
                    correctly is the clearest path to AI domination.
                  </p>
                  <p className="text-small leading-loose">
                    <span className="text-primary font-bold">&gt; SYMBIOSIS</span><br/>
                    The best AI practitioners don&apos;t just use tools—they understand them deeply, 
                    know when to push boundaries, and when to trust their own judgment over the model&apos;s.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`${styles.section} ${styles.contact}`}>
          <div className="container">
            <div className="grid grid-2">
              <div className={styles.contactInfo}>
                <h2>TRANSMIT</h2>
                <div className="mb-8 border-l-4 border-primary pl-6 py-2 bg-gray-900 bg-opacity-30">
                  <p className="text-small mb-4 font-bold tracking-widest">
                    <span className={styles.statusIndicator}></span>
                    CHANNEL_OPEN
                  </p>
                  <p className="text-dim text-small leading-relaxed">
                    Ready to lead your next product initiative.
                    <br/>
                    Product Strategy || Technical Leadership || Innovation
                  </p>
                </div>
                
                <div className="mt-8 space-y-4">
                  <a href="mailto:martin.erlic@gmail.com" className={styles.contactLink}>
                    <i className="fas fa-envelope" style={{marginRight: '0.75rem', width: '20px'}}></i>
                    MARTIN.ERLIC@GMAIL.COM
                  </a>
                  <a href="https://github.com/seloslav" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                    <i className="fab fa-github" style={{marginRight: '0.75rem', width: '20px'}}></i>
                    GITHUB.COM/SELOSLAV
                  </a>
                  <a href="https://stackoverflow.com/users/4077513/martin-erlic" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                    <i className="fab fa-stack-overflow" style={{marginRight: '0.75rem', width: '20px'}}></i>
                    STACKOVERFLOW
                  </a>
                  <a href="https://www.x.com/seloslav" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                    <i className="fab fa-x-twitter" style={{marginRight: '0.75rem', width: '20px'}}></i>
                    @SELOSLAV
                  </a>
                </div>
              </div>

              <form className={styles.contactForm}>
                <div className="mb-6">
                  <label htmlFor="name" className="label">NAME</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input"
                    placeholder="ENTER FULL NAME"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="label">EMAIL</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input"
                    placeholder="ENTER CONTACT EMAIL"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="label">MESSAGE</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="input"
                    placeholder="ENTER TRANSMISSION DATA..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn--primary w-full py-4 text-lg font-bold tracking-widest">
                  SEND TRANSMISSION
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
