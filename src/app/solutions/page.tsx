"use client";

import Container from "@/components/Container";
import { navConfig } from "@/components/Header";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <Container className="flex flex-col items-center">
      <div className="w-full md:w-1/2 flex flex-col p-4 pt-28 items-center gap-8">
        {navConfig[1].items?.map((solution) => (
          <div
            className="flex flex-col items-center w-full"
            key={solution.label}
          >
            <h2 className="text-xl font-bold">{solution.label}</h2>
            <div className="flex flex-col items-center gap-2 w-full">
              {solution.items?.map((item) => (
                <Link
                  href={item.href || ""}
                  className="w-full shadow-md border border-gray-100 rounded-lg p-2"
                  key={item.label}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Page;
