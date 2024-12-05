"use client";

import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import professionalPhoto from "@/public/imgs/Paul_Santos_Photo.JPG";
import hikingPhoto from "@/public/imgs/paul-hiking.png";
import nycPhoto from "@/public/imgs/paul-nyc.png";
import waterfallPhoto from "@/public/imgs/paul-waterfall.png";
import paulCharliePhoto from "@/public/imgs/paul-with-charlie.png";

const ImageCarousel = () => {
  return (
    <Carousel
      fade
      indicators={false}
      className="rounded-3xl w-[300px] h-[300px] mt-10 md:mt-0 md:w-[550px] md:h-[550px] lg:w-[750px] lg:h-[700px]"
    >
      <Carousel.Item
        interval={5000}
        className="w-[300px] h-[300px] md:w-[550px] md:h-[550px] lg:w-[700px] lg:h-[700px]"
      >
        <Image
          src={professionalPhoto}
          fill
          alt="Paul Santos Professional Photo"
          className="object-contain rounded-[50%]"
          loading="lazy"
        />
      </Carousel.Item>
      <Carousel.Item
        interval={5000}
        className="w-[300px] h-[300px] md:w-[550px] md:h-[550px] lg:w-[700px] lg:h-[700px]"
      >
        <Image
          src={hikingPhoto}
          fill
          alt="Paul Santos Hiking Photo"
          className="object-contain rounded-[50%]"
          loading="lazy"
        />
      </Carousel.Item>
      <Carousel.Item
        interval={5000}
        className="w-[300px] h-[300px] md:w-[550px] md:h-[550px] lg:w-[700px] lg:h-[700px]"
      >
        <Image
          src={waterfallPhoto}
          fill
          alt="Paul Santos Waterfall Photo"
          className="object-contain rounded-[50%]"
          loading="lazy"
        />
      </Carousel.Item>
      <Carousel.Item
        interval={5000}
        className="w-[300px] h-[300px] md:w-[550px] md:h-[550px] lg:w-[700px] lg:h-[700px]"
      >
        <Image
          src={nycPhoto}
          fill
          alt="Paul Santos NYC Photo"
          className="object-contain rounded-[50%]"
          loading="lazy"
        />
      </Carousel.Item>
      <Carousel.Item
        interval={5000}
        className="w-[300px] h-[300px] md:w-[550px] md:h-[550px] lg:w-[700px] lg:h-[700px]"
      >
        <Image
          src={paulCharliePhoto}
          fill
          alt="Paul Santos with his Dog Charlie"
          className="object-contain rounded-[50%]"
          loading="lazy"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
//test comment
