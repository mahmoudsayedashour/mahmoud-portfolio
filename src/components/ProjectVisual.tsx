import Image from "next/image";
import type { Project } from "@/data/projects";

/**
 * Every project renders a real local image asset in a consistent 16:9 frame.
 * Concept visualizations are clearly badged so they are never mistaken for screenshots.
 */
export function ProjectVisual({
  project,
  priority = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
  showBadge = true,
}: {
  project: Project;
  priority?: boolean;
  sizes?: string;
  showBadge?: boolean;
}) {
  const { visual } = project;
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-surface">
      <Image
        src={visual.src}
        alt={visual.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover object-top"
      />
      {showBadge && visual.kind === "concept" && (
        <span className="absolute left-3 top-3 rounded-full border border-line bg-[var(--badge-bg)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted backdrop-blur-sm">
          Concept visual
        </span>
      )}
    </div>
  );
}
