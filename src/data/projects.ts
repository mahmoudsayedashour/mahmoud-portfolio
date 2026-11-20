export type FilterTag =
  | "Business Intelligence"
  | "Data Analytics"
  | "Python & Automation"
  | "Full-Stack Development"
  | "E-Commerce"
  | "Healthcare"
  | "Government & Operations";

export type ProjectLink = {
  label: string;
  href: string;
  kind: "live" | "github" | "linkedin";
  note?: string;
};

export type ProjectVisual = {
  src: string;
  alt: string;
  /** "screenshot" = captured from the real public project; "concept" = illustrative visualization. */
  kind: "screenshot" | "concept";
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  tags: FilterTag[];
  featured: boolean;
  summary: string;
  overview: string;
  industry?: string;
  role?: string;
  challenge?: string;
  responsibilities?: string[];
  solution?: string[];
  features: string[];
  technologies: string[];
  businessValue?: string;
  links: ProjectLink[];
  /** Local image asset shown on cards and case-study pages. */
  visual: ProjectVisual;
  note?: string;
};

const baseProjects: Omit<Project, "visual">[] = [
  {
    slug: "greko-ytd-sales-analytics-dashboard",
    title: "Greko Egypt YTD Sales Analytics Dashboard",
    shortTitle: "Greko YTD Sales Dashboard",
    category: "Business Intelligence / Sales Analytics / FMCG",
    tags: ["Business Intelligence", "Data Analytics"],
    featured: true,
    summary:
      "Interactive sales analytics dashboard that centralizes sales, returns, targets, customers, and commercial performance indicators into one management reporting platform.",
    overview:
      "Designed and developed an interactive sales analytics dashboard for Greko Egypt, an FMCG dairy business. The solution transforms sales, returns, targets, and customer information into a centralized performance-monitoring experience for management and commercial teams.",
    industry: "FMCG — Dairy Products",
    role: "Data Analyst & Dashboard Developer",
    challenge:
      "Sales performance needed to be monitored across products, customers, sales channels, managers, and time periods. Comparing actual results with budgets and the equivalent prior-year period required consistent calculations, clear visualizations, and accessible reporting.",
    responsibilities: [
      "Data preparation",
      "KPI definitions",
      "Business-rule validation",
      "Dashboard development",
      "Interactive reporting",
      "Deployment",
    ],
    solution: [
      "Executive overview covering YTD sales, achievement against budget, growth, returns, customer metrics, and monthly trends.",
      "Deep-dive analysis by SKU, category, customer, channel, returns, growth, and sales manager performance.",
      "Customer opportunity analysis to identify accounts and outlets buying or not buying selected categories or SKUs, with channel-to-account-to-outlet hierarchies.",
      "Monthly comparison matrix with multi-customer selection, category and SKU drill-down, and 2025 vs. 2026 monthly sales and return-rate comparisons.",
      "Defined sales and returns rules, prior-year comparisons aligned to equivalent periods, and return rates recalculated from underlying totals rather than averaged percentages.",
    ],
    features: [
      "Executive YTD performance overview",
      "Sales achievement against targets",
      "Year-over-year equivalent-period comparisons",
      "Returns and growth analysis",
      "Monthly performance trends",
      "Category and SKU analysis",
      "Customer, channel, and sales manager performance",
      "Customer opportunity identification",
      "Monthly comparison matrices",
      "Interactive filters and drill-down",
      "Excel and PDF exports",
      "AI business assistant interface",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Chart.js",
      "Excel",
      "Vercel",
      "Vercel Blob",
      "Serverless APIs",
    ],
    businessValue:
      "Provides a unified view of commercial performance, helps teams spot sales gaps and distribution opportunities, and makes detailed FMCG sales analysis easier to explore and share. This case study describes implemented capabilities, not a quantified financial impact.",
    links: [
      {
        label: "View Live Project",
        href: "https://ytd-greko-dashboard.vercel.app",
        kind: "live",
        note: "Authentication required.",
      },
    ],
    note: "The live dashboard requires sign-in and contains confidential business data, so no screenshot is published. The visual shown is a concept visualization of the documented features.",
  },
  {
    slug: "greko-automated-daily-sales-dashboard",
    title: "Greko Egypt Automated Daily Sales Analytics Dashboard",
    shortTitle: "Greko Daily Sales Platform",
    category: "Business Intelligence / Full-Stack Analytics / Automation",
    tags: ["Business Intelligence", "Python & Automation", "Full-Stack Development"],
    featured: true,
    summary:
      "Cloud-hosted automated sales analytics platform integrating Odoo ERP transactions with a centralized PostgreSQL database for timely operational sales reporting.",
    overview:
      "Developed an interactive, cloud-hosted sales analytics platform for Greko Egypt. The solution integrates Odoo ERP sales transactions with a centralized PostgreSQL database and transforms operational data into timely management insights across sales, targets, returns, customers, products, and sales teams.",
    industry: "FMCG — Dairy Products",
    role: "Data Analyst & BI Developer",
    solution: [
      "Automated Odoo ERP data synchronization with incremental updates and sync status monitoring.",
      "Daily and month-to-date reporting with dynamic date and tons/cartons filters.",
      "Excel reference-data updates and centralized cloud reporting.",
    ],
    features: [
      "Automated Odoo ERP data synchronization",
      "Incremental data updates",
      "Synchronization status monitoring",
      "Daily and month-to-date sales analysis",
      "Dynamic date and tons/cartons filters",
      "Monthly target tracking",
      "Achievement, working-day progress, and required daily sales pace",
      "2025 vs. 2026 equivalent-period comparisons",
      "Returns monitoring",
      "Category and SKU performance",
      "Sales channel and customer analysis",
      "Sales manager and representative performance",
      "Geographic sales coverage analysis",
      "Centralized cloud reporting",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Neon",
      "Odoo ERP API",
      "Excel",
      "GitHub",
      "Vercel",
    ],
    businessValue:
      "Converted ERP transactional data into an accessible analytical platform, replacing fragmented manual reporting with a single interactive source of sales performance information and supporting timely operational decisions.",
    links: [
      {
        label: "View Live Project",
        href: "https://greko-daily-sales.vercel.app",
        kind: "live",
        note: "Authentication required.",
      },
    ],
    note: "The live dashboard requires authentication. No ERP data, credentials, or internal endpoints are shown on this site; the visual is a concept visualization.",
  },
  {
    slug: "varel-antiques",
    title: "VAREL ANTIQUES",
    shortTitle: "VAREL ANTIQUES",
    category: "Full-Stack Development / E-Commerce Systems",
    tags: ["Full-Stack Development", "E-Commerce"],
    featured: true,
    summary:
      "Production-deployed premium e-commerce platform for a home decor and natural stone products brand, with a responsive storefront and a secure admin management platform.",
    overview:
      "Designed and developed a production-deployed e-commerce platform for a premium home decor and natural stone products brand. The solution combines a responsive bilingual storefront with a secure administration dashboard, centralized product and inventory management, and operational reporting.",
    role: "Full-Stack Developer",
    responsibilities: [
      "End-to-end development and integration of the storefront",
      "Admin workflows",
      "Database-backed catalog",
      "Order lifecycle",
      "Inventory controls",
      "Deployment",
      "Functional testing",
    ],
    features: [
      "Premium responsive storefront",
      "Product galleries and catalog navigation",
      "Product search and filtering",
      "Favorites",
      "Dynamic product categories with admin-controlled Show / Hide visibility",
      "Secure administration dashboard",
      "Product and inventory management",
      "Customer order management",
      "Financial and operational KPIs",
      "Cash on Delivery and InstaPay checkout options",
      "WhatsApp order handoff",
      "Stock deduction after order confirmation",
      "Stock restoration after cancellation",
      "Supabase PostgreSQL backend with authentication and Row-Level Security",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "Vercel",
      "GitHub",
    ],
    businessValue:
      "Created an integrated digital storefront and management platform that supports product administration, customer orders, inventory control, and operational reporting.",
    links: [
      { label: "View Live Project", href: "https://varel-antiques.vercel.app", kind: "live" },
    ],
    note: "Admin access is restricted; no credentials are published.",
  },
  {
    slug: "saudi-ecommerce-data-analysis",
    title: "Saudi Arabia E-Commerce Data Analysis",
    shortTitle: "Saudi E-Commerce Analysis",
    category: "E-Commerce Analytics",
    tags: ["Data Analytics", "Business Intelligence", "E-Commerce"],
    featured: false,
    summary:
      "Analysis of orders, customer behavior, products, payments, shipping, and vendor fulfillment, with an executive dashboard for product demand and service levels.",
    overview:
      "Analyzed datasets covering orders, customer behavior, product catalogs, payments, shipping performance, and vendor fulfillment. Developed an executive dashboard to identify product demand patterns, monitor shipping service levels, and support commercial analysis.",
    features: [
      "Analysis of orders, customer cohorts, product catalogs, and payments",
      "Identification of high-demand product categories",
      "Shipping service-level (SLA) monitoring",
      "Vendor fulfillment quality monitoring",
      "Customer purchasing behavior analysis",
      "Executive dashboard for commercial analysis",
    ],
    technologies: ["Data Analysis", "Dashboard Design"],
    links: [
      { label: "View LinkedIn Project", href: "https://lnkd.in/p/etTDR8DG", kind: "linkedin" },
    ],
  },
  {
    slug: "saudi-agricultural-organization-analytics",
    title: "Saudi Agricultural Organization Analytics",
    shortTitle: "Agricultural Organization Analytics",
    category: "Operational Analytics / Business Intelligence",
    tags: ["Business Intelligence", "Government & Operations", "Data Analytics"],
    featured: false,
    summary:
      "Multi-sheet relational analytical workbook with automated service trackers, dynamic slicers, branch comparisons, and employee performance monitoring.",
    overview:
      "Developed a multi-sheet relational analytical workbook with automated service trackers, dynamic slicers, branch comparisons, and employee performance monitoring. Supported weekly and monthly productivity analysis and executive reporting.",
    features: [
      "Multi-sheet relational workbook model",
      "Automated service trackers",
      "Dynamic slicers for fast analysis",
      "Branch operations benchmarking",
      "Employee throughput tracking, weekly and monthly",
      "Executive dashboard for organizational visibility",
    ],
    technologies: ["Advanced Excel", "Slicers", "KPI Trackers"],
    links: [
      { label: "View LinkedIn Project", href: "https://lnkd.in/p/eWg59A4M", kind: "linkedin" },
    ],
  },
  {
    slug: "saudi-long-term-care-hospital-workforce-analytics",
    title: "Saudi Long-Term Care Hospital Workforce Analytics",
    shortTitle: "Hospital Workforce Analytics",
    category: "Healthcare Analytics",
    tags: ["Healthcare", "Business Intelligence", "Data Analytics"],
    featured: false,
    summary:
      "Workload and staffing analysis across doctors, nurses, and administrative personnel, delivered through three specialized dashboards.",
    overview:
      "Analyzed workload distribution and staffing activities across doctors, nurses, and administrative personnel. Developed three specialized dashboards measuring staff utilization using task frequency and duration. Supported workforce visibility and shift-planning analysis.",
    features: [
      "Workload and staffing analysis across doctors, nurses, and administrative personnel",
      "Standardization of daily tasks",
      "Three tailored dashboards for staff utilization",
      "Utilization measured by task frequency and duration",
      "Support for shift distribution and shift-planning analysis",
    ],
    technologies: ["Workload Analysis", "Dashboard Design"],
    links: [
      { label: "View LinkedIn Project", href: "https://lnkd.in/p/ee7CpSTm", kind: "linkedin" },
    ],
  },
  {
    slug: "saudi-municipal-rural-affairs-performance-analysis",
    title: "Saudi Ministry of Municipal and Rural Affairs Performance Analysis",
    shortTitle: "Municipal Performance Analysis",
    category: "Government / Operational Analytics",
    tags: ["Government & Operations", "Data Analytics", "Business Intelligence"],
    featured: false,
    summary:
      "Cleaned and standardized municipal service records to analyze operational bottlenecks and support resource allocation and service performance evaluation.",
    overview:
      "Cleaned and standardized municipal service records, analyzed operational bottlenecks, and created interactive reporting to support resource allocation and service performance evaluation.",
    features: [
      "Cleaning and standardization of municipal service logs",
      "Operational bottleneck analysis across regional sectors",
      "Interactive analytical reports",
      "Support for resource allocation and service response-time improvement",
    ],
    technologies: ["Data Cleaning", "Interactive Reporting"],
    links: [
      { label: "View LinkedIn Project", href: "https://lnkd.in/p/ezVBectT", kind: "linkedin" },
    ],
  },
  {
    slug: "prince-sattam-university-geospatial-analytics",
    title: "Prince Sattam Bin Abdulaziz University",
    shortTitle: "PSAU Geospatial Analytics",
    category: "Python / Data Extraction / Geospatial Analytics",
    tags: ["Python & Automation", "Data Analytics"],
    featured: false,
    summary:
      "Python-based extraction and processing of academic and institutional datasets, with cleaning, transformation, and visual geospatial mapping.",
    overview:
      "Extracted and processed academic and institutional datasets using Python. Performed data cleaning, transformation, and visual geospatial mapping.",
    features: [
      "Extraction of academic and institutional records",
      "Data cleaning and transformation",
      "Visual geospatial mapping",
    ],
    technologies: ["Python", "Data Cleaning", "Data Transformation"],
    links: [
      { label: "View LinkedIn Project", href: "https://lnkd.in/p/ecKPdvQC", kind: "linkedin" },
    ],
  },
  {
    slug: "netherlands-companies-data-extraction",
    title: "Netherlands Companies Data Extraction",
    shortTitle: "Dutch Companies Extraction",
    category: "Python Automation / Web Scraping",
    tags: ["Python & Automation", "Data Analytics"],
    featured: false,
    summary:
      "Automated extraction of company information from Google Maps for more than 50,000 Dutch companies, structured for analysis and business use.",
    overview:
      "Automated the extraction of company information from Google Maps for more than 50,000 Dutch companies. The collected fields included company names, contact details, addresses, coordinates, and ratings. Records were structured for subsequent analysis and business use.",
    features: [
      "Automated Google Maps data extraction",
      "More than 50,000 Dutch company profiles",
      "Fields: names, contact details, addresses, coordinates, and ratings",
      "Records structured into optimized flat files for analysis and business use",
    ],
    technologies: ["Python", "Web Scraping", "Requests", "BeautifulSoup"],
    links: [
      { label: "View LinkedIn Project", href: "https://lnkd.in/p/e_pe9jgE", kind: "linkedin" },
    ],
  },
  {
    slug: "saudi-retail-company-sales-analytics",
    title: "Saudi Retail Company Sales Analytics",
    shortTitle: "Retail Sales Analytics",
    category: "Retail Analytics / Sales Performance",
    tags: ["Data Analytics", "Business Intelligence"],
    featured: false,
    summary:
      "Point-of-sale analysis of regional sales patterns, product movement, seasonal demand, and store-level performance, with dashboards for management reporting.",
    overview:
      "Analyzed point-of-sale data to identify regional sales patterns, product movement, seasonal demand, and store-level performance. Created interactive dashboards to support inventory planning and management reporting.",
    features: [
      "Regional sales pattern analysis",
      "Product movement (velocity) analysis",
      "Seasonal demand and store-level trend analysis",
      "Interactive dashboards for inventory planning and management reporting",
    ],
    technologies: ["POS Data Analysis", "Dashboard Design"],
    links: [],
    note: "No public project link is available for this engagement.",
  },
];

