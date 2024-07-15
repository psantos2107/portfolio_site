import { Cedarville_Cursive } from "next/font/google";
import myPhoto from "@/public/imgs/Paul_Santos_Photo.JPG";
import Image from "next/image";
import Link from "next/link";

const cedarville_cursive = Cedarville_Cursive({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function Home() {
  return (
    <main>
      <section>
        <figure className="relative w-[200px] h-[260px] mx-auto mt-12 mb-3">
          <Image src={myPhoto} fill className="object-contain rounded-lg" />
        </figure>
        <section className="text-center">
          <p
            className={`${cedarville_cursive.className} text-[2rem] text-center`}
          >
            Hello there.
          </p>
          <h1 className="text-center text-[1.5rem]">
            I'm <span className="text-[2.3rem] mr-24">Paul Santos</span>
          </h1>
          <p className="indent-2 mr-20 italic">Software Engineer</p>
          <p className="indent-4 mr-12 italic">Web Developer</p>
          <p className="indent-6 ml-14 italic">Healthcare Practitioner</p>
        </section>
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
