'use client';

import Image from 'next/image';
import Navigation from './components/Navigation/Navigation';
import styles from './page.module.css';

export default function Home() {
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
          {/* Background Images - Desktop Only */}
          <div className={styles.heroBackgroundImages}>
            <Image
              src="/business-icon.png"
              alt=""
              className={styles.heroImageLeft}
              width={400}
              height={400}
            />
            <Image
              src="/hero_image_combined.png"
              alt=""
              className={styles.heroImageCombined}
              width={280}
              height={200}
            />
        <Image
              src="/technology-icon.png"
              alt=""
              className={styles.heroImageRight}
              width={400}
              height={400}
            />
            <Image
              src="/bridge-icon.png"
              alt=""
              className={styles.heroImageTop}
              width={250}
              height={250}
            />
          </div>
          
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={`display ${styles.heroTitle}`}>
                Bridging Business
                <br />
                & Technology
              </h1>
              <p className={styles.heroSubtitle}>
                Entrepreneur & Full-Stack Developer with proven expertise in scaling
                businesses from concept to deployment across e-commerce
                and the web.
              </p>
              <div className={styles.heroActions}>
                <button
                  className="btn btn--primary"
                  onClick={() => scrollToSection('portfolio')}
                >
                  View Work
                </button>
                <button
                  className="btn"
                  onClick={() => scrollToSection('contact')}
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className={`${styles.section} ${styles.portfolio}`}>
          <div className="container">
            <h2 className="h1 text-center mb-8">Featured Projects</h2>
            <div className={`grid grid-3 ${styles.portfolioGrid}`}>
              <div className={`card ${styles.portfolioCard}`}>
                <a href="https://www.seloolive.com" target="_blank" rel="noopener noreferrer" className={styles.portfolioImageLink}>
                  <div className={styles.portfolioImage} data-has-image="true">
                    <Image
                      src="/selo.png"
                      alt="Selo Olive E-Commerce Platform"
                      className={styles.portfolioImageBg}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <div className={styles.portfolioOverlay}></div>
                    <div className={styles.portfolioText}>
                      <div className={styles.placeholderImage}>Selo Olive</div>
                    </div>
                  </div>
                </a>
                <h3 className="h3 mb-2">Selo Olive E-Commerce</h3>
                <p className="caption text-gray mb-3">
                  International Trade • Regulatory Compliance • Digital Marketing
                </p>
                <p>
                  Full-scale e-commerce platform specializing in olive oil imports.
                  Managed regulatory compliance, licensing, and business establishment
                  across international markets. Executed digital marketing campaigns
                  across TikTok, Instagram, and Twitter to build brand awareness
                  and drive customer acquisition.
                </p>
                <a href="https://www.seloolive.com" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  Visit Site →
                </a>
              </div>

              <div className={`card ${styles.portfolioCard}`}>
                <a href="https://dev.profind.shop/products/UCC28C45DR?manufacturerId=296" target="_blank" rel="noopener noreferrer" className={styles.portfolioImageLink}>
                  <div className={styles.portfolioImage} data-has-image="true">
                    <Image 
                      src="/profind.png" 
                      alt="Profind Manufacturing Platform" 
                      className={styles.portfolioImageBg}
                      fill
                      style={{objectFit: 'cover'}}
                    />
                    <div className={styles.portfolioOverlay}></div>
                    <div className={styles.portfolioText}>
                      <div className={styles.placeholderImage}>Profind</div>
                    </div>
                  </div>
                </a>
                <h3 className="h3 mb-2">Profind Automative Parts Catalog</h3>
                <p className="caption text-gray mb-3">
                  Integration Management • Front-End Development • Enterprise APIs • UI/UX
                </p>
                <p>
                  AI-powered automotive parts catalog similar to McMaster-Carr, connecting buyers 
                  to suppliers including Bosch, Continental AG, and Magna International. Partnered with Carleton 
                  University&apos;s Automotive Engineering department to research component optimization. 
                  Managed integration of existing APIs and AI matching systems (RAG + LLMs) while 
                  developing the front-end interface for intelligent parts discovery and sourcing.
                </p>
                <a href="https://dev.profind.shop/products/UCC28C45DR?manufacturerId=296" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  Explore Platform →
                </a>
              </div>

              <div className={`card ${styles.portfolioCard}`}>
                <a href="https://www.zoodio.ai" target="_blank" rel="noopener noreferrer" className={styles.portfolioImageLink}>
                  <div className={styles.portfolioImage} data-has-image="true">
                    <Image
                      src="/zoodio.png"
                      alt="Zoodio AI Image Converter"
                      className={styles.portfolioImageBg}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <div className={styles.portfolioOverlay}></div>
                    <div className={styles.portfolioText}>
                      <div className={styles.placeholderImage}>Zoodio.ai</div>
                    </div>
                  </div>
                </a>
                <h3 className="h3 mb-2">Zoodio AI Image Converter</h3>
                <p className="caption text-gray mb-3">
                  AI Integration • Google Cloud • Business Strategy • UI/UX
                </p>
                <p>
                  Built the complete application using React front-end with Firebase backend,
                  integrating AI APIs and cloud-based data management.
                  Connected to print-on-demand providers (Printful, Gelato) for automated product
                  fulfillment and Stripe for payment processing. Focused heavily on front-end 
                  design, UI/UX, and optimization of user subscriptions to maximize customer retention.
                </p>
                <a href="https://www.zoodio.ai" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  Explore Platform →
                </a>
              </div>
            </div>

            {/* Experimental Projects Section */}
            <div className="text-center mb-6" style={{marginTop: 'var(--space-12)'}}>
              <h3 className="h2 mb-2">Experimental Projects</h3>
              <p className="text-gray" style={{fontSize: 'var(--text-body)', maxWidth: '700px', margin: '0 auto'}}>
                These are projects where I let curiosity drive the process. Sometimes I want to see 
                how quickly I can build something, other times I&apos;m exploring a completely new domain 
                just to understand how it works.
              </p>
            </div>

            <div className={`grid grid-3 ${styles.portfolioGrid}`}>
              <div className={`card ${styles.portfolioCard}`}>
                <a href="https://www.babushkabook.com" target="_blank" rel="noopener noreferrer" className={styles.portfolioImageLink}>
                  <div className={styles.portfolioImage} data-has-image="true">
                    <Image 
                      src="/babushka-book.png" 
                      alt="Babushka Book & Universe" 
                      className={styles.portfolioImageBg}
                      fill
                      style={{objectFit: 'cover'}}
                    />
                    <div className={styles.portfolioOverlay}></div>
                    <div className={styles.portfolioText}>
                      <div className={styles.placeholderImage}>Babushka Book</div>
                    </div>
                  </div>
                </a>
                <h3 className="h3 mb-2">Babushka Book & Universe</h3>
                <p className="caption text-gray mb-3">
                  Project Management • Stakeholder Collaboration • Creative Development
                </p>
                <p>
                  Yes, I wrote a book! Published in 2022, working closely
                  with professional developmental editor{' '}
                  <a href="https://nonsensefreeeditor.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                    Kristin McTiernan
                  </a>. Think of it as
                  the ultimate stakeholder management project, getting to know dozens of
                  characters, understanding their motivations, and building a cohesive
                  universe where everything connects.
                </p>
                                <a href="https://www.babushkabook.com" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  Explore Universe →
          </a>
        </div>

              <div className={`card ${styles.portfolioCard}`}>
                <a href="https://www.brothandbullets.com/blog/broth-bullets-alpha-launch" target="_blank" rel="noopener noreferrer" className={styles.portfolioImageLink}>
                  <div className={styles.portfolioImage} data-has-image="true">
          <Image
                      src="/broth-and-bullets.png" 
                      alt="Broth & Bullets Multiplayer Game"
                      className={styles.portfolioImageBg}
                      fill
                      style={{objectFit: 'cover'}}
                    />
                    <div className={styles.portfolioOverlay}></div>
                    <div className={styles.portfolioText}>
                      <div className={styles.placeholderImage}>Broth & Bullets</div>
                    </div>
                  </div>
                </a>
                <h3 className="h3 mb-2">Real-Time Multiplayer Survival Game</h3>
                <p className="caption text-gray mb-3">
                  Real-Time Architecture • SpacetimeDB • React • Railway Hosting
                </p>
                <p>
                  Real-time multiplayer survival game supporting multiple concurrent clients 
                  with synchronized game state. Built with custom authentication server 
                  and SpacetimeDB for real-time multiplayer state management, deployed 
                  to production on Railway with scalable infrastructure.
                </p>
                <a href="https://www.brothandbullets.com/blog/broth-bullets-alpha-launch" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  Read Blog →
                </a>
              </div>

              <div className={`card ${styles.portfolioCard}`}>
                <a href="https://travel-guide-omega-nine.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.portfolioImageLink}>
                  <div className={styles.portfolioImage} data-has-image="true">
          <Image
                      src="/travel-guide.png" 
                      alt="Croatia Day Planner" 
                      className={styles.portfolioImageBg}
                      fill
                      style={{objectFit: 'cover'}}
                    />
                    <div className={styles.portfolioOverlay}></div>
                    <div className={styles.portfolioText}>
                      <div className={styles.placeholderImage}>Croatia Day Planner</div>
                    </div>
                  </div>
                </a>
                <h3 className="h3 mb-2">Single-Day MVP: Croatia Day Planner</h3>
                <p className="caption text-gray mb-3">
                  Rapid Prototyping • AI-Powered • Product Validation • Next.js
                </p>
                <p>
                  Example of rapid MVP development - built in a single day using AI to
                  create personalized activity guides for every major city in Croatia.
                  Developed consistent AI-readable documentation and custom rules files to 
                  maximize output efficiency and ensure quality. I wanted to see how quickly 
                  I could validate a product concept through strategic AI optimization rather 
                  than just prompting.
                </p>
                <a href="https://travel-guide-omega-nine.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  Try Day Planner →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`${styles.section} ${styles.about}`}>
          <div className="container">
            <div className={styles.aboutContent}>
              <div className={styles.aboutText}>
                <h2 className="h1 mb-6">About Me</h2>
                <p className="mb-4">
                  I&apos;m an entrepreneur and full-stack developer who thrives at the
                  intersection of business strategy and cutting-edge technology.
                  My journey spans from establishing international trade operations
                  to deploying AI-powered applications that push the boundaries of
                  what&apos;s possible.
                </p>
                <p className="mb-4">
                  From navigating complex health code regulations and licensing for
                  e-commerce ventures to architecting real-time gaming platforms with
                  advanced AI integration, I bring a unique perspective that combines
                  entrepreneurial vision with technical execution.
                </p>
                <p>
                  My approach is rooted in rapid adaptation, continuous learning,
                  and the relentless pursuit of innovative solutions. Whether it&apos;s
                  scaling businesses across international markets or implementing
                  sophisticated AI systems, I deliver results that matter.
                </p>
                <p>
                  <span style={{textDecoration: 'line-through', opacity: 0.6}}>
                    Croatian national team football player
                  </span> • Business strategist • Tech builder • Problem solver
                </p>
              </div>
              <div className={styles.aboutImage}>
                <div className={styles.profileImage}>
          <Image
                    src="/me.png"
                    alt="Martin Erlic - Entrepreneur & Full-Stack Developer"
                    className={styles.profilePhoto}
                    width={280}
                    height={280}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className={`${styles.section} ${styles.expertise}`}>
          <div className="container">
            <h2 className="h1 text-center mb-8">Core Expertise</h2>

            <div className={styles.expertiseGrid}>
              {/* Business & Strategy */}
              <div className={styles.expertiseCategory}>
                <h3 className="h3 mb-4">Business & Strategy</h3>
                <div className={styles.skillsList}>
                  <span className={styles.skill}>Product Development</span>
                  <span className={styles.skill}>Agile/Scrum Methodologies</span>
                  <span className={styles.skill}>Waterfall Project Management</span>
                  <span className={styles.skill}>Market Analysis</span>
                  <span className={styles.skill}>Competitive Analysis</span>
                  <span className={styles.skill}>Strategic Copywriting</span>
                  <span className={styles.skill}>Customer Acquisition</span>
                  <span className={styles.skill}>Outsourcing Management</span>
                  <span className={styles.skill}>MVP Development</span>
                </div>
              </div>

              {/* AI & Integration */}
              <div className={styles.expertiseCategory}>
                <h3 className="h3 mb-4">AI & Integration</h3>
                <div className={styles.skillsList}>
                  <span className={styles.skill}>OpenAI APIs</span>
                  <span className={styles.skill}>Gemini APIs</span>
                  <span className={styles.skill}>ElevenLabs APIs</span>
                  <span className={styles.skill}>Cursor IDE</span>
                  <span className={styles.skill}>AI-Readable Documentation</span>
                  <span className={styles.skill}>Rule Files & Context Optimization</span>
                  <span className={styles.skill}>RAG</span>
                  <span className={styles.skill}>LLMs</span>
                </div>
              </div>

              {/* Technical Skills */}
              <div className={styles.expertiseCategory}>
                <h3 className="h3 mb-4">Technical Stack</h3>
                <div className={styles.skillsList}>
                  <span className={styles.skill}>JavaScript</span>
                  <span className={styles.skill}>TypeScript</span>
                  <span className={styles.skill}>React</span>
                  <span className={styles.skill}>HTML/CSS</span>
                  <span className={styles.skill}>Git</span>
                  <span className={styles.skill}>Node.js</span>
                  <span className={styles.skill}>Ruby on Rails</span>
                  <span className={styles.skill}>Python</span>
                  <span className={styles.skill}>Java</span>
                  <span className={styles.skill}>Kotlin</span>
                  <span className={styles.skill}>Android</span>
                </div>
              </div>

              {/* Cloud & Deployment */}
              <div className={styles.expertiseCategory}>
                <h3 className="h3 mb-4">Cloud & Deployment</h3>
                <div className={styles.skillsList}>
                  <span className={styles.skill}>Vercel</span>
                  <span className={styles.skill}>Railway</span>
                  <span className={styles.skill}>Firebase</span>
                  <span className={styles.skill}>Google Cloud</span>
                  <span className={styles.skill}>AWS</span>
                  <span className={styles.skill}>Docker</span>
                  <span className={styles.skill}>CI/CD</span>
                </div>
              </div>

              {/* Databases & APIs */}
              <div className={styles.expertiseCategory}>
                <h3 className="h3 mb-4">Databases & APIs</h3>
                <div className={styles.skillsList}>
                  <span className={styles.skill}>PostgreSQL</span>
                  <span className={styles.skill}>MySQL</span>
                  <span className={styles.skill}>MongoDB</span>
                  <span className={styles.skill}>SpacetimeDB</span>
                  <span className={styles.skill}>Parse (Open Source)</span>
                  <span className={styles.skill}>REST APIs</span>
                  <span className={styles.skill}>GraphQL</span>
                  <span className={styles.skill}>API Testing</span>
                </div>
              </div>

              {/* International Operations */}
              <div className={styles.expertiseCategory}>
                <h3 className="h3 mb-4">International Operations</h3>
                <div className={styles.skillsList}>
                  <span className={styles.skill}>Import/Export</span>
                  <span className={styles.skill}>Regulatory Compliance</span>
                  <span className={styles.skill}>International Licensing</span>
                  <span className={styles.skill}>Health Code Navigation</span>
                  <span className={styles.skill}>Cross-border E-commerce</span>
                  <span className={styles.skill}>Supply Chain Management</span>
                  <span className={styles.skill}>Cross-border Tax Compliance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`${styles.section} ${styles.contact}`}>
          <div className="container">
            <div className={styles.contactContent}>
              <div className={styles.contactInfo}>
                <h2 className="h1 mb-6">Let&apos;s Build Something Extraordinary</h2>
                <p className="mb-6">
                  Ready to transform your vision into reality? Whether you need
                  a full-stack application, business strategy consultation, or
                  innovative AI integration, let&apos;s discuss how we can push the
                  boundaries together.
                </p>
                <p className="mb-6 text-gray">
                  <strong>[EU] [HR] [CA] Available for immediate work in the EU and Canada</strong>
                  <br />
                  I grew up in Canada but speak conversational Croatian and can understand almost everything.
                  <br />
                  <em>Currently waiting for my son to be born so he can help me! 👶</em>
                </p>
                <div className={styles.contactDetails}>
                  <a href="tel:+385091906361" className={styles.contactLink}>
                    +385 091 906 3613
                  </a>
                  <a href="mailto:martin.erlic@gmail.com" className={styles.contactLink}>
                    martin.erlic@gmail.com
                  </a>
                  <a href="https://github.com/seloslav" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                    GitHub Profile
                  </a>
                  <div className={styles.stackOverflowLink}>
                    <a href="https://stackoverflow.com/users/4077513/martin-erlic" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                      Stack Overflow Profile
                    </a>
                    <p className={`caption text-gray ${styles.stackOverflowNote}`}>
                      * Yeah, I know SO is basically dead, but here&apos;s some proof I knew a thing or two before OpenAI called all of our technical abilities into question 😅
                    </p>
                  </div>
                </div>
              </div>

              <form className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className="caption mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className="caption mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className="caption mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={`input ${styles.textarea}`}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn--primary">
                  Send Message
                </button>
              </form>
            </div>
    </div>
        </section>
      </main>
    </>
  );
}
