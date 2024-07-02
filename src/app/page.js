import { NavBar } from "@/components/NavBar/NavBar"
import { AboutUs } from "@/components/Sections/About Us/AboutUs"
import { Contact } from "@/components/Sections/Contact/Contact"
import { Customers } from "@/components/Sections/Customers/Customers"
import { Footer } from "@/components/Sections/Footer/Footer"
import { HeroSection } from "@/components/Sections/HeroSection/HeroSection"
import { Services } from "@/components/Sections/Services/Services"
import { Team } from "@/components/Sections/Team/Team"

export default function Home() {
  return (
    <div className="bg-white h-screen w-screen">
      <NavBar />

      <HeroSection />

      <Services />

      <AboutUs />

      <Customers />

      <Team />

      <Contact />

      <Footer />
    </div>
  )
}
