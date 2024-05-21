import Image from "next/image";
import mainFounder from "@/public/imgs/main-founder.webp";

export default function BriefAboutTeam() {
  return (
    <>
      <div className="sm:flex items-center max-w-screen-xl mb-10">
        <div className="sm:w-1/2 px-10 py-2 mt-8">
          <div className="image object-center text-center">
            <Image src={mainFounder} alt="Outer Wilds Ventures Team" />
          </div>
          <div className=" text-center text-gray-600 text-sm italic">
            <p>From top left to bottom right:</p>
            <p>Hornfels, Gossan, Feldspar, Slate</p>
          </div>
        </div>
        <div className="sm:w-1/2 px-5 py-2">
          <h3
            className="text-gray-700 font-medium  text-xl uppercase
          underline decoration-2 underline-offset-[6px] decoration-orange-500"
          >
            Founded by the four
          </h3>
          <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
            Meet <span className="text-orange-500">Outer Wilds Ventures</span>
          </h2>
          <div className="text-gray-700 md:text-lg text-justify">
            <p>
              We were born with the goal of exploring the Solar System to
              improve our understanding of the Solar System and of the Nomai, an
              ancient race that once lived in the Solar System.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
