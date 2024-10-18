import { AboutUs } from "../components/Sections/About Us/AboutUs"
import { Contact } from "../components/Sections/Contact/Contact"
import { Customers } from "../components/Sections/Customers/Customers"
import { HeroSection } from "../components/Sections/HeroSection/HeroSection"
import TeamMembersContainer from "../components/Sections/Team/TeamMembersContainer"
import Services from "../components/Sections/Services/Services"
import { getServerSession } from "next-auth/next"
import { options } from "./api/auth/[...nextauth]/options"
import TestimonialsContainer from "../components/Sections/Customers/TestimonialsContainer"


export default async function Home() {
  const session = await getServerSession(options);
  return (
    <div className="bg-white">
      <div id="hero-section">
        <HeroSection />
      </div>
      <div className="bg-neutral-100">
        <div className="container mx-auto py-28">
          <div className="w-3/4 mx-auto pb-16">
            <p className="text-[#111B47] font-bold text-[48px] text-center">Our Services</p>
            <p className="text-[#505F98] text-center text-[18px] mt-[15px]">
              We provide a wide array of engineering equipment to meet the diverse needs of your projects. 
              Our products are carefully selected to ensure quality, durability, and efficiency, empowering 
              your business to excel in even the most demanding environments.
            </p>
          </div>
          <Services session={session} />
        </div>

    
      </div>
      <div id="about-us">
        <AboutUs />
      </div>
      <div id="customers">
        <Customers />
      </div>
      <div id="testimonials">
        <TestimonialsContainer session={session} />
      </div>
      <div id="team">
        <TeamMembersContainer session={session}/>
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  )
}
