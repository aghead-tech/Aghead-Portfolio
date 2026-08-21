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
        transition-colors
        duration-300
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
        <p className="text-sm uppercase tracking-wide text-muted-foreground">
          Featured Project
        </p>

        <h3 className="mt-3 text-2xl xl:text-3xl font-semibold group-hover:gradient-text transition-colors">
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
              transition-colors
              duration-300
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