'use client'

import React, { useState } from 'react';
import ServiceForm from './ServiceForm';

const AddServiceCard = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleAddServiceClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div
        className="bg-white shadow-md rounded-xl flex flex-col justify-center overflow-hidden p-4 hover:shadow-lg transition-shadow gap-8"
        onClick={handleAddServiceClick}
      >
        <h3 className="text-2xl font-semibold text-[#111B47] text-center">Add a service?</h3>
        <p className="text-gray-600 text-center w-fit px-12 py-3 mx-auto text-5xl border-[2px] rounded-full bg-gray-100 hover:cursor-pointer hover:bg-gray-300">+</p>
      </div>
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white h-[800px] overflow-y-scroll rounded-xl m-6 lg:m-0 w-[800px]">
            <button
              onClick={handleClosePopup}
              className="text-white bg-[#111B47] float-right w-8 h-8 flex items-center justify-center rounded-md m-5"
            >
              X
            </button>
            <ServiceForm closeModal={handleClosePopup} />
          </div>
        </div>
      )}
    </>
  );
};

export default AddServiceCard;
