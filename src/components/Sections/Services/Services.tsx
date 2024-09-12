'use client'

import ServiceCard from './ServiceCard';
import { servicesData } from './ServiceData';

const Services = () => {
  return (
    <div className='bg-neutral-100'>
      <div className="container mx-auto py-28">
      <div className="w-3/4 mx-auto pb-16">
          <p className="text-[#111B47] font-bold text-[48px] text-center">
            Our Services
          </p>
          <p className="text-[#505F98] text-center text-[18px] mt-[15px]">
          We provide a wide array of engineering equipment to meet the diverse needs of your projects. 
          Our products are carefully selected to ensure quality, durability, and efficiency, 
          empowering your business to excel in even the most demanding environments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
