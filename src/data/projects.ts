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
  /** "screenshot" = captured from the real public project; "institutional" = authentic branding or sector photography. */
  kind: "screenshot" | "institutional";
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
    links: [],
    note: "The live dashboard requires sign-in and contains confidential business data. The visual above presents the official corporate brand identity of Greko Egypt.",
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
    links: [],
    note: "The live dashboard requires authentication. No confidential ERP transactional data or internal endpoints are exposed; the visual above presents the official corporate brand identity of Greko Egypt.",
  },
  {
    slug: "varel-antiques",
    title: "VAREL ANTIQUES | Full-Stack E-Commerce & Business Intelligence Platform",
    shortTitle: "VAREL ANTIQUES",
    category: "Full-Stack Development / E-Commerce & Business Intelligence",
    tags: ["Full-Stack Development", "Business Intelligence", "Data Analytics", "E-Commerce"],
    featured: true,
    summary:
      "Integrated full-stack e-commerce and business intelligence platform connecting a responsive storefront, centralized administrative management, Supabase PostgreSQL database, automated inventory workflows, and comprehensive sales analytics.",
    overview:
      "Designed and developed a fully integrated e-commerce management platform connecting a premium customer-facing storefront with a centralized administrative system, cloud-based PostgreSQL database, automated inventory management, order processing workflows, and comprehensive business intelligence analytics.\n\nThe solution combines full-stack web development, database engineering, operational automation, and advanced sales analytics into one centralized business management platform.",
    role: "Full-Stack Developer & BI Analyst",
    industry: "Luxury Home Decor & Natural Stone Products",
    responsibilities: [
      "End-to-end full-stack architecture and responsive customer storefront development",
      "Dedicated administrative management dashboard and product catalog control system",
      "Supabase PostgreSQL database schema design, relational data modeling, and constraints",
      "Automated inventory deduction upon order confirmation and restoration upon cancellation",
      "Database-level protection against negative stock and transaction-safe operations",
      "Advanced business intelligence analytics dashboard and sales performance KPI reporting",
      "Order lifecycle tracking, customer checkout workflows, and WhatsApp Business integration",
      "Production deployment on Vercel and version control workflow via GitHub",
    ],
    solution: [
      "Customer-Facing Storefront: Developed a premium, responsive e-commerce storefront with product catalog browsing, category navigation, product details, cart functionality, real-time availability, and WhatsApp Business integration.",
      "Administrative Management System: Engineered a dedicated administrative dashboard connected to the storefront for complete product lifecycle management, category visibility controls, order processing, and operational reporting.",
      "PostgreSQL Database & Inventory Automation: Designed a transactional Supabase PostgreSQL database with automated inventory deduction on confirmation, stock restoration on cancellation, negative-stock prevention, and duplicate prevention.",
      "Business Intelligence & Sales Analytics: Built an administrative analytics suite delivering comprehensive visibility into total orders, revenue performance, order status distributions, product/category demand, and stock velocity.",
    ],
    features: [
      "E-Commerce Storefront: Premium, responsive online storefront with seamless catalog browsing and shopping cart functionality",
      "E-Commerce Storefront: Product catalog, dynamic category management, and detailed product views",
      "E-Commerce Storefront: Customer checkout, order submission, and WhatsApp Business integration",
      "E-Commerce Storefront: Real-time product availability dynamically synced with centralized inventory data",
      "Admin Management: Dedicated administrative dashboard connected directly to the storefront",
      "Admin Management: Product creation, editing, category management, and visibility controls",
      "Admin Management: Order confirmation and cancellation workflows with centralized monitoring",
      "Admin Management: Operational KPIs and administrative reporting for business oversight",
      "Database & Automation: Supabase PostgreSQL database integration storing centralized products, orders, and inventory",
      "Database & Automation: Automated inventory deduction when customer orders are confirmed",
      "Database & Automation: Automatic stock restoration when confirmed orders are cancelled",
      "Database & Automation: Database-level protection against negative stock and transaction-safe operations",
      "Database & Automation: Prevention of duplicate inventory deductions or restorations with database security and access controls",
      "BI & Analytics: Total orders, sales KPIs, revenue, and financial performance analysis",
      "BI & Analytics: Confirmed, pending, and cancelled order analysis with status distribution tracking",
      "BI & Analytics: Sales and demand performance analysis by product and category",
      "BI & Analytics: Inventory and stock availability analysis with operational performance monitoring",
      "BI & Analytics: Interactive management dashboards providing comprehensive business intelligence across multiple dimensions",
    ],
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "SQL",
      "Database Functions & APIs",
      "Vercel",
      "GitHub",
    ],
    businessValue:
      "Developed a centralized digital commerce and analytics solution that connects customer orders, administrative operations, inventory management, and business performance reporting, enabling more efficient operations and data-driven decision-making.",
    links: [],
    note: "Administrative access is restricted to authorized personnel; no credentials or private database endpoints are published.",
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

