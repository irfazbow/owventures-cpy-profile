import React from "react";
import { products } from "@/data/products";
import Card from "./Card";

const CardShowcase: React.FC = () => {
  return (
    <div className="space-y-8 mb-10">
      {products.map((product, index) => (
        <Card
          key={product.id}
          product={product}
          index={index}
          isLast={index === products.length - 1}
        />
      ))}
    </div>
  );
};

export default CardShowcase;
