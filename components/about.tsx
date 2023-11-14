"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import useSectionInView from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-12 max-w-[45rem] text-center leading-8 scroll-mt-28"
      id="about"
    >
      <SectionHeading heading={"About Me"} />
      <p className="mb-3">
        I am <span className="font-bold">Mrudul Patel</span>. I live in Pune,
        MH. I am pursuing my B.E. Computer Engineering from JSPM Narhe Technical Campus, Pune. I
        have a <span className="font-semibold">CGPA of 8.82/10</span> in my
        academics. I am always{" "}
        <span className="font-semibold">eager to learn new technologies</span>{" "}
        that would upskill myself. I am a{" "}
        <span className="italic font-semibold">self-motivated person</span>. I
        am an{" "}
        <span className="italic">
          enthusiastic programmer and enjoy programming
        </span>
        . I have keen interest in{" "}
        <u>Java, ReactJS, NextJS, Artificial Intelligence, Machine Learning</u>.
        When I am not coding, I enjoy playing the piano.
      </p>
    </motion.section>
  );
};

export default About;
