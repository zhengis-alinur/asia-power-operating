import React from "react";
import Container from "./Container";
import { categoryMapping } from "@/data/categories";
import { PATHS } from "@/routes";
import { Category } from "@/types/Products";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <Container>
      <h1 className="text-xl md:text-4xl m-4 md:m-10">Оборудование</h1>
      <div className="w-full grid justify-items-center grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 px-4 md:px-24">
        {Object.values(Category).map((category) => (
          <CategoryCard
            key={category}
            name={categoryMapping[category]}
            image={`/products/${category}/image.png`}
            link={`${PATHS.catalog}/${category}`}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
