"use client";
import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import useSectionInView from "@/lib/hooks";
import { sendEmail } from "@/email/sendEmail";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const ContactMe = () => {
  const { ref } = useSectionInView("Contact");

  const { pending } = useFormStatus();

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="scroll-mt-28 sm:mb-40 mb-28 text-center w-[min(100%, 38rem)] flex flex-col"
      id="contact"
    >
      <SectionHeading heading="ContactMe" />
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a href="mailto:mrudulpatel04@gmail.com" className="underline">
          mrudulpatel04@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error, {
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
              },
            });
            return;
          }

          if (data) {
            toast.success("Email Sent Successfully", {
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
              },
            });
          }
        }}
        className="mt-10 flex flex-col"
      >
        <input
          type="email"
          name="email"
          required
          maxLength={500}
          className="h-14 rounded-lg borderBlack p-4"
          placeholder="Enter your Email"
          id="email"
        />
        <textarea
          name="message"
          id="message"
          required
          maxLength={500}
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Enter your Message"
        ></textarea>
        <button
          type="submit"
          className="group h-[3rem] rounded-full text-white outline-none transition-all flex items-center justify-center gap-2 w-[8rem] bg-gray-900 focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 disabled:bg-opacity-65"
          disabled={pending}
        >
          {pending ? (
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
          ) : (
            <>
              Submit{" "}
              <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </>
          )}
        </button>
      </form>
    </motion.section>
  );
};

export default ContactMe;
