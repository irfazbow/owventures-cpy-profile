import React from "react";
import RocketIcon from "./icons/RocketIcon";
import BookmarkPlusIcon from "./icons/BookmarkPlusIcon";
import VideoIcon from "./icons/VideoIcon";
import FileQuestionIcon from "./icons/FileQuestionIcon";
import Image from "next/image";
import serviceFlight from "@/public/imgs/service-flight.jpg";
import mail from "@/public/imgs/util-mail.svg";

const MainFeature = () => {
  return (
    <>
      <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold text-center sm:text-5xl">
            Outer Wilds Ventures <br />
            <span className="text-red-900">Flight Training</span>
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center">
            Join Gossan&apos;s flight training program and explore the cosmos
            with confidence. Discover the features that make your learning
            experience both exciting and effective.
          </p>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mt-4 space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md">
                    <RocketIcon />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">
                    Advanced Flight Techniques
                  </h3>
                  <p className="mt-2">
                    Learn advanced flight techniques with Gossan, utilizing
                    cutting-edge training methods to enhance your piloting
                    skills.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md">
                    <BookmarkPlusIcon />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">
                    Comprehensive Training Resources
                  </h3>
                  <p className="mt-2">
                    Access a library of comprehensive resources that provide
                    in-depth knowledge on spacecraft operation and navigation.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md">
                    <VideoIcon />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">
                    Interactive Simulations
                  </h3>
                  <p className="mt-2">
                    Engage with interactive simulations that replicate
                    real-world scenarios, helping you to prepare for the
                    unexpected.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md">
                    <FileQuestionIcon />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">
                    Personalized Assessments
                  </h3>
                  <p className="mt-2">
                    Take advantage of personalized assessments to track your
                    progress and identify areas for improvement.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md"></div>
                </div>
                <div className="ml-4">
                  <div className="mt-2">
                    Let us know if you are interested in the program!
                    <p>Contact through:</p>
                    <div className="flex flex-row gap-2 mt-1">
                      <Image
                        src={mail}
                        alt="Email Member"
                        width={20}
                        className=""
                      />
                      <a
                        href="mailto:service@owventures.com"
                        aria-label="Our email"
                        title="Our email"
                        className="transition-colors text-sm duration-300 text-gray-700 hover:text-orange-600"
                      >
                        service@owventures.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="mt-10 lg:mt-0">
            <Image
              width="600"
              height="600"
              src={serviceFlight}
              className="mx-auto rounded-lg shadow-lg dark-bg-gray-500"
              alt="Spacecraft training"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainFeature;
