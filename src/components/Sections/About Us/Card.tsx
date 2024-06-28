"use client"

import Image from "next/image"
import React, { ReactNode } from "react"

interface DetailCardProps {
    svg: ReactNode;
    title: string;
}


export const DetailCard: React.FC<DetailCardProps> = ({svg, title}) => {
    return (
        <div className="w-full h-[415px] bg-[#E7ECFF] rounded-[5px] shadow-xl flex flex-col">
            <div className="flex items-center justify-center w-full h-full">
                {svg}
            </div>
            <div className="flex justify-start items-start w-full">
                <h1 className="text-customBlue text-[48px] font-bold ml-[20px]">{title}</h1>
            </div>

        </div>
    )
}