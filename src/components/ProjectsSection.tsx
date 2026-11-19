import { ProjectsExplorer } from "./ProjectsExplorer";
import { SectionHeading } from "./Reveal";

export function ProjectsSection({ heading = true }: { heading?: boolean }) {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20" aria-label="Projects">
      {heading && (
        <SectionHeading
          eyebrow="Projects"
          title="Real-world analytics and development work"
          lead="Three featured projects, followed by seven additional analytics engagements. Each has its own case study."
        />
      )}
      <ProjectsExplorer />
    </section>
  );
}
