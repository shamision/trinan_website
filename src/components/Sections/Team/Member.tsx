"use client"

import Image from "next/image"
import React from "react"

interface LogoImageProps {
    src: string;
    alt: string;
    name: string;
    position: string;
    description: string;
}

export const Member: React.FC<LogoImageProps> = ({ src, alt, name, position, description }) => {
    return (
        <div className="w-[327px] h-">
            <Image src={src} alt={alt} width={327} height={225} className="rounded-[5px] h-[225px]" />
            <h2 className="text-customBlue font-semibold text-[32px]">{name}</h2>
            <div className="w-[161px] h-[40px] bg-[#E7ECFF] rounded-[5px] flex justify-center items-center">
                <p className="text-[#938F8F]">{position}</p>
            </div>
            <p className="text-[#505F98] text-[18px] mt-[10px]">
                {description}
            </p>
        </div>
    );
};

