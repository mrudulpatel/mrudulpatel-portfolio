import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";

const ContactMe = () => {
  return (
    <section className="scroll-mt-28 sm:mb-40 mb-28 w-[min(100%, 38rem)] flex flex-col" id="contact">
      <SectionHeading heading="ContactMe" />
      <p className="text-gray-700">
        Please contact me directly at{" "}
        <a href="mailto:mrudulpatel04@gmail.com" className="underline">
          mrudulpatel04@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form action="" className="mt-10 flex flex-col">
        <input
          type="email"
          name="email"
          className="h-14 rounded-lg borderBlack p-4"
          placeholder="Enter your Email"
          id="email"
        />
        <textarea
          name="message"
          id="message"
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Enter your Message"
        ></textarea>
        <button type="submit" className="group h-[3rem] rounded-full text-white outline-none transition-all flex items-center justify-center gap-2 w-[8rem] bg-gray-900">
          Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </section>
  );
};

export default ContactMe;
