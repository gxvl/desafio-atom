import React from "react";
import { Card } from "./Card";
import Image from "next/image";

export const CardGrid = () => {
  return (
    <div className="container max-w-[1920px] w-full mx-auto p-10">
      <div className="lg:flex justify-center grid lg:gap-16 p-4 sm:my-5">
        <div className=" max-w-xl lg:px-1">
          <Card
            img="/mac.svg"
            txt="Começando no ReactJS em 2022"
            date="Janeiro 04, 2022"
            py="4"
            lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in
             aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh
              nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.
               Sed volutpat aenean."
          />
        </div>
        <div className="max-w-lg lg:px-5 ml-2">
          <Card
            font="font-pop"
            txt="Conheça as principais técnicas para conseguir uma vaga internacional em programação"
            date="Janeiro 04, 2022"
            lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. 
            Sed volutpat aenean sit vitae, sed tristique."
          />
          <Image
            src="/divider.svg"
            alt="divider"
            width={500}
            height={50}
            className="pb-4"
          />
          <Card
            txt="Veja a evolução do Front-end na prática"
            date="Janeiro 04, 2022"
            lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. "
          />
        </div>
      </div>

      {/* div para os cards de baixo */}

      <div className="grid grid-rows-3 grid-flow-col mx-auto lg:max-w-6xl md:flex md:gap-7 md:justify-center">
        <Card
          img="/coding.svg"
          txt="10 dicas para conseguir a vaga desejada"
          date="Janeiro 04, 2022"
          lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque.
           Sed volutpat aenean sit vitae, sed tristique. "
        />
        <Card
          img="/code.svg"
          txt="Deixe seu código mais semântico com essas dicas"
          date="Janeiro 04, 2022"
          lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque.
           Sed volutpat aenean sit vitae, sed tristique. "
        />
        <Card
          img="/phone.svg"
          txt="Use essas dicas nas suas aplicações mobile"
          date="Janeiro 04, 2022"
          lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. 
          Sed volutpat aenean sit vitae, sed tristique. "
        />
      </div>
    </div>
  );
};
