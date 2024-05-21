import React from "react";
import aboutMain from "@/public/imgs/aboutmain.webp";
import Image from "next/image";

const MainAbout = () => {
  return (
    <>
      <div className="relative flex flex-col-reverse items-center max-w-screen-2xl px-4 mx-auto md:flex-row sm:px-6 p-8">
        <div className="flex items-center py-2 md:w-1/2 md:pb-4 md:pt-4 md:pr-4">
          <div className="text-center px-4">
            <h2 className="text-xl font-extrabold text-gray-800 sm:text-2xl md:text-3xl">
              The Discovery of the
              <span className=" text-red-900"> Nomai Ruins</span>
            </h2>
            <p className="max-w-md mx-auto mt-3 text-justify text-base md:mt-5 md:text-lg md:max-w-3xl">
              On the day the ruins of the ancient race, called as Nomai, was
              discoverd, the four founders were encouraged to learn more about
              our world and thought of space exploration program. We discovered
              the mural where the Nomai met us, the Hearthian, and in that day,
              on{" "}
              <span className=" italic font-semibold underline underline-offset-2 decoration-orange-400 ">
                {" "}
                Cycle 3138 Lap 26
              </span>
              , we know that we were not alone in the universe.
            </p>
          </div>
        </div>
        <div className="flex items-center py-5 md:w-3/4 md:py-2 md:pl-2">
          <div className="relative w-full p-3 rounded  md:p-8">
            <div className="w-full">
              <Image
                src={aboutMain}
                alt="Outer Wilds Ventures Member"
                width={1000}
                height={1000}
                className=" rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainAbout;
