import Categories from "@/components/Categories";
import GetInTouch from "@/components/GetInTouch";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Каталог",
  openGraph: {
    description: "Каталог Asia Power Operating",
    images: ["/intro/catalog.jpg"],
  },
};

const Page = () => {
  return (
    <div className="w-full ">
      <div className="relative w-full h-[400px] ">
        <Image
          className="brightness-50"
          fill
          src="/intro/catalog.jpg"
          objectFit="cover"
          alt="intro"
        />
        <div className="flex flex-col items-center justify-center gap-10 absolute left-0 top-0 w-full h-full text-white">
          <h1 className="text-5xl uppercase">Продукция</h1>
          <p className="text-xl">
            Asia Power Operating представляет полный спектр электрической
            продукции
          </p>
        </div>
      </div>
      <Categories />
      <GetInTouch />
    </div>
  );
};

export default Page;
