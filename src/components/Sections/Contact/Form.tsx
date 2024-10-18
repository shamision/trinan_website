"use client";

import { useForm } from 'react-hook-form';
import { ContactEmail, ContactName } from "../../Svgs";
import React from "react";
import { IoCall } from "react-icons/io5";

export const Form = ({ closeForm }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (formData) => {
    try {
      // Send a POST request to the API route
      const response = await fetch('/api/contactMessages', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Form submitted successfully');
        closeForm(); // Close the form after successful submission
      } else {
        alert('There was a problem submitting the form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-white rounded-lg m-6 lg:m-0 w-[800px] h-[90vh] overflow-y-scroll">
      <button
        onClick={closeForm}
        className="text-white bg-[#111B47] w-8 h-8 float-right flex items-center justify-center rounded-md m-5"
      >
        X
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-8 py-24">
          <h2 className="text-3xl font-bold w-1/2 mx-auto text-[#111B47]">
            GET IN TOUCH WITH US
          </h2>

          <div className="w-1/2 mx-auto">
            <label className="text-[#111B47]">Name</label>
            <div className="pt-4 flex gap-5">
              <ContactName />
              <input
                type="text"
                placeholder="Full name here"
                className={`focus:outline-none text-[#505F98] border-b ${
                  errors.name ? "border-red-500" : ""
                }`}
                {...register("name", { required: "Name is required" })}
              />
            </div>
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="w-1/2 mx-auto">
            <label className="text-[#111B47]">Email</label>
            <div className="pt-4 flex gap-5">
              <ContactEmail />
              <input
                type="email"
                placeholder="Your email address"
                className={`focus:outline-none text-[#505F98] border-b ${
                  errors.email ? "border-red-500" : ""
                }`}
                {...register("email", { required: "Email is required" })}
              />
            </div>
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="w-1/2 mx-auto">
            <label className="text-[#111B47]">Phone Number</label>
            <div className="pt-4 flex gap-5">
              <IoCall className="text-xl" />
              <input
                type="text"
                placeholder="Your phone number here"
                className={`focus:outline-none text-[#505F98] border-b ${
                  errors.phone ? "border-red-500" : ""
                }`}
                {...register("phone", { required: "Phone number is required" })}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <div className="w-1/2 mx-auto flex flex-col gap-5">
            <label className="text-[#111B47]">Message</label>
            <textarea
              rows={5}
              cols={6}
              placeholder="Type your message here"
              className={`border focus:outline-none text-[#505F98] ${
                errors.message ? "border-red-500" : ""
              }`}
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#111B47] mx-auto w-[180px] h-[50px] text-white rounded-md mt-[30px]"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};
