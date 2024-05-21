import mainMural1 from "@/public/imgs/main-mural1.webp";
import mainMural2 from "@/public/imgs/main-mural2.webp";
import mainMural3 from "@/public/imgs/main-mural3.webp";
import SubCardImage from "./SubCardImage";

export default function BriefAboutHistory() {
  return (
    <>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 md:mb-8">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              <span className="text-red-900 underline decoration-2 underline-offset-[6px] decoration-orange-500">
                The Nomai Ruins:
              </span>{" "}
              Where Our Story Began
            </h2>

            <p className="mx-auto max-w-screen-lg text-justify sm:text-center text-gray-800 md:text-lg">
              The discovery of the Nomai Ruins,{" "}
              <span className="text-red-900 font-semibold">
                the ancient race that lived before
              </span>
              , on Timber Hearth sparked immense curiosity among our founders.
              This pivotal moment led to the establishment of Outer Wilds
              Ventures, driven by a passion for exploration and discovery.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 p-4">
            <SubCardImage
              imgSource={mainMural1}
              imgAlt="Nomai met tadpole Hearthian"
            />
            <SubCardImage
              imgSource={mainMural2}
              imgAlt="Nomai landed on the Timber Hearth"
            />
            <SubCardImage
              imgSource={mainMural3}
              imgAlt="A Nomai holding weight scale"
            />
          </div>
        </div>
      </div>
    </>
  );
}
