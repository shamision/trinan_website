"use client"

import React from "react"
import { Member } from "./Member"

export const Team = () => {
  return ( 
    <section className="md:h-screen h-full w-full relative overflow-hidden bg-white md:px-[90px] px-8 py-[20px]">
      <div className="flex items-center justify-center top-0 w-full">
        <div className="w-[750px] mx-auto pt-16">
          <p className="text-[#111B47] font-bold text-[48px] text-center">
            Our Team
          </p>
          <p className="text-[#505F98] text-center text-[18px]">
            We offer a comprehensive range of tendering services to help
            businesses secure lucrative contracts. Our expertise ensures that
            your bids are competitive, compliant, and strategically crafted to
            meet the highest standards.
          </p>
        </div>
      </div>
      <div className="mt-[30px] flex flex-wrap items-center justify-between gap-16 place-items-center w-full pb-20 md:px-12">
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
    </section>
  )
}
