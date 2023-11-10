import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {FaReact} from "react-icons/fa";
import {LuGraduationCap} from "react-icons/lu";
import upmenu from "@/public/upmenu.jpeg";
import mseb from "@/public/mseb.jpeg";
import technovision from "@/public/technovision.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    }
] as const

export const experiencesData = [
    {
      title: "Graduated bootcamp",
      location: "Miami, FL",
      description:
        "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
      icon: React.createElement(LuGraduationCap),
      date: "2019",
    },
    {
      title: "Front-End Developer",
      location: "Orlando, FL",
      description:
        "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
      icon: React.createElement(CgWorkAlt),
      date: "2019 - 2021",
    },
    {
      title: "Full-Stack Developer",
      location: "Houston, TX",
      description:
        "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
      icon: React.createElement(FaReact),
      date: "2021 - present",
    },
  ] as const;
  
  export const projectsData = [
    {
      title: "UpMenu",
      description:
        "I worked as a full-stack developer on this project which is based on Online food ordering system for Canteens.",
      tags: ["React", "Javascript", "Google Firebase", "CSS"],
      imageUrl: upmenu,
    },
    {
      title: "TechnoVision",
      description:
        "This website was developed for TechnoVision A Technical Event organised in my college. It was used to showcase all the activities and games of the event and also accept registrations with payment methods.",
      tags: ["React", "Javascript", "Google Firebase", "Bootstrap CSS"],
      imageUrl: technovision,
    },
    {
      title: "T & P Manager | MSEDCL",
      description:
        "Will add later",
      tags: ["React", "Next.js 13.5", "SQL", "Tailwind CSS", "Prisma", "Expo", "React-Native"],
      imageUrl: mseb,
    },
  ] as const;
  
  export const skillsData = [
    "Java",
    "MySQL",
    "React",
    "JavaScript",
    "Python",
    "CSS",
    "Google Firebase",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
  ] as const;