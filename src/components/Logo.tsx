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
      <h1 className="text-xl whitespace-nowrap md:text-4xl font-bold p-4 text-accent">
        Asia Power Operating<span className="text-secondary">.</span>
      </h1>
    </Link>
  );
};

export default Logo;
