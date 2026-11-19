import Image from "next/image";
import { BarChart3, Boxes, Globe2, HeartPulse, Landmark, Bot, ShoppingCart, Store } from "lucide-react";
import type { Project } from "@/data/projects";

const accents: Record<Project["accent"], string> = {
  blue: "from-blue-600/30 via-blue-900/20 to-slate-950",
  cyan: "from-cyan-500/25 via-blue-900/20 to-slate-950",
  indigo: "from-indigo-500/25 via-blue-950/30 to-slate-950",
  teal: "from-teal-500/25 via-cyan-950/30 to-slate-950",
};

function pickIcon(p: Project) {
  const props = { size: 26, "aria-hidden": true } as const;
  if (p.tags.includes("Healthcare")) return <HeartPulse {...props} />;
  if (p.tags.includes("E-Commerce")) return <ShoppingCart {...props} />;
  if (p.tags.includes("Government & Operations")) return <Landmark {...props} />;
  if (p.tags.includes("Python & Automation"))
    return p.category.includes("Geospatial") ? <Globe2 {...props} /> : <Bot {...props} />;
  if (p.category.includes("Retail")) return <Store {...props} />;
  if (p.tags.includes("Full-Stack Development")) return <Boxes {...props} />;
  return <BarChart3 {...props} />;
}

/**
 * Real screenshots are shown as-is. When none exists, a clearly labelled designed
 * placeholder is rendered instead — it is never presented as project evidence.
 */
export function ProjectVisual({
  project,
  priority = false,
  sizes = "(min-width: 1024px) 40vw, 100vw",
}: {
  project: Project;
  priority?: boolean;
  sizes?: string;
}) {
  if (project.screenshot) {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
        <Image
          src={project.screenshot}
          alt={project.screenshotAlt ?? `Screenshot of ${project.title}`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
      </div>
    );
  }
  return (
    <div
      className={`relative flex aspect-[16/10] w-full flex-col items-center justify-center gap-3 overflow-hidden bg-gradient-to-br ${accents[project.accent]}`}
      role="img"
      aria-label={`Illustrative placeholder for ${project.title}. No public screenshot is available.`}
    >
      <div className="bg-grid absolute inset-0 opacity-60" />
      <span className="relative grid h-14 w-14 place-items-center rounded-2xl border border-line bg-white/5 text-cyan-300">
        {pickIcon(project)}
      </span>
      <span className="relative rounded-full border border-dashed border-white/20 px-3 py-1 text-[11px] uppercase tracking-wider text-muted">
        Illustration · no public screenshot
      </span>
    </div>
  );
}
