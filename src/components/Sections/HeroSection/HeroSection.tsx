"use client"

import Image from "next/image"
import React from "react"

export const HeroSection = () => {
  return (
    <section className="h-screen w-full relative overflow-hidden">
      <Image
        src={"/handShake.jpg"}
        alt="Image"
        fill
        style={{
          objectFit: "cover"
        }}
      />

      <div className="absolute flex items-center justify-center top-0 z-50 h-full w-full bg-[#E7ECFF]/80 md:px-0 px-6">
        <div className="md:w-[859px] w-full">
          <p className="text-[#111B47] font-bold text-[48px] text-center">
            Your Trusted Partner in Seamless Tender Management
          </p>
          <p className="text-[#505F98] text-center text-[18px] md:px-32 px-0 md:pt-[25px] pt-20 leading-9 w-full">
            Dedicated to optimizing your tendering process, we provide
            end-to-end services that cover all aspects of tender management. Our
            innovative approach and industry expertise help you achieve your
            procurement goals with ease.
          </p>
        </div>
      </div>
    </section>
  )
}
