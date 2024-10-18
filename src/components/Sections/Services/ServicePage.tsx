"use client";

import React, { useEffect, useState } from 'react';
import { MdArrowBackIosNew } from "react-icons/md";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ServicePage = ({ service }) => {
    if (!service) {
        return <p>Service not found</p>;
    }

    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleBack = () => {
        if (isMounted) {
          router.back();
        }
      };
    return (
        <>
            <div className="container bg-white pt-[91px]">
                <div className='mt-8 flex gap-16'>
                    <div className="text-center">
                    <button onClick={handleBack} className="inline-block bg-blue-900 text-white px-4 py-2 flex gap-1 align-center rounded-md hover:bg-blue-500 transition-colors">
                        <MdArrowBackIosNew /> Back
                    </button>
                    </div>
                    <h1 className='text-5xl text-[#111B47] font-bold'>Service Details</h1>
                </div>
                <div className="text-[#111B47] gap-7 flex flex-col md:flex-row py-10">
                    {/* <img src={service.serviceImages[0]} alt={service.title} className="w-[400px] h-auto rounded-md shadow-2xl" /> */}
                    <Image
                        src={service.serviceImages[0]}
                        alt={service.title}
                        width={300}
                        height={300}
                        style={{ objectFit: 'cover', objectPosition: 'center' }} // Correct usage of CSS properties
                        className="w-[800px] h-[270px] mb-[30px]"
                    />

                    <div className='flex flex-col justify-center px-[50px]'>
                        <h2 className="text-4xl font-semibold mb-4">{service.title}</h2>
                        <p className='text-[#505F98]'>{service.description}</p>
                    </div>
                </div>
                <div className="procedure text-[#111B47] w-2/3 align-self-center">
                    <h2 className="text-2xl font-semibold mb-4">Procedure</h2>
                    <p className='text-[#505F98]'>{service.procedure}</p>

                </div>
                <div className="team text-[#111B47] py-10">
                    <h2 className="text-2xl font-semibold mb-4">Service Image Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {service.serviceImages.map((member, index) => (
                            <div key={index} className="shadow-2xl p-5 rounded-lg">
                                <Image
                                    src={member}
                                    alt={service.title}
                                    width={300}
                                    height={300}
                                    style={{ objectFit: 'cover', objectPosition: 'center' }} // Correct usage of CSS properties
                                    className="w-[800px] h-[270px] mb-[30px]"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-[#111B47] py-10">
                    <h2 className="text-2xl font-semibold mb-4">Past Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {service.pastProjects.map((project, index) => (
                            <div key={index} className="shadow-2xl p-5 rounded-lg">
                                <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                                <p className='text-[#505F98] mt-3'>{project.description}</p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {project.projectImages.map((member, index) => (
                                        <div key={index} className="shadow-2xl p-5 rounded-lg">
                                            <Image
                                                src={member}
                                                alt={service.title}
                                                width={100}
                                                height={30}
                                                style={{ objectFit: 'cover', objectPosition: 'center' }} // Correct usage of CSS properties
                                                className="w-[80px] h-[50px] mb-[30px]"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicePage;