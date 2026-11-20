import Image from "next/image";
import type { Project } from "@/data/projects";

/**
 * Every project renders an authentic local image asset in a consistent 16:9 frame.
 * Displays official logos, institutional branding, or verified sector photography.
 */
export function ProjectVisual({
  project,
  priority = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
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
    </div>
  );
}
