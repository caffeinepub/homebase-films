import { Check } from "lucide-react";
import { motion } from "motion/react";

interface PackagesSectionProps {
  bookingUrl: string;
}

interface Package {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  duration: string;
  features: string[];
  featured?: boolean;
}

const individualPackages: Package[] = [
  {
    id: "mothers-day",
    name: "MOTHER'S DAY MINIS",
    price: "$250",
    duration: "30 minutes",
    features: [
      "Includes up to 5 people",
      "1 outfit change",
      "5 final retouched images via online gallery",
      "Option to purchase additional retouched images — $15/photo",
      "Option to purchase all unedited images (color corrected)",
    ],
  },
  {
    id: "silver",
    name: "HB SILVER",
    price: "$325",
    duration: "1 hour",
    features: [
      "1-2 outfit changes",
      "10 final retouched images via online gallery",
      "Cyc wall included",
      "1-2 backdrops (color of your choice)",
      "Additional Editing — $15/photo",
    ],
  },
  {
    id: "gold",
    name: "HB GOLD",
    price: "$425",
    duration: "1 hour 30 mins",
    featured: true,
    features: [
      "Up to 3 outfit changes",
      "15 final retouched images via online gallery",
      "Cyc wall included",
      "Up to 3 backdrops (color of your choice)",
      "Additional Editing — $15/photo",
    ],
  },
  {
    id: "platinum",
    name: "HB PLATINUM",
    price: "$500",
    duration: "2 hours",
    features: [
      "Unlimited outfit changes",
      "25 final retouched images via online gallery",
      "Cyc wall included",
      "Up to 3 backdrops (color of your choice)",
      "Additional Editing — $15/photo",
    ],
  },
];

const groupPackages: Package[] = [
  {
    id: "group-silver",
    name: "HB GROUP SILVER",
    price: "$400",
    duration: "1 hour",
    features: [
      "1-2 outfit changes",
      "15 final retouched images via online gallery",
      "Cyc wall included",
      "1-2 backdrops (color of your choice)",
      "Additional Editing — $15/photo",
    ],
  },
  {
    id: "group-gold",
    name: "HB GROUP GOLD",
    price: "$500",
    duration: "2 hours",
    featured: true,
    features: [
      "Up to 3 outfit changes",
      "25 final retouched images via online gallery",
      "Cyc wall included",
      "3 backdrops (color of your choice)",
      "Additional Editing — $15/photo",
    ],
  },
];

const eventPackages: Package[] = [
  {
    id: "event-basic",
    name: "EVENT ESSENTIAL",
    price: "$150/hr",
    priceNote: "2 hour minimum",
    duration: "2 hours",
    features: [
      "Up to 2 hours of coverage",
      "50 final retouched images via online gallery",
      "Online delivery within 7 business days",
      "Personal print release included",
    ],
  },
  {
    id: "event-standard",
    name: "EVENT STANDARD",
    price: "$150/hr",
    priceNote: "4 hour coverage",
    duration: "4 hours",
    featured: true,
    features: [
      "Up to 4 hours of coverage",
      "100 final retouched images via online gallery",
      "Online delivery within 7 business days",
      "Personal print release included",
      "Dedicated second shooter available",
    ],
  },
  {
    id: "event-premium",
    name: "EVENT PREMIUM",
    price: "$150/hr",
    priceNote: "6 hour coverage",
    duration: "6 hours",
    features: [
      "Up to 6 hours of coverage",
      "200 final retouched images via online gallery",
      "Online delivery within 5 business days",
      "Personal print release included",
      "Dedicated second shooter available",
      "Same-day highlight reel (select events)",
    ],
  },
];

