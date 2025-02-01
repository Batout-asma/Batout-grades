"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import CustomButton from "./CustomButton";

function Navbar() {
  const [activeButton, setActiveButton] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    if (pathname === "/manual") {
      setActiveButton("Manual");
    } else if (pathname === "/template") {
      setActiveButton("Template");
    } else if (pathname === "/yearly") {
      setActiveButton("Yearly");
    } else {
      setActiveButton("");
    }
  }, [pathname]);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
    router.push(`/${buttonName.toLowerCase()}`);
  };

  return (
    <header className="w-full mb-5 border-b border-gray-100">
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
            title="Manual"
            containerStyles="text-white bg-[#7c7c7c] rounded min-w-[130px] hover:bg-[#79B552] py-2"
            handleClick={() => handleButtonClick("Manual")}
            btnType={"button"}
            isActive={activeButton === "Manual"}
          />
          <CustomButton
            title="Template"
            containerStyles="text-white bg-[#7c7c7c] rounded min-w-[130px] hover:bg-[#79B552] py-2"
            handleClick={() => handleButtonClick("Template")}
            btnType={"button"}
            isActive={activeButton === "Template"}
          />
          <CustomButton
            title="Yearly"
            btnType="button"
            containerStyles="text-white bg-[#7c7c7c] rounded min-w-[130px] hover:bg-[#79B552] py-2"
            handleClick={() => handleButtonClick("Yearly")}
            isActive={activeButton === "Yearly"}
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
            title="Manual"
            btnType="button"
            containerStyles="text-white bg-[#7c7c7c] rounded min-w-[130px] hover:bg-[#79B552] py-2 mb-2"
            handleClick={() => handleButtonClick("Manual")}
            isActive={activeButton === "Manual"}
          />
          <CustomButton
            title="Template"
            containerStyles="text-white bg-[#7c7c7c] rounded min-w-[130px] hover:bg-[#79B552] py-2 mb-2"
            handleClick={() => handleButtonClick("Template")}
            btnType={"button"}
            isActive={activeButton === "Template"}
          />
          <CustomButton
            title="Yearly"
            containerStyles="text-white bg-[#7c7c7c] rounded min-w-[130px] hover:bg-[#79B552] py-2 mb-2"
            handleClick={() => handleButtonClick("Yearly")}
            btnType={"button"}
            isActive={activeButton === "Yearly"}
          />
        </div>
      )}
    </header>
  );
}

export default Navbar;
