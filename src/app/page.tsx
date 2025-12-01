import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <section id="home" className="min-h-screen snap-start">
        <HeroSection />
      </section>

      <section id="about" className="min-h-screen snap-start">
        <AboutSection />
      </section>

      <section id="experience" className="min-h-screen snap-start">
        <WorkExperienceSection />
      </section>

      <section id="contact" className="min-h-screen snap-start">
        <ContactForm />
      </section>  
    </main>
  );
}
