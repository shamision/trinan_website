import React from 'react';

export const Customers: React.FC = () => {
  const customerLogos = [
    { src: "/Norsken.png", alt: "norsken logo" },
    { src: "/images (1).png", alt: "world vision logo" },
    { src: "/RwandAir-Logo.wine.png", alt: "Logo RwandAir" },
    { src: "/logo-bpn.png", alt: "BPN logo" },
    { src: "/images.png", alt: "red cross logo" },
  ]
  const duplicates =[{name: "firstDiv" },
  {name: "secondDiv"}
]
  return (
    <div className='container my-20'>
      <div className="w-8/12 mx-auto">
        <p className="text-[#111B47] font-bold text-[48px] text-center">
          Trusted by many
        </p>
        <p className="text-[#505F98] text-center text-[18px] pb-16 pt-8">
          Our mission is to help your business grow, especially financially.
          You can consult anytime
        </p>
      </div>
      <div className="logos overflow-hidden">
      {duplicates.map((mydiv)=>(
        <div key={mydiv.name} className='logos-slide flex'>
          {customerLogos.map((sponsor, index) => (
            <img src={sponsor.src} alt={sponsor.alt} key={index} 
              className='h-16 w-72 px-[30px]'
            />
          ))}
        </div>
      ))}
    </div>
    </div>
  );
};

