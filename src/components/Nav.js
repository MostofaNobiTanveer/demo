import React, { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <nav className="flex justify-between items-center sticky top-10 z-50">
      <div>
        <p class="text-lg leading-tight">Mostofa Nobi</p>
        <p class="text-sm opacity-80">Front—end Developer</p>
      </div>
      <div className="relative">
        <div
          className={`absolute z-30 top-0 right-0 -mt-5 -mr-4 bg-gray-50 w-64 p-8 pt-20 rounded-md space-y-6 origin-top-right transition duration-500 ${
            isMenuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          <h1 className="text-3xl">
            <span className="text-sm">00/</span> About
          </h1>
          <h1 className="text-3xl">
            <span className="text-sm">01/</span> Projects
          </h1>
          <h1 className="text-3xl">
            <span className="text-sm">02/</span> Experience
          </h1>
          <h1 className="text-3xl">
            <span className="text-sm">03/</span> Contact
          </h1>
        </div>
        <button
          type="button"
          onClick={toggleMenu}
          className="flex items-center gap-2 relative z-40"
        >
          <p className="overflow-hidden relative h-6 w-12 transition">
            <span
              className={`block absolute top-0 left-0 transition-transform duration-500 ${
                !isMenuOpen ? "translate-y-0" : "translate-y-full"
              }`}
            >
              Menu
            </span>
            <span
              className={`block absolute top-0 left-0 transition-transform duration-500 ${
                isMenuOpen ? "translate-y-0" : "-translate-y-full"
              }`}
            >
              Close
            </span>
          </p>
          <span className="flex flex-col gap-[5px]">
            <span
              className={`h-[2px] w-10 bg-[#333333] opacity-75 transition duration-300 ${
                isMenuOpen
                  ? "translate-y-[3px] rotate-45 origin-center"
                  : "rotate-0"
              }`}
            ></span>
            <span
              className={`h-[2px] w-10 bg-[#333333] opacity-75 transition duration-300 ${
                isMenuOpen
                  ? "translate-y-[-4px] -rotate-45 origin-center"
                  : "rotate-0"
              }`}
            ></span>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
