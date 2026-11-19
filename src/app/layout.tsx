import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DataFlowBackground } from "@/components/DataFlowBackground";
import { profile } from "@/data/profile";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });

const description =
  "Portfolio of Mahmoud Sayed Ashour — Data Analyst and Business Intelligence Developer specializing in Python, SQL, Power BI, analytics automation, and full-stack analytics applications.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: "Mahmoud Sayed Ashour | Data Analyst & BI Developer",
    template: "%s | Mahmoud Sayed Ashour",
  },
  description,
  keywords: [
    "Data Analyst",
    "Business Intelligence Developer",
    "Power BI",
    "Python",
    "SQL",
    "Dashboards",
    "Analytics Automation",
    "Egypt",
  ],
  authors: [{ name: profile.name, url: profile.links.linkedin }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: `${profile.name} — Portfolio`,
    title: "Mahmoud Sayed Ashour | Data Analyst & BI Developer",
    description,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahmoud Sayed Ashour | Data Analyst & BI Developer",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050914",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Data Analyst & Business Intelligence Developer",
  email: `mailto:${profile.email}`,
  url: profile.siteUrl,
  address: { "@type": "PostalAddress", addressLocality: "Giza", addressCountry: "EG" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Menoufia University" },
  sameAs: [profile.links.linkedin, profile.links.github, profile.links.hackerrank, profile.links.codeforces],
  knowsAbout: ["Business Intelligence", "Power BI", "Python", "SQL", "Data Analytics", "Analytics Automation"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <DataFlowBackground />
        <Navbar />
        <main id="main" className="relative z-10">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
