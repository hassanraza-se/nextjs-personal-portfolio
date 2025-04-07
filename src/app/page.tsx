import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServiceSection from "@/components/ServiceSection";
import PortfolioSection from "@/components/PortfolioSection";
import ResumeSection from "@/components/ResumeSection";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import {getEntries, Project, Setting} from "@/lib/contentful-helpers";

interface PageProps {
    projects: Project[];
}

export default async function Home() {

    const projects = await getEntries<Project>('projects');
    const settings = await getEntries<Setting>('settings');

    return (
        <>
            <HeroSection />
            <AboutSection />
            <ServiceSection/>
            <PortfolioSection projects={projects} />
            <ResumeSection />
            <ContactSection />
            <Footer />
        </>
    );
}
