"use client"

import Image from "next/image"
import React from "react"
import { Member } from "./Member"

export const Team = () =>{
    return(
        <section>
            <div className="h-screen w-full relative overflow-hidden bg-white">
                <div className="flex items-center justify-center top-0 w-full">
                    <div className="w-[750px] mt-[20px]">
                        <p className="text-customBlue font-bold text-[48px] text-center">Our Team</p>
                        <p className="text-[#505F98] text-center text-[18px] mt-[25px]">We offer a comprehensive range of tendering services to help businesses secure lucrative contracts. Our expertise ensures that your bids are competitive, compliant, and strategically crafted to meet the highest standards.</p>
                    </div>
                </div>
                <div className="container flex flex-wrap items-center justify-center mt-[30px] gap-20">
                    <Member 
                        src="/pexels-divinetechygirl-1181519.jpg"
                        alt="Member 1"
                        name="Olivia Mitchell"
                        position="FOUNDER"
                        description="A marketing manager specializing in digital strategies and brand growth. She excels in content creation, social media, and SEO."
                    />
                    <Member 
                        src="/pexels-olly-3769021.jpg"
                        alt="Member 2"
                        name="Sophia Ramirez"
                        position="CEO"
                        description="A marketing manager specializing in digital strategies and brand growth. She excels in content creation, social media, and SEO."
                    />
                    <Member 
                        src="/pexels-mwabonje-2033447.jpg"
                        alt="Member 3"
                        name="Ethan Collins"
                        position="CTO"
                        description="A marketing manager specializing in digital strategies and brand growth. She excels in content creation, social media, and SEO."
                    />
                </div>
            </div>
        </section>
    )
}