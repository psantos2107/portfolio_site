import { Cedarville_Cursive } from "next/font/google";
import TypingAnimation from "../_components/_introSectionComponents/TypingAnimation";
import ImageCarousel from "../_components/_introSectionComponents/ImageCarousel";

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
          <p className="md:text-[1.3rem] xl:text-[1.7rem]">
            I am a driven and creative software engineer passionate about
            developing intuitive, secure, and user-friendly web applications. My
            background as a healthcare provider inspires me to create
            wellness-focused software as well as applications that improve
            healthcare providers' workflows (such as EMRs) and provide health
            education to the public.
          </p>
          <a
            href="/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-md md:text-xl mt-4 px-3 bg-green-200 hover:bg-blue-950 w-fit max-w-xl mx-auto hover-link"
          >
            See My Resume!
          </a>
        </article>
      </section>
    </>
  );
};

export default IntroSection;