function PackageCard({
  pkg,
  bookingUrl,
  delay = 0,
}: { pkg: Package; bookingUrl: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className="relative flex flex-col"
      style={{
        background: "oklch(var(--card-bg))",
        border: pkg.featured
          ? "2px solid oklch(var(--gold))"
          : "1px solid oklch(var(--border))",
        borderRadius: "12px",
        boxShadow: pkg.featured ? "0 0 40px oklch(var(--gold) / 0.2)" : "none",
      }}
      data-ocid={`packages.${pkg.id}.card`}
    >
      {pkg.featured && (
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold tracking-widest uppercase rounded-full"
          style={{
            background: "oklch(var(--gold))",
            color: "oklch(var(--primary-foreground))",
          }}
        >
          MOST POPULAR
        </div>
      )}

      <div className="p-7 flex flex-col flex-1">
        {/* Package name */}
        <h3
          className="font-display text-base font-bold tracking-[0.18em] uppercase mb-1"
          style={{
            color: pkg.featured
              ? "oklch(var(--gold))"
              : "oklch(var(--foreground))",
          }}
        >
          {pkg.name}
        </h3>

        {/* Duration */}
        <p
          className="text-xs tracking-widest uppercase mb-5"
          style={{ color: "oklch(var(--muted-foreground))" }}
        >
          {pkg.duration}
        </p>

        {/* Price */}
        <div className="mb-1">
          <span
            className="font-display text-4xl font-bold"
            style={{ color: "oklch(var(--gold))" }}
          >
            {pkg.price}
          </span>
        </div>
        {pkg.priceNote && (
          <p
            className="text-xs mb-5"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            {pkg.priceNote}
          </p>
        )}
        {!pkg.priceNote && <div className="mb-5" />}

        {/* Divider */}
        <div
          className="mb-6 h-px w-full"
          style={{ background: "oklch(var(--border))" }}
        />

        {/* Features */}
        <ul className="space-y-3 flex-1 mb-8">
          {pkg.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm">
              <Check
                size={14}
                className="mt-0.5 shrink-0"
                style={{ color: "oklch(var(--gold))" }}
              />
              <span style={{ color: "oklch(var(--muted-foreground))" }}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center px-6 py-3 text-xs font-bold tracking-[0.2em] uppercase rounded transition-all duration-200 hover:brightness-110"
          style={{
            backgroundColor: pkg.featured
              ? "oklch(var(--gold))"
              : "transparent",
            color: pkg.featured
              ? "oklch(var(--primary-foreground))"
              : "oklch(var(--gold))",
            border: pkg.featured ? "none" : "1px solid oklch(var(--gold))",
          }}
          onMouseEnter={(e) => {
            if (!pkg.featured) {
              e.currentTarget.style.backgroundColor = "oklch(var(--gold))";
              e.currentTarget.style.color = "oklch(var(--primary-foreground))";
            }
          }}
          onMouseLeave={(e) => {
            if (!pkg.featured) {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "oklch(var(--gold))";
            }
          }}
          data-ocid={`packages.${pkg.id}.book_button`}
        >
          BOOK THIS PACKAGE
        </a>
      </div>
    </motion.div>
  );
}

export function PackagesSection({ bookingUrl }: PackagesSectionProps) {
  return (
    <section
      id="packages"
      className="py-20 md:py-28"
      style={{ background: "oklch(var(--section-bg))" }}
      aria-labelledby="packages-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-semibold tracking-[0.35em] uppercase mb-3"
            style={{ color: "oklch(var(--gold))" }}
          >
            PRICING
          </p>
          <h2
            id="packages-title"
            className="font-display text-4xl md:text-5xl font-bold text-foreground uppercase tracking-wide"
          >
            STUDIO PACKAGES
          </h2>
          <div
            className="mt-5 mx-auto w-20 h-0.5"
            style={{ background: "oklch(var(--gold))" }}
          />
          <p
            className="mt-6 text-sm max-w-xl mx-auto"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            Choose the package that fits your vision. Every session is crafted
            to tell your unique story.
          </p>
        </motion.div>

        {/* Individual Packages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
          {individualPackages.map((pkg, i) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              bookingUrl={bookingUrl}
              delay={i * 0.08}
            />
          ))}
        </div>

        {/* Group Packages Subsection */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wide">
            GROUP STUDIO PACKAGES
          </h3>
          <div
            className="mt-4 mx-auto w-14 h-0.5"
            style={{ background: "oklch(var(--gold) / 0.6)" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto gap-6 mb-24">
          {groupPackages.map((pkg, i) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              bookingUrl={bookingUrl}
              delay={i * 0.1}
            />
          ))}
        </div>

        {/* Event Photography Subsection */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wide">
            EVENT PHOTOGRAPHY
          </h3>
          <div
            className="mt-4 mx-auto w-14 h-0.5"
            style={{ background: "oklch(var(--gold) / 0.6)" }}
          />
          <p
            className="mt-4 text-sm"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            $150/hour &mdash; 2 hour minimum
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 max-w-5xl mx-auto gap-6">
          {eventPackages.map((pkg, i) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              bookingUrl={bookingUrl}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
