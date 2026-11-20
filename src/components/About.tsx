import { MapPin, GraduationCap, Briefcase, Layers } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal, SectionHeading } from "./Reveal";

const icons = [Briefcase, MapPin, GraduationCap, Layers];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20" aria-labelledby="about-h">
      <SectionHeading eyebrow="About" title="Decision-focused analytics, end to end" />
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="grid grid-cols-2 gap-3">
            {profile.facts.map((f, i) => {
              const Icon = icons[i];
              return (
                <div key={f.label} className="card rounded-2xl p-4">
                  <Icon size={18} className="text-accent" aria-hidden />
                  <dt className="mt-3 text-xs uppercase tracking-wider text-muted">{f.label}</dt>
                  <dd className="mt-1 text-sm font-medium">{f.value}</dd>
                </div>
              );
            })}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
