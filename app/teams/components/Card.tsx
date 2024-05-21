"use client";

import { TeamMember } from "@/types/team";
import Image from "next/image";
import { useState } from "react";
import CardDetail from "./CardDetail";

interface TeamCardProps {
  member: TeamMember;
}

const Card: React.FC<TeamCardProps> = ({ member }) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const handleCloseDetail = () => {
    setSelectedMember(null);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-2 my-6">
        <div
          className="relative my-6 cursor-pointer transition duration-200 transform hover:-translate-1 hover:scale-105 group hover:z-10 "
          onClick={() => handleCardClick(member)}
        > 
          <div className="absolute -inset-2">
            <div className="w-78 h-full max-w-sm mx-auto rounded-2xl lg:mx-0 opacity-70 blur-lg bg-gradient-to-r from-orange-800 via-orange-500 to-orange-200"></div>
          </div>
          <Image
            src={member.image}
            className="relative object-cover h-96 w-72 rounded-xl group-hover:scale-110 transition group-hover:-translate-y-4"
            alt={member.name}
            width={500}
            height={500}
          />
        </div>
        <h3
          className="cursor-pointer text-2xl font-bold text-center"
          onClick={() => handleCardClick(member)}
        >
          {member.name}
        </h3>
        <h4
          className="cursor-pointer text-center text-gray-700 underline underline-offset-4 decoration-orange-500"
          onClick={() => handleCardClick(member)}
        >
          {member.profession}
        </h4>
      </div>
      {selectedMember && (
        <CardDetail member={selectedMember} onClose={handleCloseDetail} />
      )}
    </>
  );
};

export default Card;
