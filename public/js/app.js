/* JB-tech portfolio client-side behaviors:
   - inject header/footer partials
   - theme toggle (dark/light)
   - responsive mobile nav
   - scroll reveal animations
   - Projects filtering + modal
   - Services accordion
   - Contact form validation + UX
   - Blog list filter
   - IT hero background animation (canvas)
*/

const THEME_KEY = "jbtech-theme";

function getPreferredTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "dark" || saved === "light") return saved;
  } catch {
    // ignore
  }
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    // ignore
  }
}

async function injectPartial(selector, partialPath) {
  const target = document.querySelector(selector);
  if (!target) return;
  try {
    const res = await fetch(partialPath, { cache: "no-store" });
    if (!res.ok) return;
    target.innerHTML = await res.text();
  } catch {
    // ignore
  }
}

function setActiveNav() {
  const path = window.location.pathname;
  const links = document.querySelectorAll("[data-nav-link]");
  links.forEach((a) => {
    const href = a.getAttribute("href") || "";
    // Mark active if it's an exact match or a prefix match for blog section
    const isActive =
      href === path ||
      (href === "/index.html" && (path === "/" || path === "/index.html")) ||
      (href === "/blog/index.html" && (path === "/blog/" || path === "/blog" || path.startsWith("/blog/")));
    if (isActive) a.classList.add("is-active");
  });
}

function mobileNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const menu = document.querySelector("[data-nav-menu]");
  if (!toggle || !menu) return;

  const setExpanded = (expanded) => {
    toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    menu.classList.toggle("is-open", expanded);
  };

  setExpanded(false);

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    setExpanded(!expanded);
  });

  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => setExpanded(false));
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setExpanded(false);
  });
}

function scrollReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  if (!items.length || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );
  items.forEach((el) => obs.observe(el));
}

function setupAccordion() {
  const items = document.querySelectorAll("[data-accordion-item]");
  if (!items.length) return;

  items.forEach((item) => {
    const btn = item.querySelector("[data-accordion-btn]");
    if (!btn) return;
    const setOpen = (open) => {
      item.setAttribute("data-open", open ? "true" : "false");
    };
    setOpen(item.getAttribute("data-open") === "true");

    btn.addEventListener("click", () => {
      const currentlyOpen = item.getAttribute("data-open") === "true";
      // Optional: open only one accordion item at a time
      items.forEach((other) => {
        if (other !== item) other.setAttribute("data-open", "false");
      });
      setOpen(!currentlyOpen);
    });
  });
}

function getTextContent(el) {
  return (el && el.textContent ? el.textContent : "").trim();
}

function projectTools() {
  const searchInput = document.querySelector("[data-project-search]");
  const categorySelect = document.querySelector("[data-project-category]");
  const pillRow = document.querySelector("[data-project-tags]");
  const cards = document.querySelectorAll("[data-project-card]");
  const modalOverlay = document.querySelector("[data-modal-overlay]");
  const modalTitle = document.querySelector("[data-modal-title]");
  const modalBody = document.querySelector("[data-modal-body]");
  const modalClose = document.querySelector("[data-modal-close]");

  if (!cards.length || !modalOverlay || !modalTitle || !modalBody) return;

  const pills = pillRow ? pillRow.querySelectorAll("[data-pill]") : [];
  const setPillActive = (pillId) => {
    pills.forEach((p) => p.classList.toggle("is-active", p.getAttribute("data-pill") === pillId));
  };

  const openModal = (card) => {
    const title = card.getAttribute("data-title") || getTextContent(card.querySelector("h3"));
    const category = card.getAttribute("data-category") || "";
    const blurb = card.getAttribute("data-blurb") || card.querySelector("[data-blurb]")?.textContent || "";
    const featuresRaw = card.getAttribute("data-features") || "[]";
    let features = [];
    try {
      features = JSON.parse(featuresRaw);
    } catch {
      features = [];
    }

    modalTitle.textContent = title || "Project details";

    const featureList = features.length
      ? `<ul>${features.map((f) => `<li>${f}</li>`).join("")}</ul>`
      : "";

    modalBody.innerHTML = `
      <div class="muted" style="margin-bottom: 12px;">
        <strong style="color: var(--text);">Category:</strong> ${category || "—"}
      </div>
      <div>${blurb || ""}</div>
      ${featureList}
      <div style="margin-top: 14px;">
        <a class="btn btn-accent" href="/contact.html" style="padding: 10px 14px;">
          <span class="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
            </svg>
          </span>
          Let me build something like this
        </a>
      </div>
    `;

    modalOverlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modalOverlay.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  modalClose?.addEventListener("click", closeModal);
  modalOverlay?.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  cards.forEach((card) => {
    card.addEventListener("click", () => openModal(card));
  });

  const getCardTags = (card) => {
    const tagsRaw = card.getAttribute("data-tags") || "[]";
    try {
      const arr = JSON.parse(tagsRaw);
      return Array.isArray(arr) ? arr : [];
    } catch {
      return [];
    }
  };

  const filter = () => {
    const q = (searchInput?.value || "").toLowerCase();
    const category = categorySelect?.value || "all";
    const activePill = pillRow ? pillRow.querySelector("[data-pill].is-active")?.getAttribute("data-pill") : null;

    cards.forEach((card) => {
      const title = (card.getAttribute("data-title") || "").toLowerCase();
      const categoryCard = (card.getAttribute("data-category") || "").toLowerCase();
      const tags = getCardTags(card).map((t) => String(t).toLowerCase());

      const matchesQuery = !q || title.includes(q) || getTextContent(card).toLowerCase().includes(q);
      const matchesCategory = category === "all" || categoryCard === category;
      const matchesTag = !activePill || tags.includes(String(activePill).toLowerCase());

      const visible = matchesQuery && matchesCategory && matchesTag;
      card.style.display = visible ? "" : "none";
    });
  };

  searchInput?.addEventListener("input", filter);
  categorySelect?.addEventListener("change", filter);

  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      setPillActive(pill.getAttribute("data-pill"));
      filter();
    });
  });

  // Initialize: activate "all" if present
  const allPill = Array.from(pills).find((p) => p.getAttribute("data-pill") === "all");
  if (allPill) setPillActive("all");

  filter();
}

