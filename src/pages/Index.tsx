import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/home/HeroSlider";
import TrustBanner from "@/components/home/TrustBanner";
import StatsSection from "@/components/home/StatsSection";
import AboutBlurb from "@/components/home/AboutBlurb";
import ServicesGrid from "@/components/home/ServicesGrid";
import IndustriesGrid from "@/components/home/IndustriesGrid";
import ValueProps from "@/components/home/ValueProps";
import CandidateForm from "@/components/home/CandidateForm";
import EmployerZoneCTA from "@/components/home/EmployerZoneCTA";
const Index = () => {
  return <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <HeroSlider />
        <TrustBanner />
        
        <AboutBlurb />
        <ServicesGrid />
        <IndustriesGrid />
        <ValueProps />
        <CandidateForm />
        <EmployerZoneCTA />
      </main>
      <Footer />
    </div>;
};
export default Index;