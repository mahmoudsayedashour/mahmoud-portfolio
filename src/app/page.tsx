import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationCerts } from "@/components/EducationCerts";
import { Contact } from "@/components/Contact";
import { SectionConnector } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionConnector />
      <About />
      <SectionConnector />
      <Experience />
      <SectionConnector />
      <Skills />
      <SectionConnector />
      <ProjectsSection />
      <SectionConnector />
      <EducationCerts />
      <SectionConnector />
      <Contact />
    </>
  );
}
