import ServicePage from "@/components/Sections/Services/ServicePage";
import { servicesData } from '@/components/Sections/Services/ServiceData';

export async function generateStaticParams() {
  return servicesData.map(service => ({
    serviceId: service.id,
  }));
}

export async function generateMetadata({ params }) {
  const service = servicesData.find(s => s.id === params.serviceId);
  if (!service) {
    return { notFound: true };
  }

  return {
    title: service.title,
  };
}

export default function Service({ params }) {
  const service = servicesData.find(s => s.id === params.serviceId);

  if (!service) {
    return <p>Service not found</p>;
  }

  return <ServicePage service={service} />;
}
