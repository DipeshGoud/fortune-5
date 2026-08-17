import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import TrophyGallery from "@/components/TrophyGallery";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Trophy Gallery | Fortune 5 Risk Management Solutions LLP",
  description:
    "Explore our complete archive of awards, honors, and trophy recognitions.",
};

export default function TrophyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F9F8F6] text-[#01327a] selection:bg-amber-100 selection:text-amber-900">
      <TopBar />
      <Navbar />

      {/* Clean Page Header */}
      <PageHeader
        title={
          <span>
            Trophy &amp; <span className="text-[#F5D77F]">Awards</span>
          </span>
        }
        subtitle="Complete photographic archive of trophies, honours, and recognitions."
        breadcrumb="Trophies"
      />

      {/* Main Image Gallery Container */}
      <section className="py-12 sm:py-16 bg-[#F9F8F6]">
        <div className="mx-auto w-full max-w-[1720px] 2xl:max-w-[94vw] 3xl:max-w-[92vw] 4xl:max-w-[2800px] px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-16 3xl:px-20">
          <TrophyGallery />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
