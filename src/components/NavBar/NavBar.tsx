"use client";

import React from "react";
import MenuMobile from "../MenuMobile";
import useScroll from "./useScroll";

export const NavBar = () => {
  const isScrolled = useScroll();

  return (
    <nav className={`md:px-[90px] px-6 flex py-10 text-[#111B47] items-center justify-between font-sans w-full ${isScrolled ? 'fixed top-0 z-50 bg-white' : ''}`}>
      <div className="space-x-1 flex items-center">
        <svg
          width={26}
          height={28}
          viewBox="0 0 26 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.5 15.5L25.5 32.5H15.5L15.5 15.5L25.5 15.5Z"
            fill="#111B47"
          />
          <path
            d="M10.5 15.5L10.5 32.5H0.5L0.5 15.5L10.5 15.5Z"
            fill="#111B47"
          />
          <path
            d="M25.5 10.5L0.5 10.5L0.5 0.5L25.5 0.500001L25.5 10.5Z"
            fill="#111B47"
          />
        </svg>

        <h1 className="text-xl text-[#111B47] font-bold">CLINAN</h1>
      </div>

      <ul className="md:flex hidden items-center space-x-[60px] text-[18px] font-semibold">
        <li><a href="#hero-section" className="hover:underline">Home</a></li>
        <li><a href="#services" className="hover:underline">Services</a></li>
        <li><a href="#about-us" className="hover:underline">About Us</a></li>
        <li><a href="#customers" className="hover:underline">Customers</a></li>
        <li><a href="#team" className="hover:underline">Team</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>

      <div className="md:hidden block">
        <MenuMobile />
      </div>
    </nav>
  );
};
