"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-10 px-4 text-center text-gray-500"
    >
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Mrudul Patel. All Rights Reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website: </span>built with
        ReactJS, NextJS 14 (App Router & Server Actions), TypeScript,
        TailwindCSS, Framer Motion, React Email & Resend. Hosted on Vercel.
      </p>
    </motion.footer>
  );
};

export default Footer;
