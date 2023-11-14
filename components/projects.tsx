"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import useSectionInView from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <section ref={ref} className="sm:mb-28 mb-28 scroll-mt-28" id="projects">
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
