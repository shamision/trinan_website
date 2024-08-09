"use client"

import React, { ReactNode } from "react"

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
    <div className="w-[380px]">
      <div className="flex md:flex-row flex-col items-center md:space-y-0 space-y-4">
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
    </div>
  )
}
