import ServicePage from "../../../components/Sections/Services/ServicePage";
import { getServiceData } from "../../../app/actions/getServiceData";

const ServiceDetails = async ({ params }) => {
  const { id } = params;

  // Fetch the service data using an absolute URL
  
  const service = await getServiceData(id)
 
  if (!service) {
    // Handle the error appropriately
    return <div>Loading...</div>;
  }

  return (
    <ServicePage service={service} />
  );
};

export default ServiceDetails;
