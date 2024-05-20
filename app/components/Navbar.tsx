"use client";

import { useState } from "react";
import Link from "next/link";
import MenuItems from "./MenuItems";
import Image from "next/image";
import menuOpen from "@/public/imgs/nav-menuopen.svg";
import logoFacebook from "@/public/imgs/nav-facebook.svg";
import logoTwitter from "@/public/imgs/nav-twitter.svg";
import logoYoutube from "@/public/imgs/nav-youtube.svg";
import logoInstagram from "@/public/imgs/nav-instagram.svg";
import logoMed from "@/public/imgs/logo-med.webp";
import logoWords from "@/public/imgs/logo-fullwords.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b-2 border-orange-400 sticky top-0 w-full z-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 overflow-visible">
          <div className="flex-1 justify-start">
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-800 hover:text-orange-500 focus:outline-none"
            >
              <Image src={menuOpen} alt="Nav Menu" />
            </button>
            <div className="hidden md:text-sm md:space-x-2 lg:text-base md:flex md:items-center lg:space-x-4 whitespace-nowrap">
              <MenuItems />
            </div>
          </div>
          <div className="flex-1 justify-center">
            <div className="flex justify-center relative">
              <Link href="/">
                <Image
                  src={logoMed}
                  alt="Outer Wilds Ventures Logo Medium"
                  width={70}
                />
                <div className="hidden md:block absolute top-[10%] right-[-20%]">
                  <Image
                    src={logoWords}
                    alt="Outer Wilds Ventures Logo Medium"
                    height={50}
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex-1 justify-end">
            <div className="flex justify-end items-center space-x-4">
              <Link href="https://facebook.com" target="_blank">
                <Image src={logoFacebook} alt="Logo Facebook" width={24} />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <Image src={logoTwitter} alt="Logo Twitter" width={24} />
              </Link>
              <Link href="https://youtube.com" target="_blank">
                <Image src={logoYoutube} alt="Logo Youtube" width={24} />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <Image src={logoInstagram} alt="Logo Instagram" width={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MenuItems toggleMenu={toggleMenu} />
          </div>
        </div>
      )}
    </nav>
  );
}
