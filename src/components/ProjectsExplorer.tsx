import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function ProjectsExplorer() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div>
      <div className="mb-4 flex items-center gap-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
        <h3 className="font-display text-lg font-semibold">Featured Projects</h3>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 0.06} className="h-full">
            <ProjectCard project={p} large />
          </Reveal>
        ))}
      </div>

      <div className="mb-4 mt-14 flex items-center gap-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
        <h3 className="font-display text-lg font-semibold">All Projects</h3>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 0.05} className="h-full">
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
