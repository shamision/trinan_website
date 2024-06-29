"use client"

import Image from "next/image"
import React from "react"
import { ContactName, ContactEmail } from "@/components/Svgs"


export const Form = () => {
    return (
        <div className="w-[600px] h-[630px] bg-white mt-[50px] rounded-[10px]">
            <div className="ml-[112px] mt-[74px]">
                <p className="text-customBlue">Your name</p>
                <div className="ml-[20px] mt-[30px] flex gap-5">
                    <ContactName />
                    <input type="text" placeholder="Full name here" className="focus:outline-none text-[#505F98]" required/>
                </div>
            </div>
            <div className="ml-[112px] mt-[40px]">
                <p className="text-customBlue">Your mail</p>
                <div className="ml-[20px] mt-[30px] flex gap-5">
                    <ContactEmail />
                    <input type="email" placeholder="Your email address" className="focus:outline-none text-[#505F98]" required/>
                </div>
            </div>
            <div className="ml-[112px] mt-[40px]">
                <p className="text-customBlue">Message</p>
                <input type="text" placeholder="Type your message here" className="ml-[20px] mt-[30px] flex gap-5 focus:outline-none text-[#505F98]" required/>
            </div>

            <button className="bg-customBlue w-[180px] h-[60px] rounded-md ml-[112px] mt-[130px]">Send Message</button>
        </div>
        
        
    );
};
