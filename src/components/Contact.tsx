import { Download, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Reveal, SectionHeading } from "./Reveal";

const subject = encodeURIComponent("Project discussion");
const body = encodeURIComponent("Hello Mahmoud,\n\nI'd like to discuss a project with you.\n\n");

export function Contact() {
  const items = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
    { icon: MapPin, label: "Location", value: profile.location },
  ];
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Work Together"
        lead="Open to international Data Analyst, BI Analyst, and Business Intelligence Developer roles, and to freelance analytics projects."
      />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl p-8">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.2),transparent_70%)]" />
            <h3 className="font-display text-2xl font-semibold">Have a dashboard, report, or data project in mind?</h3>
            <p className="mt-3 max-w-lg text-muted">
              The quickest way to reach me is by email. Tell me about the business question, the data you have, and the timeline.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}?subject=${subject}&body=${body}`} className="btn btn-primary">
                <Mail size={16} aria-hidden /> Discuss a Project
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <LinkedinIcon className="h-4 w-4" /> Connect on LinkedIn
              </a>
              <a href={profile.cv} download className="btn btn-ghost">
                <Download size={16} aria-hidden /> Download CV
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="card divide-y divide-line rounded-3xl">
            {items.map((it) => (
              <li key={it.label} className="flex items-center gap-4 p-5">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-blue-500/10 text-cyan-300">
                  <it.icon size={18} aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted">{it.label}</p>
                  {it.href ? (
                    <a href={it.href} className="break-all hover:text-cyan-300">{it.value}</a>
                  ) : (
                    <p>{it.value}</p>
                  )}
                </div>
              </li>
            ))}
            <li className="flex items-center gap-3 p-5">
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-4 !py-2">
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>
              <a href={profile.links.hackerrank} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-4 !py-2">
                HackerRank
              </a>
              <a href={profile.links.codeforces} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-4 !py-2">
                Codeforces
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
