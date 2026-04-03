import { motion } from "motion/react";

interface HeroSectionProps {
  bookingUrl: string;
  onScrollTo: (id: string) => void;
}

export function HeroSection({ bookingUrl, onScrollTo }: HeroSectionProps) {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{
        background: "oklch(var(--background))",
      }}
      aria-label="Hero"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-studio.dim_1600x900.jpg')",
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.15 0.002 286 / 0.75) 0%, oklch(0.12 0.002 286 / 0.85) 60%, oklch(0.15 0.002 286 / 0.97) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p
            className="text-sm font-semibold tracking-[0.35em] uppercase mb-4"
            style={{ color: "oklch(var(--gold))" }}
          >
            WELCOME TO
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-wide mb-6 uppercase">
            HOMEBASE
            <br />
            <span style={{ color: "oklch(var(--gold))" }}>FILMS</span>
          </h1>
          <p
            className="text-sm md:text-base font-sans tracking-[0.2em] uppercase mb-10"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            LUXURY PHOTOGRAPHY FOR LIFE&apos;S MILESTONES
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-4 text-sm font-bold tracking-[0.2em] uppercase rounded transition-all duration-200 hover:brightness-110"
              style={{
                backgroundColor: "oklch(var(--gold))",
                color: "oklch(var(--primary-foreground))",
              }}
              data-ocid="hero.book_session.button"
            >
              BOOK YOUR SESSION
            </a>
            <button
              type="button"
              onClick={() => onScrollTo("services")}
              className="inline-flex items-center px-10 py-4 text-sm font-bold tracking-[0.2em] uppercase rounded transition-all duration-200"
              style={{
                border: "1px solid oklch(var(--gold) / 0.6)",
                color: "oklch(var(--gold))",
                background: "transparent",
              }}
              data-ocid="hero.view_services.button"
            >
              VIEW SERVICES
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, oklch(var(--background)) 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
