"use client";

import { motion, useReducedMotion } from "motion/react";

/** Abstract, non-data analytics composition. Purely decorative: no real or fabricated metrics. */
export function HeroVisual() {
  const reduce = useReducedMotion();
  const bars = [38, 62, 48, 80, 58, 92, 70];
  return (
    <div className="relative mx-auto w-full max-w-[520px]" aria-hidden="true">
      <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.18),transparent_65%)] blur-2xl" />

      {/* main panel */}
      <motion.div
        className="glass relative rounded-2xl p-5"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-4 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-3 h-2 w-28 rounded-full bg-white/10" />
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-xl border border-line bg-white/[0.03] p-3">
              <div className="h-1.5 w-8 rounded-full bg-cyan-300/40" />
              <div className="mt-3 h-3 w-14 rounded bg-white/15" />
            </div>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-5 gap-3">
          <div className="col-span-3 rounded-xl border border-line bg-white/[0.03] p-3">
            <div className="flex h-32 items-end gap-2">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-blue-600/70 to-cyan-300/80"
                  initial={reduce ? false : { height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.4 + i * 0.07, duration: 0.7, ease: "easeOut" }}
                />
              ))}
            </div>
          </div>
          <div className="col-span-2 rounded-xl border border-line bg-white/[0.03] p-3">
            <svg viewBox="0 0 100 100" className="mx-auto h-32 w-32 -rotate-90">
              <circle cx="50" cy="50" r="34" fill="none" stroke="rgba(148,176,255,.15)" strokeWidth="10" />
              <motion.circle
                cx="50"
                cy="50"
                r="34"
                fill="none"
                stroke="url(#g1)"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray="214"
                initial={reduce ? false : { strokeDashoffset: 214 }}
                animate={{ strokeDashoffset: 70 }}
                transition={{ delay: 0.6, duration: 1.1, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#3b82f6" />
                  <stop offset="1" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="mt-3 rounded-xl border border-line bg-white/[0.03] p-3">
          <svg viewBox="0 0 300 60" className="h-14 w-full" preserveAspectRatio="none">
            <motion.path
              d="M0 45 C30 40 40 20 70 28 S120 50 150 30 S210 8 240 20 S280 14 300 6"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={reduce ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.8, duration: 1.4, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </motion.div>

      {/* floating nodes */}
      <div className="absolute -left-4 -top-4 hidden rounded-xl glass px-3 py-2 text-xs text-cyan-200 sm:block" style={{ animation: reduce ? undefined : "float 6s ease-in-out infinite" }}>
        ERP → PostgreSQL
      </div>
      <div className="absolute -right-4 bottom-12 hidden rounded-xl glass px-3 py-2 text-xs text-blue-200 sm:block" style={{ animation: reduce ? undefined : "float 7s ease-in-out -2s infinite" }}>
        KPIs · Targets · Returns
      </div>
    </div>
  );
}
