import { TeamMember } from "@/types/team";
import Image from "next/image";
import React from "react";

interface TeamCardProps {
  member: TeamMember;
}

const CardFounder: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
          <Image
            src={member.image}
            loading="lazy"
            alt={member.name}
            className="h-full w-full object-cover object-center"
            width={100}
            height={100}
          />
        </div>

        <div className="text-center">
          <div className="font-bold text-gray-900 md:text-lg">
            <p>{member.name}</p>
          </div>
          <div className="text-xs sm:text-sm md:text-base">
            <p>{member.profession}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardFounder;
