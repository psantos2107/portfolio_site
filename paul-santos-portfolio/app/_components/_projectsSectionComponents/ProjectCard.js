import React from "react";
import ToggleAccomplishments from "./ToggleAccomplishments";
import ProjectPhotoCarousel from "./ProjectPhotoCarousel";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ project, index }) {
  const backgroundColor = (index + 1) % 2 === 1 ? "bg-blue-100" : "bg-blue-200";

  return (
    <article className="w-full md:text-5xl flex flex-col gap-4">
      <h2
        className={`${backgroundColor} p-1 md:!p-3 text-xl mb-2 md:text-[0.8em]`}
      >
        <a href={project.website} rel="noopener noreferrer" target="_blank">
          {index + 1}. {project.title}
        </a>
      </h2>
      <figure className="w-[95%] mx-auto mb-2">
        <ProjectPhotoCarousel imgArray={project.imgs} />
      </figure>
      <section className="flex justify-around mb-3 md:text-[0.5em]">
        <h2 className={`${backgroundColor} p-1`}>
          <a href={project.website}>Check Out the Project!</a>
        </h2>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`${backgroundColor} p-1`}
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
          backgroundColor={backgroundColor}
        />
      </section>
    </article>
  );
}

export default ProjectCard;
