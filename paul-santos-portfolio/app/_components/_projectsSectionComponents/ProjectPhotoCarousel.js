"use client";

import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

function ProjectPhotoCarousel({ imgArray }) {
  return (
    <Carousel fade indicators={true} interval={null} className="w-full">
      {imgArray.map((image) => {
        return (
          <Carousel.Item className="w-full h-[200px] md:h-[400px]">
            <Image
              src={image[0]}
              fill
              alt={image[1]}
              className="object-contain"
              key={image[0]}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default ProjectPhotoCarousel;
