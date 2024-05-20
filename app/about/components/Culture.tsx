import Image from "next/image";
import React from "react";
import aboutCulture from "@/public/imgs/aboutculture.png";

const Culture = () => {
  return (
    <>
      <div className="px-8 py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="flex justify-center items-center bg-[#E99068]">
              <div className="h-64 overflow-hidden rounded-lg bg-gray-100 md:h-auto">
                <Image
                  src={aboutCulture}
                  loading="lazy"
                  alt="Outer Wilds Ventures"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="md:pt-8">
              <p className="text-center font-bold text-orange-500 md:text-left">
                Work With Us, Know About Us
              </p>

              <h1 className="mb-4 text-center text-2xl font-extrabold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                The Work Culture
              </h1>
              <p className="mb-6 text-justify text-gray-700 sm:text-lg md:mb-8">
                At Outer Wilds Ventures, our work culture is rooted in curiosity
                and a passion for knowledge sharing. We believe that every
                question sparks the potential for new discoveries and innovative
                solutions. Our team thrives in an environment where
                inquisitiveness is encouraged and collaboration is key.
              </p>

              <p className="mb-6 text-justify text-gray-700 sm:text-lg md:mb-8">
                We foster a culture of continuous learning, where every team
                member is empowered to explore new ideas and technologies. Our
                open-door policy ensures that knowledge flows freely across all
                levels of the organization, promoting a sense of community and
                mutual growth.
              </p>

              <p className="mb-6 text-justify text-gray-700 sm:text-lg md:mb-8">
                Innovation is at the heart of what we do. By valuing diverse
                perspectives and fostering a supportive environment, we aim to
                push the boundaries of what&apos;s possible. Our work culture
                not only fuels professional development but also personal
                fulfillment, making Outer Wilds Ventures a place where curiosity
                leads to excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Culture;
