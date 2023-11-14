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
      title: "Full Stack Developer Internship",
      location: "Fair Share IT Services Pvt. Ltd.",
      description:
        "I worked as a full stack developer",
      icon: React.createElement(CgWorkAlt),
      date: "01-08-2022 - 31-10-2022",
    },
    {
      title: "Full Stack Developer Internship",
      location: "MSEDCL, Rasta Peth, Pune",
      description: "Developed a Portal for managing the accountability of Tools & Parts provided to the technical engineers at MSEDCL, Rasta Peth, Pune.",
      icon: React.createElement(CgWorkAlt),
      date: "July 2023 - Dec 2023",
    }
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
        "This website highlights TechnoVision, featuring event details, activities, games, and streamlined registration with convenient payment methods.",
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