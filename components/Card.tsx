import React, { ReactNode } from "react";
import Image from "next/image";

interface CardProps {
  img?: string;
  txt: string;
  lorem: string;
  date: string;
  font?: string;
}

export const Card: React.FC<CardProps> = ({ img, txt, date, font, lorem }) => {
  return (
    <div className="container flex flex-col mx-auto py-4">
      {img ? (
        <Image
          src={img || ""}
          alt={img || ""}
          // layout="responsive"
          width={569}
          height={342}
        />
      ) : (
        ""
      )}
      <p>{date}</p>
      <h4 className={`text-2xl text-purple-100 ${font || ""} font-bold py-4`}>
        {txt}
      </h4>
      <p className="text-black">{lorem}</p>
    </div>
  );
};
