import React, { ReactNode } from "react";
import Image from "next/image";

interface CardProps {
  img?: string;
  txt: string;
  lorem: string;
  date: string;
  font?: string;
  py?: string;
}

export const Card: React.FC<CardProps> = ({
  img,
  txt,
  date,
  font,
  lorem,
  py,
}) => {
  return (
    <div className="container flex flex-col mx-auto">
      {img ? (
        <Image
          className="pb-4"
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
      <h4
        className={`text-2xl text-purple-100 ${font || ""} font-bold py-${
          py || "2"
        } leading-relaxed`}
      >
        {txt}
      </h4>
      <p className="text-black pb-4">{lorem}</p>
    </div>
  );
};
