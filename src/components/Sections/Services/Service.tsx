"use client"

import React from "react"

interface ServiceProps {
  icon: string
  title: string
  description: string
}

export const Service: React.FC<ServiceProps> = ({
  icon,
  title,
  description
}) => {
  return (
    <div className="w-[390px]">
      <div className="flex md:flex-row flex-col items-center md:space-y-0 space-y-4">
        {icon && (
          <svg
            width={64}
            height={64}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_22_5)">
              <path d={icon} fill="#111B47" />
            </g>
            <defs>
              <clipPath id="clip0_22_5">
                <rect width={64} height={63.6114} fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
        <h1 className="text-[#111B47] font-bold md:ml-[16px] ml-0 text-[24px]">
          {title}
        </h1>
      </div>
      <div className="text-[#505F98] text-[18px] mt-[12px] md:text-start text-center">
        {description}
      </div>
    </div>
  )
}