function setupContactValidation() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const nameInput = form.querySelector("[data-field-name]");
  const emailInput = form.querySelector("[data-field-email]");
  const messageInput = form.querySelector("[data-field-message]");
  const errorBox = {
    name: form.querySelector("[data-error-name]"),
    email: form.querySelector("[data-error-email]"),
    message: form.querySelector("[data-error-message]"),
  };

  const setError = (key, text, show) => {
    const el = errorBox[key];
    if (!el) return;
    if (show) {
      el.textContent = text;
      el.classList.add("is-visible");
    } else {
      el.textContent = "";
      el.classList.remove("is-visible");
    }
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validate = () => {
    let ok = true;

    const name = (nameInput?.value || "").trim();
    const email = (emailInput?.value || "").trim();
    const message = (messageInput?.value || "").trim();

    if (!name) {
      ok = false;
      setError("name", "Please enter your name.", true);
    } else if (name.length < 2) {
      ok = false;
      setError("name", "Your name looks too short.", true);
    } else {
      setError("name", "", false);
    }

    if (!email) {
      ok = false;
      setError("email", "Please enter your email.", true);
    } else if (!isValidEmail(email)) {
      ok = false;
      setError("email", "Please enter a valid email address.", true);
    } else {
      setError("email", "", false);
    }

    if (!message) {
      ok = false;
      setError("message", "Please write a message.", true);
    } else if (message.length < 10) {
      ok = false;
      setError("message", "Your message should be at least 10 characters.", true);
    } else {
      setError("message", "", false);
    }

    return ok;
  };

  form.addEventListener("submit", (e) => {
    if (!validate()) e.preventDefault();
  });
}

function blogTools() {
  const posts = document.querySelectorAll("[data-blog-post]");
  if (!posts.length) return;

  const search = document.querySelector("[data-blog-search]");
  const tagButtons = document.querySelectorAll("[data-blog-tag]");

  const apply = () => {
    const q = (search?.value || "").toLowerCase();
    const activeTag = document.querySelector("[data-blog-tag].is-active")?.getAttribute("data-blog-tag") || "all";

    posts.forEach((post) => {
      const title = post.getAttribute("data-title") || "";
      const tagsRaw = post.getAttribute("data-tags") || "[]";
      let tags = [];
      try {
        tags = JSON.parse(tagsRaw);
      } catch {
        tags = [];
      }
      const tagsLower = tags.map((t) => String(t).toLowerCase());

      const matchesQ = !q || title.toLowerCase().includes(q) || post.textContent.toLowerCase().includes(q);
      const matchesTag = activeTag === "all" || tagsLower.includes(String(activeTag).toLowerCase());

      post.style.display = matchesQ && matchesTag ? "" : "none";
    });
  };

  search?.addEventListener("input", apply);
  tagButtons.forEach((b) => {
    b.addEventListener("click", () => {
      tagButtons.forEach((x) => x.classList.remove("is-active"));
      b.classList.add("is-active");
      apply();
    });
  });

  // Default active tag
  const allBtn = Array.from(tagButtons).find((b) => b.getAttribute("data-blog-tag") === "all");
  if (allBtn) allBtn.classList.add("is-active");
  apply();
}

