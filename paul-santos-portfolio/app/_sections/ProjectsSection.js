import React from "react";
import projects from "./../_lib/projects.json";
import ProjectPhotoCarousel from "../_components/_projectsSectionComponents/ProjectPhotoCarousel";
import { FaGithub } from "react-icons/fa";
import ToggleAccomplishments from "../_components/_projectsSectionComponents/ToggleAccomplishments";

const firstProject = projects[0];

const ProjectsSection = () => {
  return (
    <main>
      {console.log(firstProject)}
      <h1 className="text-2xl pl-3 mb-3">
        <strong className="bg-green-200">Projects</strong>
      </h1>
      <section className="flex flex-col items-center justify-center">
        <article className="w-full">
          <h2 className="bg-blue-100 p-1 text-xl mb-2">
            <a
              href={firstProject.website}
              rel="noopener noreferrer"
              target="_blank"
            >
              1. {firstProject.title}
            </a>
          </h2>
          <figure className="w-[95%] mx-auto mb-2">
            <ProjectPhotoCarousel imgArray={firstProject.imgs} />
          </figure>
          <section className="flex justify-around mb-3">
            <h2 className="bg-blue-100 p-1">
              <a href={firstProject.website}>Check Out the Project!</a>
            </h2>
            <a
              href={firstProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-100 p-1"
            >
              <FaGithub />
            </a>
          </section>
          <section className="pl-3 flex flex-col gap-2">
            <h2>
              <u>Role:</u> {firstProject.role}
            </h2>
            <h2>
              <u>Tech:</u> {firstProject.tech.join(", ")}
            </h2>
            <ToggleAccomplishments
              accomplishments={firstProject.accomplishments}
            />
          </section>
        </article>
      </section>
    </main>
  );
};

export default ProjectsSection;
