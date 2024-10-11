import React from "react";
import projects from "./../_lib/projects.json";
import ProjectCard from "../_components/_projectsSectionComponents/ProjectCard";

const ProjectsSection = () => {
  return (
    <main>
      <h1 className="text-2xl md:text-5xl pl-3 mb-3 md:!mb-7">
        <strong className="bg-green-200 p-1">Projects</strong>
      </h1>
      <section className="flex flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center justify-center">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              project={project}
              index={index}
              key={`${project.title} + ${project.role} listed-${index}`}
            />
          );
        })}
      </section>
    </main>
  );
};

export default ProjectsSection;
