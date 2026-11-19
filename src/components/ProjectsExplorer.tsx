"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { FILTERS, projects, type Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

type Filter = (typeof FILTERS)[number];

function matches(p: Project, f: Filter) {
  if (f === "All Projects") return true;
  if (f === "Featured") return p.featured;
  return p.tags.includes(f);
}

export function ProjectsExplorer() {
  const [filter, setFilter] = useState<Filter>("All Projects");
  const [q, setQ] = useState("");

  const query = q.trim().toLowerCase();
  const results = useMemo(
    () =>
      projects.filter((p) => {
        if (!matches(p, filter)) return false;
        if (!query) return true;
        return [p.title, p.category, p.summary, ...p.technologies, ...p.tags]
          .join(" ")
          .toLowerCase()
          .includes(query);
      }),
    [filter, query],
  );

  const pristine = filter === "All Projects" && !query;
  const featured = results.filter((p) => p.featured);
  const rest = results.filter((p) => !p.featured);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4">
        <div className="relative max-w-md">
          <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" aria-hidden />
          <label htmlFor="project-search" className="sr-only">Search projects</label>
          <input
            id="project-search"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search projects, tools, or industries…"
            className="w-full rounded-full border border-line bg-white/[0.03] py-2.5 pl-10 pr-10 text-sm text-fg placeholder:text-muted focus:border-cyan-400/50 focus:outline-none"
          />
          {q && (
            <button type="button" onClick={() => setQ("")} aria-label="Clear search" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-fg">
              <X size={16} />
            </button>
          )}
        </div>

        <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const active = f === filter;
            const count = projects.filter((p) => matches(p, f)).length;
            return (
              <button
                key={f}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                  active
                    ? "border-cyan-400/60 bg-cyan-400/10 text-cyan-200"
                    : "border-line bg-white/[0.02] text-muted hover:border-white/25 hover:text-fg"
                }`}
              >
                {f} <span className="ml-1 text-xs opacity-60">{count}</span>
              </button>
            );
          })}
        </div>
        <p className="text-sm text-muted" role="status" aria-live="polite">
          Showing {results.length} of {projects.length} projects
        </p>
      </div>

      {results.length === 0 ? (
        <div className="card rounded-2xl p-10 text-center text-muted">
          No projects match your filters.{" "}
          <button type="button" className="text-cyan-300 underline" onClick={() => { setFilter("All Projects"); setQ(""); }}>
            Reset
          </button>
        </div>
      ) : pristine ? (
        <>
          <h3 className="mb-4 font-display text-lg font-semibold">Featured Projects</h3>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} large />
            ))}
          </div>
          <h3 className="mb-4 mt-14 font-display text-lg font-semibold">All Projects</h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[...featured, ...rest].map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      )}
    </div>
  );
}
