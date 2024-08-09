"use client"

import React, { ReactNode } from "react"

interface DetailCardProps {
  svg: ReactNode
  title: string
  backContent: ReactNode
}

export const DetailCard: React.FC<DetailCardProps> = ({
  svg,
  title,
  backContent
}) => {
  return (
    <div className="w-full h-[415px] perspective-1000">
      <div className="relative w-full h-full md:transform-style-preserve-3d transition-transform duration-700 md:hover:rotate-y-180">
        <div className=" absolute w-full h-full backface-hidden bg-[#E7ECFF] rounded-[5px] shadow-xl md:flex hidden flex-col">
          <div className="flex items-center justify-center w-full h-full">
            {svg}
          </div>
          <div className="flex justify-start items-start w-full">
            <h1 className="text-[#111B47] text-[48px] font-bold ml-[20px]">
              {title}
            </h1>
          </div>
        </div>
        <div className="absolute w-full h-full md:backface-hidden bg-[#111B47] rounded-[5px] shadow-xl flex flex-col items-center justify-center space-y-6 md:rotate-y-180 px-12 text-center">
          <h1 className="text-white text-[48px] font-bold ml-[20px] block">
            {title}
          </h1>
          <p>{backContent}</p>
        </div>
      </div>
    </div>
  )
}
