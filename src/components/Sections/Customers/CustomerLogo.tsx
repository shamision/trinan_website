"use client"

import Image from "next/image"
import React from "react"

interface LogoImageProps {
    src: string;
    alt: string;
}

export const CustomerLogo: React.FC<LogoImageProps> = ({ src, alt }) => {
    return (
        <div className="w-[240px]">
            <Image src={src} alt={alt} width={240} height={50} />
        </div>
    );
};
