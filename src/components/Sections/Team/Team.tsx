"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { FaArrowLeft, FaPlus, FaTimes, FaArrowRight } from 'react-icons/fa';


const teamMembers = [
  {
    image: "/pexels-divinetechygirl-1181519.jpg",
    alt: "Member 1",
    name: "Olivia Mitchell",
    position: "FOUNDER1",
    description: "A marketing manager specializing in digital strategies and brand growth. She excels in content creation, social media, and SEO."
  },
  {
    image: "/pexels-olly-3769021.jpg",
    alt: "Member 2",
    name: "Sophia Ramirez",
    position: "CEO2",
    description: "A marketing manager specializing in digital strategies and brand growth. She excels in content creation, social media, and SEO."
  },
  {
    image: "/pexels-mwabonje-2033447.jpg",
    alt: "Member 3",
    name: "Ethan Collins",
    position: "CTO3",
    description: "A marketing manager specializing in digital strategies and brand growth. She excels in content creation, social media, and SEO."
  },
  {
    image: "/pexels-mwabonje-2033447.jpg",
    alt: "Member 3",
    name: "Ethan Collins",
    position: "CTO4",
    description: "A marketing manager specializing in digital strategies and brand growth. She excels in content creation, social media, and SEO."
  },
  {
    image: "/pexels-olly-3769021.jpg",
    alt: "Member 2",
    name: "Sophia Ramirez",
    position: "CEO5",
    description: "A marketing manager specializing in digital strategies and brand growth. She excels in content creation, social media, and SEO."
  },
  {
    image: "/pexels-mwabonje-2033447.jpg",
    alt: "Member 3",
    name: "Ethan Collins",
    position: "CTO6",
    description: "A marketing manager specializing in digital strategies and brand growth. She excels in content creation, social media, and SEO."
  },
  {
    image: "/pexels-olly-3769021.jpg",
    alt: "Member 2",
    name: "Sophia Ramirez",
    position: "CEO7",
    description: "A marketing manager specializing in digital strategies and brand growth. She excels in content creation, social media, and SEO."
  },
  // Add more members here
]

export const Team = () => {
  const [visibleMemberIndex, setVisibleMemberIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState(null);
  const [visibleMembersCount, setVisibleMembersCount] = useState(3);

  const updateVisibleMembersCount = () => {
    if (window.innerWidth >= 1252) {
      setVisibleMembersCount(3);
    } else if (window.innerWidth >= 940) {
      setVisibleMembersCount(2);
    } else {
      setVisibleMembersCount(1);
    }
  };

  useEffect(() => {
    updateVisibleMembersCount();
    window.addEventListener('resize', updateVisibleMembersCount);

    return () => {
      window.removeEventListener('resize', updateVisibleMembersCount);
    };
  }, []);

  const handleNext = () => {
    setVisibleMemberIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setVisibleMemberIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
  };

  const getVisibleMembers = () => {
    return teamMembers.slice(visibleMemberIndex, visibleMemberIndex + visibleMembersCount).concat(
      teamMembers.slice(0, Math.max(0, visibleMemberIndex + visibleMembersCount - teamMembers.length))
    );
  };

  return (
    <div className='container m-auto my-24'>
      <div className="w-8/12 mx-auto">
        <p className="text-[#111B47] font-bold text-[48px] text-center">
              Our Team
        </p>
        <p className="text-[#505F98] text-center text-[18px] pb-16 pt-8">
          We offer a comprehensive range of tendering services to help
          businesses secure lucrative contracts. Our expertise ensures that
          your bids are competitive, compliant, and strategically crafted to
          meet the highest standards.
        </p>
      </div>
      
      <div className='flex justify-between items-center gap-4'>
        {/* Left Arrow */}
        <button 
          className='text-[#111B47] text-xl mr-4'
          onClick={handlePrev}
        >
          <FaArrowLeft />
        </button>

        {/* Visible Members */}
        <div className='flex gap-24'>
          {getVisibleMembers().map((member, index) => (
            <div key={index} className='flex shadow-lg hover:shadow-2xl gap-4 hover:gap-8 items-end'>
              <div className='rounded-lg py-4 pl-4'>
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    width={250} 
                    height={150}
                    className="w-[180px] h-[180px]" 
                  />
                  <h3 className='text-xl font-bold mt-4'>{member.name}</h3>
                  <p className='text-sm'>{member.position}</p>
              </div>
              <button 
                className='h-fit items-end bg-[#111B47] p-4 text-white hover:bg-[#5372FC] rounded-full'
                onClick={() => setSelectedMember(member)}
              >
                <FaPlus />
              </button>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          className='text-[#111B47] text-xl ml-4'
          onClick={handleNext}
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10'>
          <div className='bg-[#111B47] w-1/2 text-white p-8 rounded-lg relative'>
            <button 
              className='absolute top-4 right-4'
              onClick={() => setSelectedMember(null)}
            >
              <FaTimes />
            </button>
            <div className='flex items-center gap-12'>
                <Image src={selectedMember.image} alt={selectedMember.name} width={180} height={180} />
                <div>
                    <h3 className='text-2xl font-bold mt-4'>{selectedMember.name}</h3>
                    <p className='mt-2'>{selectedMember.position}</p>
                </div>
            </div>
            <p className='mt-6 text-left'>{selectedMember.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

