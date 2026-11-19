# Mahmoud Sayed Ashour — Portfolio

Personal portfolio of **Mahmoud Sayed Ashour**, Data Analyst & Business Intelligence Developer.
Built with Next.js (App Router), React, TypeScript, Tailwind CSS, Motion, and Lucide icons.

## Features

- Home page: hero, about, experience, skills, projects, education, certifications, contact.
- `/projects`: filterable, searchable project list (filters run on real project metadata).
- `/projects/[slug]`: statically generated case studies rendered from one reusable data model.
- Original CV download from `public/`.
- SEO: per-page metadata, Open Graph / Twitter cards, generated OG image, sitemap, robots, JSON-LD.
- Accessibility: skip link, keyboard navigation, focus styles, reduced-motion support.
- No backend, database, or paid services. Contact is a verified `mailto:` link rather than a form.

## Content integrity

All content comes from the CV and project briefs supplied by the owner. No metrics, testimonials, or
business results are invented. Projects without a public screenshot use a clearly labelled illustrative
placeholder.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Structure

```
src/app/            routes (/, /projects, /projects/[slug]), sitemap, robots, OG image
src/components/     reusable UI and sections
src/data/projects.ts  project data model (single source of truth for all case studies)
src/data/profile.ts   profile, experience, skills, education, certifications
public/             CV PDF and project screenshots
```

## Configuration

No environment variables are required. Update `siteUrl` in `src/data/profile.ts` to the final production
domain so canonical URLs, the sitemap, and social previews are correct.

## Deployment

Import the repository into Vercel (framework preset: Next.js). No environment variables are needed.
