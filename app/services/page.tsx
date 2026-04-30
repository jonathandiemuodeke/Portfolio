"use client";

import { useState } from "react";
import Link from "next/link";

type ItemId = "full-stack" | "e-commerce" | "general-it";

export default function ServicesPage() {
  const [openId, setOpenId] = useState<ItemId>("full-stack");

  const toggle = (id: ItemId) => {
    setOpenId((current) => (current === id ? id : id));
  };

  return (
    <section className="section" aria-label="Services" style={{ paddingTop: 40 }}>
      <div className="container">
        <div className="section-header">
          <div className="eyebrow" data-reveal>
            <span className="dot" aria-hidden="true" />
            <span>Services</span>
          </div>
          <h1 className="h1" style={{ fontSize: "clamp(28px, 3.2vw, 44px)" }} data-reveal>
            A clear service menu for websites and IT support
          </h1>
          <p className="lead" data-reveal>
            Expand any item to see what’s included. Built for clarity and practical delivery.
          </p>
        </div>

        <div className="accordion" aria-label="Service accordion">
          <div className="accordion-item" data-accordion-item data-open={openId === "full-stack"}>
            <button
              className="accordion-btn"
              data-accordion-btn
              type="button"
              onClick={() => toggle("full-stack")}
            >
              <span>
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </svg>
                </span>
                Full stack web development
              </span>
              <svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="accordion-content">
              <div className="accordion-content-inner">
                <p style={{ margin: "0 0 10px" }}>
                  I build responsive sites with thoughtful UI patterns, clean structure, and interactive functionality.
                </p>
                <ul>
                  <li>Landing pages and portfolio sites</li>
                  <li>Interactive dashboards and filtered content</li>
                  <li>Contact forms and practical integrations</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item" data-accordion-item data-open={openId === "e-commerce"}>
            <button className="accordion-btn" data-accordion-btn type="button" onClick={() => toggle("e-commerce")}>
              <span>
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <path d="M3 6h18" />
                    <path d="M9 12h6" />
                  </svg>
                </span>
                E-commerce development
              </span>
              <svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="accordion-content">
              <div className="accordion-content-inner">
                <p style={{ margin: "0 0 10px" }}>
                  Clean storefront UI designed to help visitors find products quickly and feel confident.
                </p>
                <ul>
                  <li>Product listing and category browsing</li>
                  <li>Conversion-focused product page layout</li>
                  <li>Reusable components you can expand later</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item" data-accordion-item data-open={openId === "general-it"}>
            <button className="accordion-btn" data-accordion-btn type="button" onClick={() => toggle("general-it")}>
              <span>
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v4" />
                    <path d="M12 18v4" />
                    <path d="M4.93 4.93 7.76 7.76" />
                    <path d="M16.24 16.24 19.07 19.07" />
                    <path d="M2 12h4" />
                    <path d="M18 12h4" />
                    <path d="M4.93 19.07 7.76 16.24" />
                    <path d="M16.24 7.76 19.07 4.93" />
                    <circle cx="12" cy="12" r="5" />
                  </svg>
                </span>
                General IT service
              </span>
              <svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="accordion-content">
              <div className="accordion-content-inner">
                <p style={{ margin: "0 0 10px" }}>Practical, understandable support for everyday tech issues and setups.</p>
                <ul>
                  <li>Troubleshooting and device setup guidance</li>
                  <li>Workflow improvement advice</li>
                  <li>Quick checkups and recommendations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-2" style={{ marginTop: 22 }}>
          <div className="card" data-reveal>
            <h3>How we work</h3>
            <p className="muted" style={{ margin: 0, lineHeight: 1.7, fontWeight: 650 }}>
              Clear steps: discuss needs, propose a structure, build responsive UI, then refine and deliver.
            </p>
            <div className="tag-row">
              <span className="tag">Fast feedback</span>
              <span className="tag">Clean design</span>
              <span className="tag">Responsive delivery</span>
            </div>
          </div>
          <div className="card" data-reveal>
            <h3>Get a quick quote</h3>
            <p className="muted" style={{ margin: 0, lineHeight: 1.7, fontWeight: 650 }}>
              Send a message with what you need. You will receive next steps and an estimate.
            </p>
            <div style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link className="btn btn-accent" href="/contact">
                Contact
              </Link>
              <Link className="btn" href="/projects">
                See examples
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

