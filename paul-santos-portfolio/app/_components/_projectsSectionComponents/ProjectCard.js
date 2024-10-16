import React from "react";
import ToggleAccomplishments from "./ToggleAccomplishments";
import ProjectPhotoCarousel from "./ProjectPhotoCarousel";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ project, index }) {
  return (
    <article className="w-full lg:w-1/2 md:text-5xl flex flex-col gap-4 lg:border-black lg:border-2 lg:border-solid">
      <h2 className={`bg-blue-100 p-1 md:!p-3 text-xl mb-2 md:text-[0.8em]`}>
        <a href={project.website} rel="noopener noreferrer" target="_blank">
          {index + 1}. {project.title}
        </a>
      </h2>
      <figure className="w-[95%] mx-auto mb-2">
        <ProjectPhotoCarousel imgArray={project.imgs} />
      </figure>
      <section className="flex justify-evenly mb-3 md:text-[0.5em]">
        <h2 className={`bg-blue-100 p-1 hover-link`}>
          <a href={project.website} target="_blank" rel="noopener noreferrer">
            Check Out the Project!
          </a>
        </h2>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`bg-blue-100 p-1 hover-link`}
        >
          <FaGithub />
        </a>
      </section>
      <section className="pl-3 flex flex-col gap-3 md:text-[0.5em] md:px-8">
        <h2>{project.description}</h2>
        <h2>
          <u>Role:</u> {project.role}
        </h2>
        <h2>
          <u>Tech:</u> {project.tech.join(", ")}
        </h2>
        <ToggleAccomplishments
          accomplishments={project.accomplishments}
          backgroundColor={"bg-blue-100"}
        />
      </section>
    </article>
  );
}

export default ProjectCard;
