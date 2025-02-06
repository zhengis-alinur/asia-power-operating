import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { PATHS } from "@/routes";

const Footer = () => {
  return (
    <footer className="bg-foreground shadow-sm text-white mt-24">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Logo />
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href={PATHS.home} className="hover:underline me-4 md:me-6">
                Главная
              </Link>
            </li>
            <li>
              <Link
                href={PATHS.catalog}
                className="hover:underline me-4 md:me-6"
              >
                Продукция
              </Link>
            </li>
            <li>
              <Link
                href={PATHS.contacts}
                className="hover:underline me-4 md:me-6"
              >
                Контакты
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025
          <Link href="/" className="hover:underline mx-1">
            Asia Power Operating.
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
