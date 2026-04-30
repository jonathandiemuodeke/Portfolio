"use client";

import { useEffect, useMemo, useRef } from "react";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const charset = useMemo(
    () => "01<>/\\\\{}[];:._-+*#&$@ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const state = {
      width: 0,
      height: 0,
      dpr: Math.max(1, Math.min(2, window.devicePixelRatio || 1)),
      chars: [] as Array<{ x: number; y: number; speed: number; glyph: string; wobble: number }>,
      lastT: 0,
      raf: 0 as number,
      resizeTimer: 0 as number,
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      state.width = Math.max(300, Math.floor(rect.width));
      state.height = Math.max(240, Math.floor(rect.height));
      canvas.width = Math.floor(state.width * state.dpr);
      canvas.height = Math.floor(state.height * state.dpr);
      ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
    };

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

    const draw = (t: number) => {
      const dt = state.lastT ? t - state.lastT : 16;
      state.lastT = t;

      ctx.clearRect(0, 0, state.width, state.height);

      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      const primary = isLight ? "rgba(37, 99, 235, 0.65)" : "rgba(96, 165, 250, 0.65)";
      const accent = isLight ? "rgba(184, 134, 11, 0.65)" : "rgba(251, 191, 36, 0.55)";
      const bgFade = isLight ? "rgba(246, 247, 251, 0.04)" : "rgba(7,16,31,0.04)";

      // Trails
      ctx.fillStyle = bgFade;
      ctx.fillRect(0, 0, state.width, state.height);

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

    const onResize = () => {
      window.clearTimeout(state.resizeTimer);
      state.resizeTimer = window.setTimeout(start, 180);
    };

    window.addEventListener("resize", onResize);
    start();

    return () => {
      window.removeEventListener("resize", onResize);
      window.cancelAnimationFrame(state.raf);
    };
  }, [charset]);

  return <canvas ref={canvasRef} id="hero-canvas" className="hero-canvas" aria-hidden="true" />;
}

