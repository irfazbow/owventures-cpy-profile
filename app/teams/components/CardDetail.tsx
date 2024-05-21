"use client";

import { TeamMember } from "@/types/team";
import Image from "next/image";
import React, { useEffect } from "react";
import mail from "@/public/imgs/util-mail.svg";

interface TeamCardDetailProps {
  member: TeamMember;
  onClose?: () => void;
}

const CardDetail: React.FC<TeamCardDetailProps> = ({ member, onClose }) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      onClose?.();
    }
  };

  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-400/50 z-50"
        onClick={handleClick}
      >
        <div
          className="max-w-5xl h-screen overflow-y-auto flex items-center flex-wrap mx-auto p-6"
          onClick={handleClick}
        >
          <div className="relative w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-[#F6E6D9] lg:mx-0 p-4 md:p-12">
            <div className="absolute top-4 right-4">
              <button
                className="bg-orange-300 hover:bg-orange-500 text-white text-xl font-bold py-1 px-3 rounded-full"
                onClick={onClose}
              >
                ×
              </button>
            </div>
            <div className="text-center lg:text-left">
              <div className="block overflow-hidden lg:hidden rounded-full shadow-xl mx-auto h-48 w-48 bg-cover bg-center">
                <Image
                  src={member.image}
                  className="object-cover rounded-none lg:rounded-xl shadow-2xl lg:hidden"
                  width={300}
                  height={300}
                  alt={member.name}
                />
              </div>

              <h3 className="text-3xl font-bold pt-8 lg:pt-0">{member.name}</h3>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-4 border-orange-500"></div>
              <h4 className="pt-4 text-xl underline underline-offset-2 decoration-orange-500 font-bold flex items-center justify-center lg:justify-start">
                {member.profession}
              </h4>
              <div>
                <h5 className="pt-2 text-orange-800 text-lg lg:text-sm flex items-center justify-center lg:justify-start">
                  {member.funFact}
                </h5>
                <div className="flex flex-col text-justify gap-4 py-4 text-sm">
                  <p className="text-base font-semibold underline underline-offset-2 decoration-orange-500">{`Who is ${member.name}?`}</p>
                  <p>{member.about1}</p>
                  <p>{member.about2}</p>
                  <p>{member.about3}</p>
                </div>
                <div className="flex flex-col text-justify gap-1 py-4 text-sm">
                  <p className="text-base underline underline-offset-2 font-semibold decoration-orange-500">{`${member.name}'s Contribution`}</p>
                  {member.achievements.map((achievement, index) => (
                    <p key={index}>{achievement}</p>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Image
                    src={mail}
                    alt="Email Member"
                    width={20}
                    className=""
                  />
                  <a
                    href={`mailto:${member.contact}`}
                    aria-label="Our email"
                    title="Our email"
                    className="transition-colors text-sm duration-300 text-gray-700 hover:text-orange-600"
                  >
                    {member.contact}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block w-full lg:w-2/5">
            <div className="">
              <Image
                src={member.image}
                className="hidden lg:block object-cover h-[500px] w-[358px] rounded-e-xl"
                alt={member.name}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
