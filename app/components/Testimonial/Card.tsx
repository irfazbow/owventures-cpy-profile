import { Testimony } from "@/types/testimony";
import React from "react";

interface CardProps {
  testimony: Testimony;
  isLast: boolean;
}

const Card: React.FC<CardProps> = ({
  testimony: { testimony, name, profession },
  isLast,
}) => {
  return (
    <>
      <div className="bg-[#FED7AA] shadow rounded-lg p-8 flex flex-col justify-between h-full">
        <div>
          <p className="text-gray-800 mb-4 text-justify">{testimony}</p>
        </div>
        <div className="mt-auto">
          <h4 className="text-black font-bold">
            - {name}, {profession}
          </h4>
        </div>
      </div>
    </>
  );
};

export default Card;
