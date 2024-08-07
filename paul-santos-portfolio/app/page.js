import { Cedarville_Cursive } from "next/font/google";
import TypingAnimation from "./_components/_sectionOneComponents/TypingAnimation";
import ImageCarousel from "./_components/_sectionOneComponents/ImageCarousel";

const cedarville_cursive = Cedarville_Cursive({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function Home() {
  return (
    <main className="w-full">
      <section className="mt-8 h-screen md:flex md:gap-4">
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
              developing intuitive, secure, and user-friendly web applications.
              My background as a healthcare provider inspires me to create
              wellness-focused software as well as applications that improve
              healthcare providers' workflows (such as EMRs) and provide health
              education to the public.
            </p>
          </article>
        </section>
      </section>
    </main>
  );
}

{
  /* <figure className="relative w-[195px] h-[260px] mx-auto my-4">
          <Image
            src={myPhoto}
            alt="Paul Santos photo."
            fill
            className="object-contain rounded-[50%]"
          />
        </figure> */
}
