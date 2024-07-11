"use client"

import { CustomerLogo } from "@/components/Sections/Customers/CustomerLogo"
import React from "react"

export const Customers = () => {
  return (
    <section>
      <div className="md:h-screen h-full w-full bg-white px-6 py-[20px] pt-16">
        <div className="flex items-center justify-center top-0 w-full">
          <div className="w-[400px] mt-[20px]">
            <p className="text-[#111B47] font-bold text-[48px] text-center">
              Trusted by more than 2k Client
            </p>
            <p className="text-[#505F98] text-center text-[18px] mt-[15px]">
              Our mission is to help your business grow, especially financially.
              You can consult anytime
            </p>
          </div>
        </div>
        <div className="flex flex-wrap text-[#111B47] items-center justify-center
         gap-x-12 md:px-[300px]">
          <CustomerLogo
            src="/csm_MINEMA_Logo__Blue_text-01_eb18105d60.png"
            alt="Logo Rura"
          />
          <CustomerLogo src="/logorura.png" alt="Logo 1" />
          <CustomerLogo src="/RwandAir-Logo.wine.png" alt="Logo 2" />
          <CustomerLogo src="/rw-bok-logo-min.png" alt="Logo 3" />
          <CustomerLogo src="/irembo-300x83.png" alt="Logo 2" />
          <CustomerLogo
            src="/free-equity-bank-10751953-8715821.png"
            alt="Logo 3"
          />
        </div>
      </div>
    </section>
  )
}
