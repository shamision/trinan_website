"use client"

import React, { ReactNode } from "react"
import { FaArrowRightLong } from "react-icons/fa6";

interface ServiceProps {
  icon: ReactNode
  title: string
  description: string
}

export const Service: React.FC<ServiceProps> = ({
  icon,
  title,
  description
}) => {
  return (
    <div className="w-[380px] bg-[#E7ECFF] flex flex-col justify-between rounded-lg px-12 py-12">
      <div className="flex md:flex-row flex-col items-start md:space-y-0 space-y-4">
        {icon && (
          <div className="w-[50px] h-[50px]">
            {icon}
          </div>
        )}
        <h1 className="text-[#111B47] font-bold md:ml-[16px] ml-0 text-[24px] text-center md:text-start">
          {title}
        </h1>
      </div>
      <div className="text-[#505F98] text-[18px] mt-[12px] md:text-start text-center">
        {description}
      </div>
      <div
        className="flex items-center w-fit justify-center self-end gap-2 px-5 py-1 mt-7 rounded-xl hover:bg-[#b5bfeb]"
          >
          <p className="text-[#111B47] font-bold">Read More</p>
          <FaArrowRightLong />
      </div>
    </div>
  )
}