function heroCanvas() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return;

  const state = {
    width: 0,
    height: 0,
    dpr: Math.max(1, Math.min(2, window.devicePixelRatio || 1)),
    chars: [],
    lastT: 0,
    raf: 0,
  };

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    state.width = Math.max(300, Math.floor(rect.width));
    state.height = Math.max(240, Math.floor(rect.height));
    canvas.width = Math.floor(state.width * state.dpr);
    canvas.height = Math.floor(state.height * state.dpr);
    ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
  };

  const charset = "01<>/\\{}[];:._-+*#&$@ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  const reset = () => {
    const columns = Math.floor(state.width / 16);
    const baseDensity = window.innerWidth < 720 ? 0.65 : 1;
    const colCount = Math.max(8, Math.floor(columns * baseDensity));
    const gap = state.width / colCount;
    state.chars = new Array(colCount).fill(0).map((_, i) => ({
      x: Math.floor(i * gap + gap / 2),
      y: Math.random() * state.height,
      speed: 0.6 + Math.random() * 1.8,
      glyph: charset[Math.floor(Math.random() * charset.length)],
      wobble: Math.random() * Math.PI * 2,
    }));
  };

  const draw = (t) => {
    const dt = state.lastT ? t - state.lastT : 16;
    state.lastT = t;
    ctx.clearRect(0, 0, state.width, state.height);

    // Subtle fade to create "trails"
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--bg");
    // We avoid parsing var; just use a low-opacity fill overlay.
    ctx.fillStyle = "rgba(7,16,31,0.04)";

    ctx.fillRect(0, 0, state.width, state.height);

    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    const primary = isLight ? "rgba(37, 99, 235, 0.65)" : "rgba(96, 165, 250, 0.65)";
    const accent = isLight ? "rgba(184, 134, 11, 0.65)" : "rgba(251, 191, 36, 0.55)";

    const charSize = window.innerWidth < 720 ? 12 : 14;
    ctx.font = `700 ${charSize}px var(--font-sans)`;

    state.chars.forEach((c, idx) => {
      c.wobble += dt * 0.002;
      c.y += c.speed * (dt / 16.67);
      c.glyph = charset[Math.floor(Math.random() * charset.length)];

      const alphaBoost = idx % 7 === 0 ? accent : primary;
      ctx.fillStyle = alphaBoost;

      ctx.fillText(c.glyph, c.x, c.y);

      if (c.y > state.height + 30) {
        c.y = -20 - Math.random() * 60;
      }
    });

    state.raf = window.requestAnimationFrame(draw);
  };

  const start = () => {
    resize();
    reset();
    window.cancelAnimationFrame(state.raf);
    state.raf = window.requestAnimationFrame(draw);
  };

  let resizeTimer = 0;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(start, 180);
  });

  start();
}

function initTheme() {
  applyTheme(getPreferredTheme());

  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  const updateBtnLabel = () => {
    const t = document.documentElement.getAttribute("data-theme");
    btn.setAttribute("aria-label", t === "dark" ? "Switch to light theme" : "Switch to dark theme");
  };

  updateBtnLabel();

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    updateBtnLabel();
  });
}

async function initPartials() {
  const base = document.body?.getAttribute("data-base") || ".";
  // base can be ".", ".."
  const headerPath = base === "."
    ? "./partials/header.html"
    : `${base}/partials/header.html`;
  const footerPath = base === "."
    ? "./partials/footer.html"
    : `${base}/partials/footer.html`;

  await Promise.all([
    injectPartial('[data-partial="header"]', headerPath),
    injectPartial('[data-partial="footer"]', footerPath),
  ]);
}

async function main() {
  await initPartials();

  initTheme();

  // Footer year (injected partial)
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  setActiveNav();
  mobileNav();
  scrollReveal();

  setupAccordion();
  projectTools();
  setupContactValidation();
  blogTools();
  heroCanvas();
}

document.addEventListener("DOMContentLoaded", () => {
  main().catch(() => {
    // If anything fails, avoid breaking the rest of the page.
  });
});

