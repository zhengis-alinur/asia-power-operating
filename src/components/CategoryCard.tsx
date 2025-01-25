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
      className="product-card w-full h-80 flex flex-col  relative"
    >
      <div className="relative w-full flex-1 bg-blue-50 shadow-xl hover:shadow-2xl transition-all rounded-full">
        <Image
          className="scale-105"
          fill
          objectFit="contain"
          src={image}
          alt={image}
        />
      </div>
      <p className=" text-xl p-2 text-center ">{name}</p>
    </Link>
  );
};

export default CategoryCard;
