"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import CustomButton from "./CustomButton";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="Batout Logo"
            width={160}
            height={18}
            className="object-contain"
            priority
          />
        </Link>

        <div className="hidden sm:flex gap-5">
          <CustomButton
            title="Yearly"
            btnType="button"
            containerStyles="text-white bg-[#7c7c7c] rounded min-w-[130px] hover:bg-[#79B552] py-2"
          />
          <CustomButton
            title="Manuel"
            containerStyles="text-white bg-[#7c7c7c] rounded min-w-[130px] hover:bg-[#79B552] py-2"
          />
          <CustomButton
            title="Template"
            containerStyles="text-white bg-[#7c7c7c] rounded min-w-[130px] hover:bg-[#79B552] py-2"
          />
        </div>

        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="sm:hidden flex flex-col items-center text-white py-4">
          <CustomButton
            title="Yearly"
            containerStyles="text-white bg-[#7c7c7c] rounded min-w-[130px] hover:bg-[#79B552] py-2 mb-2"
          />
          <CustomButton
            title="Manuel"
            containerStyles="text-white bg-[#7c7c7c] rounded min-w-[130px] hover:bg-[#79B552] py-2 mb-2"
          />
          <CustomButton
            title="Template"
            containerStyles="text-white bg-[#7c7c7c] rounded min-w-[130px] hover:bg-[#79B552] py-2 mb-2"
          />
        </div>
      )}
    </header>
  );
}

export default Navbar;
