import Link from "next/link";
import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Giza, Egypt.</p>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/projects" className="hover:text-fg">Projects</Link>
          </li>
          <li>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-fg">
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-fg">
              <GithubIcon className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-fg">
              <Mail size={20} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
