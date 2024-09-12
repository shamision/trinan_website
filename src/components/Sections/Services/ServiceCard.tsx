import Link from 'next/link';
import Image from 'next/image';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white shadow-md rounded-xl flex flex-col justify-between overflow-hidden p-4 hover:shadow-lg transition-shadow">
      <Image src={service.serviceImages[0]} alt={service.title} width={300} height={300} objectFit="cover" // Ensures image fills the space while preserving aspect ratio
  objectPosition="center" // Centers the image
  />
      <h3 className="text-xl font-semibold text-[#111B47] text-center mb-2">{service.title}</h3>
      <p className="text-gray-600 text-center w-3/4 mx-auto mb-4">{service.summary}</p>
      <div className="text-center">
        <Link href={`/services/${service.id}`} className="inline-block bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors">
            Read more →
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
