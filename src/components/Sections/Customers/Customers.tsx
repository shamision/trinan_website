"use client"

import React, { useState } from "react"
import { CustomerLogo } from "@/components/Sections/Customers/CustomerLogo"

const customerLogos = [
  { src: "/cvAsHm_V_400x400.jpg", alt: "norsken logo" },
  { src: "/images (1).png", alt: "world vision logo" },
  { src: "/RwandAir-Logo.wine.png", alt: "Logo RwandAir" },
  { src: "/logo-bpn.png", alt: "BPN logo" },
  { src: "/images.png", alt: "red cross logo" },
  // Add more customer logos here
]

export const Customers = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? customerLogos.length - 4 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 >= customerLogos.length ? 0 : prevIndex + 1
    )
  }

  return (
    <section>
      <div className="md:h-screen h-full w-full bg-white px-6 py-[20px] pt-16">
        <div className="flex items-center justify-center top-0 w-full">
          <div className="w-[400px] mt-[20px]">
            <p className="text-[#111B47] font-bold text-[48px] text-center">
              Trusted by many
            </p>
            <p className="text-[#505F98] text-center text-[18px] md:mt-[50px]">
              Our mission is to help your business grow, especially financially.
              You can consult anytime
            </p>
          </div>
        </div>
        <div className="relative flex flex-wrap items-center justify-center w-full mt-20">
          <div onClick={handlePrev} className="rounded-full w-14 h-14 bg-[#E7ECFF] absolute md:left-10 left-1 flex items-center justify-center">
            <button className="text-[#111B47] font-bold text-[24px] p-2">
              &lt;
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-12 overflow-hidden w-full">
            {customerLogos.slice(currentIndex, currentIndex + 4).map((logo, index) => (
              <CustomerLogo key={index} src={logo.src} alt={logo.alt} />
            ))}
          </div>
          <div onClick={handleNext} className="rounded-full w-14 h-14 bg-[#E7ECFF] absolute md:right-10 right-0 flex items-center justify-center">
            <button className="text-[#111B47] font-bold text-[24px] p-2">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
