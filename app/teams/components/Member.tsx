import Image from "next/image";
import teamMember from "@/public/imgs/teammember.webp";
import { Bangers } from "next/font/google";

const bangers = Bangers({
  subsets: ["latin"],
  weight: "400",
});

const Member = () => {
  return (
    <div className="relative flex flex-col items-center max-w-screen-2xl px-4 mx-auto md:flex-row sm:px-6 p-8">
      <div className="flex items-center py-5 md:w-3/4 md:py-2 md:pl-2">
        <div className="relative w-full p-3 rounded  md:p-8">
          <div className="rounded-lg text-black w-full">
            <Image
              src={teamMember}
              alt="Outer Wilds Ventures Member"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center py-2 md:w-1/2 md:pb-4 md:pt-4 md:pr-4">
        <div className="text-center px-4">
          <h2 className="text-4xl font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
            The
            <span className="font-bold text-red-900"> Specialist</span>
          </h2>
          <p className=" max-w-md mx-auto mt-3 text-justify text- text-base text-gray-600   md:mt-5 md:text-lg md:max-w-3xl">
            Following the founding of Outer Wilds Ventures, an era of
            unprecedented collaboration among Hearthians began. Visionaries from
            all walks of life—astronauts, explorers, and inventors—united under
            a common dream. Bound by their insatiable curiosity and spirit of
            adventure, these pioneers set forth to unravel the mysteries of the
            cosmos. They charted unknown worlds, forged new paths among the
            stars, and crafted ingenious technologies to propel their endeavors.
            In this collective pursuit, they transformed the fabric of space
            exploration, creating a legacy that would echo through the vastness
            of the universe.
          </p>
          <p className="text-center font-extrabold italic text-gray-700 mt-6">
            Click/tap on them to learn more!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Member;
