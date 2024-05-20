import Image from "next/image";
import productHero from "@/public/imgs/producthero.webp";

const Hero = () => {
  return (
    <>
      <div className=" relative text-white">
        <Image
          src={productHero}
          alt="Outer Wilds Observatory Hero"
          className="w-full"
        />
      </div>
    </>
  );
};

export default Hero;
