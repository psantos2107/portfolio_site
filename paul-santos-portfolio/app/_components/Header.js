"use client";

import Image from "next/image";
import logo from "@/public/imgs/portfolio-logo.png";
import BootstrapClient from "./BootstrapClient";

const Header = () => {
  return (
    <header className="flex justify-between border-solid border-black border-2 bg-blue-950 text-blue-100">
      <figure className="relative w-[50px] h-[50px]">
        <Image src={logo} fill className="object-contain" />
      </figure>
      <section>Menu section</section>
      <BootstrapClient />
    </header>
  );
};

export default Header;
