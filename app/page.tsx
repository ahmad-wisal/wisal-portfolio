const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/ahmad-wisal/" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/wisal-ahmad-17aab824/",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="site-container header-inner">
          <a className="wordmark" href="#" aria-label="Wisal Ahmad home">
            WA<span aria-hidden="true">.</span>
          </a>

          <nav aria-label="Primary navigation">
            <ul className="nav-list">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a className="nav-link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero-section" aria-labelledby="hero-heading">
          <div className="site-container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="status-dot" aria-hidden="true" />
                Islamabad / Rawalpindi, Pakistan
              </p>
              <h1 id="hero-heading">
                Full-Stack Developer
                <span className="hero-accent"> &amp; AI Integration</span>
              </h1>
              <p className="hero-intro">
                I build thoughtful digital experiences where dependable
                engineering and intelligent interfaces meet.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  Explore the work <span aria-hidden="true">↘</span>
                </a>
                <a className="text-link" href="#contact">
                  Let&apos;s connect <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className="hero-signal" aria-hidden="true">
              <div className="signal-ring signal-ring-outer" />
              <div className="signal-ring signal-ring-inner" />
              <div className="signal-core">WA</div>
              <span className="signal-label signal-label-top">BUILD / 01</span>
              <span className="signal-label signal-label-bottom">
                IDEAS → SYSTEMS
              </span>
            </div>
          </div>
          <div className="hero-rule site-container" aria-hidden="true">
            <span>01</span>
            <span className="rule-line" />
            <span>Scroll to discover</span>
          </div>
        </section>

        <section className="content-section" id="work" aria-labelledby="work-heading">
          <div className="site-container">
            <div className="section-heading">
              <p className="eyebrow">01 / Selected work</p>
              <h2 id="work-heading">Proof over promises.</h2>
            </div>
            <div className="empty-panel">
              <p className="panel-kicker">Portfolio in progress</p>
              <p>
                Project details will be published here once their public
                content has been verified and approved.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section content-section-muted" id="about" aria-labelledby="about-heading">
          <div className="site-container split-section">
            <div className="section-heading">
              <p className="eyebrow">02 / Perspective</p>
              <h2 id="about-heading">Built with clarity.</h2>
            </div>
            <p className="section-lede">
              A developer portfolio should make the work easy to understand,
              the details easy to trust, and the next step easy to find.
            </p>
          </div>
        </section>

        <section className="content-section contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="site-container contact-panel">
            <div>
              <p className="eyebrow">03 / Connect</p>
              <h2 id="contact-heading">Have something worth building?</h2>
            </div>
            <div className="contact-links">
              <p>Find me on</p>
              {socialLinks.map((link) => (
                <a className="contact-link" key={link.href} href={link.href}>
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-container footer-inner">
          <p>© Wisal Ahmad</p>
          <p>Full-Stack Developer <span aria-hidden="true">·</span> AI Integration</p>
        </div>
      </footer>
    </>
  );
}
