"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { posts } from "../lib/posts";

const tagPills = ["all", "full stack", "e-commerce", "it", "security"];

export default function BlogListPage() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("all");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return posts.filter((p) => {
      const matchesQ = !query || p.title.toLowerCase().includes(query) || p.excerpt.toLowerCase().includes(query);
      const matchesTag = tag === "all" || p.tags.includes(tag);
      return matchesQ && matchesTag;
    });
  }, [q, tag]);

  return (
    <section className="section" style={{ paddingTop: 40 }} aria-label="Blog">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow" data-reveal>
            <span className="dot" aria-hidden="true" />
            <span>Blog</span>
          </div>
          <h1 className="h1" style={{ fontSize: "clamp(28px, 3.2vw, 44px)" }} data-reveal>
            Practical tech notes
          </h1>
          <p className="lead" data-reveal>
            Filter by topic, search, then open any post. Replace these sample posts later.
          </p>
        </div>

        <div className="toolbar" data-reveal>
          <div style={{ display: "grid", gap: 10 }}>
            <input className="input" type="search" placeholder="Search posts..." value={q} onChange={(e) => setQ(e.target.value)} />
          </div>

          <div className="pill-row">
            {tagPills.map((t) => (
              <button
                key={t}
                className={`pill ${tag === t ? "is-active" : ""}`}
                type="button"
                onClick={() => setTag(t)}
              >
                {t === "all" ? "All" : t === "full stack" ? "Full stack" : t === "e-commerce" ? "E-commerce" : t === "it" ? "IT support" : t === "security" ? "Security" : t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid-3 blog-layout" aria-label="Blog posts" data-reveal>
          {filtered.map((p) => (
            <Link key={p.slug} className="card post-card" href={`/blog/${p.slug}`}>
              <h3>{p.title}</h3>
              <p className="muted" style={{ margin: 0, lineHeight: 1.7, fontWeight: 650 }}>
                {p.excerpt}
              </p>
              <div className="post-meta">
                <span>{p.tags[0] ?? "Post"}</span>
                <span>{p.readTime}</span>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="card" style={{ marginTop: 18 }} data-reveal>
            <h3 style={{ marginTop: 0 }}>No posts found</h3>
            <p className="muted" style={{ margin: 0, lineHeight: 1.7, fontWeight: 650 }}>
              Try a different search or switch the topic filter.
            </p>
          </div>
        ) : null}

        <div style={{ marginTop: 22 }} data-reveal>
          <div className="card" style={{ padding: 22 }}>
            <h3 style={{ margin: "0 0 10px" }}>Want posts like these?</h3>
            <p className="muted" style={{ margin: 0, lineHeight: 1.7, fontWeight: 650 }}>
              If you’re planning a new website or need IT guidance, send a message and tell me what you’re building.
            </p>
            <div style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link className="btn btn-accent" href="/contact">
                Contact JB-tech
              </Link>
              <Link className="btn" href="/projects">
                See projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

