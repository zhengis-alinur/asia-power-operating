import { solutions } from "@/data/solutions";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import "./styles.css";

type Props = {
  params: Promise<{ solutionId: string }>;
};

export async function generateStaticParams() {
  return solutions.map(({ id }) => ({
    solutionId: id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const solutionId = (await params).solutionId;
  const solution = solutions.find((s) => s.id === solutionId);

  return {
    title: solution?.name,
    openGraph: {
      description: solution?.name,
      images: [`/solutions/${solution?.id}/${solution?.image}`],
    },
  };
}

const Page = async ({ params }: Props) => {
  const { solutionId } = await params;

  const solution = solutions.find(({ id }) => id === solutionId);

  return (
    solution && (
      <div className="w-full flex flex-col gap-10">
        <div className="relative w-full h-[500px]">
          {solution.image !== "" && (
            <Image
              className="brightness-50"
              fill
              src={`/solutions/${solution.id}/${solution.image}`}
              objectFit="cover"
              alt={solution.name}
            />
          )}
          <div className="flex flex-col items-center justify-center gap-10 absolute left-0 top-6 w-full h-full text-white">
            <h1 className="text-5xl uppercase">{solution.name}</h1>
            <p className="text-xl text-center">
              Asia Power Operating представляет широкий спектр электрической
              продукции
            </p>
          </div>
        </div>
        <div className="content-wrapper m-auto max-w-[960px] w-full">
          {solution.content}
        </div>
      </div>
    )
  );
};

export default Page;
