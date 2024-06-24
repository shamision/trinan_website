"use client"

import Image from "next/image"
import React from "react"
import { CustomerLogo } from "@/components/Sections/Customers/CustomerLogo"

export const Customers = () =>{
    return(
        <section>
            <div className="h-screen w-full bg-white">
                <div className="flex items-center justify-center top-0 w-full">
                    <div className="w-[400px] mt-[40px]">
                        <p className="text-customBlue font-bold text-[48px] text-center">Trusted by more than 2k Client</p>
                        <p className="text-[#505F98] text-center text-[18px] mt-[25px]">Our mission is to help your business grow, especially financially. You can consult anytime</p>
                    </div>
                </div>
                <div className="container ml-[120px] flex flex-wrap text-customBlue justify-center items-center gap-x-12 w-[1300px]">
                    <CustomerLogo src="/csm_MINEMA_Logo__Blue_text-01_eb18105d60.png" alt="Logo Rura" />
                    <CustomerLogo src="/logorura.png" alt="Logo 1" />
                    <CustomerLogo src="/RwandAir-Logo.wine.png" alt="Logo 2" />
                    <CustomerLogo src="/rw-bok-logo-min.png" alt="Logo 3" />
                    <CustomerLogo src="/irembo-300x83.png" alt="Logo 2" />
                    <CustomerLogo src="/free-equity-bank-10751953-8715821.png" alt="Logo 3" />
                </div>
            </div>
        </section>
    )
}