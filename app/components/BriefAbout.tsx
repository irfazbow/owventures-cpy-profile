import Image from "next/image";
import mainFounder from "@/public/imgs/main-founder.webp";

export default function BriefAbout() {
  return (
    <>
      <div className="sm:flex items-center max-w-screen-xl mb-10">
        <div className="sm:w-1/2 px-10 py-2 mt-8">
          <div className="image object-center text-center">
            <Image src={mainFounder} alt="Outer Wilds Ventures Team" />
          </div>
          <div className=" text-center text-gray-500 text-sm italic">
            <p>From top left to bottom right:</p>
            <p>Hornfels, Gossan, Feldspar, Slate</p>
          </div>
        </div>
        <div className="sm:w-1/2 px-5 py-2">
          <span className="text-gray-500 border-b-2 border-orange-500 uppercase">
            Founded by the four
          </span>
          <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
            Meet <span className="text-orange-500">Outer Wilds Ventures</span>
          </h2>
          <div className="text-gray-700 text-justify">
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
