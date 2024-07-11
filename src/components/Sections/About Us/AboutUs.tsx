"use client"

import { DetailCard1, DetailCard2, DetailCard3 } from "@/components/Svgs"
import React from "react"
import { DetailCard } from "./Card"

export const AboutUs = () => {
  return (
    <section className="md:h-screen py-[20px] h-full w-screen relative overflow-hidden bg-white md:px-[90px] px-6">
      <div className="flex items-center top-0 w-full pt-16">
        <div className="w-[765px] mx-auto">
          <p className="text-[#111B47] font-bold text-[48px] text-center">
            About Us
          </p>
          <p className="text-[#505F98] text-center text-[18px]">
            We offer a comprehensive range of tendering services to help
            businesses secure lucrative contracts. Our expertise ensures that
            your bids are competitive, compliant, and strategically crafted to
            meet the highest standards.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 grid-col-1 gap-[51px] mt-[20px]">
        <DetailCard
          svg={<DetailCard1 />}
          title="Mission"
          backContent="To streamline the tendering process, enabling businesses to discover and secure opportunities efficiently and effectively, fostering growth and innovation."
        />
        <DetailCard
          svg={<DetailCard2 />}
          title="Vision"
          backContent="To be the leading platform for tendering, revolutionizing the industry by providing unparalleled access to opportunities, fostering transparency, and driving economic development globally."
        />
        <DetailCard
          svg={<DetailCard3 />}
          title="Values"
          backContent="Our values are integrity, transparency, innovation, customer focus, excellence, collaboration, and sustainability, guiding every aspect of our tendering platform."
        />
      </div>
    </section>
  )
}
