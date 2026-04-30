import Link from "next/link";
import HeroCanvas from "./components/HeroCanvas";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <HeroCanvas />
        <div className="hero-overlay" aria-hidden="true" />

        <div className="container hero-grid">
          <div className="hero-content">
            <div className="eyebrow" data-reveal>
              <span className="dot" aria-hidden="true" />
              <span>Full stack + IT support</span>
            </div>

            <h1 className="h1" data-reveal>
              JB-tech builds fast, modern websites with{" "}
              <span style={{ color: "var(--accent)" }}>smart functionality</span>.
            </h1>

            <p className="lead" data-reveal>
              From responsive web apps to e-commerce and practical general IT services, I deliver clean work that looks
              great and performs well.
            </p>

            <div className="hero-actions" data-reveal>
              <Link className="btn btn-primary" href="/projects">
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v7" />
                    <path d="M7 17h10" />
                    <path d="M9 20h6" />
                  </svg>
                </span>
                View Projects
              </Link>

              <Link className="btn btn-accent" href="/contact">
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                  </svg>
                </span>
                Contact JB-tech
              </Link>

              <Link className="btn" href="/services" style={{ background: "var(--panel-2)" }}>
                Explore Services
              </Link>
            </div>

            <ul className="list">
              <li className="feature" data-reveal>
                <span className="badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <p>Responsive design across devices (mobile, tablet, desktop)</p>
              </li>
              <li className="feature" data-reveal>
                <span className="badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 1v22" />
                    <path d="M17 6l-5-5-5 5" />
                    <path d="M7 18l5 5 5-5" />
                  </svg>
                </span>
                <p>Rich UI features: filtering, modals, accordions, and validation</p>
              </li>
              <li className="feature" data-reveal>
                <span className="badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 6v6l4 2" />
                    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </span>
                <p>Clean performance-focused layouts you can maintain</p>
              </li>
            </ul>
          </div>

          <aside className="hero-card" data-reveal>
            <h2 style={{ margin: "0 0 10px", letterSpacing: "-0.01em" }}>Quick snapshot</h2>
            <p className="muted" style={{ margin: "0 0 16px", fontWeight: 650, lineHeight: 1.6 }}>
              A practical portfolio built for real clients and real results.
            </p>

            <div className="hero-stats" aria-label="Highlights">
              <div className="stat">
                <strong style={{ color: "var(--primary-2)" }}>IT-ready UI</strong>
                <span>Modern layout + UX</span>
              </div>
              <div className="stat">
                <strong style={{ color: "var(--accent)" }}>Blue / Gold</strong>
                <span>Dark + Light themes</span>
              </div>
              <div className="stat">
                <strong>3 service lines</strong>
                <span>Web + E-com + IT</span>
              </div>
              <div className="stat">
                <strong>Responsive</strong>
                <span>All screen sizes</span>
              </div>
            </div>

            <div className="divider" />

            <Link className="btn btn-primary" href="/services" style={{ width: "100%", justifyContent: "center" }}>
              See my service menu
            </Link>
          </aside>
        </div>
      </section>

      <section className="section" aria-label="Services preview">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow" data-reveal>
              <span className="dot" aria-hidden="true" />
              <span>Services</span>
            </div>
            <h2 style={{ margin: "14px 0 10px", fontSize: "clamp(22px, 2.6vw, 30px)", letterSpacing: "-0.01em" }} data-reveal>
              What JB-tech can help you with
            </h2>
            <p className="lead" data-reveal>
              Clear solutions for clients who want a dependable website and support that actually works.
            </p>
          </div>

          <div className="grid-3">
            <article className="card" data-reveal>
              <h3>Full stack web development</h3>
              <p className="muted" style={{ margin: 0, lineHeight: 1.7, fontWeight: 650 }}>
                From landing pages to interactive dashboards. Built with accessibility, responsiveness, and clean UI patterns.
              </p>
              <div className="tag-row">
                <span className="tag">Responsive UI</span>
                <span className="tag">Performance</span>
                <span className="tag">Clean structure</span>
              </div>
            </article>

            <article className="card" data-reveal>
              <h3>E-commerce development</h3>
              <p className="muted" style={{ margin: 0, lineHeight: 1.7, fontWeight: 650 }}>
                Product pages and smooth browsing experiences. Ideal for small businesses and launches.
              </p>
              <div className="tag-row">
                <span className="tag">Product UI</span>
                <span className="tag">Checkout-ready</span>
                <span className="tag">Conversion UX</span>
              </div>
            </article>

            <article className="card" data-reveal>
              <h3>General IT service</h3>
              <p className="muted" style={{ margin: 0, lineHeight: 1.7, fontWeight: 650 }}>
                Practical support like troubleshooting, setup, and improving workflows. Help that’s quick and understandable.
              </p>
              <div className="tag-row">
                <span className="tag">Troubleshooting</span>
                <span className="tag">Setup support</span>
                <span className="tag">Advice</span>
              </div>
            </article>
          </div>

          <div style={{ marginTop: 20, display: "flex", gap: 14, flexWrap: "wrap" }} data-reveal>
            <Link className="btn btn-accent" href="/services">
              Open full service details
            </Link>
            <Link className="btn" href="/contact">
              Ask a question
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Projects preview">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow" data-reveal>
              <span className="dot" aria-hidden="true" />
              <span>Projects</span>
            </div>
            <h2 style={{ margin: "14px 0 10px", fontSize: "clamp(22px, 2.6vw, 30px)", letterSpacing: "-0.01em" }} data-reveal>
              Cool, non-complex projects you can edit later
            </h2>
            <p className="lead" data-reveal>
              These examples are designed to look strong and demonstrate features without being too heavy.
            </p>
          </div>

          <div className="grid-3">
            <Link className="card project-card" data-reveal href="/projects">
              <h3>IT Helpdesk Dashboard UI</h3>
              <p className="muted" style={{ margin: 0, lineHeight: 1.7, fontWeight: 650 }}>
                Ticket overview, status filters, and a clean layout for technicians.
              </p>
              <div className="meta">
                <span className="meta-item">General IT</span>
                <span className="meta-item">Dashboard</span>
              </div>
            </Link>

            <Link className="card project-card" data-reveal href="/projects">
              <h3>E-commerce Storefront Concept</h3>
              <p className="muted" style={{ margin: 0, lineHeight: 1.7, fontWeight: 650 }}>
                Product grid, category filtering, and conversion-friendly UI details.
              </p>
              <div className="meta">
                <span className="meta-item">E-commerce</span>
                <span className="meta-item">UI/UX</span>
              </div>
            </Link>

            <Link className="card project-card" data-reveal href="/projects">
              <h3>Security Audit Checklist Tool</h3>
              <p className="muted" style={{ margin: 0, lineHeight: 1.7, fontWeight: 650 }}>
                Checklist flow with documentation-friendly structure and steps you can reuse.
              </p>
              <div className="meta">
                <span className="meta-item">Security</span>
                <span className="meta-item">Process</span>
              </div>
            </Link>
          </div>

          <div style={{ marginTop: 20, display: "flex", gap: 14, flexWrap: "wrap" }} data-reveal>
            <Link className="btn btn-primary" href="/projects">
              Browse and filter all projects
            </Link>
            <Link className="btn" href="/blog">
              Read JB-tech blog
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-label="About JB-tech" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="section-header">
            <div className="eyebrow" data-reveal>
              <span className="dot" aria-hidden="true" />
              <span>About JB-tech</span>
            </div>
            <h2
              className="h1"
              style={{ fontSize: "clamp(26px, 3vw, 40px)", marginTop: 14 }}
              data-reveal
            >
              Websites + IT support, built with clarity
            </h2>
            <p className="lead" data-reveal>
              I’m JB-tech: I build responsive full stack websites, help with e-commerce UI that converts, and provide
              practical general IT services. My goal is simple: deliver work that looks professional and behaves reliably.
            </p>
          </div>

          <div className="grid-2">
            <article className="card" data-reveal>
              <h3 style={{ marginTop: 0 }}>What you can expect</h3>
              <ul className="list" style={{ marginTop: 10 }}>
                <li className="feature">
                  <span className="badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <p>Clear structure, so your site stays easy to update later.</p>
                </li>
                <li className="feature">
                  <span className="badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                    </svg>
                  </span>
                  <p>Helpful UX: filters, forms, and interactions that feel smooth.</p>
                </li>
                <li className="feature">
                  <span className="badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </span>
                  <p>Responsive design across mobile, tablet, and desktop.</p>
                </li>
              </ul>
            </article>

            <article className="card" data-reveal>
              <h3 style={{ marginTop: 0 }}>Skills & focus</h3>
              <p className="muted" style={{ marginTop: 0, lineHeight: 1.7, fontWeight: 650 }}>
                Here are the areas I’m most comfortable building and improving.
              </p>
              <div className="tag-row" style={{ marginTop: 14 }}>
                <span className="tag">Full stack development</span>
                <span className="tag">E-commerce UI</span>
                <span className="tag">IT troubleshooting</span>
                <span className="tag">Responsive layout</span>
                <span className="tag">Clean components</span>
                <span className="tag">Form validation</span>
              </div>

              <div className="divider" />

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link className="btn btn-accent" href="/projects">
                  View projects
                </Link>
                <Link className="btn" href="/contact">
                  Work with JB-tech
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Contact CTA" style={{ paddingTop: 36 }}>
        <div className="container">
          <div className="card" data-reveal style={{ padding: 22 }}>
            <div className="grid-2" style={{ alignItems: "center" }}>
              <div>
                <div className="eyebrow">
                  <span className="dot" aria-hidden="true" />
                  <span>Let’s talk</span>
                </div>
                <h2 style={{ margin: "14px 0 10px", letterSpacing: "-0.01em" }}>Ready to build or fix something?</h2>
                <p className="lead" style={{ marginTop: 0 }}>
                  Send a message and I’ll get back with next steps and an estimate.
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: 14, flexWrap: "wrap" }}>
                <Link className="btn btn-accent" href="/contact">
                  Contact JB-tech
                </Link>
                <Link className="btn btn-primary" href="/services">
                  See services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

