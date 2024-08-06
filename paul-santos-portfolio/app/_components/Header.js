"use client";
import BootstrapClient from "./BootstrapClient";
import { FaDesktop } from "react-icons/fa";
import { MdFace } from "react-icons/md";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-gradient-teal-white text-blue-100 p-2 text-2xl fixed top-0 w-full md:h-24">
      <figure className="flex gap-2">
        <MdFace />
        <FaDesktop />
      </figure>
      <section>Menu section</section>
      <BootstrapClient />
    </header>
  );
};

export default Header;

// <figure className="relative w-[50px] h-[50px]">
//         <Image src={logo} fill className="object-contain" />
//       </figure>
