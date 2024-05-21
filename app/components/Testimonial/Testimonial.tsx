import React from "react";
import Card from "./Card";
import { testimonials } from "@/data/testimony";

const Testimonial = () => {
  return (
    <>
      <div className="bg-orange-800 px-6 py-16 flex flex-col gap-10">
        <div className="flex md:flex-row justify-start items-center">
          <div className="w-[80%]">
            <div className="w-20 h-2 bg-white mb-12"></div>
            <h2 className="uppercase text-4xl sm:text-6xl md:text-8xl font-black text-white">
              Words
              <p className="text-2xl sm:text-4xl md:text-6xl sm:text-nowrap">
                from the Explorers
              </p>
            </h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mb-20 mx-auto md:max-w-[1440px]">
        {testimonials.map((testimony, index) => (
          <Card
            key={testimony.name}
            testimony={testimony}
            isLast={index === testimonials.length - 1}
          />
        ))}
      </div>
    </>
  );
};

export default Testimonial;
