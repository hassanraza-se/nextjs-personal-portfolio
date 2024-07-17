import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServiceSection from "@/components/ServiceSection";
import PortfolioSection from "@/components/PortfolioSection";
import ResumeSection from "@/components/ResumeSection";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export default function Home() {
    return (
        <>
            <HeroSection/>
            <AboutSection/>
            <ServiceSection/>
            <PortfolioSection/>
            <ResumeSection />
            <ContactSection />
            <Footer />
        </>
    );
}
