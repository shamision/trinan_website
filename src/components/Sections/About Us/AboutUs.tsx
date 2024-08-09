"use client"

import { DetailCard1, DetailCard2, DetailCard3 } from "@/components/Svgs"
import React from "react"
import { DetailCard } from "./Card"

export const AboutUs = () => {
  return (
    <section className="md:h-screen h-full py-5 w-screen relative overflow-hidden bg-white md:px-[90px] px-6">
      <div className="flex items-center top-0 w-full pt-16">
        <div className="w-[1150px] mx-auto">
          <p className="text-[#111B47] font-bold text-[48px] text-center">
            About Us
          </p>
          <p className="text-[#505F98] text-center text-[18px]">
            Clinan Trading Ltd is a leading company based in Rwanda, specializing in supplying
            materials and solutions for engineering tenders. With a strong commitment to quality
            and customer satisfaction, we provide a comprehensive range of products and services,
            including construction materials, plumbing supplies, electrical and electronic
            components, and more. Our goal is to deliver innovative and reliable solutions that meet
            the diverse needs of our clients across various sectors, positioning us as a trusted
            partner in the Rwandan engineering industry.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 grid-col-1 gap-[51px] mt-[20px]">
        <DetailCard
          svg={<DetailCard1 />}
          title="Mission"
          backContent="Our mission is to position ourselves as the first choice for engineering tendering solutions in Rwanda."
        />
        <DetailCard
          svg={<DetailCard2 />}
          title="Vision"
          backContent="CLINAN Trading aims to be the leading solutions provider for engineering tenders in Rwanda."
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
