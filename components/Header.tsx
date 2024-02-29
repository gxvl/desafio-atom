"use client";
import Link from "next/link";
import Image from "next/image";
import { NAV_BUTTONS } from "@/constants";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Como utilizarei o mesmo código para o menu de navegação e para o menu de navegação mobile,
  // criei uma constante para armazenar os links e a reutilizar

  const homeButtons = NAV_BUTTONS.map((link) => (
    <Link
      href={link.href}
      key={link.key}
      className={`text-base text-white  flexCenter cursor-pointer
            pb-1.5 transition-all hover:font-bold ${
              link.key === "home" && "font-bold" // se o link atual no map for igual a home, então coloca font-bold
            }`}
    >
      {link.key === "home" && ( // se o link atual no map for igual a home, então mostra a barra verde
        <Image
          src="/green-bar.svg"
          alt="green-bar"
          width={2}
          height={2}
          loading="lazy"
          className="mr-1"
        />
      )}
      {link.label}
    </Link>
  ));

  return (
    <div className=" bg-purple-100 container lg:flex sm: grid place-items-center justify-center max-w-[1920px] w-full p-10">
      {/* logo */}
      <Link href="/" className=" mt-10 hover:scale-105 transition-all">
        <Image src="/logo.svg" alt="logo" width={161.14} height={36.54} />
      </Link>
      <div className="lg:hidden p-2 grid">
        {/* Menu Hamburger */}
        {/* Ícone de hambúrguer para abrir/fechar o menu */}
        <button
          type="button"
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          {isMenuOpen ? (
            // Se o menu estiver aberto, exibe o 'X' para fechar
            <button onClick={toggleMenu} className="text-4xl">
              &times;
            </button>
          ) : (
            // Quando o menu tá fechado, exibe o ícone de menu
            <button onClick={toggleMenu} className="text-4xl">
              &#8801;
            </button>
          )}
        </button>

        {/* Menu de navegação (exibido/oculto com base no state "isMenuOpen") */}
        {isMenuOpen && (
          <div className="">
            <ul className="text-white">{homeButtons}</ul>
          </div>
        )}
      </div>

      {/* Menu de navegação */}
      <ul className="hidden h-full gap-12 mt-12 px-36 lg:flex">
        {homeButtons}
      </ul>
      <div className="flex mt-10">
        <input
          type="text"
          placeholder="Buscar"
          className=" lg:block bg-purple-200 text-gray-200
           placeholder-gray-200 py-3.5 px-7 rounded-l text-sm	
           text-decoration-none focus:outline-none
            "
        />
        <button
          type="button"
          className="px-6 rounded-r bg-purple-50
            hover:bg-purple-70 transition-all ease-linear cursor-pointer"
        >
          <Image src="/search.svg" alt="search" height={24} width={24} />
        </button>
      </div>
    </div>
  );
}
