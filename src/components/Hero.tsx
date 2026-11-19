import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "./icons";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28" aria-labelledby="hero-title">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(59,130,246,0.22),transparent_70%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="chip mb-6 gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" style={{ animation: "pulse-soft 2.4s ease-in-out infinite" }} />
            Data Analyst · Business Intelligence Developer
          </p>
          <h1 id="hero-title" className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="sr-only">{profile.name}. </span>
            Turning Complex Data into <span className="text-gradient">Clear Business Decisions.</span>
          </h1>
          <p className="mt-3 font-display text-lg text-fg/90">{profile.name}</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="btn btn-primary">
              View My Projects <ArrowRight size={16} aria-hidden />
            </Link>
            <a href={profile.cv} download className="btn btn-ghost">
              <Download size={16} aria-hidden /> Download CV
            </a>
            <Link href="/#contact" className="btn btn-ghost">
              <Mail size={16} aria-hidden /> Contact Me
            </Link>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-4 !py-2" aria-label="LinkedIn profile (opens in a new tab)">
              <LinkedinIcon className="h-4 w-4" /> LinkedIn
            </a>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-4 !py-2" aria-label="GitHub profile (opens in a new tab)">
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2" aria-label="Specializations">
            {profile.specializations.map((s) => (
              <li key={s} className="chip">{s}</li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
