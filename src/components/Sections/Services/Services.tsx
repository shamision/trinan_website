import ServiceCard from './ServiceCard';
import { getServicesData } from '../../../app/actions/getServicesData';
import AddServiceCard from './addServiceCard';

const Services = async ({ session }) => {
  const servicesData = await getServicesData();

  if (servicesData.length === 0) {
    return (
      <div className="text-center">
        <p className="text-2xl font-bold text-[#111B47]">
          No services found. Please add some services by clicking the &quot;Add a service?&quot; button.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {servicesData.map(service => (
        <ServiceCard key={service.id} service={service} session={session} />
      ))}
      {session?.session && <AddServiceCard />}
    </div>
  );
};

export default Services;