const conceptCaption =
  "Concept visualization based on the documented project features. It uses illustrative sample shapes, not real data, and is not a screenshot of the project.";

const concept = (slug: string, alt: string): ProjectVisual => ({
  src: `/projects/${slug}.jpg`,
  alt,
  kind: "concept",
  caption: conceptCaption,
});

const visuals: Record<string, ProjectVisual> = {
  "greko-ytd-sales-analytics-dashboard": concept(
    "greko-ytd-sales-analytics-dashboard",
    "Concept visualization of a YTD sales analytics dashboard with trend, target achievement, returns, category, SKU and monthly comparison panels",
  ),
  "greko-automated-daily-sales-dashboard": concept(
    "greko-automated-daily-sales-dashboard",
    "Concept visualization of a daily and month-to-date sales dashboard with ERP synchronization status, targets, category and coverage panels",
  ),
  "varel-antiques": {
    src: "/projects/varel-antiques.jpg",
    alt: "Screenshot of the VAREL ANTIQUES public storefront home page showing the hero banner and navigation",
    kind: "screenshot",
    caption: "Screenshot of the public VAREL ANTIQUES storefront, captured from the live website. The administration area is private and is not shown.",
  },
  "saudi-ecommerce-data-analysis": concept(
    "saudi-ecommerce-data-analysis",
    "Concept visualization of an e-commerce analytics dashboard covering orders, products, payments, shipping service level and vendor fulfillment",
  ),
  "saudi-agricultural-organization-analytics": concept(
    "saudi-agricultural-organization-analytics",
    "Concept visualization of an operational dashboard with branch comparison, weekly employee throughput and an automated service tracker",
  ),
  "saudi-long-term-care-hospital-workforce-analytics": concept(
    "saudi-long-term-care-hospital-workforce-analytics",
    "Concept visualization of healthcare workforce dashboards showing staff utilization by shift, task frequency versus duration and shift distribution",
  ),
  "saudi-municipal-rural-affairs-performance-analysis": concept(
    "saudi-municipal-rural-affairs-performance-analysis",
    "Concept visualization of a municipal service performance dashboard with requests by region, process bottlenecks and response time trend",
  ),
  "prince-sattam-university-geospatial-analytics": concept(
    "prince-sattam-university-geospatial-analytics",
    "Concept visualization of a geospatial analytics interface with a point map, area distribution and processed records table",
  ),
  "netherlands-companies-data-extraction": concept(
    "netherlands-companies-data-extraction",
    "Concept visualization of a Python data extraction pipeline with extraction log, geographic mapping and structured company records",
  ),
  "saudi-retail-company-sales-analytics": concept(
    "saudi-retail-company-sales-analytics",
    "Concept visualization of a retail sales dashboard with regional sales, seasonal demand, store performance and product movement",
  ),
};

export const projects: Project[] = baseProjects.map((p) => ({ ...p, visual: visuals[p.slug] }));

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export function relatedProjects(slug: string, limit = 3): Project[] {
  const cur = getProject(slug);
  if (!cur) return [];
  return projects
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      p,
      score: p.tags.filter((t) => cur.tags.includes(t)).length * 2 + (p.featured && cur.featured ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.p);
}
