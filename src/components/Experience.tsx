import { experience } from "@/data/profile";
import { Reveal, SectionHeading } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <SectionHeading eyebrow="Experience" title="Professional experience" />
      <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-8">
        {experience.map((e, i) => (
          <li key={e.company} className="relative">
            <span className="absolute -left-[31px] top-6 h-3 w-3 rounded-full bg-cyan-300 ring-4 ring-bg sm:-left-[39px]" aria-hidden />
            <Reveal delay={i * 0.08}>
              <article className="card rounded-2xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold">
                    {e.role} <span className="text-muted">·</span> <span className="text-gradient">{e.company}</span>
                  </h3>
                  <p className="text-sm text-muted">{e.period}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted sm:text-base">
                  {e.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" aria-hidden />
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
