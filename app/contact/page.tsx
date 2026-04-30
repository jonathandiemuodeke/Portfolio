"use client";

import { useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  service: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    service: "Full stack web development",
    message: "",
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const isValidEmail = useMemo(() => {
    return (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }, []);

  const validate = () => {
    const next: { name?: string; email?: string; message?: string } = {};
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name) next.name = "Please enter your name.";
    else if (name.length < 2) next.name = "Your name looks too short.";

    if (!email) next.email = "Please enter your email.";
    else if (!isValidEmail(email)) next.email = "Please enter a valid email address.";

    if (!message) next.message = "Please write a message.";
    else if (message.length < 10) next.message = "Your message should be at least 10 characters.";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  return (
    <section className="section" style={{ paddingTop: 40 }} aria-label="Contact">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow" data-reveal>
            <span className="dot" aria-hidden="true" />
            <span>Contact</span>
          </div>
          <h1 className="h1" style={{ fontSize: "clamp(28px, 3.2vw, 44px)" }} data-reveal>
            Send a message to JB-tech
          </h1>
          <p className="lead" data-reveal>
            Use the form below. It submits via Netlify Forms on the free hosting plan.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: "start" }}>
          <div className="card" data-reveal>
            <h3 style={{ marginTop: 0 }}>What to include</h3>
            <p className="muted" style={{ margin: 0, lineHeight: 1.7, fontWeight: 650 }}>
              The better your details, the faster I can respond with next steps and an estimate.
            </p>
            <div className="divider" />
            <ul className="list" style={{ marginTop: 0 }}>
              <li className="feature">
                <span className="badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                  </svg>
                </span>
                <p>Project type: full stack, e-commerce, or general IT</p>
              </li>
              <li className="feature">
                <span className="badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-2 2-2-2H2" />
                    <path d="M6 4h12" />
                    <path d="M8 20h8" />
                  </svg>
                </span>
                <p>Goals: what success looks like for you</p>
              </li>
              <li className="feature">
                <span className="badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </span>
                <p>Timeline: when you’d like to start</p>
              </li>
            </ul>
          </div>

          <div className="card" data-reveal>
            <form
              className="form"
              name="contact"
              method="post"
              data-netlify="true"
              onSubmit={(e) => {
                if (!validate()) e.preventDefault();
              }}
            >
              <input type="hidden" name="form-name" value="contact" />

              {/* Honeypot for bots */}
              <div style={{ display: "none" }}>
                <label>
                  Don’t fill this out:
                  <input name="bot-field" />
                </label>
              </div>

              <div className="field">
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
                  className="input"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                  required
                />
                <div className={`error ${errors.name ? "is-visible" : ""}`} role="alert">
                  {errors.name || ""}
                </div>
              </div>

              <div className="field">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  className="input"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                  required
                />
                <div className={`error ${errors.email ? "is-visible" : ""}`} role="alert">
                  {errors.email || ""}
                </div>
              </div>

              <div className="field">
                <label htmlFor="service">What do you need?</label>
                <select
                  id="service"
                  className="select"
                  name="service"
                  value={form.service}
                  onChange={(e) => setForm((s) => ({ ...s, service: e.target.value }))}
                >
                  <option value="Full stack web development">Full stack web development</option>
                  <option value="E-commerce development">E-commerce development</option>
                  <option value="General IT service">General IT service</option>
                </select>
                <div className="helper">Pick one to help me route your message.</div>
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                  className="input"
                  required
                />
                <div className={`error ${errors.message ? "is-visible" : ""}`} role="alert">
                  {errors.message || ""}
                </div>
                <div className="helper">Minimum 10 characters. Include any links or requirements.</div>
              </div>

              <button className="btn btn-accent" type="submit" style={{ justifyContent: "center" }}>
                Send message
              </button>

              <div className="muted helper" style={{ marginTop: 6 }}>
                By sending, you agree to be contacted about your request.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

