'use client'
import React, { useState, useEffect } from 'react';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      rating: 5,
      text: 'Impressed by their dedication! Their innovative strategies and personalized approach set them apart. They helped us achieve our goals with ease.',
      name: 'Stefan Ball',
      title: 'Operations Director',
      imgSrc: '/pexels-mwabonje-2033447.jpg',
    },
    {
      rating: 5,
      text: 'Thrilled with the outcome! Their team\'s professionalism and commitment to excellence are unmatched. They delivered results that exceeded our expectations.',
      name: 'Alexander Barr',
      title: 'Sales Manager',
      imgSrc: '/pexels-olly-3769021.jpg',
    },
    {
      rating: 5,
      text: 'Incredible results! Their team\'s expertise propelled our business to new heights. Highly recommend their services for anyone serious about success.',
      name: 'Safaa Sampson',
      title: 'Founder & CEO',
      imgSrc: '/pexels-olly-3769021.jpg',
    },
    {
      rating: 5,
      text: 'Thrilled with the outcome! Their team\'s professionalism and commitment to excellence are unmatched. They delivered results that exceeded our expectations.',
      name: 'iman',
      title: 'Sales Manager',
      imgSrc: '/pexels-mwabonje-2033447.jpg',
    },
    {
      rating: 5,
      text: 'Incredible results! Their team\'s expertise propelled our business to new heights. Highly recommend their services for anyone serious about success.',
      name: 'gogo',
      title: 'Founder & CEO',
      imgSrc: '/pexels-mwabonje-2033447.jpg',
    },
  ];

  const [current, setCurrent] = useState(0);
  const [visibleMembersCount, setVisibleMembersCount] = useState(1);

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
    return () => window.removeEventListener('resize', updateVisibleMembersCount);
  }, []);

  const nextTestimonial = () => {
    setCurrent((current + visibleMembersCount) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((current - visibleMembersCount + testimonials.length) % testimonials.length);
  };

  const displayedTestimonials = testimonials.slice(current, current + visibleMembersCount).concat(
    testimonials.slice(0, Math.max(0, (current + visibleMembersCount) - testimonials.length))
  );

  return (
    <section className="py-24 bg-neutral-100">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">Winning hearts and trust.</h2>
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
                <img src={testimonial.imgSrc} alt={testimonial.name} className="h-12 w-12 rounded-full mr-4" />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </div>
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
    </section>
  );
};

export default Testimonials;
