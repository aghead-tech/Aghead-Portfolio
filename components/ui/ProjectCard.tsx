/*--====-- Project Card UI Component --====--*/

"use client";

import React from "react";

interface ProjectCardProps {
  title: string;
  image?: string;
  technologies: string[];
  className?: string;
}

export function ProjectCard({
  title,
  technologies,
  className = "",
}: ProjectCardProps) {
  return (
    <div
      className={`
        p-6 sm:p-7
        bg-acGraylight2/94
        backdrop-blur-[20px]
        z-10
        rounded-3xl
        border-2
        border-acDarkGray
        hover:border-theme-start
        group
        min-h-[220px]
        flex
        flex-col
        justify-between
        ${className}
      `}
    >
      {/*--====-- Project Title --====--*/}
      <div>
        <span className="text-sm font-medium uppercase tracking-wider text-acGray">
          Featured Project
        </span>

        <h3 className="mt-3 text-2xl xl:text-3xl font-semibold group-hover:gradient-text">
          {title}
        </h3>
      </div>

      {/*--====-- Tech Stack Badges --====--*/}
      <div className="mt-8 flex flex-wrap gap-2">
        {technologies.map((tech, techIndex) => (
          <span
            key={`${tech}-${techIndex}`}
            className="
              px-3 py-1.5
              rounded-lg
              text-sm
              font-medium
              bg-linear-to-r
              from-theme-start
              to-theme-end
              text-black
              hover:text-white
              cursor-default
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}