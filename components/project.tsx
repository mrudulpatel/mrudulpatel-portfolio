import { projectsData } from "@/lib/data";
import Image, { StaticImageData } from "next/image";
import React from "react";

type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData;
};

function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps): React.JSX.Element {
  return (
    <section className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0">
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
        <h3 className="font-semibold text-2xl">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="bg-black/70 px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full text-white"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        quality={95}
        className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl"
      />
    </section>
  );
}

export default Project;
