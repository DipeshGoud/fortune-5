import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import CustomizedRiskSolutions from "@/components/CustomizedRiskSolutions";
import AboutFortune5 from "@/components/AboutFortune5";
import Legacy75Section from "@/components/Legacy75Section";
import HowWeWork from "@/components/HowWeWork";
import TrustProofSection from "@/components/TrustProofSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F8F6] text-slate-900 flex flex-col selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden">
      {/* Top Info & Marquee Bar */}
      <TopBar />

      {/* Navigation Header */}
      <div className="relative z-40">
        <Navbar />
      </div>

      {/* Section 1: Hero Section */}
      <Hero />

      {/* Stats Bar Component floating between Section 1 and Section 2 */}
      <StatsBar />

      {/* Section 2: About Fortune 5 (A Legacy of Trust) */}
      <AboutFortune5 />

      {/* Section 3: Customised Risk Solutions */}
      <CustomizedRiskSolutions />

      {/* Section 4: 75 Years of Trust & Protection */}
      <Legacy75Section />

      {/* Section 5: How We Work */}
      <HowWeWork />

      {/* Section 6: Partners, Awards & Recognition, Our Clients */}
      <TrustProofSection />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
