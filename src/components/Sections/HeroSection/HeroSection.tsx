"use client"

import Image from "next/image"
import React from "react"

export const HeroSection = ()=>{
    return (
        <section>
            <div className="h-screen w-full relative overflow-hidden"
            //  style={{
            //     backgroundImage : "url(/handShake.jpg)",
            //     backgroundSize:"cover",
            //     backgroundRepeat:"no-repeat"
            // }}
            >
            <Image src={"/handShake.jpg"} alt="Image" fill style={{
                objectFit:"cover"
            }}  />

            <div className="absolute flex items-center justify-center top-0 z-50 h-full w-full bg-[#E7ECFF]/80">
                <div className="w-[859px]">
                    <p className="text-customBlue font-bold text-[48px] text-center">Your Trusted Partner in Seamless Tender Management</p>
                    <p className="text-[#505F98] text-center text-[18px] px-32 mt-[25px]">Dedicated to optimizing your tendering process, we provide end-to-end services that cover all aspects of tender management. Our innovative approach and industry expertise help you achieve your procurement goals with ease.</p>
                </div>
            </div>
            </div>
        </section>
    )
}