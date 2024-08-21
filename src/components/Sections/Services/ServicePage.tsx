import React from 'react';

const ServicePage = () => {
    return (
        <div className="container">
            <div className="text-[#111B47] gap-7 flex flex-col md:flex-row py-10">
                <img src="/unnamed.jpg" alt="Project 3" className="w-[400px] h-auto rounded-md shadow-2xl" />
                <div className='flex flex-col justify-center'>
                    <h2 className="text-2xl font-semibold mb-4">Service Title</h2>
                    <p className='text-[#505F98]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                    </p>
                </div>
            </div>
            <div className="procedure text-[#111B47]">
                <h2 className="text-2xl font-semibold mb-4">Procedure</h2>
                <ol className="flex md:space-x-6 flex-wrap gap-y-6">
                    <li className="text-[#505F98] flex items-center text-base">
                        <span className="bg-primary mr-2.5 flex h-[26px] w-[26px] items-center justify-center rounded-full text-base text-white">
                            1
                        </span>
                        Lorem ipsum dolor sit amet.
                    </li>
                    <li className="text-[#505F98] flex items-center text-base">
                        <span className="bg-primary mr-2.5 flex h-[26px] w-[26px] items-center justify-center rounded-full text-base text-white">
                            2
                        </span>
                        Consectetur adipiscing elit.
                    </li>
                    <li className="text-[#505F98] flex items-center text-base">
                        <span className="bg-primary mr-2.5 flex h-[26px] w-[26px] items-center justify-center rounded-full text-base text-white">
                            3
                        </span>
                        Sed do eiusmod tempor incididunt.
                    </li>
                    <li className="text-[#505F98] flex items-center text-base">
                        <span className="bg-primary mr-2.5 flex h-[26px] w-[26px] items-center justify-center rounded-full text-base text-white">
                            4
                        </span>
                        Ut labore et dolore magna aliqua.
                    </li>
                </ol>


            </div>
            <div className="text-[#111B47] py-10">
                <h2 className="text-2xl font-semibold mb-4">Past Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="shadow-2xl p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mt-2">Project Title 1</h3>
                        <p className='text-[#505F98] mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="shadow-2xl p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mt-2">Project Title 2</h3>
                        <p className='text-[#505F98] mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="shadow-2xl p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mt-2">Project Title 3</h3>
                        <p className='text-[#505F98] mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;
