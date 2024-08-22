"use client";

import React from 'react';

const ServicePage = ({ service }) => {
    if (!service) {
        return <p>Service not found</p>;
    }

    return (
        <div className="container bg-white">
            <div className="text-[#111B47] gap-7 flex flex-col md:flex-row py-10">
                <img src={service.imageUrl} alt={service.title} className="w-[400px] h-auto rounded-md shadow-2xl" />
                <div className='flex flex-col justify-center'>
                    <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                    <p className='text-[#505F98]'>{service.description}</p>
                </div>
            </div>
            <div className="procedure text-[#111B47]">
                <h2 className="text-2xl font-semibold mb-4">Procedure</h2>
                <p className='text-[#505F98]'>{service.procedure}</p>

            </div>
            <div className="text-[#111B47] py-10">
                <h2 className="text-2xl font-semibold mb-4">Past Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {service.pastProjects.map((project, index) => (
                        <div key={index} className="shadow-2xl p-5 rounded-lg">
                            <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                            <p className='text-[#505F98] mt-3'>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicePage;