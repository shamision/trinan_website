import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from "../ui/sheet";
import React, { useState } from "react";
import { Form } from "../Sections/Contact/Form"

const MenuMobile = () => {
  const [isFormVisible, setIsFormVisible] = useState(false) // State to manage form visibility

  const handleGetInTouchClick = () => {
    setIsFormVisible(true)
  }

  const closeForm = () => {
    setIsFormVisible(false)
  }
  return (
    <>
    <Sheet>
      <SheetTrigger>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          fill="#000000"
          viewBox="0 0 256 256"
          >
          <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
        </svg>
      </SheetTrigger>

      <SheetContent side="left" className="px-6">
        <div className="flex items-center justify-between mt-4">
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

            <h1 className="text-xl text-[#111B47] font-bold">
              CLINAN
            </h1>
          </div>
          <SheetClose className="bg-black/10 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="#000000"
              viewBox="0 0 256 256"
              >
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
            </svg>
          </SheetClose>
        </div>

        <div className="pt-12">
          <ul className="flex flex-col space-y-6 w-full">
            <SheetClose asChild>
              <li className="text-[20px] font-medium text-[#111B47] py-2 px-2 bg-[#E7ECFF] rounded-md flex items-center justify-between">
                <a href="#hero-section" className="flex items-center justify-center w-full">
                  Home
                </a>
              </li>
            </SheetClose>
            <SheetClose asChild>
              <li className="text-[20px] font-medium text-[#111B47] py-2 px-2 bg-[#E7ECFF] rounded-md flex items-center justify-between">
                <a href="#services" className="flex items-center justify-center w-full">
                  Services
                </a>
              </li>
            </SheetClose>
            <SheetClose asChild>
              <li className="text-[20px] font-medium text-[#111B47] py-2 px-2 bg-[#E7ECFF] rounded-md flex items-center justify-between">
                <a href="#about-us" className="flex items-center justify-center w-full">
                  About Us
                </a>
              </li>
            </SheetClose>
            <SheetClose asChild>
              <li className="text-[20px] font-medium text-[#111B47] py-2 px-2 bg-[#E7ECFF] rounded-md flex items-center justify-between">
                <a href="#customers" className="flex items-center justify-center w-full">
                  Customers
                </a>
              </li>
            </SheetClose>
            <SheetClose asChild>
              <li className="text-[20px] font-medium text-[#111B47] py-2 px-2 bg-[#E7ECFF] rounded-md flex items-center justify-between">
                <a href="#team" className="flex items-center justify-center w-full">
                  Team
                </a>
              </li>
            </SheetClose>
            <SheetClose asChild>
              <li className="text-[20px] font-medium text-[#111B47] py-2 px-2 bg-[#E7ECFF] rounded-md flex items-center justify-between">
                <a href="#contact" className="flex items-center justify-center w-full">
                  Contact
                </a>
              </li>
            </SheetClose>
            <SheetClose asChild>
              <button
                onClick={handleGetInTouchClick}
                className="bg-blue-900 text-white py-2 px-4 rounded-md"
              >
                Get in Touch
              </button>
            </SheetClose>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
    {isFormVisible && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <Form closeForm={closeForm}/>
      </div>
    )}
    </>
  );
};

export default MenuMobile;
