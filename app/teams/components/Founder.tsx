import Image from "next/image";
import teamFounder from "@/public/imgs/teamfounder.webp";

const Founder = () => {
  return (
    <div className="relative flex flex-col-reverse items-center max-w-screen-2xl px-4 mx-auto md:flex-row sm:px-6 p-8">
      <div className="flex items-center py-2 md:w-1/2 md:pb-4 md:pt-4 md:pr-4">
        <div className="text-center px-2">
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
            The
            <span className="font-bold text-orange-500"> Founder</span>
            <span className="font-bold"> and</span>
            <span className="font-bold text-orange-500"> Expert</span>
          </h2>
          <p className=" max-w-md mx-auto mt-3 text-justify text-base text-gray-600   md:mt-5 md:text-lg md:max-w-3xl">
            Outer Wilds Ventures was established by
            <span className=" text-gray-700 font-bold underline decoration-orange-600 underline-offset-2 mx-2">
              Hornfels, Gossan, Feldspar, and Slate
            </span>
            with the mission of exploring the Solar System. Their aim is to
            enhance the Hearthians&apos; knowledge of the Solar System and to
            uncover more about the Nomai, an ancient civilization that once
            inhabited the Solar System. This organization is dedicated to
            advancing scientific understanding and unraveling the mysteries left
            behind by the Nomai.
          </p>
          <p className="text-center italic text-gray-700 mt-6">
            Click/tap on them to learn more!
          </p>
        </div>
      </div>
      <div className="flex items-center py-5 md:w-3/4 md:py-2 md:pl-2">
        <div className="rounded-lg text-black w-full">
          <Image
            src={teamFounder}
            alt="Outer Wilds Ventures Founder"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Founder;
