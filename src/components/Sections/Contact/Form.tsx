"use client"

import { ContactEmail, ContactName } from "@/components/Svgs"
import React from "react"

export const Form = () => {
  return (
    <div className="w-[600px] h-[600px] bg-white mt-[100px] rounded-[10px] px-6 mb-10">
      <div className="md:ml-[112px] mt-[74px]">
        <p className="text-[#111B47]">Your name</p>
        <div className="ml-[20px] mt-[30px] flex gap-5">
          <ContactName />
          <input
            type="text"
            placeholder="Full name here"
            className="focus:outline-none text-[#505F98]"
            required
          />
        </div>
      </div>
      <div className="md:ml-[112px] mt-[40px]">
        <p className="text-[#111B47]">Your mail</p>
        <div className="ml-[20px] mt-[30px] flex gap-5">
          <ContactEmail />
          <input
            type="email"
            placeholder="Your email address"
            className="focus:outline-none text-[#505F98]"
            required
          />
        </div>
      </div>
      <div className="md:ml-[112px] mt-[40px]">
        <p className="text-[#111B47]">Message</p>
        <input
          type="text"
          placeholder="Type your message here"
          className="ml-[20px] mt-[30px] flex gap-5 focus:outline-none text-[#505F98]"
          required
        />
      </div>

      <button className="bg-[#111B47] w-[180px] h-[60px] rounded-md md:ml-[112px] mt-[100px]">
        Send Message
      </button>
    </div>
  )
}
