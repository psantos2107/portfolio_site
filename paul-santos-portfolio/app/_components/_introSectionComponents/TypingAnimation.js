"use client";

import { Typewriter } from "react-simple-typewriter";
import "@/app/globals.css";

function TypingAnimation() {
  return (
    <article>
      <p className="relative">
        <Typewriter
          words={[
            "Full Stack Software Engineer",
            "Web Developer",
            "JavaScript Enthusiast",
            "React Specialist",
            "Next.js Specialist",
            "Physical Therapist",
            "Escape Room Enthusiast",
            "Video Game Lover",
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
