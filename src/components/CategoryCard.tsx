import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryCard = ({
  image,
  name,
  link,
}: {
  image: string;
  name: string;
  link: string;
}) => {
  return (
    <Link
      href={link}
      className="product-card h-44 md:w-80 md:h-80 flex flex-col items-center relative"
    >
      <div className="relative flex-1 w-1/2 md:bg-blue-50 md:shadow-xl md:hover:shadow-2xl transition-all rounded-full">
        <Image
          className="scale-105"
          fill
          objectFit="contain"
          src={image}
          alt={image}
        />
      </div>
      <p className=" md:text-xl p-2 text-center ">{name}</p>
    </Link>
  );
};

export default CategoryCard;
