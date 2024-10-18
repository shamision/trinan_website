'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useState } from 'react';
import EditServiceForm from './editServiceForm';

const ServiceCard = ({ service, session }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false); // For delete loading state

  // Function to handle service deletion
  const handleDeleteService = async (id) => {
    const confirmed = confirm('Are you sure you want to delete this service?');
    if (!confirmed) return;
  
    setIsDeleting(true);
  
    try {
      const response = await fetch('/api/services', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
  
      if (response.ok) {
        window.location.reload(); // Reload the page to reflect the deleted service
      } else {
        alert('Failed to delete the service');
      }
    } catch (error) {
      console.error('Error deleting service:', error);
    } finally {
      setIsDeleting(false);
    }
  };
  
  const handleEditServiceClick = () => {
    setIsPopupOpen(true);
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-xl flex flex-col justify-between overflow-hidden p-4 hover:shadow-lg transition-shadow">
        <Image
          src={service.serviceImages[0]}
          alt={service.title}
          width={300}
          height={300}
          style={{ objectFit: 'cover', objectPosition: 'center' }} // Correct usage of CSS properties
          className="w-[800px] h-[270px] mb-[30px]"
        />
        <h3 className="text-xl font-semibold text-[#111B47] text-center mb-2">{service.title}</h3>
        <p className="text-gray-600 text-center w-3/4 mx-auto mb-4">{service.summary}</p>
        <div className="text-center flex mb-8 justify-around items-center">
          {session?.session && (
            <button
              onClick={()=> handleDeleteService(service.id)}
              disabled={isDeleting} // Disable button while deleting
              className={`flex gap-1 items-center text-white bg-red-700 px-4 py-2 rounded-md hover:bg-red-500 ${isDeleting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <MdDelete /> {isDeleting ? 'Deleting...' : 'Remove'}
            </button>
          )}

          
          <Link href={`/services/${service.id}`} className="inline-block bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors">
          Read more →
          </Link>

          {session?.session && (
            <button
              onClick={handleEditServiceClick}
              className="flex gap-1 items-center bg-green-900 text-white px-4 py-2 rounded-md hover:bg-green-500 transition-colors"
            >
              <FaEdit /> Edit
            </button>
          )}
        </div>
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
            <EditServiceForm serviceId={service.id} closeModal={handleClosePopup} />
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceCard;
