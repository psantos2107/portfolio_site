import { Cedarville_Cursive } from "next/font/google";
import TypingAnimation from "../_components/_introSectionComponents/TypingAnimation";
import ImageCarousel from "../_components/_introSectionComponents/ImageCarousel";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const cedarville_cursive = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
});

const IntroSection = () => {
  return (
    <>
      <figure className="flex items-center justify-center md:w-1/2 md:mt-0 ">
        <ImageCarousel />
      </figure>
      <section className="text-center mt-3 flex flex-col md:w-1/2 md:items-center md:justify-center md:px-8 lg:pr-12">
        <p
          className={`${cedarville_cursive.className} text-[2.5rem] md:text-[3.5rem] xl:text-[4.5rem] text-center`}
        >
          Hello there.
        </p>
        <h1 className="text-center text-[1.5rem] md:text-[2.5rem] xl:text-[3.5rem] pl-3">
          I'm{" "}
          <span className="text-[2.8rem] bg-green-200 md:text-[3.8rem] xl:text-[4.8rem] mr-24">
            Paul Santos
          </span>
        </h1>
        <article className="text-[1.5rem] md:text-[2.5rem] xl:text-[3.5rem]">
          <TypingAnimation />
        </article>
        <article className="my-6 px-3">
          <p className="md:text-[1.15rem] xl:text-[1.5rem]">
            I am a driven, creative software engineer passionate about
            developing secure, user-friendly web applications. My background as
            a healthcare provider inspires me to be involved in the healthtech
            space, where I hope to develop software that improves healthcare
            providers' workflows (such as EMRs) and promotes health education.
            I’m also deeply interested in projects related to wellness, mental
            health, education, and languages, but I am always excited to take on
            new challenges for other types of project as well.
          </p>
          <section className="flex gap-4 items-stretch justify-center mt-4 text-md md:text-xl">
            <a
              href="/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-200 hover:bg-blue-950 w-fit max-w-xl hover-link"
            >
              Résumé
            </a>
            <a
              href="https://github.com/psantos2107"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-link text-center"
            >
              <FaGithub />
            </a>
            <a
              className="hover-link"
              href="https://www.linkedin.com/in/paulsantos2107/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </section>
        </article>
      </section>
    </>
  );
};

export default IntroSection;
