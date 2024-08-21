"use client"

import { Service } from "@/components/Sections/Services/Service"
import { Construction, CookingIcon, Electrical, Electronic, EnergyIcon, EquipmentsIcon, ItIcon, OfficeIcon, Plumbing, SafetyIcon, WaterEquiIcon } from "@/components/Svgs"
import React from "react"

export const Services = () => {
  return (
    <section className="container">
      <div className="flex items-center justify-center mt-16 w-full">
        <div className="w-3/4 mx-auto ">
          <p className="text-[#111B47] font-bold text-[48px] text-center">
            Our Services
          </p>
          <p className="text-[#505F98] text-center text-[18px] mt-[15px]">
          We provide a wide array of engineering equipment to meet the diverse needs of your projects. 
          Our products are carefully selected to ensure quality, durability, and efficiency, 
          empowering your business to excel in even the most demanding environments.
          </p>
        </div>
      </div>
      <div className=" w-full flex flex-wrap text-[#111B47] mt-[30px] justify-center gap-y-12 md:gap-x-4">
        <Service
          icon={<Construction />}
          title="Supply of Construction Materials"
          description="Products include cement, bricks, steel, roofing materials, aggregates, and timber etc."
        />
        <Service
          icon={<Plumbing />}
          title="Supply of Plumbing Materials"
          description="fittings, valves, pumps, and fixtures for residential and commercial plumbing systems. Solutions for water conservation and efficient plumbing designs."
        />
        <Service
          icon={<Electrical />}
          title="Supply of Electrical Materials"
          description="Wiring, cables, circuit breakers, switchboards, and transformers. Solutions for lighting, power distribution, and renewable energy integration."
        />
        <Service
          icon={<Electronic />}
          title="Supply of Electronic Materials"
          description="Resistors, capacitors, semiconductors, connectors, Equipment for telecommunications, computing, and industrial electronics."
        />
        <Service
          icon={<CookingIcon />}
          title="Supply of Various Cooking Stoves"
          description="Gas, electric, and solid fuel stoves suitable for household and industrial use."
        />
        <Service
          icon={<EquipmentsIcon />}
          title="Supply of TVET School, Tools, Equipment"
          description="Vocational training tools and machines for various trades. Educational kits and consumables for technical training programs."
         />
         <Service
          icon={<ItIcon />}
          title="Supply of IT Equipment"
          description="Computers, servers, networking devices, and peripherals. Solutions for data management, cybersecurity, and cloud integration."
         />
         <Service
          icon={<OfficeIcon />}
          title="Supply of Office and Stationery Products"
          description="Office furniture, printing supplies, paper products, and organizational tools. Custom solutions for workspace efficiency and branding."
         />
         <Service
          icon={<SafetyIcon />}
          title="Supply of Personal Protective Equipment"
          description="Protective clothing, helmets, gloves, and eyewear for workplace safety. Solutions for hazard prevention in various industries."
         />
         <Service
          icon={<EnergyIcon />}
          title="Supply of Renewable Energy Solutions"
          description="Solar panels, wind turbines, and energy storage systems. Consultancy and installation services for sustainable energy projects."
         />
         <Service
          icon={<WaterEquiIcon />}
          title="Supply of Water and Sanitation Equipment"
          description="Water treatment systems, filtration units, and sanitation facilities. Solutions for clean water access and waste management."
         />
      </div>
    </section>
  )
}
