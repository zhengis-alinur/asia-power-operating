import { solutions } from "@/data/solutions";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import "./styles.css";
import GetInTouch from "@/components/GetInTouch";

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
          <div className="flex flex-col items-center justify-center gap-10 absolute left-0 top-6 w-full h-full text-white px-10">
            <h1 className="text-2xl md:text-5xl uppercase w-full text-center">
              {solution.name}
            </h1>
            <p className="md:text-xl w-full text-center">
              Asia Power Operating представляет широкий спектр электрической
              продукции
            </p>
          </div>
        </div>
        <div className="content-wrapper m-auto max-w-[960px] w-full px-8">
          {solution.content}
        </div>
        <GetInTouch />
      </div>
    )
  );
};

export default Page;
