import Image from "next/image";
import React from "react";

interface SubCardImageProps {
  imgSource: any;
  imgAlt: string;
}

const SubCardImage: React.FC<SubCardImageProps> = ({ imgSource, imgAlt }) => {
  return (
    <>
      <div className="flex-1 min-w-[200px] max-w-[400px]">
        <div className="relative w-full h-64">
          <Image
            src={imgSource}
            alt={imgAlt}
            layout="fill"
            loading="lazy"
            objectFit="cover"
            objectPosition="center"
            className="rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default SubCardImage;
