import { MotionConfig } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProfileSection from "@/components/ProfileSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Preloader from "@/components/motion/Preloader";
import Cursor from "@/components/motion/Cursor";
import ScrollProgress from "@/components/motion/ScrollProgress";
import VelocityMarquee from "@/components/motion/VelocityMarquee";

const stack = ["React", "Laravel", "Node.js", "PostgreSQL", "MongoDB", "TailwindCSS", "Puppeteer", "Docker", "Vercel", "Render"];

const Index = () => (
  // reducedMotion="user" : respecte le réglage « réduire les animations » du système
  <MotionConfig reducedMotion="user">
    <Preloader />
    <Cursor />
    <ScrollProgress />
    <Navbar />
    <main>
      <HeroSection />
      <div className="overflow-hidden py-6">
      <div className="-rotate-2 border-y border-border bg-primary py-5 text-primary-foreground" aria-label="Technologies utilisées">
        <VelocityMarquee baseVelocity={-2}>
          {stack.map((t) => (
            <span key={t} className="flex items-center gap-8 pr-8 font-heading text-3xl font-bold uppercase tracking-tight md:text-5xl">
              {t}
              <span aria-hidden="true" className="h-3 w-3 rounded-full bg-secondary md:h-4 md:w-4" />
            </span>
          ))}
        </VelocityMarquee>
      </div>
      </div>
      <ProfileSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <Footer />
  </MotionConfig>
);

export default Index;
