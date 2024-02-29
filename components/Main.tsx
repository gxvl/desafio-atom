import React from "react";
import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <div className="container bg-purple-100 grid place-items-center lg:flex justify-center gap-6 max-w-[1920px] w-full mx-auto p-10">
      <div className="max-w-lg">
        <h1 className="text-3xl lg:text-4xl lg:leading-relaxed text-purple-50 font-pop font-bold">
          Veja o guia definitivo para conquistar seus objetivos como DEV em 2022
        </h1>
        <p className="text-slate-200 text-base lg:text-lg max-w-lg py-5 pr-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu
          in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed
          tristique placerat hac.
        </p>
        <Link href="/" className="">
          <p
            className="flex gap-2 font-bold rounded text-purple-50
           cursor-pointer hover:scale-105 transition-all items-center"
          >
            Veja mais
            <Image src="/arrow-right.svg" alt="" width={24} height={24} />
          </p>
        </Link>
      </div>
      <div className="p-4">
        <Image src="/pc.svg" alt="1" width={570} height={346} />
      </div>
    </div>
  );
};

export default Main;
