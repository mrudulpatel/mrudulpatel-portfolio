import About from "@/components/about";
import Experience from "@/components/exp";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/sectionDivider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex items-center flex-col px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
    </main>
  )
}
