import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({
  image,
  name,
  link,
  description,
}: {
  image: string | null;
  name: string;
  link: string;
  description?: string;
}) => {
  return (
    <Link
      href={link}
      className="product-card w-full min-h-80 flex flex-col relative bg-white shadow-xl hover:shadow-2xl transition-all p-3"
    >
      {image && (
        <div
          className={`relative w-full flex-1 min-h-36 h-36 ${
            description && "max-h-36"
          }`}
        >
          <Image fill objectFit="contain" src={image} alt={image} />
        </div>
      )}
      <p className="text-xl p-2 text-center">{name}</p>
      {description && <p className="text p-2 text-center">{description}</p>}
    </Link>
  );
};

export default ProductCard;
