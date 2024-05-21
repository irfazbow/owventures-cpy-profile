import Image from "next/image";
import heroMain from "@/public/imgs/hero.webp";

export default function Hero() {
  return (
    <>
      <div className=" relative text-white">
        <Image
          src={heroMain}
          alt="Outer Wilds Campfire Hero"
          className="object-cover object-right w-full h-[400px]
          md:h-full"
          priority={true}
        />
        <div
          className=" absolute top-[20%] w-full text-center text-3xl font-semibold
          sm:text-4xl
        md:text-5xl
        lg:text-7xl
        2xl:text-8xl"
        >
          Outer Wilds Ventures
          <div
            className=" mt-2 mx-auto w-full  max-w-[500px]
          text-center text-lg font-semibold text-gray-200
          underline decoration-orange-500 underline-offset-4
          sm:text-xl sm:mt-6
          md:text-3xl md:mt-8 md:max-w-[1000px]
          lg:text-4xl lg:mt-18
          2xl:text-5xl"
          >
            Unravel the mysteries of the cosmos
          </div>
          <div
            className="
            mt-10 text-xs font-medium text-gray-200 max-w-[400px] mx-auto
            sm:text-base
            md:text-lg md:mt-14 md:max-w-[1000px]
            lg:text-2xl lg:mt-16
            2xl:text-3xl 2xl:mt-20"
          >
            Strap on your hiking boots, check your oxygen levels, and get ready
            to venture into space
          </div>
        </div>
      </div>
    </>
  );
}
