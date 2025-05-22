import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialSidebar from "@/components/SocialSidebar";

export default function Home() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <div className="max-w-4xl mx-auto px-6 py-10">
        <HeroSection />
      </div>
    </>
  );
}
