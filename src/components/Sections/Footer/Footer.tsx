"use client";

import { FooterLogo } from "../../Svgs";
import React from "react";
import { MdEmail } from "react-icons/md";
import { ImFacebook } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export const Footer = ({session}) => {
  return (
    <section>
      <div className="w-full bg-[#111B47] md:px-[90px] px-6 pb-10">
        <div className="container flex flex-col md:flex-row flex-wrap items-center justify-between md:py-[90px] pt-10 text-white">
          <div className="md:w-[300px] w-full mt-10 md:mb-0 mb-6 text-center md:text-left">
            <FooterLogo />
            <p className="text-[18px]">
              Grow your business with us
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-x-28 gap-y-10 pt-10 text-center md:text-left">
            <ul className="grid gap-y-6 text-[18px] text-center">
              <li className="font-bold text-[28px] border-b">Home</li>
              <li>Services</li>
              <li>About Us</li>
            </ul>

            <ul className="grid gap-y-6 text-[18px] text-center">
              <li className="font-bold text-[28px] border-b">Services</li>
              <li>Contact Us</li>
              <li>Customers</li>
            </ul>

            <ul className="grid gap-y-6 text-[18px] text-center">
              <li className="font-bold text-[28px] border-b">About</li>
              <li>Team</li>
              {session ? ( // Check if session exists
              <li>
                <a href="/messages" className="hover:underline">
                  Messages
                </a>
              </li>
            ) : null}
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full bg-neutral-100">
        <div className="container py-4 flex items-center justify-between">

          <p className="text-[#111B47] font-medium text-[14px]">
            2024 CLINAN. All Rights Reserved
          </p>

          <ul className="flex flex-col md:flex-row md:items-center text-[14px] gap-2 md:gap-8 font-medium text-[#111B47]">
            <li className="flex items-center">
              <a href="mailto:tradingclinan@gmail.com" className="flex items-center gap-1">
                <MdEmail/>
                tradingclinan@gmail.com
              </a>
            </li>

            <li className="flex items-center">
              <a href="" className="flex items-center gap-1">
                <ImFacebook/>
                clinan
              </a>
            </li>

            <li className="flex items-center">
              <a href="" className="flex items-center gap-1">
                <BsTwitterX/>
                clinan
              </a>
            </li>

            <li className="flex items-center">
              <a href="" className="flex items-center gap-1">
                <FaInstagramSquare/>
                clinan
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
