import { NavBar } from "@/components/NavBar/NavBar"
import { AboutUs } from "@/components/Sections/About Us/AboutUs"
import { Contact } from "@/components/Sections/Contact/Contact"
import { Customers } from "@/components/Sections/Customers/Customers"
import { Footer } from "@/components/Sections/Footer/Footer"
import { HeroSection } from "@/components/Sections/HeroSection/HeroSection"
import ServicePage from "@/components/Sections/Services/ServicePage"
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
      <div id="team">
        <Team />
      </div>
      <div id="contact">
        <Contact />
      </div>

      <Footer />
      {/* <ServicePage /> */}
    </div>
  )
}
