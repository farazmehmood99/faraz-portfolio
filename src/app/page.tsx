import Hero, { ProfileSidebar } from '@/components/Hero';
import StatsBento from '@/components/StatsBento';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import About from '@/components/About';
import SkillsGrid from '@/components/SkillsGrid';
import Workflow from '@/components/Workflow';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="portfolio-layout">
      {/* Sticky Left Profile Sidebar (1:1 tatheer.dev style) */}
      <ProfileSidebar />

      {/* Main Right Stream */}
      <div className="main-stream">
        <Hero />
        <StatsBento />
        <Projects />
        <Services />
        <About />
        <SkillsGrid />
        <Workflow />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
