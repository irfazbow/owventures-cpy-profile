import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BriefProduct = () => {
  return (
    <>
      <div className="bg-orange-800 flex justify-center items-center overflow-hidden">
        <div className="mx-auto px-6 flex flex-col-reverse md:flex-row justify-center items-center py-16">
          <div className="w-[80%]">
            <div className="w-20 h-2 bg-white mb-12"></div>
            <h2 className="uppercase text-4xl sm:text-6xl md:text-8xl font-black text-white">
              Explore
              <p className="text-2xl sm:text-4xl md:text-6xl">Our Products</p>
            </h2>
            <p className="text-sm sm:text-base text-justify text-white">
              {products[0].description1}
            </p>
            <div className="flex mt-8">
              <Link
                href="/products"
                className="uppercase py-2 px-4 rounded-lg bg-orange-400 border-2 border-transparent text-black text-md mr-4 hover:bg-orange-600"
              >
                Click here to check out our products!
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center sm:w-1/3 lg:w-3/5">
            <Image
              src={products[0].image}
              className="max-w-xs md:max-w-sm m-auto"
              height={1000}
              width={1000}
              alt={products[0].name}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BriefProduct;
