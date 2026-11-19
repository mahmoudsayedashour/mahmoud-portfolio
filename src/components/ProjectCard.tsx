import Link from "next/link";
import { ArrowUpRight, ExternalLink, Lock } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "./ProjectVisual";
import { LinkedinIcon, GithubIcon } from "./icons";

export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  const live = project.links.find((l) => l.kind === "live");
  const ext = project.links.find((l) => l.kind === "linkedin");
  const gh = project.links.find((l) => l.kind === "github");
  const maxTech = large ? 8 : 5;
  const authNote = project.links.some((l) => /authentication required/i.test(l.note ?? ""));

  return (
    <article className="card group flex h-full flex-col overflow-hidden rounded-2xl">
      <Link href={`/projects/${project.slug}`} tabIndex={-1} aria-hidden className="block overflow-hidden">
        <div className="transition-transform duration-500 group-hover:scale-[1.03]">
          <ProjectVisual project={project} sizes={large ? "(min-width: 1024px) 33vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"} />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2">
          {project.featured && (
            <span className="rounded-full bg-cyan-400/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
              Featured
            </span>
          )}
          <p className="text-xs text-muted">{project.category}</p>
        </div>
        <h3 className="mt-2 font-display text-lg font-semibold leading-snug">
          <Link href={`/projects/${project.slug}`} className="hover:text-cyan-300">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.technologies.slice(0, maxTech).map((t) => (
            <li key={t} className="chip">{t}</li>
          ))}
          {project.technologies.length > maxTech && (
            <li className="chip">+{project.technologies.length - maxTech}</li>
          )}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-5 text-sm font-medium">
          <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1 text-cyan-300 hover:underline">
            View Case Study <ArrowUpRight size={15} aria-hidden />
          </Link>
          {live && (
            <a href={live.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted hover:text-fg">
              View Live Project <ExternalLink size={14} aria-hidden />
              {authNote && <Lock size={12} aria-label="Authentication required" />}
            </a>
          )}
          {gh && (
            <a href={gh.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted hover:text-fg">
              <GithubIcon className="h-3.5 w-3.5" /> GitHub
            </a>
          )}
          {ext && (
            <a href={ext.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted hover:text-fg">
              <LinkedinIcon className="h-3.5 w-3.5" /> LinkedIn Project
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
