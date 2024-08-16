import { NavBar } from "@/components/NavBar/NavBar"
import { AboutUs } from "@/components/Sections/About Us/AboutUs"
import { Contact } from "@/components/Sections/Contact/Contact"
import { Customers } from "@/components/Sections/Customers/Customers"
import Testimonials from "@/components/Sections/Customers/Testimonials"
import { Footer } from "@/components/Sections/Footer/Footer"
import { HeroSection } from "@/components/Sections/HeroSection/HeroSection"
import { Services } from "@/components/Sections/Services/Services"
import { Team } from "@/components/Sections/Team/Team"

export default function Home() {
  return (
    <div className="bg-white w-screen overflow-x-hidden">
      <NavBar />

      <div id="hero-section">
        <HeroSection />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about-us">
        <AboutUs />
      </div>
      <div id="customers">
        <Customers />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  )
}
