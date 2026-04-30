"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const navItems: Array<{ href: string; label: string }> = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Close any open mobile nav when route changes.
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = useMemo(() => {
    return (href: string) => {
      if (href === "/") return pathname === "/";
      if (href === "/blog") return pathname === "/blog" || pathname.startsWith("/blog/");
      return pathname === href;
    };
  }, [pathname]);

  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="JB-tech home">
          <span className="brand-badge" aria-hidden="true" />
          <span>JB-tech</span>
        </Link>

        <nav className="nav" aria-label="Primary">
          <div id="nav-menu" className={`nav-menu ${open ? "is-open" : ""}`}>
            {navItems.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className={`nav-link ${isActive(it.href) ? "is-active" : ""}`}
                onClick={() => setOpen(false)}
              >
                {it.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="header-actions">
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open ? "true" : "false"}
            aria-controls="nav-menu"
            title="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

