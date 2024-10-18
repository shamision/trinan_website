import { getTestimonialData } from '../../../app/actions/getTestimonialData'; // Server-side fetching function
import Testimonials from './Testimonials'; // Client-side component

export default async function TestimonialsContainer(session) {
  const testimonialsData = await getTestimonialData(); // Fetching testimonials on the server

  return (
    <div>
      {/* Pass the fetched testimonialsData to the client-side component */}
      <Testimonials testimonialsData={testimonialsData} session={session} />
    </div>
  );
}
