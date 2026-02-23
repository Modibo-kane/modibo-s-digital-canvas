import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProfileSection from "@/components/ProfileSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <ProfileSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
