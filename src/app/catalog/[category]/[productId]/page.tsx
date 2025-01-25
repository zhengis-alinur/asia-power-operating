import Container from "@/components/Container";
import { products } from "@/data/products";
import { Category } from "@/types/Products";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

type Props = {
  params: Promise<{ productId: string; category: Category }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId, category } = await params;
  const product = products[category].find(
    (product) => product.id === productId
  );

  return {
    title: product?.name,
    openGraph: {
      description: product?.name,
      images: [`/products/${category}/${product?.image}`],
    },
  };
}

export async function generateStaticParams() {
  const params: { productId: string; category: string }[] = [];

  Object.entries(products).map(([category, products]) =>
    products.forEach(({ id }) => params.push({ productId: id, category }))
  );

  return params;
}

const Page = async ({ params }: Props) => {
  const { productId, category } = await params;

  const product = products[category].find(({ id }) => id === productId);

  return (
    product && (
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
            <div className="h-[200] w-[200] bg-white rounded-full flex items-center justify-center">
              <Image
                className="rounded-full "
                alt="category-image"
                height={200}
                width={200}
                src={`/products/${category}/${product.image}`}
              />
            </div>
            <h1 className="text-5xl uppercase">{product.name}</h1>
            <p className="text-xl">
              Asia Power Operating представляет широкий спектр электрической
              продукции
            </p>
          </div>
        </div>
        <Container>
          <div dangerouslySetInnerHTML={{ __html: product.__html }} />
        </Container>
      </div>
    )
  );
};

export default Page;
