import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "./icons";
import { HeroPortrait } from "./HeroPortrait";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24"
      aria-labelledby="hero-title"
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10">
        <div className="min-w-0">
          <p className="chip mb-5 gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full bg-cyan-300"
              style={{ animation: "pulse-soft 2.4s ease-in-out infinite" }}
            />
            Data Analyst · Business Intelligence Developer
          </p>

          <p className="neon-name font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.65rem]">
            {profile.name}
          </p>

          <h1
            id="hero-title"
            className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-[1.12] tracking-tight text-fg/95 sm:text-4xl lg:text-[2.85rem] xl:text-[3.1rem]"
          >
            Turning Complex Data into{" "}
            <span className="text-gradient">Clear Business Decisions.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
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

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost !px-4 !py-2 text-sm"
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <LinkedinIcon className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost !px-4 !py-2 text-sm"
              aria-label="GitHub profile (opens in a new tab)"
            >
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Specializations">
            {profile.specializations.map((s) => (
              <li key={s} className="chip">
                {s}
              </li>
            ))}
          </ul>
        </div>

        <HeroPortrait />
      </div>
    </section>
  );
}
