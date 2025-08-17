'use client';

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
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={`display ${styles.heroTitle}`}>
                Building Tomorrow's
                <br />
                Digital Solutions
              </h1>
              <p className={styles.heroSubtitle}>
                Entrepreneur & Full-Stack Developer with proven expertise in scaling 
                businesses from concept to deployment across e-commerce, AI applications, 
                and innovative web technologies.
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
                  <div className={styles.portfolioImage}>
                    <div className={styles.placeholderImage}>Selo Olive</div>
                  </div>
                </a>
                <h3 className="h3 mb-2">Selo Olive E-Commerce</h3>
                <p className="caption text-gray mb-3">
                  Import/Export • Health Regulations • Digital Marketing
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
                <a href="https://www.zoodio.ai" target="_blank" rel="noopener noreferrer" className={styles.portfolioImageLink}>
                  <div className={styles.portfolioImage}>
                    <div className={styles.placeholderImage}>Zoodio.ai</div>
                  </div>
                </a>
                <h3 className="h3 mb-2">Zoodio AI Platform</h3>
                <p className="caption text-gray mb-3">
                  OpenAI • Gemini API • Full-Stack • Copywriting
                </p>
                <p>
                  Developed the entire full-stack application using cloud-based databases 
                  and AI APIs, with heavy attention to front-end design, UI/UX, and 
                  optimization of user subscriptions to maximize customer retention 
                  and engagement.
                </p>
                <a href="https://www.zoodio.ai" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  Explore Platform →
                </a>
              </div>
              
                            <div className={`card ${styles.portfolioCard}`}>
                <a href="https://www.brothandbullets.com" target="_blank" rel="noopener noreferrer" className={styles.portfolioImageLink}>
                  <div className={styles.portfolioImage}>
                    <div className={styles.placeholderImage}>Broth & Bullets</div>
                  </div>
                </a>
                <h3 className="h3 mb-2">Real-Time Multiplayer Survival Game</h3>
                <p className="caption text-gray mb-3">
                  SpacetimeDB • React • PostgreSQL • Vite
                </p>
                <p>
                  Multiplayer survival game with real-time voice assistant that provides 
                  contextual in-game guidance. Built with custom authentication server 
                  and SpacetimeDB for real-time multiplayer state management, deployed 
                  to production on Railway.
                </p>
                <a href="https://www.brothandbullets.com" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  Play Game →
                </a>
              </div>

              {/* Second Row */}
              <div className={`card ${styles.portfolioCard}`}>
                <a href="https://travel-guide-omega-nine.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.portfolioImageLink}>
                  <div className={styles.portfolioImage}>
                    <div className={styles.placeholderImage}>Croatia Travel Guide</div>
                  </div>
                </a>
                <h3 className="h3 mb-2">Single-Day MVP: Croatia Travel Guide</h3>
                <p className="caption text-gray mb-3">
                  AI-Powered • Next.js • Rapid Prototyping • Vercel
                </p>
                <p>
                  Example of rapid MVP development - built in a single day using AI to 
                  create personalized activity guides for any city in Croatia. 
                  I wanted to see how quickly I could validate a product concept and 
                  deliver a functional prototype using the best that AI tools have to offer.
                </p>
                <a href="https://travel-guide-omega-nine.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  Try Guide →
                </a>
              </div>

              <div className={`card ${styles.portfolioCard}`}>
                <a href="https://www.babushkabook.com" target="_blank" rel="noopener noreferrer" className={styles.portfolioImageLink}>
                  <div className={styles.portfolioImage}>
                    <div className={styles.placeholderImage}>Babushka Book</div>
                  </div>
                </a>
                <h3 className="h3 mb-2">Babushka Book & Universe</h3>
                <p className="caption text-gray mb-3">
                  Creative Writing • Web Development • World Building
                </p>
                <p>
                  Yes, I wrote an entire book! This was before AI was any good, 
                  so you know hopefully you can trust that I wrote it myself! 
                  Also created the website that showcases the book and the 
                  universe in which it is set.
                </p>
                <a href="https://www.babushkabook.com" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  Explore Universe →
                </a>
              </div>

              <div className={`card ${styles.portfolioCard} ${styles.comingSoon}`}>
                <div className={styles.portfolioImage}>
                  <div className={styles.placeholderImage}>Your Project?</div>
                </div>
                <h3 className="h3 mb-2">Let's Collaborate</h3>
                <p className="caption text-gray mb-3">
                  Partnership • Innovation • Growth
                </p>
                <p>
                  Have an idea that needs technical expertise and business acumen? 
                  Let's discuss how we can bring your vision to life with the right 
                  combination of strategy and execution.
                </p>
                <button 
                  className="btn"
                  onClick={() => scrollToSection('contact')}
                >
                  Get Started →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`${styles.section} ${styles.about}`}>
          <div className="container">
            <div className={styles.aboutContent}>
              <div className={styles.aboutText}>
                <h2 className="h1 mb-6">About</h2>
                <p className="mb-4">
                  I'm an entrepreneur and full-stack developer who thrives at the 
                  intersection of business strategy and cutting-edge technology. 
                  My journey spans from establishing international trade operations 
                  to deploying AI-powered applications that push the boundaries of 
                  what's possible.
                </p>
                <p className="mb-4">
                  From navigating complex health code regulations and licensing for 
                  e-commerce ventures to architecting real-time gaming platforms with 
                  advanced AI integration, I bring a unique perspective that combines 
                  entrepreneurial vision with technical execution.
                </p>
                <p>
                  My approach is rooted in rapid adaptation, continuous learning, 
                  and the relentless pursuit of innovative solutions. Whether it's 
                  scaling businesses across international markets or implementing 
                  sophisticated AI systems, I deliver results that matter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className={`${styles.section} ${styles.expertise}`}>
          <div className="container">
            <h2 className="h1 text-center mb-8">Core Expertise</h2>
            
            <div className={styles.expertiseGrid}>
              {/* Technical Skills */}
              <div className={styles.expertiseCategory}>
                <h3 className="h3 mb-4">Technical Stack</h3>
                <div className={styles.skillsList}>
                  <span className={styles.skill}>JavaScript & React</span>
                  <span className={styles.skill}>TypeScript</span>
                  <span className={styles.skill}>Node.js</span>
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
                  <span className={styles.skill}>MongoDB</span>
                  <span className={styles.skill}>SpacetimeDB</span>
                  <span className={styles.skill}>Parse (Open Source)</span>
                  <span className={styles.skill}>REST APIs</span>
                  <span className={styles.skill}>GraphQL</span>
                  <span className={styles.skill}>API Testing</span>
                </div>
              </div>

              {/* AI & Integration */}
              <div className={styles.expertiseCategory}>
                <h3 className="h3 mb-4">AI & Integration</h3>
                <div className={styles.skillsList}>
                  <span className={styles.skill}>OpenAI APIs</span>
                  <span className={styles.skill}>Gemini APIs</span>
                  <span className={styles.skill}>ElevenLabs APIs</span>
                  <span className={styles.skill}>Advanced Prompting</span>
                  <span className={styles.skill}>Cursor IDE</span>
                  <span className={styles.skill}>AI-Readable Documentation</span>
                  <span className={styles.skill}>Rule Files & Context Optimization</span>
                </div>
              </div>

              {/* Business & Strategy */}
              <div className={styles.expertiseCategory}>
                <h3 className="h3 mb-4">Business & Strategy</h3>
                <div className={styles.skillsList}>
                  <span className={styles.skill}>Product Development</span>
                  <span className={styles.skill}>Business Strategy</span>
                  <span className={styles.skill}>Market Analysis</span>
                  <span className={styles.skill}>Competitive Analysis</span>
                  <span className={styles.skill}>Strategic Copywriting</span>
                  <span className={styles.skill}>Customer Acquisition</span>
                  <span className={styles.skill}>Outsourcing Management</span>
                  <span className={styles.skill}>MVP Development</span>
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
                  <span className={styles.skill}>Legal Documentation</span>
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
                <h2 className="h1 mb-6">Let's Build Something Extraordinary</h2>
                <p className="mb-6">
                  Ready to transform your vision into reality? Whether you need 
                  a full-stack application, business strategy consultation, or 
                  innovative AI integration, let's discuss how we can push the 
                  boundaries together.
                </p>
                <p className="mb-6 text-gray">
                  <strong>[EU] [HR] [CA] Available for immediate work in the EU and Canada</strong>
                  <br />
                  I grew up in Canada but speak conversational Croatian and can understand almost everything.
                  <br />
                  <em>Currently waiting for my son to be born so he can teach me better Croatian! 👶</em>
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
                      * Yeah, I know SO is basically dead, but here's some proof I knew a thing or two before OpenAI called all of our technical abilities into question 😅
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
