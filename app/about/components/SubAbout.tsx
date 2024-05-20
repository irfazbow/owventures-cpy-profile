import React from "react";
import Image from "next/image";
import aboutChart from "@/public/imgs/aboutplanetchart.webp";
import aboutOrbit from "@/public/imgs/aboutouterwilds.webp";

const SubAbout = () => {
  return (
    <>
      <div className="my-8 px-10">
        <div className="container mx-auto py-8 px-4 md:px-0 md:flex md:flex-row-reverse md:justify-center md:items-center">
          <div className="md:w-1/2 lg:w-2/3 mt-8 md:mt-0">
            <Image
              src={aboutChart}
              alt="Planetary Chart of Outer Wilds"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="mt-4 md:mt-0 md:w-1/2 lg:w-1/3 md:mr-8">
            <h1 className="text-xl text-center font-extrabold text-gray-800 sm:text-2xl md:text-3xl mb-6">
              The Planetary Chart of Outer Wilds
            </h1>
            <div className="text-base text-justify flex flex-col gap-2">
              <p>
                As our Deep Space Satellite launched succesfully, we were able
                to produce a planetary chart and a orbital path mapping of the
                Outer Wilds.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-8 px-4 md:px-0 md:flex md:flex-row md:justify-center md:items-center">
          <div className="md:w-1/2 lg:w-2/3 mt-8 md:mt-0">
            <Image
              src={aboutOrbit}
              alt="Hearthian Tadpole Met the Nomai"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="mt-4 md:mt-0 md:w-1/2 lg:w-1/3 md:ml-8">
            <h1 className="text-xl text-center font-extrabold text-gray-800 sm:text-2xl md:text-3xl mb-6">
              The Orbital Path of Outer Wilds
            </h1>
            <div className="text-base text-justify flex flex-col gap-2">
              <p>
                Below, the orbital path of the Outer Wilds can be seen. At the
                centre of the solar system is the Sun - a yellow or red dwarf
                star - orbited by five planets and numerous other astronomical
                bodies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubAbout;
