import { Toaster } from "@/components/ui/sonner";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { PackagesSection } from "./components/PackagesSection";
import { ServicesSection } from "./components/ServicesSection";

const BOOKING_URL =
  "https://book.usesession.com/i/iY8zINVKC?fbclid=PAT01DUAQ8rMtleHRuA2FlbQIxMABzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAaclPNfSL3sBfzGJ7boA2__NZOzh6KGFmx3CJEUY38saqGXbICZbjiUjXZQjuQ_aem_s0843tvES2JYGJwy4iYLrA";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster />
      <Navbar
        onScrollTo={scrollTo}
        mobileOpen={mobileMenuOpen}
        onMobileToggle={() => setMobileMenuOpen((v) => !v)}
        bookingUrl={BOOKING_URL}
      />
      <main>
        <HeroSection bookingUrl={BOOKING_URL} onScrollTo={scrollTo} />
        <ServicesSection bookingUrl={BOOKING_URL} />
        <PackagesSection bookingUrl={BOOKING_URL} />
        <ContactSection />
      </main>
      <Footer onScrollTo={scrollTo} />
    </div>
  );
}
