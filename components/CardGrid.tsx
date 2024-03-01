"use client";
import React from "react";
import { Card } from "./Card";
import Image from "next/image";
import { motion } from "framer-motion";

export const CardGrid = () => {
  return (
    <div className="container max-w-[1920px] w-full mx-auto p-10">
      {/* div para os cards de cima  */}
      <div className="lg:flex justify-center grid lg:gap-16 p-4 sm:my-5">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className=" max-w-xl lg:px-1"
        >
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="max-w-lg lg:px-5 ml-2"
        >
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
            className="pb-6"
          />
          <Card
            txt="Veja a evolução do Front-end na prática"
            date="Janeiro 04, 2022"
            lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. "
          />
        </motion.div>
      </div>

      {/* div para os cards de baixo */}

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3 }}
        className="grid grid-rows-3 grid-flow-col mx-auto lg:max-w-6xl md:flex md:gap-7 md:justify-center"
      >
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
      </motion.div>
    </div>
  );
};
