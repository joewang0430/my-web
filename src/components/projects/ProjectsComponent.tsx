"use client";

import { useEffect } from "react";
import Image from "next/image";
import ProjectGitHub from "./ui/ProjectGitHub";

interface ProjectsComponentProps {
  imagePath: string;
  title: string;
  description: string;
  gitHub?: string;       
  linkPath: string;   
  skills: string[];
  time: string;
  amount: number;
  softness: number;
}


const ProjectsComponent = ({ 
  imagePath,
  title,
  description,
  gitHub,
  linkPath,
  skills,
  time,
  amount,
  softness,
 }: ProjectsComponentProps) => {

  useEffect(() => {
    console.log({ linkPath, time, amount, softness });
  }, [linkPath, time, amount, softness]);
  
  return (
    <div 
    className="
        group 
        relative 
        flex 
        flex-col
        w-96
        rounded-3xl
        border-4
        border-wz-main-color
        bg-wz-bg-color
        transition-colors 
        duration-300
        p-4
        overflow-hidden
      ">
      {/* Picture */}
      <div className="relative w-[99%] h-[12rem] mb-4 overflow-hidden mx-auto">
      <Image
        src={`/projects/${imagePath}`}
        alt={title}
        fill
        className="object-cover"
      />
        {gitHub && (
          <div className="absolute top-2 right-2 z-10">
            <ProjectGitHub linkPath={gitHub} />
          </div>
        )}
      </div>

      {/* Title with underline effect */}
      <h2 className="text-3xl font-bold font-wf-title text-wz-main-color mb-2">
        <span className="relative inline-block">
          {title}
          <span
            className="
              absolute left-0 bottom-0 h-1 w-0 bg-wz-secondary-color 
              transition-all duration-300 ease-in-out
              group-hover:w-full
            "
          ></span>
        </span>
      </h2>

      {/* Description */}
      <p className="text-wz-text-color font-wf-theme mb-4 leading-relaxed">
        {description}
      </p>

      

      {/* Skills */}
      <div className="mt-auto flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              px-2
              py-1
              text-sm
              rounded-full
              bg-wz-secondary-blue
              dark:bg-wz-classic-green
              text-wz-bg-color
              font-wf-theme
            "
          >
            {skill}
          </span>
        ))}
      </div> 

    </div>
  );
};

export default ProjectsComponent;
