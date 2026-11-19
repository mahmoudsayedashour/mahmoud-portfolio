import type { Metadata } from "next";
import { ProjectsSection } from "@/components/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected analytics, business intelligence, automation, and full-stack projects by Mahmoud Sayed Ashour, with detailed case studies.",
  alternates: { canonical: "/projects" },
  openGraph: { title: "Projects | Mahmoud Sayed Ashour", url: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      <div className="mx-auto max-w-6xl px-5 pt-10">
        <p className="section-eyebrow">Projects</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">All projects</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Ten projects across FMCG, e-commerce, healthcare, retail, and public-sector operations — three featured platforms followed by seven additional analytics engagements.
        </p>
      </div>
      <ProjectsSection heading={false} />
    </div>
  );
}
