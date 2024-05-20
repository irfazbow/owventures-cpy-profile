"use client";

import Card from "./Card";
import { useTeamContext } from "@/app/context/TeamContext";

const MemberShowcase = () => {
  const { teams } = useTeamContext();

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {teams &&
          teams.slice(4).map((member) => (
            <div
              key={member.id}
              className="w-full sm:w-[50%] md:w-[40%] lg:w-[20%] p-2 flex justify-center"
            >
              <Card member={member} />
            </div>
          ))}
      </div>
    </>
  );
};

export default MemberShowcase;
