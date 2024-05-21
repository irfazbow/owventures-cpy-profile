import SubCardCulture from "./SubCardCulture";

export default function BriefAboutCulture() {
  return (
    <>
      <div className="py-6 sm:py-8 lg:py-12 mb-20">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="text-center text-2xl font-bold text-gray-800 md:mb-2 lg:text-3xl">
            <span className="text-orange-500">The Work Culture: </span>
            The Foundation of Our Thrive
          </h2>

          <div className="flex flex-wrap justify-center gap-4 p-4">
            <SubCardCulture value="Exploration" />
            <SubCardCulture value="Curiosity" />
            <SubCardCulture value="Collaboration" />
          </div>
        </div>
      </div>
    </>
  );
}
