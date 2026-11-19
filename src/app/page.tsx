import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationCerts } from "@/components/EducationCerts";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <ProjectsSection />
      <EducationCerts />
      <Contact />
    </>
  );
}
