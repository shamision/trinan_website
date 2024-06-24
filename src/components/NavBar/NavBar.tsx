import React from "react";
import "../../app/globals.css";


export const NavBar = () => {
    return (
        <nav className="container flex py-10 text-customBlue items-center justify-between font-sans w-full">

            <div className="space-x-1 flex items-center">
                <svg width={26} height={28} viewBox="0 0 26 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.5 15.5L25.5 32.5H15.5L15.5 15.5L25.5 15.5Z" fill="#111B47" />
                    <path d="M10.5 15.5L10.5 32.5H0.5L0.5 15.5L10.5 15.5Z" fill="#111B47" />
                    <path d="M25.5 10.5L0.5 10.5L0.5 0.5L25.5 0.500001L25.5 10.5Z" fill="#111B47" />
                </svg>

                <h1 className="text-xl text-customBlue font-bold">CLINAN</h1>
            </div>


            <ul className="flex items-center space-x-[60px] text-[18px] font-semibold ">
                <li className=" ">Home</li>
                <li className="">Services</li>
                <li className="">About Us</li>
                <li className="">Customers</li>
                <li className="">Team</li>
                <li className="">Contact</li>
            </ul>
        </nav>
    );
}
