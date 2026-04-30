import Link from "next/link";

export default function ThankYouPage() {
  return (
    <section className="section" style={{ paddingTop: 40 }} aria-label="Thank you">
      <div className="container">
        <div className="card" style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }} data-reveal>
          <div className="eyebrow" style={{ margin: "0 auto" }}>
            <span className="dot" aria-hidden="true" />
            <span>Message received</span>
          </div>

          <h1 className="h1" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", marginTop: 16 }}>
            Thank you for contacting JB-tech
          </h1>

          <p className="lead" style={{ maxWidth: 560, margin: "0 auto" }}>
            Your request has been submitted successfully. I typically reply within 24 hours.
          </p>

          <div className="tag-row" style={{ justifyContent: "center", marginTop: 16 }}>
            <span className="tag">Response in 24h</span>
            <span className="tag">Professional follow-up</span>
          </div>

          <div style={{ marginTop: 20, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <Link className="btn btn-primary" href="/projects">
              Explore projects
            </Link>
            <a
              className="btn btn-accent"
              href="https://wa.me/40759092013?text=Hello%20JB-tech%2C%20I%20just%20submitted%20the%20contact%20form."
              target="_blank"
              rel="noreferrer"
            >
              Follow up on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

