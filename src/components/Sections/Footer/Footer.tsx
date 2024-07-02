"use client"

import { FooterLogo } from "@/components/Svgs"
import React from "react"

export const Footer = () => {
  return (
    <section className="h-3/4 w-full bg-customBlue px-[90px]">
      <div className="flex items-center justify-between pt-[110px] h-3/4">
        <div className="w-[500px] mt-10">
          <FooterLogo />
          <p className="font-extrabold text-[36px] pt-7">
            Grow your business with us
          </p>
        </div>

        <div className="grid grid-cols-3 gap-x-10">
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
      <div className="h-1/4 flex items-center justify-center">
        <p>2024 Shami Sion. All Rights Reserved</p>
      </div>
    </section>
  )
}
