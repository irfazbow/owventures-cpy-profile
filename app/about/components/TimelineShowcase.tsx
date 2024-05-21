import React from "react";
import { events } from "@/data/about-timeline";

const TimelineShowcase: React.FC = () => {
  return (
    <div className="p-4 mx-auto md:max-w-[90%]">
      <div className=" text-xl my-4 font-extrabold text-gray-800 sm:text-2xl md:text-3xl text-center">
        <span className="text-red-900">Timeline </span>of the Outer Wilds
        Ventures
      </div>

      <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
        <div className="flex md:contents flex-row-reverse">
          <div className="p-4 my-6 text-orange-200 bg-[#382C17] rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
            <h3
              className="text-lg font-bold text-white
              sm:text-xl
              lg:text-2xl"
            >
              {events[0].event}
            </h3>
            <p
              className=" border-b-2 py-1 text-base border-orange-500
              md:hidden"
            >
              {events[0].date}
            </p>
            <p
              className="mt-2 leading-2 text-sm text-justify
               sm:text-base
               lg:text-lg"
            >
              {events[0].description}
            </p>
          </div>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-orange-400"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-orange-400 rounded-full top-1/2"></div>
          </div>
          <div className="hidden col-start-6 col-end-10 border-orange-400 md:flex">
            <div
              className="flex relative justify-center items-center text-base
              sm:text-lg
              lg:text-xl"
            >
              {events[0].date}
              <div className=" absolute left-[0%] bottom-[43%] h-[2px] w-56 bg-orange-400"></div>
            </div>
          </div>
        </div>

        <div className="flex md:contents">
          <div className="hidden justify-end col-start-1 col-end-5 border-orange-400 md:flex">
            <div
              className="flex relative justify-center items-center text-base
              sm:text-lg
              lg:text-xl"
            >
              {events[1].date}
              <div className=" absolute right-[0%] bottom-[43%] h-[2px] w-56 bg-orange-400"></div>
            </div>
          </div>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-orange-400"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-orange-400 rounded-full top-1/2"></div>
          </div>
          <div className="p-4 my-6 text-orange-200 bg-[#382C17] rounded-xl col-start-6 col-end-10 mr-auto">
            <h3
              className="text-lg font-bold text-white
              sm:text-xl
              lg:text-2xl"
            >
              {events[1].event}
            </h3>
            <p
              className=" border-b-2 py-1 text-base border-orange-500
              md:hidden"
            >
              {events[1].date}
            </p>
            <p
              className="mt-2 leading-2 text-sm text-justify
               sm:text-base
               lg:text-lg"
            >
              {events[1].description}
            </p>
          </div>
        </div>

        <div className="flex md:contents flex-row-reverse">
          <div className="p-4 my-6 text-orange-200 bg-[#382C17] rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
            <h3
              className="text-lg font-bold text-white
              sm:text-xl
              lg:text-2xl"
            >
              {events[2].event}
            </h3>
            <p
              className=" border-b-2 py-1 text-base border-orange-500
              md:hidden"
            >
              {events[2].date}
            </p>
            <p
              className="mt-2 leading-2 text-sm text-justify
               sm:text-base
               lg:text-lg"
            >
              {events[2].description}
            </p>
          </div>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-orange-400"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-orange-400 rounded-full top-1/2"></div>
          </div>
          <div className="hidden col-start-6 col-end-10 border-orange-400 md:flex">
            <div
              className="flex relative justify-center items-center text-base
              sm:text-lg
              lg:text-xl"
            >
              {events[2].date}
              <div className=" absolute left-[0%] bottom-[43%] h-[2px] w-56 bg-orange-400"></div>
            </div>
          </div>
        </div>

        <div className="flex md:contents">
          <div className="hidden justify-end col-start-1 col-end-5 border-orange-400 md:flex">
            <div
              className="flex relative justify-center items-center text-base
              sm:text-lg
              lg:text-xl"
            >
              {events[3].date}
              <div className=" absolute right-[0%] bottom-[43%] h-[2px] w-56 bg-orange-400"></div>
            </div>
          </div>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-orange-400"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-orange-400 rounded-full top-1/2"></div>
          </div>
          <div className="p-4 my-6 text-orange-200 bg-[#382C17] rounded-xl col-start-6 col-end-10 mr-auto">
            <h3
              className="text-lg font-bold text-white
              sm:text-xl
              lg:text-2xl"
            >
              {events[3].event}
            </h3>
            <p
              className=" border-b-2 py-1 text-base border-orange-500
              md:hidden"
            >
              {events[3].date}
            </p>
            <p
              className="mt-2 leading-2 text-sm text-justify
               sm:text-base
               lg:text-lg"
            >
              {events[3].description}
            </p>
          </div>
        </div>

        <div className="flex md:contents flex-row-reverse">
          <div className="p-4 my-6 text-orange-200 bg-[#382C17] rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
            <h3
              className="text-lg font-bold text-white
              sm:text-xl
              lg:text-2xl"
            >
              {events[4].event}
            </h3>
            <p
              className=" border-b-2 py-1 text-base border-orange-500
              md:hidden"
            >
              {events[4].date}
            </p>
            <p
              className="mt-2 leading-2 text-sm text-justify
               sm:text-base
               lg:text-lg"
            >
              {events[4].description}
            </p>
          </div>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-orange-400"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-orange-400 rounded-full top-1/2"></div>
          </div>
          <div className="hidden col-start-6 col-end-10 border-orange-400 md:flex">
            <div
              className="flex relative justify-center items-center text-base
              sm:text-lg
              lg:text-xl"
            >
              {events[4].date}
              <div className=" absolute left-[0%] bottom-[43%] h-[2px] w-56 bg-orange-400"></div>
            </div>
          </div>
        </div>

        <div className="flex md:contents">
          <div className="hidden justify-end col-start-1 col-end-5 border-orange-400 md:flex">
            <div
              className="flex relative justify-center items-center text-base
              sm:text-lg
              lg:text-xl"
            >
              {events[5].date}
              <div className=" absolute right-[0%] bottom-[43%] h-[2px] w-56 bg-orange-400"></div>
            </div>
          </div>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-orange-400"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-orange-400 rounded-full top-1/2"></div>
          </div>
          <div className="p-4 my-6 text-orange-200 bg-[#382C17] rounded-xl col-start-6 col-end-10 mr-auto">
            <h3
              className="text-lg font-bold text-white
              sm:text-xl
              lg:text-2xl"
            >
              {events[5].event}
            </h3>
            <p
              className=" border-b-2 py-1 text-base border-orange-500
              md:hidden"
            >
              {events[5].date}
            </p>
            <p
              className="mt-2 leading-2 text-sm text-justify
               sm:text-base
               lg:text-lg"
            >
              {events[5].description}
            </p>
          </div>
        </div>

        <div className="flex md:contents flex-row-reverse">
          <div className="p-4 my-6 text-orange-200 bg-[#382C17] rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
            <h3
              className="text-lg font-bold text-white
              sm:text-xl
              lg:text-2xl"
            >
              {events[6].event}
            </h3>
            <p
              className=" border-b-2 py-1 text-base border-orange-500
              md:hidden"
            >
              {events[6].date}
            </p>
            <p
              className="mt-2 leading-2 text-sm text-justify
               sm:text-base
               lg:text-lg"
            >
              {events[6].description}
            </p>
          </div>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-orange-400"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-orange-400 rounded-full top-1/2"></div>
          </div>
          <div className="hidden col-start-6 col-end-10 border-orange-400 md:flex">
            <div
              className="flex relative justify-center items-center text-base
              sm:text-lg
              lg:text-xl"
            >
              {events[6].date}
              <div className=" absolute left-[0%] bottom-[43%] h-[2px] w-56 bg-orange-400"></div>
            </div>
          </div>
        </div>

        <div className="flex md:contents">
          <div className="hidden justify-end col-start-1 col-end-5 border-orange-400 md:flex">
            <div
              className="flex relative justify-center items-center text-base
              sm:text-lg
              lg:text-xl"
            >
              {events[7].date}
              <div className=" absolute right-[0%] bottom-[43%] h-[2px] w-56 bg-orange-400"></div>
            </div>
          </div>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-orange-400"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-orange-400 rounded-full top-1/2"></div>
          </div>
          <div className="p-4 my-6 text-orange-200 bg-[#382C17] rounded-xl col-start-6 col-end-10 mr-auto">
            <h3
              className="text-lg font-bold text-white
              sm:text-xl
              lg:text-2xl"
            >
              {events[7].event}
            </h3>
            <p
              className=" border-b-2 py-1 text-base border-orange-500
              md:hidden"
            >
              {events[7].date}
            </p>
            <p
              className="mt-2 leading-2 text-sm text-justify
               sm:text-base
               lg:text-lg"
            >
              {events[7].description}
            </p>
          </div>
        </div>

        <div className="flex md:contents flex-row-reverse">
          <div className="p-4 my-6 text-orange-200 bg-[#382C17] rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
            <h3
              className="text-lg font-bold text-white
              sm:text-xl
              lg:text-2xl"
            >
              {events[8].event}
            </h3>
            <p
              className=" border-b-2 py-1 text-base border-orange-500
              md:hidden"
            >
              {events[8].date}
            </p>
            <p
              className="mt-2 leading-2 text-sm text-justify
               sm:text-base
               lg:text-lg"
            >
              {events[8].description}
            </p>
          </div>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-orange-400"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-orange-400 rounded-full top-1/2"></div>
          </div>
          <div className="hidden col-start-6 col-end-10 border-orange-400 md:flex">
            <div
              className="flex relative justify-center items-center text-base
              sm:text-lg
              lg:text-xl"
            >
              {events[8].date}
              <div className=" absolute left-[0%] bottom-[43%] h-[2px] w-56 bg-orange-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineShowcase;
