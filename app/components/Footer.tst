export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-brand-block">
          <div className="brand footer-brand" style={{ gap: 10 }}>
            <span className="brand-badge" aria-hidden="true" style={{ width: 30, height: 30 }} />
            <span style={{ fontWeight: 900 }}>JB-tech</span>
          </div>
          <p className="muted" style={{ margin: "10px 0 0", lineHeight: 1.7, fontWeight: 650 }}>
            Full stack websites, e-commerce builds, and general IT support.
          </p>
          <div className="muted" style={{ marginTop: 12, fontWeight: 700, fontSize: 13 }}>
            © {year} JB-tech. All rights reserved.
          </div>
        </div>

        <div className="footer-links" aria-label="Footer links">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
          <a href="/blog">Blog</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

