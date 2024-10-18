"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { FaArrowLeft, FaPlus, FaTimes, FaArrowRight } from 'react-icons/fa';
import TeamMemberFormPopup from "./TeamMemberFormPopup";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import EditTeamMemberFormPopup from "./EditTeamMemberFormPopup";



export const Team: React.FC<{TeamMembersData: any; session: any}> = ({TeamMembersData, session}) => {
  const [TeamMembers, setTeamMembers] = useState(TeamMembersData || []);
  const [visibleMemberIndex, setVisibleMemberIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState(null);
  const [visibleMembersCount, setVisibleMembersCount] = useState(3);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

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
    setVisibleMemberIndex((prevIndex) => (prevIndex + 1) % TeamMembers.length);
  };

  const handlePrev = () => {
    setVisibleMemberIndex((prevIndex) => (prevIndex - 1 + TeamMembers.length) % TeamMembers.length);
  };

  const getVisibleMembers = () => {
    return TeamMembers.slice(visibleMemberIndex, visibleMemberIndex + visibleMembersCount).concat(
      TeamMembers.slice(0, Math.max(0, visibleMemberIndex + visibleMembersCount - TeamMembers.length))
    );
  };

  const handleNewTeamMember = (newTeamMember: any) => {
    setTeamMembers((prevTeamMembers) => [newTeamMember, ...prevTeamMembers]);
  };

  const handleDeleteTeamMember = async (id: string) => {
    setIsDeleting(true);
    const confirmed = confirm('Are you sure you want to delete this TeamMember?');
    if (!confirmed) return;

    try {
      const response = await fetch('/api/teamMembers', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }), // Send the TeamMember ID in the request body
      });

      if (response.ok) {
        setTeamMembers((prevTeamMembers) => prevTeamMembers.filter(t => t.id !== id));
      } else {
        console.error('Failed to delete TeamMember');
      }
    } catch (error) {
      console.error('Error deleting TeamMember:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleEditTeamMember = (TeamMember: any) => {
    setSelectedTeamMember(TeamMember);
    setIsEditPopupOpen(true);
  };

  const handleSaveEditedTeamMember = (updatedTeamMember: any) => {
    setTeamMembers((prevTeamMembers) =>
      prevTeamMembers.map((TeamMember) =>
        TeamMember.id === updatedTeamMember.id ? updatedTeamMember : TeamMember
      )
    );
    setIsEditPopupOpen(false);
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
            <div key={index} className='shadow-lg hover:shadow-2xl'>
              <div className='rounded-lg p-4'>
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    width={150} 
                    height={150}
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    className="w-[500px] h-[200px]" 
                  />
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <h3 className='text-xl font-bold mt-4 text-black'>{member.name}</h3>
                      <p className='text-sm text-black'>{member.position}</p>
                    </div>
                    <button 
                      className='h-fit items-end bg-blue-900 p-4 text-white hover:bg-[#5372FC] rounded-full self-end'
                      onClick={() => setSelectedMember(member)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  {session?.session && (
                <div className="flex gap-2 mt-2 justify-center">
                  <button
                    onClick={() => handleDeleteTeamMember(member.id)}
                    disabled={isDeleting}
                    className={`flex gap-1 items-center text-white bg-red-700 px-4 py-2 rounded-md hover:bg-red-500 ${isDeleting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <MdDelete /> {isDeleting ? 'Deleting...' : 'Remove'}
                  </button>
                  <button
                    onClick={() => handleEditTeamMember(member)}
                    className="flex gap-1 items-center bg-green-900 text-white px-4 py-2 rounded-md hover:bg-green-500 transition-colors"
                  >
                    <FaEdit /> Edit
                  </button>
                </div>
              )}

              </div>
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
      {session?.session && (
        <div className="mt-14 flex justify-center">
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-blue-800 text-white py-2 px-4 rounded"
          >
            Add a team member
          </button>
        </div>
      )}

      <TeamMemberFormPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onSave={handleNewTeamMember}
      />

      {selectedTeamMember && (
        <EditTeamMemberFormPopup
          isOpen={isEditPopupOpen}
          onClose={() => setIsEditPopupOpen(false)}
          onSave={handleSaveEditedTeamMember}
          teamMember={selectedTeamMember}
        />
      )}

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

