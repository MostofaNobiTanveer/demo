import React from "react";
import { Link } from "react-router-dom";
import { PiShareNetworkThin } from 'react-icons/pi';

const Nav = () => {
  return (
    <header className="m-5 rounded-lg bg-white">
      <nav className="container mx-auto flex items-center justify-between p-6 lg:px-8">
        {/* <div className="flex flex-1">
          <div className="hidden lg:flex lg:gap-x-12">

          </div>
        </div> */}
        {/* <Link to="/" className="-m-1.5 p-1.5 font-light text-3xl text-center tracking-[.3em]">
          MOSTOFA<br />NOBI
        </Link> */}
        <Link to="/" class="font-extrabold text-3xl text-left leading-5 tracking-tighter">
          MOSTOFA<br />NOBI<span className="text-6xl leading-4 text-[#ff2c2c]">.</span>
        </Link>
        <Link to="/" className="flex items-center gap-2">
          <span className="relative flex h-2 w-2 justify-center items-center">
            <span className="animate-ping absolute h-full w-full rounded-full bg-orange opacity-75"></span>
            <span className="rounded-full h-1 w-1 bg-orange"></span>
          </span>
          <p className="uppercase">About</p>
        </Link>
      </nav>
      <h1 className="font-autograph text-5xl">Mostofa Nobi</h1>
    </header>
  );
};

export default Nav;
