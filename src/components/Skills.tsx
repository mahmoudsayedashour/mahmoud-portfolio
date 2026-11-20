import { BarChart3, Code2, Workflow, Database, LayoutDashboard, Cloud, LineChart, type LucideIcon } from "lucide-react";
import { skillGroups } from "@/data/profile";
import { Reveal, SectionHeading } from "./Reveal";

const map: Record<string, LucideIcon> = { BarChart3, Code2, Workflow, Database, LayoutDashboard, Cloud, LineChart };

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <SectionHeading
        eyebrow="Technical Skills"
        title="Tools and methods I work with"
        lead="Grouped by the role each plays in an analytics solution."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => {
          const Icon = map[g.icon];
          return (
            <Reveal key={g.title} delay={(i % 3) * 0.06}>
              <div className="card h-full rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand/10 text-accent">
                    <Icon size={18} aria-hidden />
                  </span>
                  <h3 className="font-display text-base font-semibold">{g.title}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <li key={s} className="chip">{s}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
