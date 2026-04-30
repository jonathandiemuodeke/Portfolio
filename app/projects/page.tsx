"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { Project } from "../lib/projects";
import { projects } from "../lib/projects";

const categoryOptions: Array<{ value: string; label: string }> = [
  { value: "all", label: "All categories" },
  { value: "full stack", label: "Full stack" },
  { value: "e-commerce", label: "E-commerce" },
  { value: "general it", label: "General IT" },
  { value: "security", label: "Security" },
];

const tagPills = ["all", "dashboard", "e-commerce", "security", "ui-ux", "productivity"];

function Modal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-overlay is-open"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-label="Project modal">
        <div className="modal-header">
          <div className="modal-title">{project.title}</div>
          <button className="modal-close" type="button" onClick={onClose} aria-label="Close modal">
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="muted" style={{ marginBottom: 12 }}>
            <strong style={{ color: "var(--text)" }}>Category:</strong> {project.category}
          </div>
          <div style={{ marginBottom: 10 }}>{project.blurb}</div>
          {project.features?.length ? (
            <ul>
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          ) : null}
          <div style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link className="btn btn-accent" href="/contact" style={{ padding: "10px 14px" }}>
              Let me build something like this
            </Link>
            <button className="btn" type="button" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("all");
  const [tag, setTag] = useState("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesQuery = !query || p.title.toLowerCase().includes(query) || p.blurb.toLowerCase().includes(query);
      const matchesCategory = category === "all" || p.category === category;
      const matchesTag = tag === "all" || p.tags.includes(tag);
      return matchesQuery && matchesCategory && matchesTag;
    });
  }, [q, category, tag]);

  return (
    <section className="section" style={{ paddingTop: 40 }} aria-label="Projects">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow" data-reveal>
            <span className="dot" aria-hidden="true" />
            <span>Projects</span>
          </div>
          <h1 className="h1" style={{ fontSize: "clamp(28px, 3.2vw, 44px)" }} data-reveal>
            Browse projects with search and filters
          </h1>
          <p className="lead" data-reveal>
            Click any card to open details. You can edit project text later to match your real work.
          </p>
        </div>

        <div className="toolbar" aria-label="Project filters" data-reveal>
          <div style={{ display: "grid", gap: 10 }}>
            <input
              className="input"
              type="search"
              placeholder="Search projects (e.g., security, dashboard)..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              aria-label="Search projects"
            />
          </div>

          <div style={{ display: "grid", gap: 10 }}>
            <select
              className="select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              aria-label="Category filter"
            >
              {categoryOptions.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          <div className="pill-row" aria-label="Tag pills">
            {tagPills.map((t) => (
              <button
                key={t}
                className={`pill ${tag === t ? "is-active" : ""}`}
                type="button"
                onClick={() => setTag(t)}
              >
                {t === "all" ? "All" : t === "ui-ux" ? "UI/UX" : t[0].toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid-3" aria-label="Project cards" data-reveal>
          {filtered.map((p) => (
            <article key={p.id} className="card project-card" onClick={() => setSelected(p)} tabIndex={0}>
              <h3>{p.title}</h3>
              <p className="muted" style={{ margin: 0, lineHeight: 1.7, fontWeight: 650 }}>
                {p.blurb}
              </p>
              <div className="meta">
                {p.meta.slice(0, 2).map((m) => (
                  <span key={m} className="meta-item">
                    {m}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="card" style={{ marginTop: 18 }} data-reveal>
            <h3 style={{ marginTop: 0 }}>No projects found</h3>
            <p className="muted" style={{ margin: 0, lineHeight: 1.7, fontWeight: 650 }}>
              Try a different search or switch the category/tag filters.
            </p>
            <div style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn" type="button" onClick={() => setQ("")}>
                Clear search
              </button>
              <button
                className="btn btn-accent"
                type="button"
                onClick={() => {
                  setCategory("all");
                  setTag("all");
                  setQ("");
                }}
              >
                Reset filters
              </button>
            </div>
          </div>
        ) : null}

        <div style={{ marginTop: 22, display: "flex", gap: 14, flexWrap: "wrap" }} data-reveal>
          <Link className="btn btn-accent" href="/contact">
            Request a project quote
          </Link>
          <Link className="btn" href="/services">
            Match a service to your need
          </Link>
        </div>
      </div>

      <Modal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

