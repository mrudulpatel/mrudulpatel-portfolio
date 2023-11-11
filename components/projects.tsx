"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const {setActiveSection} = useActiveSectionContext();
  const {ref, inView} = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if(inView) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection]);
  
  return (
    <section ref={ref} className="sm:mb-28 scroll-mt-28" id="projects">
      <SectionHeading heading="My Projects" />
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
