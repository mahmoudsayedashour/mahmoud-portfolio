import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Check, Info } from "lucide-react";
import { getProject, projects, relatedProjects } from "@/data/projects";
import { profile } from "@/data/profile";
import { ProjectVisual } from "@/components/ProjectVisual";
import { ProjectCard } from "@/components/ProjectCard";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.summary,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: {
      type: "article",
      title: `${p.title} | Mahmoud Sayed Ashour`,
      description: p.summary,
      url: `/projects/${p.slug}`,
    },
    twitter: { card: "summary_large_image", title: p.title, description: p.summary },
  };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const related = relatedProjects(p.slug);

  const icon = (k: string) =>
    k === "github" ? <GithubIcon className="h-4 w-4" /> : k === "linkedin" ? <LinkedinIcon className="h-4 w-4" /> : <ExternalLink size={16} aria-hidden />;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: p.title,
    description: p.summary,
    author: { "@type": "Person", name: profile.name },
    url: `${profile.siteUrl}/projects/${p.slug}`,
    about: p.category,
  };

  return (
    <article className="pt-24">
      <div className="relative overflow-hidden border-b border-line">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-5 pb-12 pt-10">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
            <ArrowLeft size={16} aria-hidden /> All projects
          </Link>
          <p className="mt-6 text-sm text-cyan-300">{p.category}</p>
          <h1 className="mt-2 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">{p.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{p.summary}</p>
          <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3 text-sm">
            {p.role && (
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted">Role</dt>
                <dd className="mt-1">{p.role}</dd>
              </div>
            )}
            {p.industry && (
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted">Industry</dt>
                <dd className="mt-1">{p.industry}</dd>
              </div>
            )}
          </dl>
          {p.links.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-3">
              {p.links.map((l, i) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={`btn ${i === 0 ? "btn-primary" : "btn-ghost"}`}>
                  {icon(l.kind)} {l.label}
                </a>
              ))}
            </div>
          )}
          {p.note && (
            <p className="mt-4 flex items-start gap-2 text-sm text-muted">
              <Info size={14} className="mt-0.5 shrink-0" aria-hidden /> {p.note}
            </p>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 pb-20">
        <div className="mt-10 overflow-hidden rounded-2xl border border-line">
          <ProjectVisual project={p} priority sizes="(min-width: 896px) 896px, 100vw" />
        </div>

        <Block title="Overview">
          <p className="leading-relaxed text-muted">{p.overview}</p>
        </Block>

        {p.challenge && (
          <Block title="Business challenge">
            <p className="leading-relaxed text-muted">{p.challenge}</p>
          </Block>
        )}

        {p.responsibilities && (
          <Block title="My role and responsibilities">
            <ul className="grid gap-2 sm:grid-cols-2">
              {p.responsibilities.map((r) => (
                <li key={r} className="flex gap-3 text-muted">
                  <Check size={16} className="mt-1 shrink-0 text-cyan-300" aria-hidden /> {r}
                </li>
              ))}
            </ul>
          </Block>
        )}

        {p.solution && (
          <Block title="Solution and approach">
            <ul className="space-y-3">
              {p.solution.map((s) => (
                <li key={s} className="flex gap-3 leading-relaxed text-muted">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" aria-hidden /> {s}
                </li>
              ))}
            </ul>
          </Block>
        )}

        <Block title="Key features and analytical capabilities">
          <ul className="grid gap-3 sm:grid-cols-2">
            {p.features.map((f) => (
              <li key={f} className="card flex gap-3 rounded-xl p-4 text-sm leading-relaxed">
                <Check size={16} className="mt-0.5 shrink-0 text-cyan-300" aria-hidden /> {f}
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Technologies and tools">
          <ul className="flex flex-wrap gap-2">
            {p.technologies.map((t) => (
              <li key={t} className="chip !px-3 !py-1.5 !text-sm">{t}</li>
            ))}
          </ul>
        </Block>

        {p.businessValue && (
          <Block title="Business value">
            <p className="leading-relaxed text-muted">{p.businessValue}</p>
          </Block>
        )}

        <Block title="Project visuals">
          {p.screenshot ? (
            <p className="text-sm text-muted">Screenshot captured from the public project, shown above.</p>
          ) : (
            <p className="text-sm text-muted">
              No public screenshot is available for this project, so the visual above is an illustrative placeholder, not project evidence.
            </p>
          )}
        </Block>
      </div>

      <section className="border-t border-line bg-surface/40">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-2xl font-semibold">Related projects</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <ProjectCard key={r.slug} project={r} />
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  );
}
