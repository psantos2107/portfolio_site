import { Cedarville_Cursive } from "next/font/google";
import Image from "next/image";
import myPhoto from "@/public/imgs/Paul_Santos_Photo.JPG";
import TypingAnimation from "./_components/_homePageComponents/TypingAnimation";

const cedarville_cursive = Cedarville_Cursive({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function Home() {
  return (
    <main>
      <section>
        <section className="text-center mt-3">
          <p
            className={`${cedarville_cursive.className} text-[2.5rem] text-center`}
          >
            Hello there.
          </p>
          <h1 className="text-center text-[1.5rem] pl-3">
            I'm <span className="text-[2.8rem] mr-24">Paul Santos</span>
          </h1>
          <article className="text-[1.5rem]">
            <TypingAnimation />
          </article>
        </section>
        <figure className="relative w-[195px] h-[260px] mx-auto my-4">
          <Image
            src={myPhoto}
            alt="Paul Santos photo."
            fill
            className="object-contain rounded-lg"
          />
        </figure>
        <article className="my-6 px-3">
          <p>
            I am a driven and creative software engineer passionate about
            developing intuitive, secure, and user-friendly web applications. My
            background as a healthcare provider inspires me to create
            wellness-focused software as well as applications that improve
            healthcare providers' workflows (such as EMRs) and provide health
            education to the public.
          </p>
        </article>
      </section>
      <article>Links to different pages</article>
      <article>
        Images of the different technologies/ skills that I use.
      </article>
    </main>
  );
}
