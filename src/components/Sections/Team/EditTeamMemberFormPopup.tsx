'use client';

import React, { useState, useEffect } from 'react';
import ImageUploader from '../Services/ImageUploader';

interface EditTeamMemberFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedTeamMember: any) => void;
  teamMember: {
    id: string;
    image: string;
    name: string;
    position: string;
    description: string;
  };
}

const EditTeamMemberFormPopup: React.FC<EditTeamMemberFormPopupProps> = ({ isOpen, onClose, onSave, teamMember }) => {
  const [formData, setFormData] = useState({
    id: teamMember.id || '', // Track the ID
    image: teamMember.image || '',
    name: teamMember.name || '',
    position: teamMember.position || '',
    description: teamMember.description || '',
  });

  useEffect(() => {
    // Reset form data whenever the teamMember prop changes
    setFormData({
      id: teamMember.id || '', // Track the ID
      image: teamMember.image || '',
      name: teamMember.name || '',
      position: teamMember.position || '',
      description: teamMember.description || '',
    });
  }, [teamMember]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (newImageUrl: string) => {
    setFormData((prevData) => ({
      ...prevData,
      image: newImageUrl,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/teamMembers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // Include the ID in the request body
      });

      if (response.ok) {
        const updatedTeamMember = await response.json();
        onSave(updatedTeamMember);
        onClose();
      } else {
        console.error('Failed to update team member');
      }
    } catch (error) {
      console.error('Error updating team member:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Edit Team Member</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Position</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image</label>
            <ImageUploader value={[formData.image]} onChange={handleImageChange} />
          </div>
          <div className="flex justify-end">
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

export default EditTeamMemberFormPopup;
