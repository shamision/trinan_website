"use client"

import { FooterLogo } from "@/components/Svgs"
import React from "react"

export const Footer = () => {
  return (  
    <section className="md:h-[500px] h-full w-full bg-[#111B47] md:px-[90px] px-6 pb-10">
      <div className="flex flex-wrap items-center justify-between md:pt-[90px] pt-10">
        <div className="w-[300px] mt-10">
          <FooterLogo />
          <p className="font-extrabold text-[36px] pt-7">
            Grow your business with us
          </p>
        </div>

        <div className=" gap-x-32 flex flex-wrap gap-y-10 pt-10">
          <ul className="grid gap-y-6 text-[20px]">
            <li className="font-semibold">Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Customers</li>
          </ul>

          <ul className="grid gap-y-6 text-[20px]">
            <li className="font-semibold">Services</li>
            <li>Tender writing</li>
            <li>Bid Management</li>
            <li>Post-tender analysis</li>
          </ul>

          <ul className="grid gap-y-6 text-[20px]">
            <li className="font-semibold">About</li>
            <li>Team</li>
            <li>Contact Us</li>
            <li>Career</li>
          </ul>
        </div>
      </div>
      <div className="pt-16 flex items-center justify-center">
        <p>2024 Shami Sion. All Rights Reserved</p>
      </div>
    </section>
  )
}
