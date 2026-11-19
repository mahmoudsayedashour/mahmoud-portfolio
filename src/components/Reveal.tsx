"use client";

import { motion, useReducedMotion } from "motion/react";

export function Reveal({
  children,
  delay = 0,
  className,
  y = 16,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <div className="flex items-center gap-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.8)]" aria-hidden="true" />
        <p className="section-eyebrow">{eyebrow}</p>
        <span className="h-px flex-1 max-w-[140px] bg-gradient-to-r from-cyan-400/45 via-blue-500/20 to-transparent" aria-hidden="true" />
      </div>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {lead && <p className="mt-4 text-base leading-relaxed text-muted">{lead}</p>}
    </Reveal>
  );
}

export function SectionConnector() {
  return (
    <div className="mx-auto flex max-w-6xl justify-center px-5" aria-hidden="true">
      <div className="flex flex-col items-center">
        <span className="h-8 w-px bg-gradient-to-b from-transparent via-cyan-400/35 to-blue-500/35" />
        <span className="h-2 w-2 rounded-full border border-cyan-300/60 bg-bg shadow-[0_0_10px_rgba(34,211,238,0.45)]" />
        <span className="h-8 w-px bg-gradient-to-b from-blue-500/35 via-cyan-400/30 to-transparent" />
      </div>
    </div>
  );
}
