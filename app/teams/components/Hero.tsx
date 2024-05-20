import Image from "next/image";
import teamHero from "@/public/imgs/teamhero.webp";

const Hero = () => {
  return (
    <>
      <div className=" relative text-white">
        <Image
          src={teamHero}
          alt="Outer Wilds Campfire Hero"
          className="w-full"
          priority={true}
        />
      </div>
    </>
  );
};

export default Hero;
