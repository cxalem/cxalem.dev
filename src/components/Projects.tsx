"use client";

import { useState } from "react";
import { Project } from "../../types";
import ProjectCard from "@/components/ProjectCard";

export const Projects = ({
  projects,
  moreProjects,
}: {
  projects: Project[];
  moreProjects: Project[];
}) => {
  const [showMoreProjects, setShowMoreProjects] = useState<boolean>(false);

  const btnText = showMoreProjects
    ? "Show Less"
    : `Load more projects... (${moreProjects.length})`;

  const handleClick = () => {
    setShowMoreProjects((prev) => !prev);
  };
  return (
    <section className="bg-transparent">
      <h2 className="text-center md:text-left text-3xl font-semibold mb-5">
        💼 Projects I've worked on
      </h2>
      {projects.map((project) => (
        <ProjectCard key={project.title} project={{ ...project }} />
      ))}
      {showMoreProjects &&
        moreProjects.map((project) => (
          <ProjectCard key={project.title} project={{ ...project }} />
        ))}
      <div className="flex cursor-pointer hover:underline justify-center mt-3 text-zinc-400">
        <button onClick={handleClick}>{btnText}</button>
      </div>
    </section>
  );
};
