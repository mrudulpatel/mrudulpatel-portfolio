"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import profilephoto from "@/public/profilephoto.jpg";

const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center  sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={profilephoto}
              width={192}
              height={192}
              alt="profile-photo"
              quality={95}
              priority={true}
              className="rounded-full h-24 w-24 border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="text-4xl bottom-0 right-0 absolute"
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      >
        <span className="font-bold">Hello, I&apos;m Mrudul Patel.</span> I am a
        B.E. Computer Engineer graduate from JSPM Narhe Technical Campus. I live
        in Pune. I am a{" "}
        <span className="font-bold">full stack web developer</span>. I enjoy
        programming and I am proficient in{" "}
        <span className="font-bold underline">Java and ReactJS</span>.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row justify-center gap-2 px-4 items-center text-lg font-medium"
      >
        <Link
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          href={"#contact"}
        >
          Contact Me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link>

        <Link
          download={true}
          href="/CV.pdf"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition border border-black/10"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </Link>

        <Link
          target="_blank"
          href="https://www.linkedin.com/in/mrudul-patel-57039b21a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className="bg-white p-4 flex items-center text-gray-700 gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-110  active:scale-105 transition border border-black/10"
        >
          <BsLinkedin />
        </Link>

        <Link
          target="_blank"
          href="https://github.com/mrudulpatel"
          className="bg-white p-4 flex items-center text-gray-700 gap-2 rounded-full text-[1.35rem] outline-none focus:scale-[1.15] hover:scale-110  active:scale-105 transition border border-black/10"
        >
          <FaGithubSquare />
        </Link>
      </motion.div>
    </section>
  );
};

export default Intro;
