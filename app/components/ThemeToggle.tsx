"use client";

import { useEffect, useMemo, useState } from "react";

const THEME_KEY = "jbtech-theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "light" || current === "dark") setTheme(current);
  }, []);

  const ariaLabel = useMemo(() => {
    return theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
  }, [theme]);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    setTheme(next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // ignore
    }
  };

  return (
    <button
      id="theme-toggle"
      className="icon-btn"
      type="button"
      title="Toggle theme"
      aria-label={ariaLabel}
      onClick={toggle}
    >
      <span className="icon" aria-hidden="true">
        {/* Simple sun/moon icon swap */}
        {theme === "dark" ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 3v2" />
            <path d="M12 19v2" />
            <path d="M4.22 4.22l1.42 1.42" />
            <path d="M18.36 18.36l1.42 1.42" />
            <path d="M3 12h2" />
            <path d="M19 12h2" />
            <path d="M4.22 19.78l1.42-1.42" />
            <path d="M18.36 5.64l1.42-1.42" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        )}
      </span>
    </button>
  );
}

