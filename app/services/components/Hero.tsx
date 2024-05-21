import Image from "next/image";
import serviceHero from "@/public/imgs/servicehero.webp";

const Hero = () => {
  return (
    <>
      <div className=" relative text-white">
        <Image
          src={serviceHero}
          alt="Outer Wilds Ventures Properties Hero"
          className="w-full"
          priority={true}
        />
      </div>
    </>
  );
};

export default Hero;
