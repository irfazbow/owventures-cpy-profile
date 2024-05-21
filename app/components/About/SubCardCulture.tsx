import Image from "next/image";
import React from "react";

interface SubCardCultureProps {
  value: string;
}

const SubCardCulture: React.FC<SubCardCultureProps> = ({ value }) => {
  return (
    <>
      <div className="flex-1 min-w-[200px] max-w-[400px]">
        <div
          className="w-full flex justify-center items-center h-16 border-b-4 border-orange-500
        text-xl md:text-2xl xl:text-4xl
        text-center font-extrabold"
        >
          <h3>{value}</h3>
        </div>
      </div>
    </>
  );
};

export default SubCardCulture;
