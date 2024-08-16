"use client"

import React, { useState } from "react"
import MenuMobile from "../MenuMobile"
import useScroll from "./useScroll"
import { Form } from "../Sections/Contact/Form"

export const NavBar = () => {
  const [isFormVisible, setIsFormVisible] = useState(false) // State to manage form visibility

  const handleGetInTouchClick = () => {
    setIsFormVisible(true)
  }

  const closeForm = () => {
    setIsFormVisible(false)
  }

  return (
    <>
      <nav
        className={
          "fixed top-0 z-50 w-full bg-white"
        }
      >
        <div className="w-11/12 mx-auto flex text-[#111B47] py-6 items-center justify-between font-sans">

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

          <ul className="md:flex hidden items-center md:gap-5 lg:gap-12 lg:text-[18px] md:text-[16px] font-semibold">
            <li>
              <a href="#hero-section" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#about-us" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#customers" className="hover:underline">
                Customers
              </a>
            </li>
            <li>
              <a href="#team" className="hover:underline">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
            <button
              onClick={handleGetInTouchClick}
              className="bg-[#111B47] text-white py-2 px-4 rounded-md"
            >
              Get in Touch
            </button>
          </ul>

          <div className="md:hidden block">
            <MenuMobile />
          </div>
        </div>
      </nav>

      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Form closeForm={closeForm}/>
        </div>
      )}
    </>
  )
}
