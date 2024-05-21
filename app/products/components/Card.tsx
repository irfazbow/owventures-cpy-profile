import Image from "next/image";
import React from "react";
import { Product } from "@/types/product";
import mail from "@/public/imgs/util-mail.svg";

interface ProductCardProps {
  product: Product;
  index: number;
  isLast: boolean;
}

const Card: React.FC<ProductCardProps> = ({ product, index, isLast }) => {
  return (
    <div id={product.name} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className={`flex flex-col ${
          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        } -mx-4 ${!isLast ? "border-b-2 border-orange-400 pb-8" : ""}`}
      >
        <div className="md:flex-1 px-4">
          <div className="flex justify-center h-[460px] bg-[#382C17] rounded-lg mb-4">
            <Image
              className="h-full object-contain"
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              priority={true}
            />
          </div>
        </div>
        <div className="flex-1 px-2">
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {product.name}
            </h2>
            <p className="text-justify text-gray-600 text-sm mb-4">
              {product.description1}
            </p>
            <div className="mb-4">
              <span className="font-bold text-gray-700">Available Colors</span>
              <div className="flex items-center mt-2">
                <div className="w-6 h-6 rounded-full bg-white mr-2"></div>
                <div className="w-6 h-6 rounded-full bg-orange-500 mr-2"></div>
                <div className="w-6 h-6 rounded-full bg-red-700 mr-2"></div>
                <div className="w-6 h-6 rounded-full bg-yellow-900 mr-2"></div>
                <div className="w-6 h-6 rounded-full bg-yellow-400 mr-2"></div>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700">Starting Price</span>
              <div className="flex items-center mt-2">
                <div className="bg-orange-400 text-gray-700 py-2 px-4 rounded-full font-bold mr-2">
                  {product.price}
                </div>
              </div>
            </div>
            <div>
              <span className="font-bold text-gray-700">
                {`Know more about ${product.name}`}
              </span>
              <p className="text-justify text-gray-600 text-sm mt-2">
                {product.description2}
              </p>
            </div>
            <div className="py-2 mt-4">
              <p className="text-justify text-gray-600 text-sm mt-2">
                Some parts are customizable, email for pre-order and more
                information.
              </p>
            </div>
            <div className="flex gap-2">
              <Image src={mail} alt="Email Member" width={20} className="" />
              <a
                href="mailto:sales@owventures.com"
                aria-label="Our email"
                title="Our email"
                className="transition-colors text-sm duration-300 text-gray-700 hover:text-orange-600"
              >
                sales@owventures.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
