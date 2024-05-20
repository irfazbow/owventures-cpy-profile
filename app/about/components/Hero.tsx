import Image from "next/image";
import aboutHero from "@/public/imgs/abouthero.webp";

const Hero = () => {
  return (
    <>
      <div className=" relative text-white">
        <Image
          src={aboutHero}
          alt="Outer Wilds Observatory Hero"
          className="w-full"
        />
        <div
          className=" absolute bg-black/40 bottom-0 w-full p-4
          text-lg font-semibold text-orange-400
          sm:text-2xl          
          md:text-3xl
          lg:text-4xl
          2xl:text-5xl"
        >
          Let&apos;s explore about Outer Wilds Ventures!
        </div>
      </div>
    </>
  );
};

export default Hero;
