import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationCerts } from "@/components/EducationCerts";
import { Contact } from "@/components/Contact";
import { SectionDivider } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <EducationCerts />
      <SectionDivider />
      <Contact />
    </>
  );
}
