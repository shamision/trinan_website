'use client';

import React, { useState, useEffect } from 'react';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import TestimonialFormPopup from './TestimonialFormPopup';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import EditTestimonialFormPopup from './EditTestimonialFormPopup'; // Import the edit form component
import Image from 'next/image'; // Import the Image component

const Testimonials: React.FC<{ testimonialsData: any[]; session: any }> = ({ testimonialsData, session }) => {
  const [testimonials, setTestimonials] = useState(testimonialsData || []);
  const [current, setCurrent] = useState(0);
  const [visibleMembersCount, setVisibleMembersCount] = useState(1);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const updateVisibleMembersCount = () => {
      if (window.innerWidth >= 1252) {
        setVisibleMembersCount(3);
      } else if (window.innerWidth >= 940) {
        setVisibleMembersCount(2);
      } else {
        setVisibleMembersCount(1);
      }
    };

    updateVisibleMembersCount();
    window.addEventListener('resize', updateVisibleMembersCount);
    return () => window.removeEventListener('resize', updateVisibleMembersCount);
  }, []);

  const nextTestimonial = () => {
    setCurrent((current + visibleMembersCount) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((current - visibleMembersCount + testimonials.length) % testimonials.length);
  };

  const displayedTestimonials = testimonials.slice(current, current + visibleMembersCount);

  // Prevent duplication when testimonials are less than visibleMembersCount
  if (displayedTestimonials.length < visibleMembersCount) {
    displayedTestimonials.push(...testimonials.slice(0, visibleMembersCount - displayedTestimonials.length));
  }

  const handleNewTestimonial = (newTestimonial: any) => {
    setTestimonials((prevTestimonials) => [newTestimonial, ...prevTestimonials]);
  };

  const handleDeleteTestimonial = async (id: string) => {
    setIsDeleting(true);
    const confirmed = confirm('Are you sure you want to delete this testimonial?');
    if (!confirmed) return;

    try {
      const response = await fetch('/api/testimonials', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }), // Send the testimonial ID in the request body
      });

      if (response.ok) {
        setTestimonials((prevTestimonials) => prevTestimonials.filter(t => t.id !== id));
      } else {
        console.error('Failed to delete testimonial');
      }
    } catch (error) {
      console.error('Error deleting testimonial:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleEditTestimonial = (testimonial: any) => {
    setSelectedTestimonial(testimonial);
    setIsEditPopupOpen(true);
  };

  const handleSaveEditedTestimonial = (updatedTestimonial: any) => {
    setTestimonials((prevTestimonials) =>
      prevTestimonials.map((testimonial) =>
        testimonial.id === updatedTestimonial.id ? updatedTestimonial : testimonial
      )
    );
    setIsEditPopupOpen(false);
  };

  return (
    <section className="py-24 bg-neutral-100">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4 text-black">Winning hearts and trust.</h2>
        <h3 className="text-3xl text-blue-900">Customer <span className="font-semibold">success stories</span></h3>
        <p className="text-gray-600 max-w-xl mx-auto mt-4">
          The best way to showcase our commitment is through the experiences and stories of those who have partnered with us.
        </p>
      </div>
      <div className="container relative flex justify-center items-center px-6">
        <button
          className="absolute left-0 p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
          onClick={prevTestimonial}
        >
          <FaArrowLeft className="text-gray-600" />
        </button>
        <div className={`grid gap-4 w-full ${visibleMembersCount === 1 ? 'grid-cols-1' : visibleMembersCount === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
          {displayedTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <Image 
                  src={testimonial.imgSrc} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full mr-4" 
                  width={48} // Specify the width
                  height={48} // Specify the height
                />
                <div>
                  <p className="font-semibold text-black">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </div>
              {session?.session && (
                <div className="flex gap-2 justify-center mt-2 mb-4">
                  <button
                    onClick={() => handleDeleteTestimonial(testimonial.id)}
                    disabled={isDeleting}
                    className={`flex gap-1 items-center text-white bg-red-700 px-4 py-2 rounded-md hover:bg-red-500 ${isDeleting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <MdDelete /> {isDeleting ? 'Deleting...' : 'Remove'}
                  </button>
                  <button
                    onClick={() => handleEditTestimonial(testimonial)}
                    className="flex gap-1 items-center bg-green-900 text-white px-4 py-2 rounded-md hover:bg-green-500 transition-colors"
                  >
                    <FaEdit /> Edit
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
          onClick={nextTestimonial}
        >
          <FaArrowRight className="text-gray-600" />
        </button>
      </div>
      <div className="mt-8 flex justify-center">
        <div className="flex space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / visibleMembersCount) }, (_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full ${Math.floor(current / visibleMembersCount) === index ? 'bg-yellow-400' : 'bg-gray-300'}`}
            ></span>
          ))}
        </div>
      </div>
      {session?.session && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Add Testimonial
          </button>
        </div>
      )}

      {/* Testimonial Form Popup */}
      <TestimonialFormPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onSave={handleNewTestimonial}
      />

      {/* Edit Testimonial Form Popup */}
      {selectedTestimonial && (
        <EditTestimonialFormPopup
          isOpen={isEditPopupOpen}
          onClose={() => setIsEditPopupOpen(false)}
          onSave={handleSaveEditedTestimonial}
          testimonial={selectedTestimonial}
        />
      )}
    </section>
  );
};

export default Testimonials;
