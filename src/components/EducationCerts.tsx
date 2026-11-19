import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "@/data/profile";
import { Reveal, SectionHeading } from "./Reveal";

export function EducationCerts() {
  return (
    <section id="education" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <SectionHeading eyebrow="Education & Certifications" title="Academic background and credentials" />
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <article className="card h-full rounded-2xl p-6">
            <GraduationCap className="text-cyan-300" aria-hidden />
            <h3 className="mt-4 font-display text-xl font-semibold">{education.school}</h3>
            <p className="mt-1 text-muted">{education.faculty}</p>
            <dl className="mt-5 grid grid-cols-3 gap-3 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted">Major</dt>
                <dd className="mt-1">{education.major}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted">Period</dt>
                <dd className="mt-1">{education.period}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted">GPA</dt>
                <dd className="mt-1">{education.gpa}</dd>
              </div>
            </dl>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="card h-full rounded-2xl p-6">
            <Award className="text-cyan-300" aria-hidden />
            <h3 className="mt-4 font-display text-xl font-semibold">Certifications</h3>
            <ul className="mt-4 divide-y divide-line">
              {certifications.map((c) => (
                <li key={c.title} className="flex flex-wrap items-baseline justify-between gap-x-4 py-3">
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
