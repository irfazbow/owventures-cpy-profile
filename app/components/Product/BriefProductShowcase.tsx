import React from "react";
import { products } from "@/data/products";
import BriefProductCard from "./BriefProductCard";

const BriefProductShowcase: React.FC = () => {
  return (
    <div className="py-8 mx-4 flex flex-row flex-wrap gap-8 justify-center items-center mb-20">
      {products.map((product) => (
        <BriefProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default BriefProductShowcase;
