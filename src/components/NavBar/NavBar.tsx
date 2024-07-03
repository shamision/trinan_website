import React from "react"
import MenuMobile from "../MenuMobile"
// import "../../app/globals.css"

export const NavBar = () => {
  return (
    <nav className="md:px-[90px] px-6 flex py-10 text-[#111B47] items-center justify-between font-sans w-full">
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

        <h1 className="text-xl text-[#111B47] font-bold text-black">CLINAN</h1>
      </div>

      <ul className="md:flex hidden items-center space-x-[60px] text-[18px] font-semibold text-black">
        <li className=" ">Home</li>
        <li className="">Services</li>
        <li className="">About Us</li>
        <li className="">Customers</li>
        <li className="">Team</li>
        <li className="">Contact</li>
      </ul>

      <div className="md:hidden block">
        <MenuMobile />
      </div>
    </nav>
  )
}
