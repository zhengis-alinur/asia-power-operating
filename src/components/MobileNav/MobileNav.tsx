import React from "react";
import { Item } from "../Dropdown/Dropdown";
import Link from "next/link";
import Image from "next/image";

const MobileNav = ({ config }: { config: Item[] }) => {
  return (
    <nav className="absolute top-0 flex flex-col items-center gap-6 sm:hidden w-full bg-foreground p-10">
      <Link href="/" className="flex items-center">
        <Image height={60} width={60} src="/favicon.png" alt="icon" />
        <div className="flex flex-col p-4">
          <h1 className="text-xl whitespace-nowrap md:text-3xl uppercase text-accent">
            Asia Power
          </h1>
          <h1 className="uppercase tracking-[3px]">Operating</h1>
        </div>
      </Link>
      <ul className="flex flex-col gap-4 items-center">
        {config.map((item) => (
          <li className="flex flex-col" key={item.label}>
            <Link className="flex items-center gap-2" href={item.href || ""}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
