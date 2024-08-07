import { FaDesktop } from "react-icons/fa";
import { MdFace } from "react-icons/md";
import Link from "next/link";
import DropDownComponent from "./DropDownComponent";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-gradient-teal-white text-blue-100 p-2 text-2xl fixed top-0 z-10 w-full md:h-24">
      <figure className="flex gap-2 md:text-5xl">
        <MdFace />
        <FaDesktop />
      </figure>
      <section>
        <article className="hidden md:flex gap-4">
          <Link href="#intro-section">Home</Link>
          <Link href="#skills-section">Skills</Link>
          <Link href="#about-section">About</Link>
          <Link href="#projects-section">Projects</Link>
          <Link href="#resume-section">Resume</Link>
          <Link href="#contact-section">Contact</Link>
        </article>
        <article className="md:hidden">
          <DropDownComponent />
        </article>
      </section>
    </header>
  );
};

export default Header;
