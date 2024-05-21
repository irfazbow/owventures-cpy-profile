import Image from "next/image";
import React from "react";
import aboutCulture from "@/public/imgs/aboutculture.png";

const Culture = () => {
  return (
    <>
      <div className="px-8 py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="flex justify-center items-center bg-[#E99068]">
              <div className="h-64 overflow-hidden bg-gray-100 md:h-auto">
                <Image
                  src={aboutCulture}
                  loading="lazy"
                  alt="Outer Wilds Ventures"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="md:pt-8">
              <h2 className="text-center font-bold text-orange-500 md:text-left">
                Be a Part of Us and Discover Our Culture
              </h2>

              <h2 className="mb-4 text-center text-2xl font-extrabold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                The Work Culture
              </h2>

              <h3 className="text-center font-extrabold text-orange-500 md:text-left text-lg md:text-xl lg:text-2xl">
                Exploration
              </h3>
              <p className="mb-6 text-justify text-gray-800 sm:text-lg md:mb-8">
                At Outer Wilds Ventures, exploration is at the core of our work
                culture. We are driven by the thrill of uncovering new
                frontiers, whether it&apos;s in the vastness of space or the
                intricacies of a challenging project. Our team is encouraged to
                embark on new adventures, seek out innovative solutions, and
                always ask &apos;what&apos;s next?&apos;.
              </p>

              <h3 className="text-center font-extrabold text-orange-500 md:text-left text-lg md:text-xl lg:text-2xl">
                Curiosity
              </h3>
              <p className="mb-6 text-justify text-gray-800 sm:text-lg md:mb-8">
                Curiosity fuels our passion and drives our quest for knowledge.
                At Outer Wilds Ventures, we nurture an environment where asking
                questions is celebrated and learning is continuous. We believe
                that every inquiry can lead to groundbreaking discoveries, and
                we support our team in their pursuit of new knowledge and
                understanding.
              </p>

              <h3 className="text-center font-extrabold text-orange-500 md:text-left text-lg md:text-xl lg:text-2xl">
                Collaboration
              </h3>
              <p className="mb-6 text-justify text-gray-800 sm:text-lg md:mb-8">
                Collaboration is essential to our success. We thrive on the
                diverse perspectives and ideas that each team member brings to
                the table. Our collaborative spirit ensures that we work
                together to overcome challenges and achieve our goals. By
                fostering a supportive and inclusive environment, we create a
                community where everyone can contribute and grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Culture;
