"use client";
import useSectionInView from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  return (
    <section id="experience" ref={ref}>
      <SectionHeading heading="My Experience" />
      <VerticalTimeline>
        {
            // experiencesData.map((exp, i) => (

            // ))
        }
      </VerticalTimeline>
    </section>
  );
}
