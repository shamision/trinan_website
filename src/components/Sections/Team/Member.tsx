"use client"

import Image from "next/image"
import React from "react"

interface LogoImageProps {
  src: string
  alt: string
  name: string
  position: string
  description: string
}

export const Member: React.FC<LogoImageProps> = ({
  src,
  alt,
  name,
  position,
  description
}) => {
  return (
    <div className="md:w-[327px] w-full">
      <div className="relative md:w-[327px] w-full rounded-[5px] h-[225px] overflow-hidden">
        <Image src={src} alt={alt} fill />
      </div>
      <h2 className="text-[#111B47] font-semibold text-[32px]">{name}</h2>
      <div className="md:w-[161px] w-full h-[40px] bg-[#E7ECFF] rounded-[5px] flex justify-center items-center">
        <p className="text-[#938F8F]">{position}</p>
      </div>
      <p className="text-[#505F98] text-[18px] mt-[10px]">{description}</p>
    </div>
  )
}
