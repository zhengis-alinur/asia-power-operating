import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex-col flex md:flex-row items-center">
      <Image
        className="hidden md:block"
        height={60}
        width={60}
        src="/favicon.png"
        alt="icon"
      />
      <div className="flex flex-col p-4">
        <h1 className="text-xl whitespace-nowrap md:text-3xl uppercase text-accent">
          Asia Power
        </h1>
        <h1 className="uppercase tracking-[10px]">Operating</h1>
      </div>
    </Link>
  );
};

export default Logo;
