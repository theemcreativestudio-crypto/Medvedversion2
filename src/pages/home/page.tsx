import { useState } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import ContactModal from "@/components/feature/ContactModal";
import StickyPanel from "@/components/base/StickyPanel";
import Hero from "@/pages/home/components/Hero";
import StatsBand from "@/pages/home/components/StatsBand";
import QuickJump from "@/pages/home/components/QuickJump";
import PressMarquee from "@/pages/home/components/PressMarquee";
import FeaturedProperties from "@/pages/home/components/FeaturedProperties";
import AboutUs from "@/pages/home/components/AboutUs";
import BuySellSplit from "@/pages/home/components/BuySellSplit";
import Neighborhoods from "@/pages/home/components/Neighborhoods";
import Testimonials from "@/pages/home/components/Testimonials";
import Newsletter from "@/pages/home/components/Newsletter";
import WorkWithUs from "@/pages/home/components/WorkWithUs";
import InstagramFeed from "@/pages/home/components/InstagramFeed";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);

  return (
    <div className="min-h-screen bg-background-50 font-body">
      <Navbar onOpenContact={openContact} />

      <main>
        {/* Natural browsing flow */}
        <Hero />
        <StatsBand />
        <QuickJump />
        <PressMarquee />

        {/* Overlap moment 1 — the portfolio pins, About slides over it */}
        <div className="relative bg-foreground-950">
          <StickyPanel index={0} bgClass="bg-background-50">
            <FeaturedProperties />
          </StickyPanel>
          <div className="relative z-20 bg-background-50">
            <AboutUs onOpenContact={openContact} />
          </div>
        </div>

        {/* Overlap moment 2 — Buy/Sell pins, Neighborhoods slides over it */}
        <div className="relative bg-foreground-950">
          <StickyPanel index={1} bgClass="bg-background-50">
            <BuySellSplit />
          </StickyPanel>
          <div className="relative z-20 bg-background-50">
            <Neighborhoods />
          </div>
        </div>

        {/* Natural browsing flow */}
        <Testimonials />
        <Newsletter />

        {/* Overlap moment 3 — the closing CTA pins, Instagram slides over it */}
        <div className="relative bg-foreground-950">
          <StickyPanel index={2} bgClass="bg-foreground-950">
            <WorkWithUs onOpenContact={openContact} />
          </StickyPanel>
          <div className="relative z-20 bg-background-50">
            <InstagramFeed />
          </div>
        </div>
      </main>

      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}