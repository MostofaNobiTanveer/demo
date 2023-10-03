import React from "react";
import { Link } from "react-router-dom";
import { PiShareNetworkThin } from 'react-icons/pi';

const Nav = () => {
  return (
    <header className="h-screen">
      <nav
        class="container mx-auto flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex flex-1">
          <div class="hidden lg:flex lg:gap-x-12">

          </div>
        </div>
        {/* <Link to="/" class="-m-1.5 p-1.5 font-light text-3xl text-center tracking-[.3em]">
          MOSTOFA<br />NOBI
        </Link> */}
        <Link to="/" class="font-extrabold text-3xl text-left leading-5 tracking-tighter">
          MOSTOFA<br />NOBI<span className="text-6xl leading-4 text-[#ff2c2c]">.</span>
        </Link>
        <div class="flex flex-1 justify-end items-center gap-2">
          {/* <span class="relative flex h-2 w-2 justify-center items-center">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span class="relative inline-flex rounded-full h-1 w-1 bg-white"></span>
          </span>
          <p className="font-light uppercase text-xs tracking-[.3em]">Social</p>
          <div className='h-10 w-10 bg-gray-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex items-center justify-center'>
            <PiShareNetworkThin />
          </div> */}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
