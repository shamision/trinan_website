"use client"

import React, { useState } from "react"
import { CustomerLogo } from "@/components/Sections/Customers/CustomerLogo"

const customerLogos = [
  { src: "/csm_MINEMA_Logo__Blue_text-01_eb18105d60.png", alt: "Logo MINEMA" },
  { src: "/logorura.png", alt: "Logo Rura" },
  { src: "/RwandAir-Logo.wine.png", alt: "Logo RwandAir" },
  { src: "/rw-bok-logo-min.png", alt: "Logo BOK" },
  { src: "/irembo-300x83.png", alt: "Logo Irembo" },
  { src: "/free-equity-bank-10751953-8715821.png", alt: "Logo Equity Bank" },
  // Add more customer logos here
]

export const Customers = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex + 4 < customerLogos.length) {
      setCurrentIndex(currentIndex + 1)
    }
  }

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
        <div className="relative flex  flex-wrap items-center justify-center w-full mt-20">
          {currentIndex > 0 && (
            <div onClick={handlePrev} className="rounded-full w-14 h-14 bg-[#E7ECFF] absolute  md:left-20 left-1 flex items-center justify-center">
              <button className="text-[#111B47] font-bold text-[24px] p-2">
                &lt;
              </button>
            </div>
          )}
          <div className="flex flex-wrap items-center justify-center gap-x-12 overflow-hidden w-full">
            {customerLogos.slice(currentIndex, currentIndex + 4).map((logo, index) => (
              <CustomerLogo key={index} src={logo.src} alt={logo.alt} />
            ))}
          </div>
          {currentIndex + 4 < customerLogos.length && (
            <div onClick={handleNext} className="rounded-full w-14 h-14 bg-[#E7ECFF] absolute  md:right-20 right-0 flex items-center justify-center">
              <button className="text-[#111B47] font-bold text-[24px] p-2">
                &gt;
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
