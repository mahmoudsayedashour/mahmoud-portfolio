"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  phase: number;
  amp: number;
  hue: "cyan" | "blue";
  trail: { x: number; y: number }[];
};

/**
 * Ambient living data-flow background:
 * - GPU-animated subtle grid & SVG pipeline paths with moving light pulses
 * - Lightweight, DPR-capped canvas particles with curved flow trajectories, soft trails,
 *   and occasional proximity connections
 * - Subtle scroll-driven parallax, visibility pausing, and full reduced-motion support
 */
export function DataFlowBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const svgLayerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduced = motionQuery.matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    let rafId = 0;
    let lastTime = 0;
    let scrollRaf = 0;

    const initParticles = () => {
      const mobile = width < 768;
      const count = mobile ? 12 : 26;
      particles = Array.from({ length: count }, (_, i) => {
        const speed = mobile ? 0.28 : 0.35 + (i % 4) * 0.14;
        return {
          x: ((i + 0.5) / count) * width + (Math.random() - 0.5) * 80,
          y: Math.random() * height,
          vx: speed * (i % 2 === 0 ? 1 : 0.72),
          vy: (Math.random() - 0.5) * 0.16,
          r: 1.3 + (i % 3) * 0.55,
          phase: Math.random() * Math.PI * 2,
          amp: 0.18 + (i % 3) * 0.12,
          hue: i % 3 === 0 ? "blue" : "cyan",
          trail: [],
        };
      });
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    };

    const drawFrame = (animate: boolean, time: number) => {
      ctx.clearRect(0, 0, width, height);
      const maxLinkDist = width < 768 ? 110 : 145;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (animate) {
          p.trail.push({ x: p.x, y: p.y });
          if (p.trail.length > 7) p.trail.shift();

          const curve = Math.sin(time * 0.00055 + p.phase + p.x * 0.004) * p.amp;
          p.x += p.vx;
          p.y += p.vy + curve;

          if (p.x > width + 24) {
            p.x = -24;
            p.y = Math.random() * height;
            p.trail.length = 0;
          }
          if (p.y < -20) p.y = height + 20;
          if (p.y > height + 20) p.y = -20;
        }

        // Soft glowing trail
        if (p.trail.length > 1) {
          for (let t = 1; t < p.trail.length; t++) {
            const alpha = (t / p.trail.length) * 0.18;
            ctx.strokeStyle =
              p.hue === "cyan" ? `rgba(34, 211, 238, ${alpha})` : `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = p.r * 0.85;
            ctx.beginPath();
            ctx.moveTo(p.trail[t - 1].x, p.trail[t - 1].y);
            ctx.lineTo(p.trail[t].x, p.trail[t].y);
            ctx.stroke();
          }
        }

        // Node connections
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < maxLinkDist * maxLinkDist) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / maxLinkDist) * 0.11;
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        // Particle glow dot
        ctx.fillStyle = p.hue === "cyan" ? "rgba(34, 211, 238, 0.55)" : "rgba(96, 165, 250, 0.5)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const tick = (now: number) => {
      if (reduced || document.hidden) return;
      // ~32fps cap to preserve battery and main-thread headroom
      if (now - lastTime >= 30) {
        lastTime = now;
        drawFrame(true, now);
      }
      rafId = window.requestAnimationFrame(tick);
    };

    const startLoop = () => {
      window.cancelAnimationFrame(rafId);
      if (reduced) {
        drawFrame(false, 0);
        return;
      }
      if (!document.hidden) {
        lastTime = 0;
        rafId = window.requestAnimationFrame(tick);
      }
    };

    const onVisibility = () => {
      if (document.hidden) {
        window.cancelAnimationFrame(rafId);
      } else {
        startLoop();
      }
    };

    const onScroll = () => {
      if (reduced || !svgLayerRef.current || scrollRaf) return;
      scrollRaf = window.requestAnimationFrame(() => {
        scrollRaf = 0;
        if (svgLayerRef.current) {
          const offset = Math.min(window.scrollY * 0.06, 96);
          svgLayerRef.current.style.transform = `translate3d(0, -${offset}px, 0)`;
        }
      });
    };

    const onMotionChange = (e: MediaQueryListEvent) => {
      reduced = e.matches;
      if (reduced && svgLayerRef.current) {
        svgLayerRef.current.style.transform = "translate3d(0, 0, 0)";
      }
      startLoop();
    };

    resize();
    // Defer initial animation frame slightly so hydration & LCP stay uncontended
    const startTimer = window.setTimeout(startLoop, 80);

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    motionQuery.addEventListener("change", onMotionChange);

    return () => {
      window.clearTimeout(startTimer);
      window.cancelAnimationFrame(rafId);
      window.cancelAnimationFrame(scrollRaf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
      motionQuery.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Subtle dark navy radial depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,rgba(37,99,235,0.16),transparent_70%),radial-gradient(ellipse_60%_50%_at_85%_60%,rgba(34,211,238,0.08),transparent_65%)]" />

      {/* Ambient animated grid */}
      <div className="bg-grid-ambient absolute -top-16 inset-x-0 bottom-0 opacity-65 [mask-image:radial-gradient(ellipse_at_50%_35%,black_25%,transparent_82%)]" />

      {/* Flowing SVG pipeline paths & nodes with subtle scroll parallax */}
      <div ref={svgLayerRef} className="absolute inset-0 will-change-transform">
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          className="h-[112%] w-full opacity-55"
        >
          <defs>
            <linearGradient id="pipe-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59,130,246,0)" />
              <stop offset="30%" stopColor="rgba(59,130,246,0.22)" />
              <stop offset="65%" stopColor="rgba(34,211,238,0.28)" />
              <stop offset="100%" stopColor="rgba(34,211,238,0)" />
            </linearGradient>
            <linearGradient id="pipe-grad-2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(34,211,238,0)" />
              <stop offset="50%" stopColor="rgba(56,189,248,0.22)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0)" />
            </linearGradient>
          </defs>

          {/* Subtle pipeline backbone curves */}
          <path
            d="M -60 220 C 260 150, 480 340, 760 260 S 1180 120, 1500 230"
            fill="none"
            stroke="url(#pipe-grad-1)"
            strokeWidth="1.2"
          />
          <path
            d="M -60 560 C 280 640, 520 430, 820 510 S 1200 660, 1500 490"
            fill="none"
            stroke="url(#pipe-grad-2)"
            strokeWidth="1.2"
          />
          <path
            d="M 180 -40 C 320 260, 260 540, 440 940"
            fill="none"
            stroke="rgba(59,130,246,0.1)"
            strokeWidth="1"
          />
          <path
            d="M 1060 -40 C 980 280, 1140 540, 980 940"
            fill="none"
            stroke="rgba(34,211,238,0.1)"
            strokeWidth="1"
          />

          {/* Moving light signals along the pipeline */}
          <path
            d="M -60 220 C 260 150, 480 340, 760 260 S 1180 120, 1500 230"
            fill="none"
            stroke="rgba(34,211,238,0.65)"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="pipeline-pulse"
          />
          <path
            d="M -60 560 C 280 640, 520 430, 820 510 S 1200 660, 1500 490"
            fill="none"
            stroke="rgba(96,165,250,0.6)"
            strokeWidth="1.6"
            strokeLinecap="round"
            className="pipeline-pulse-slow"
          />

          {/* Subtle pipeline nodes */}
          <g fill="rgba(34,211,238,0.45)">
            <circle cx="315" cy="212" r="2.5" />
            <circle cx="760" cy="260" r="3" />
            <circle cx="1140" cy="186" r="2.5" />
            <circle cx="420" cy="540" r="2.5" />
            <circle cx="820" cy="510" r="3" />
            <circle cx="1050" cy="576" r="2.5" />
          </g>
        </svg>
      </div>

      {/* Optimized canvas data particles */}
      <canvas ref={canvasRef} className="absolute inset-0 block opacity-80" />
    </div>
  );
}
