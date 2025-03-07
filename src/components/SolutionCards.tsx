import React from "react";
import ProductCard from "./ProductCard";

type SolutionCard = {
  name: string;
  image: string | null;
  description?: string;
  link: string;
};

const SolutionCards = ({
  cards,
  cols,
}: {
  cards: SolutionCard[];
  cols?: number;
}) => {
  return (
    <div
      className={`grid md:w-[960px] grid-cols-1 md:grid-cols-3 py-8 gap-2 ${
        cols === 4 && "md:grid-cols-4"
      }`}
    >
      {cards.map((card) => (
        <ProductCard key={card.name} {...card} />
      ))}
    </div>
  );
};

export default SolutionCards;
