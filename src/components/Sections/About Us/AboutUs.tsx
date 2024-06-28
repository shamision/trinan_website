"use client"

import Image from "next/image"
import React from "react"
import { DetailCard } from "./Card"
import { DetailCard1,DetailCard2, DetailCard3 } from "@/components/Svgs"

export const AboutUs = () => {
    return (
        <section className="container h-screen w-full relative overflow-hidden bg-white">

            <div className="flex items-center justify-center top-0 w-full">
                <div className="w-[765px] mt-[40px]">
                    <p className="text-customBlue font-bold text-[48px] text-center">About Us</p>
                    <p className="text-[#505F98] text-center text-[18px] mt-[25px]">We offer a comprehensive range of tendering services to help businesses secure lucrative contracts. Our expertise ensures that your bids are competitive, compliant, and strategically crafted to meet the highest standards.</p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 grid-col-1 md:gap-x-[51px] mt-[53px]">
                <DetailCard svg={<DetailCard1 />} title="Mission"/>
                <DetailCard svg={<DetailCard2 />} title="Vision"/>
                <DetailCard svg={<DetailCard3 />} title="Values"/>
            </div>

        </section>
    )
}