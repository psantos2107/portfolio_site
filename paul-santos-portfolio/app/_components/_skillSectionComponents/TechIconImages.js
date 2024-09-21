import djangoIcon from "@/public/imgs/django-icon.png";
import githubIcon from "@/public/imgs/github-icon.png";
import htmlCssJsIcon from "@/public/imgs/html-css-js-icon.png";
import mongodbIcon from "@/public/imgs/mongodb-icon.png";
import nextJsIcon from "@/public/imgs/nextjs-icon.png";
import nodeJsIcon from "@/public/imgs/nodejs-icon.png";
import postgresqlIcon from "@/public/imgs/postgresql-icon.png";
import pythonIcon from "@/public/imgs/python-logo.png";
import reactIcon from "@/public/imgs/react-icon.png";
import sqlIcon from "@/public/imgs/sql-icon.png";
import supabaseIcon from "@/public/imgs/supabase-icon.png";
import Image from "next/image";

//array of arrays. for each subarray, the first element is the image itself, second element is the alt name
const images = [
  [htmlCssJsIcon, "html-css-js icon"],
  [nodeJsIcon, "nodejs icon"],
  [reactIcon, "react-js icon"],
  [nextJsIcon, "next-js icon"],
  [mongodbIcon, "mongodb icon"],
  [sqlIcon, "sql icon"],
  [pythonIcon, "python icon"],
  [postgresqlIcon, "postgres icon"],
  [djangoIcon, "django icon"],
  [supabaseIcon, "supabase icon"],
  [githubIcon, "github icon"],
];

function TechIconImages() {
  return (
    <article className="w-full lg:w-4/5 lg:mx-auto flex flex-wrap items-center justify-center gap-4 lg:mt-12">
      {images.map((image) => {
        return (
          <figure className="h-[35px] w-[35px] md:h-[110px] md:w-[110px] 2xl:h-[180px] 2xl:w-[180px] relative">
            <Image
              src={image[0]}
              fill
              alt={image[1]}
              className="object-contain"
              loading="lazy"
            />
          </figure>
        );
      })}
    </article>
  );
}

export default TechIconImages;
