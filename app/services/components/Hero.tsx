import Image from "next/image";
import productHero from "@/public/imgs/producthero.webp";

const Hero = () => {
  return (
    <>
      <div className=" relative text-white">
        <Image
          src={productHero}
          alt="Outer Wilds Ventures Properties Hero"
          className="w-full"
          priority={true}
        />
      </div>
    </>
  );
};

export default Hero;
