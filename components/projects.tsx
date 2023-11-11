import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
  return (
    <section className="">
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
