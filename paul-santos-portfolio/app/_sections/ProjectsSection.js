import React from "react";
import projects from "./../_lib/projects.json";
import Image from "next/image";

const firstProject = projects[0];

const ProjectsSection = () => {
  return (
    <main>
      {console.log(firstProject)}
      <h1 className="text-2xl pl-3">
        <strong className="bg-green-200">Projects</strong>
      </h1>
      <section className="flex flex-col items-center justify-center">
        <article className="border-black border-2 border-solid w-full">
          <h2>{firstProject.title}</h2>
          <h2>Imgs here</h2>
          <section className="flex justify-around">
            <h2>
              Website: <a href={firstProject.website}>{firstProject.website}</a>
            </h2>
            <h2>GITHUB</h2>
          </section>
          <h2>Role: {firstProject.role}</h2>
          <h2>Tech: {firstProject.tech.join(", ")}</h2>
          <h2>See Accomplishments: (this can be a button.)</h2>
          <ul>
            {firstProject.accomplishments.map((accomplishment) => {
              return <li>{accomplishment}</li>;
            })}
          </ul>
        </article>
      </section>
    </main>
  );
};

export default ProjectsSection;
