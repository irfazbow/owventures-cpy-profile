"use client";

import { useTeamContext } from "@/app/context/TeamContext";
import CardFounder from "./CardFounder";

const FounderShowcase = () => {
  const { teams } = useTeamContext();

  return (
    <div className="mb-12">
      <div
        className="flex justify-center items-center py-2 px-6 mb-4
      text-center text-xl font-extrabold text-gray-800 sm:text-2xl md:text-3xl"
      >
        <h2>
          The<span className="text-orange-500"> founder </span>whom
          <span className="text-orange-500"> discover </span>the Nomai Ruins
        </h2>
      </div>
      <div className="flex flex-wrap justify-center mx-auto sm:max-w-4xl">
        {teams &&
          teams.slice(0, 4).map((member) => (
            <div
              key={member.id}
              className="w-[40%] sm:w-[25%] p-2 flex justify-center"
            >
              <CardFounder member={member} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default FounderShowcase;
