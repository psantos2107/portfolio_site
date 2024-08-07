"use client";

import { Typewriter } from "react-simple-typewriter";
import "@/app/globals.css";

function TypingAnimation() {
  return (
    <article>
      <p className="relative">
        <Typewriter
          words={[
            "Software Engineer",
            "Full Stack Developer",
            "Web Developer",
            "Future AWS Certified Cloud Practitioner",
            "Physical Therapist",
            "Escape Room Enthusiast",
          ]}
          loop={Infinity}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>
    </article>
  );
}

export default TypingAnimation;
