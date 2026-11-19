import { Award, BookOpen, Brain, Cpu, Database, GraduationCap, Network, Sparkles } from "lucide-react";
import { certifications, education } from "@/data/profile";
import { Reveal, SectionHeading } from "./Reveal";

const courseIcons = [Brain, Sparkles, Network, Cpu, Database, BookOpen];

export function EducationCerts() {
  const col1 = education.coursework.slice(0, 3);
  const col2 = education.coursework.slice(3, 6);

  return (
    <section id="education" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <SectionHeading eyebrow="Education & Certifications" title="Academic background and credentials" />
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <article className="card flex h-full flex-col rounded-2xl p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <GraduationCap className="text-cyan-300" aria-hidden />
                <h3 className="mt-4 font-display text-xl font-semibold">{education.school}</h3>
                <p className="mt-1 text-muted">{education.faculty}</p>
              </div>
            </div>

            <dl className="mt-5 grid grid-cols-3 gap-3 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted">Major</dt>
                <dd className="mt-1 font-medium">{education.major}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted">Period</dt>
                <dd className="mt-1 font-medium">{education.period}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted">GPA</dt>
                <dd className="mt-1 font-medium">{education.gpa}</dd>
              </div>
            </dl>

            <div className="mt-6 rounded-xl border border-line bg-white/[0.025] p-4">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" aria-hidden="true" />
                <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">
                  Relevant Coursework
                </h4>
              </div>

              <div className="mt-3 grid gap-2 sm:grid-cols-2 sm:gap-x-4">
                <ul className="space-y-2">
                  {col1.map((subject, idx) => {
                    const Icon = courseIcons[idx];
                    return (
                      <li key={subject} className="flex items-start gap-2.5 text-sm text-fg/90">
                        <Icon size={14} className="mt-[3px] shrink-0 text-cyan-300/85" aria-hidden="true" />
                        <span>{subject}</span>
                      </li>
                    );
                  })}
                </ul>
                <ul className="space-y-2">
                  {col2.map((subject, idx) => {
                    const Icon = courseIcons[idx + 3];
                    return (
                      <li key={subject} className="flex items-start gap-2.5 text-sm text-fg/90">
                        <Icon size={14} className="mt-[3px] shrink-0 text-cyan-300/85" aria-hidden="true" />
                        <span>{subject}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="card h-full rounded-2xl p-6">
            <Award className="text-cyan-300" aria-hidden />
            <h3 className="mt-4 font-display text-xl font-semibold">Certifications</h3>
            <ul className="mt-4 divide-y divide-line">
              {certifications.map((c) => (
                <li key={c.title} className="flex flex-wrap items-baseline justify-between gap-x-4 py-3.5">
                  <span className="text-sm sm:text-base">{c.title}</span>
                  <span className="text-sm text-muted">{c.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
