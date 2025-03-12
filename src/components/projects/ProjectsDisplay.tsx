"use client";

import { useState } from "react";
import ProjectsComponent from "./ProjectsComponent";
import { PROJECTS_LIST } from "./data/constant";

const ProjectsDisplay = () => {
  // "newest", "largest", or "sofest"
  const [sortOrder, setSortOrder] = useState<"newest" | "largest" | "sofest">("newest");

  // Sort the project list based on the selected sortOrder.
  const sortedProjects = [...PROJECTS_LIST].sort((a, b) => {
    if (sortOrder === "newest") {
      return new Date(b.time).getTime() - new Date(a.time).getTime();
    } else if (sortOrder === "largest") {
      return b.amount - a.amount;
    } else if (sortOrder === "sofest") {
      // Sort descending softness so the most software-centric project is first.
      return b.softness - a.softness;
    }
    return 0;
  });

  return (
    <div>
      {/* Sort order controls */}
      <div className="mb-8 flex flex-col gap-4">
        <label className="mr-4 font-wf-title text-xl text-wz-text-color font-bold">
          <input
            type="radio"
            name="sortOrder"
            value="newest"
            checked={sortOrder === "newest"}
            onChange={() => setSortOrder("newest")}
            className="mr-1 accent-wz-secondary-color"
          />
          Newest &rarr; Oldest
        </label>
        <label className="mr-4 font-wf-title text-xl text-wz-text-color font-bold">
          <input
            type="radio"
            name="sortOrder"
            value="largest"
            checked={sortOrder === "largest"}
            onChange={() => setSortOrder("largest")}
            className="mr-1 accent-wz-secondary-color"
          />
          Largest &rarr; Smallest
        </label>
        <label className="mr-4 font-wf-title text-xl text-wz-text-color font-bold">
          <input
            type="radio"
            name="sortOrder"
            value="sofest"
            checked={sortOrder === "sofest"}
            onChange={() => setSortOrder("sofest")}
            className="mr-1 accent-wz-secondary-color"
          />
          Sofeware-centric &rarr; Hardware-centric
        </label>
      </div>

      {/* Display the sorted projects */}
      <div className="flex flex-wrap gap-8">
        {sortedProjects.map((project, index) => (
          <ProjectsComponent
            key={index}
            imagePath={project.imagePath}
            title={project.title}
            description={project.description}
            gitHub={project.gitHub}
            linkPath={project.linkPath}
            skills={project.skills}
            time={project.time}
            amount={project.amount}
            softness={project.softness}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsDisplay;