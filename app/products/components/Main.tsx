import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Main = () => {
  return (
    <>
      <div className="bg-orange-800 my-8 flex justify-start items-center overflow-hidden">
        <div className="px-6 md:flex-row justify-start items-center py-16">
          <div className="w-20 h-2 bg-white mb-12"></div>
          <h1 className="uppercase text-4xl sm:text-6xl md:text-8xl font-black text-white">
            Explore
            <p className="text-2xl sm:text-4xl md:text-6xl">our products and let us know!</p>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Main;
