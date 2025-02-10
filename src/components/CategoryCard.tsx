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
      className="w-full product-card h-44 md:h-80 flex flex-col items-center relative"
    >
      <div className="relative flex-1 w-full transition-all rounded-full">
        <Image fill objectFit="contain" src={image} alt={image} />
      </div>
      <p className=" md:text-xl p-2 text-center">{name}</p>
    </Link>
  );
};

export default CategoryCard;
