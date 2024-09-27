"use client"

import React, { useState } from "react"
import MenuMobile from "../MenuMobile"
import { Form } from "../Sections/Contact/Form"
import { signOut } from "next-auth/react";
import { FaSignOutAlt } from "react-icons/fa";


export const NavBar = ({ session }) => { // Destructure session correctly
  const [isFormVisible, setIsFormVisible] = useState(false) // State to manage form visibility

  const handleGetInTouchClick = () => {
    setIsFormVisible(true)
  }

  const closeForm = () => {
    setIsFormVisible(false)
  }

  return (
    <>
      <nav className="fixed top-0 z-50 w-full shadow-md bg-white">
        <div className="w-11/12 mx-auto flex text-blue-900 py-6 items-center justify-between font-sans">
          <div className="space-x-1 flex items-center">
            <svg width={26} height={28} viewBox="0 0 26 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.5 15.5L25.5 32.5H15.5L15.5 15.5L25.5 15.5Z" fill="#1e3a8a" />
              <path d="M10.5 15.5L10.5 32.5H0.5L0.5 15.5L10.5 15.5Z" fill="#1e3a8a" />
              <path d="M25.5 10.5L0.5 10.5L0.5 0.5L25.5 0.500001L25.5 10.5Z" fill="#1e3a8a" />
            </svg>
            <h1 className="text-xl font-bold">CLINAN</h1>
          </div>

          <ul className="md:flex hidden items-center md:gap-3 lg:gap-8 lg:text-[17px] md:text-[14px] font-semibold">
            <li><a href="/#hero-section" className="hover:underline">Home</a></li>
            <li><a href="/#services" className="hover:underline">Services</a></li>
            <li><a href="/#about-us" className="hover:underline">About</a></li>
            <li><a href="/#customers" className="hover:underline">Customers</a></li>
            <li><a href="/#team" className="hover:underline">Team</a></li>
            <li><a href="/#contact" className="hover:underline">Contact</a></li>
            <button
              onClick={handleGetInTouchClick}
              className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Get in Touch
            </button>
            {session ? ( // Check if session exists
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="flex gap-1 items-center bg-red-700 hover:bg-red-900 text-white py-2 px-4 rounded-md"
              >
                <FaSignOutAlt /> Sign Out
              </button>
            ) : null}
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
