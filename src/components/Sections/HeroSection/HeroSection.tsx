"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Form } from "../Contact/Form";

export const HeroSection = () => {
  const [isFormVisible, setIsFormVisible] = useState(false); // State to manage form visibility

  const handleGetInTouchClick = () => {
    setIsFormVisible(true);
  };

  const closeForm = () => {
    setIsFormVisible(false);
  };

  return (
    <>
      <section className="h-screen w-full relative overflow-hidden">
        <Image
          src={"/Const.jpg"}
          alt="Engineering equipment background"
          fill
          style={{ objectFit: "cover" }}
        />

        <div className="absolute flex items-center justify-center z-30 h-full w-full bg-black bg-opacity-70 md:px-0 px-6">
          <div className="container flex flex-col gap-8">
            <h1 className="font-bold text-4xl md:text-5xl text-white w-full md:w-9/12 leading-9">
              Your Trusted Partner in Seamless Supply of Engineering Equipment
            </h1>
            <p className="text-md md:text-lg w-full md:w-2/4 text-white leading-6">
              The only source for top-tier engineering materials.
              <br /> Reach out to us today to secure the tools and materials you need for your project&apos;s success.
            </p>
            <button
              onClick={handleGetInTouchClick}
              className="bg-blue-900 w-fit text-white text-lg md:text-xl font-bold py-2 px-4 rounded-md"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>
      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Form closeForm={closeForm} />
        </div>
      )}
    </>
  );
};
