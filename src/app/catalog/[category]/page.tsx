import Container from "@/components/Container";
import GetInTouch from "@/components/GetInTouch";
import ProductCard from "@/components/ProductCard";
import { categoryMapping } from "@/data/categories";
import { products } from "@/data/products";
import { PATHS } from "@/routes";
import { Category } from "@/types/Products";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

type Props = {
  params: Promise<{ category: Category }>;
};

export async function generateStaticParams() {
  return Object.values(Category).map((category) => ({
    category,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = (await params).category;
  const name = categoryMapping[category];

  return {
    title: name,
    openGraph: {
      description: name,
      images: [`/products/${category}/intro.jpg`],
    },
  };
}

const Page = async ({ params }: Props) => {
  const category = (await params).category;

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="relative w-full h-[500px]">
        <Image
          className="brightness-50"
          fill
          src={`/products/${category}/intro.jpg`}
          objectFit="cover"
          alt="intro"
        />
        <div className="flex flex-col items-center justify-center gap-10 absolute left-0 top-6 w-full h-full text-white">
          <div className="h-[200] w-[200] flex items-center justify-center bg-foreground bg-opacity-75 rounded-full">
            <Image
              className="scale-110"
              alt="category-image"
              height={200}
              width={200}
              src={`/products/${category}/image.png`}
            />
          </div>
          <h1 className="text-2xl md:text-5xl uppercase">
            {categoryMapping[category]}
          </h1>
          <p className="text-xl w-full text-center">
            Asia Power Operating представляет широкий спектр электрической
            продукции
          </p>
        </div>
      </div>
      <Container>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 px-8 md:px-24">
          {products[category].map(({ id, name, image }) => (
            <ProductCard
              key={id}
              image={`/products/${category}/${image}`}
              name={name}
              link={`${PATHS.catalog}/${category}/${id}`}
            />
          ))}
        </div>
      </Container>
      <GetInTouch />
    </div>
  );
};

export default Page;
