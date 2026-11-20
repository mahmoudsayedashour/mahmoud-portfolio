"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { href: "/#about", id: "about", label: "About" },
  { href: "/#experience", id: "experience", label: "Experience" },
  { href: "/#skills", id: "skills", label: "Skills" },
  { href: "/#projects", id: "projects", label: "Projects" },
  { href: "/#education", id: "education", label: "Education" },
  { href: "/#contact", id: "contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollActiveId, setScrollActiveId] = useState<string>("");
  const activeId =
    pathname !== "/" ? (pathname.startsWith("/projects") ? "projects" : "") : scrollActiveId;

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const elements = nav
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        }
        if (visible.size > 0) {
          const top = [...visible.entries()].sort((a, b) => b[1] - a[1])[0][0];
          setScrollActiveId(top);
        } else if (window.scrollY < 200) {
          setScrollActiveId("");
        }
      },
      { rootMargin: "-28% 0px -48% 0px", threshold: [0.05, 0.2, 0.45] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? "glass border-x-0 border-t-0" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display font-semibold"
          aria-label="Mahmoud Sayed Ashour — home"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--btn-a)] to-[var(--btn-b)] text-sm font-bold text-white">
            MA
          </span>
          <span className="hidden sm:inline">Mahmoud Ashour</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => {
            const active = activeId === n.id;
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? "location" : undefined}
                className={`relative rounded-full px-3.5 py-2 text-sm transition-colors ${
                  active ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {n.label}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-x-3 bottom-1 h-[2px] rounded-full bg-gradient-to-r from-brand to-accent transition-opacity duration-200 ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}
          <ThemeToggle className="ml-2" />
          <a href={profile.cv} download className="btn btn-primary ml-2 !py-2">
            <Download size={16} aria-hidden /> Download CV
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-line"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="mx-auto max-w-6xl px-5 pb-5 lg:hidden">
          <ul className="flex flex-col gap-1">
            {nav.map((n) => {
              const active = activeId === n.id;
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-3 text-base transition-colors ${
                      active ? "bg-accent/10 text-accent" : "text-fg hover:bg-fg/5"
                    }`}
                  >
                    {n.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <a href={profile.cv} download className="btn btn-primary w-full">
                <Download size={16} aria-hidden /> Download CV
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
