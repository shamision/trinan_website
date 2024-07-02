"use client"

import { FooterLogo } from "@/components/Svgs"
import Image from "next/image"
import React from "react"



export const Footer = () => {
    return (
        <section className=" h-3/4 w-full bg-customBlue">
            <div className="flex pt-[110px] h-3/4">
                <div className="w-[500px] container mt-10">
                    <FooterLogo />
                    <p className="font-extrabold text-[36px] pt-7">Grow your business with us</p>
                </div>
                <div>
                    <ul className="grid gap-y-6 text-[20px] mt-10">
                        <li>Home</li>
                        <li>Services</li>
                        <li>About Us</li>
                        <li>Customers</li>
                    </ul>
                </div>
                <div className="ml-32">
                    <ul className="grid gap-y-6 text-[20px]">
                        <li className="font-semibold">Services</li>
                        <li>Tender writing</li>
                        <li>Bid Management</li>
                        <li>Post-tender analysis</li>
                    </ul>
                </div>
                <div className="ml-32">
                    <ul className="grid gap-y-6 text-[20px]">
                        <li className="font-semibold">About</li>
                        <li>Team</li>
                        <li>Contact Us</li>
                        <li>Career</li>
                    </ul>
                </div>
            </div>
            <div className="h-1/4 flex items-center justify-center">
                <p>2024 Shami Sion. All Rights   Reserved</p>
            </div>
        </section>
    )
}