const visuals: Record<string, ProjectVisual> = {
  "greko-ytd-sales-analytics-dashboard": {
    src: "/projects/greko-ytd-sales-analytics-dashboard.jpg",
    alt: "Official branding and executive cover for Greko Egypt for Food Industries YTD Sales Analytics Dashboard",
    kind: "institutional",
    caption: "Official corporate identity cover for Greko Egypt for Food Industries, featuring authentic brand mark and commercial analytics platform typography.",
  },
  "greko-automated-daily-sales-dashboard": {
    src: "/projects/greko-automated-daily-sales-dashboard.jpg",
    alt: "Official branding and operations cover for Greko Egypt for Food Industries Automated Daily Sales Dashboard",
    kind: "institutional",
    caption: "Official corporate identity cover for Greko Egypt for Food Industries with distinct operations composition, featuring authentic brand mark and daily reporting telemetry.",
  },
  "varel-antiques": {
    src: "/projects/varel-antiques.jpg",
    alt: "Screenshot of the VAREL ANTIQUES public storefront home page showing the hero banner and navigation",
    kind: "screenshot",
    caption: "Screenshot of the public VAREL ANTIQUES storefront, captured from the live website. The administration area is private and is not shown.",
  },
  "saudi-ecommerce-data-analysis": {
    src: "/projects/saudi-ecommerce-data-analysis.jpg",
    alt: "Authentic automated fulfillment and logistics center photography representing Saudi E-Commerce Platform",
    kind: "institutional",
    caption: "Authentic sector photography of modern automated storage and fulfillment logistics operations, representing the confidential Saudi e-commerce platform.",
  },
  "saudi-agricultural-organization-analytics": {
    src: "/projects/saudi-agricultural-organization-analytics.jpg",
    alt: "Official emblem of the Ministry of Environment, Water and Agriculture (Saudi Arabia)",
    kind: "institutional",
    caption: "Official institutional emblem and corporate cover for the Ministry of Environment, Water and Agriculture (MEWA), Kingdom of Saudi Arabia.",
  },
  "saudi-long-term-care-hospital-workforce-analytics": {
    src: "/projects/saudi-long-term-care-hospital-workforce-analytics.jpg",
    alt: "Authentic photography of modern healthcare facility (King Fahad Medical City, Riyadh) representing Saudi Long-Term Care Hospital",
    kind: "institutional",
    caption: "Authentic sector photography of modern hospital facility architecture in Riyadh, representing the confidential Saudi long-term care healthcare institution.",
  },
  "saudi-municipal-rural-affairs-performance-analysis": {
    src: "/projects/saudi-municipal-rural-affairs-performance-analysis.jpg",
    alt: "Official emblem of the Ministry of Municipalities and Housing (Saudi Arabia)",
    kind: "institutional",
    caption: "Official institutional emblem and corporate cover for the Ministry of Municipalities and Housing (MOMAH / MOMRAH), Kingdom of Saudi Arabia.",
  },
  "prince-sattam-university-geospatial-analytics": {
    src: "/projects/prince-sattam-university-geospatial-analytics.jpg",
    alt: "Official emblem of Prince Sattam bin Abdulaziz University (Al-Kharj, Saudi Arabia)",
    kind: "institutional",
    caption: "Official university emblem and academic cover for Prince Sattam bin Abdulaziz University (PSAU), Kingdom of Saudi Arabia.",
  },
  "netherlands-companies-data-extraction": {
    src: "/projects/netherlands-companies-data-extraction.jpg",
    alt: "Official logo of the Kamer van Koophandel (KvK - Netherlands Chamber of Commerce)",
    kind: "institutional",
    caption: "Official institutional logo and corporate cover for the Kamer van Koophandel (KvK - Dutch Chamber of Commerce), Netherlands.",
  },
  "saudi-retail-company-sales-analytics": {
    src: "/projects/saudi-retail-company-sales-analytics.jpg",
    alt: "Authentic photography of a modern commercial retail shopping center in Riyadh representing Saudi Retail Company",
    kind: "institutional",
    caption: "Authentic sector photography of a modern retail commercial center in Riyadh, representing the confidential Saudi retail enterprise.",
  },
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
