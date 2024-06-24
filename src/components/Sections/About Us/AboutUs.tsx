"use client"

import Image from "next/image"
import React from "react"

export const AboutUs = () =>{
    return(
        <section>
            <div className="h-screen w-full relative overflow-hidden bg-white">
                <div className="flex items-center justify-center top-0 w-full">
                    <div className="w-[765px] mt-[40px]">
                        <p className="text-customBlue font-bold text-[48px] text-center">About Us</p>
                        <p className="text-[#505F98] text-center text-[18px] mt-[25px]">We offer a comprehensive range of tendering services to help businesses secure lucrative contracts. Our expertise ensures that your bids are competitive, compliant, and strategically crafted to meet the highest standards.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}