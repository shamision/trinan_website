'use client';

import React, { useState, useEffect } from 'react';
import ImageUploader from '../Services/ImageUploader';

interface EditTestimonialFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedTestimonial: any) => void;
  testimonial: {
    id: string;
    rating: number;
    text: string;
    name: string;
    title: string;
    imgSrc: string;
  };
}

const EditTestimonialFormPopup: React.FC<EditTestimonialFormPopupProps> = ({ isOpen, onClose, onSave, testimonial }) => {
  const [formData, setFormData] = useState({
    id: testimonial.id || '', // Track the ID
    rating: testimonial.rating ? Number(testimonial.rating) : 5, // Ensure rating is a number
    text: testimonial.text || '',
    name: testimonial.name || '',
    title: testimonial.title || '',
    imgSrc: testimonial.imgSrc || '',
  });

  useEffect(() => {
    // Reset form data whenever the testimonial prop changes
    setFormData({
      id: testimonial.id || '', // Track the ID
      rating: testimonial.rating ? Number(testimonial.rating) : 5, // Ensure rating is a number
      text: testimonial.text || '',
      name: testimonial.name || '',
      title: testimonial.title || '',
      imgSrc: testimonial.imgSrc || '',
    });
  }, [testimonial]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'rating' ? Number(value) : value, // Convert rating to number
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
      const response = await fetch(`/api/testimonials`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // Include the ID in the request body
      });

      if (response.ok) {
        const updatedTestimonial = await response.json();
        onSave(updatedTestimonial);
        onClose();
      } else {
        console.error('Failed to update testimonial');
      }
    } catch (error) {
      console.error('Error updating testimonial:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md h-[90vh] overflow-y-scroll">
        <h2 className="text-2xl font-semibold mb-4 text-black">Edit Testimonial</h2>
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

export default EditTestimonialFormPopup;
