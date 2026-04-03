import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

interface NavbarProps {
  onScrollTo: (id: string) => void;
  mobileOpen: boolean;
  onMobileToggle: () => void;
  bookingUrl: string;
}

const navLinks = [
  { label: "SERVICES", id: "services" },
  { label: "PACKAGES", id: "packages" },
  { label: "CONTACT", id: "contact" },
];

export function Navbar({
  onScrollTo,
  mobileOpen,
  onMobileToggle,
  bookingUrl,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg"
            : "bg-background/80 backdrop-blur-sm"
        }`}
        style={{
          borderBottom: scrolled ? "1px solid oklch(var(--border))" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 focus:outline-none"
              aria-label="Go to top"
            >
              <img
                src="/assets/homebase_photography-019d53bc-3022-7495-89ed-8fac3fad61e7.png"
                alt="Homebase Films"
                className="h-10 md:h-12 w-auto object-contain"
                onError={(e) => {
                  const el = e.currentTarget;
                  el.style.display = "none";
                  const span = el.nextElementSibling as HTMLElement | null;
                  if (span) span.style.display = "block";
                }}
              />
              <span
                className="hidden font-display text-lg font-bold tracking-widest gold-text"
                style={{ display: "none" }}
              >
                HOMEBASE FILMS
              </span>
            </button>

            {/* Desktop Nav */}
            <nav
              className="hidden md:flex items-center gap-8"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.id}
                  onClick={() => onScrollTo(link.id)}
                  className="nav-link hover:gold-text focus:outline-none"
                  data-ocid={`nav.${link.id}.link`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2 text-sm font-semibold tracking-widest uppercase rounded transition-all duration-200 hover:brightness-110 focus:outline-none"
                style={{
                  backgroundColor: "oklch(var(--gold))",
                  color: "oklch(var(--primary-foreground))",
                }}
                data-ocid="nav.book_now.button"
              >
                BOOK NOW
              </a>
            </nav>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="md:hidden p-2 rounded focus:outline-none gold-text"
              onClick={onMobileToggle}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              data-ocid="nav.mobile_menu.toggle"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 section-bg border-b gold-border py-6 md:hidden"
          >
            <nav
              className="flex flex-col items-center gap-6"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.id}
                  onClick={() => onScrollTo(link.id)}
                  className="text-sm font-semibold tracking-widest uppercase gold-text focus:outline-none"
                  data-ocid={`nav.mobile.${link.id}.link`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 text-sm font-semibold tracking-widest uppercase rounded"
                style={{
                  backgroundColor: "oklch(var(--gold))",
                  color: "oklch(var(--primary-foreground))",
                }}
                data-ocid="nav.mobile.book_now.button"
              >
                BOOK NOW
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
