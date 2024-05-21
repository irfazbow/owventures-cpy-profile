import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  product: Product;
}

const BriefProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <>
      <div className="w-72 p-6 bg-orange-200 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <Link href={`/products#${product.name}`}>
          <div className=" bg-[#373737]">
            <Image
              src={product.image}
              alt={product.name}
              className="h-80 w-72 object-cover rounded-t-xl"
              width={300}
              height={300}
            />
          </div>
          <div className="py-3 w-auto">
            <span className="text-red-900 mr-3 uppercase text-xs">
              Outer Wilds Ventures
            </span>
            <p className="text-lg font-bold text-black truncate block capitalize">
              {product.name}
            </p>
            <div className="flex flex-row justify-between">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                {product.price}
              </p>
            </div>
            <div className="text-gray-800 italic text-sm">
              <p>
                To learn more about this product, <br />
                click on the card!
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BriefProductCard;
