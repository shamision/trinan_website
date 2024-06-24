import { NavBar } from "@/components/NavBar/NavBar";
import { AboutUs } from "@/components/Sections/About Us/AboutUs";
import { HeroSection } from "@/components/Sections/HeroSection/HeroSection";
import { Services } from "@/components/Sections/Services/Services"
import { Customers } from "@/components/Sections/Customers/Customers"
import { Team } from "@/components/Sections/Team/Team";


export default function Home() {
  return (
    <div  className="bg-white h-screen">
      
       <NavBar />
      
      
      <HeroSection />

      <Services />

      <AboutUs />

      <Customers />

      <Team />
    </div>
  );
}
