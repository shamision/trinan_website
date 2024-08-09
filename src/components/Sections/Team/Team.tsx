"use client"

import React, { useState } from "react"
import { Member } from "./Member"

const members = [
  {
    src: "/pexels-divinetechygirl-1181519.jpg",
    alt: "Member 1",
    name: "Olivia Mitchell",
    position: "FOUNDER1",
    description: "A marketing manager specializing in digital strategies and brand growth. She excels in content creation, social media, and SEO."
  },
  {
    src: "/pexels-olly-3769021.jpg",
    alt: "Member 2",
    name: "Sophia Ramirez",
    position: "CEO2",
    description: "A marketing manager specializing in digital strategies and brand growth. She excels in content creation, social media, and SEO."
  },
  {
    src: "/pexels-mwabonje-2033447.jpg",
    alt: "Member 3",
    name: "Ethan Collins",
    position: "CTO3",
    description: "A marketing manager specializing in digital strategies and brand growth. She excels in content creation, social media, and SEO."
  },
  {
    src: "/pexels-mwabonje-2033447.jpg",
    alt: "Member 3",
    name: "Ethan Collins",
    position: "CTO4",
    description: "A marketing manager specializing in digital strategies and brand growth. She excels in content creation, social media, and SEO."
  },
  {
    src: "/pexels-olly-3769021.jpg",
    alt: "Member 2",
    name: "Sophia Ramirez",
    position: "CEO5",
    description: "A marketing manager specializing in digital strategies and brand growth. She excels in content creation, social media, and SEO."
  },
  {
    src: "/pexels-mwabonje-2033447.jpg",
    alt: "Member 3",
    name: "Ethan Collins",
    position: "CTO6",
    description: "A marketing manager specializing in digital strategies and brand growth. She excels in content creation, social media, and SEO."
  },
  {
    src: "/pexels-olly-3769021.jpg",
    alt: "Member 2",
    name: "Sophia Ramirez",
    position: "CEO7",
    description: "A marketing manager specializing in digital strategies and brand growth. She excels in content creation, social media, and SEO."
  },
  // Add more members here
]

export const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? members.length - 3 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= members.length ? 0 : prevIndex + 1
    )
  }

  return (
    <section className="md:h-screen h-full w-full relative overflow-hidden bg-white md:px-[90px] px-8 py-[50px]">
      <div className="flex items-center justify-center top-0 w-full">
        <div className="w-[750px] mx-auto pt-10">
          <p className="text-[#111B47] font-bold text-[48px] text-center">
            Our Team
          </p>
          <p className="text-[#505F98] text-center text-[18px]">
            We offer a comprehensive range of tendering services to help
            businesses secure lucrative contracts. Our expertise ensures that
            your bids are competitive, compliant, and strategically crafted to
            meet the highest standards.
          </p>
        </div>
      </div>
      <div className="relative mt-[30px] flex items-center justify-center w-full pb-20 md:px-12">
        <div onClick={handlePrev} className="rounded-full w-14 h-14 select-none absolute md:top-24 left-0 bottom-0 flex items-center justify-center">
          <button className="text-[#111B47] font-bold text-[24px] p-2">
            &lt;
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-14 place-items-center w-full select-none">
          {members.slice(currentIndex, currentIndex + 3).map((member, index) => (
            <Member
              key={index}
              src={member.src}
              alt={member.alt}
              name={member.name}
              position={member.position}
              description={member.description}
            />
          ))}
        </div>
        <div onClick={handleNext} className="rounded-full w-14 h-14 select-none absolute md:top-24 right-0 bottom-0 flex items-center justify-center">
          <button className="text-[#111B47] font-bold text-[24px] p-2">
            &gt;
          </button>
        </div>
      </div>
    </section>
  )
}
