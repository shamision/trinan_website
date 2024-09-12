"use client"

import { ContactEmail, ContactName } from "../../Svgs"
import React from "react"
import { IoCall } from "react-icons/io5";

export const Form = ({closeForm}) => {
  return (
    <div className="bg-white h-fit rounded-lg w-[800px]">
        <button
            onClick={closeForm}
            className="text-white bg-[#111B47] w-8 h-8 float-right flex items-center justify-center rounded-md m-5"
          >
            X
          </button>
      <div className="flex flex-col gap-8 py-24">
        <h1 className="text-3xl font-bold w-1/2 mx-auto text-[#111B47]">GET IN TOUCH WITH US</h1>
        <div className="w-1/2 mx-auto">
          <label className="text-[#111B47]">Name</label>
          <div className="pt-4 flex gap-5">
            <ContactName />
            <input
              type="text"
              placeholder="Full name here"
              className="focus:outline-none text-[#505F98] border-b"
              required
            />
          </div>
        </div>
        <div className="w-1/2 mx-auto">
          <label className="text-[#111B47]">Email</label>
          <div className="pt-4 flex gap-5">
            <ContactEmail />
            <input
              type="email"
              placeholder="Your email address"
              className="focus:outline-none text-[#505F98] border-b"
              required
            />
          </div>
        </div>
        <div className="w-1/2 mx-auto">
          <label className="text-[#111B47]">Phone Number</label>
          <div className="pt-4 flex gap-5">
            <IoCall className="text-xl" />
            <input
              type="text"
              placeholder="Your phone number here"
              className="focus:outline-none text-[#505F98] border-b"
              required
            />
          </div>
        </div>
        <div className="w-1/2 mx-auto flex flex-col gap-5">
          <label className="text-[#111B47]">Message</label>
          <textarea
            rows={5}
            cols={6}
            placeholder="Type your message here"
            className="border focus:outline-none text-[#505F98]"
            required
          />

          <button className="bg-[#111B47] mx-auto w-[180px] h-[50px] text-white rounded-md mt-[30px]">
          Send Message
        </button>
        </div>
      </div>
    </div>
    
  )
}
