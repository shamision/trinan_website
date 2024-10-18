'use client';

import React, { useState } from 'react';
import ImageUploader from '../Services/ImageUploader';

interface TestimonialFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (testimonial: any) => void;
}

const TestimonialFormPopup: React.FC<TestimonialFormPopupProps> = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    rating: 5,
    text: '',
    name: '',
    title: '',
    imgSrc: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'rating' ? Number(value) : value,  // Ensure rating is a number
    }));
  };

  const handleImageChange = (newImageUrl: string) => {
    setFormData((prevData) => ({
      ...prevData,
      imgSrc: newImageUrl,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newTestimonial = await response.json();
        onSave(newTestimonial);
        onClose();
      } else {
        console.error('Failed to create testimonial');
      }
    } catch (error) {
      console.error('Error creating testimonial:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md overflow-y-scroll h-[90vh]">
        <h2 className="text-2xl font-semibold mb-4 text-black">Create Testimonial</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Rating</label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              min={1}
              max={5}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Text</label>
            <textarea
              name="text"
              value={formData.text}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image</label>
            <ImageUploader value={[formData.imgSrc]} onChange={handleImageChange} />
          </div>
          <div className="flex justify-center mt-14">
            <button
              type="button"
              className="bg-gray-400 text-white py-2 px-4 rounded mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestimonialFormPopup;
