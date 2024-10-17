import React from "react";
import Image from "next/image";
import myPhoto from "@/public/imgs/about-me-photo.png";
import SectionHeader from "../_components/SectionHeader";

function AboutSection() {
  return (
    <main>
      <SectionHeader header="About Me" />
      <section className="flex md:flex-row-reverse flex-col items-center md:items-start justify-center md:justify-evenly">
        <section className="md:w-1/2 flex items-center justify-center">
          <figure className="relative w-[275px] h-[275px] md:w-[400px] md:h-[400px] lg:w-[700px] lg:h-[700px] mb-1">
            <Image
              src={myPhoto}
              fill
              className="object-cover rounded-[20px] md:p-2"
              alt="Paul Santos About Me Photo"
              loading="lazy"
            />
          </figure>
        </section>
        <section className="md:w-1/2 p-4 md:text-[1.15rem] xl:text-[1.5rem] flex flex-col gap-3">
          <p>
            Hey there! My name is Paul, and I appreciate you for taking the time
            to check out my portfolio! I'm originally from Los Angeles,
            California, and I’m a full-stack software engineer specializing in
            front-end development, particularly building applications with
            React.js and Next.js. What I love most about software engineering is
            the challenge of solving complex problems and watching the software
            I build come to life!{" "}
          </p>
          <p>
            Currently, I’m working on two main projects: KnowNative (see below)
            and a website for a Tahitian dance troupe, which is still in
            progress. Prior to software engineering, I worked in healthcare as a
            physical therapist, particularly in outpatient orthopedics and home
            health physical therapy. I am also a proud graduate from the
            University of California, Los Angeles.
          </p>
          <p>
            Outside of coding, my hobbies include Tahitian dance, learning
            languages (especially French), yoga, hip hop dance, trying new food,
            hiking, and taking on new escape rooms.
          </p>
          <p>
            {" "}
            I'm always eager to collaborate on exciting projects and explore new
            challenges in software development! Let's connect!
          </p>
        </section>
      </section>
    </main>
  );
}

export default AboutSection;
