import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface ServicesSectionProps {
  bookingUrl: string;
}

const categories = [
  {
    id: "portraits",
    name: "PORTRAITS",
    image: "/assets/generated/category-portraits.dim_600x600.jpg",
  },
  {
    id: "birthday",
    name: "BIRTHDAY",
    image: "/assets/generated/category-birthday.dim_600x600.jpg",
  },
  {
    id: "couples-family",
    name: "COUPLES / FAMILY",
    image: "/assets/generated/category-couples-family.dim_600x600.jpg",
  },
  {
    id: "professional",
    name: "PROFESSIONAL",
    image: "/assets/generated/category-professional.dim_600x600.jpg",
  },
  {
    id: "graduation",
    name: "GRADUATION",
    image: "/assets/generated/category-graduation.dim_600x600.jpg",
  },
  {
    id: "milestones",
    name: "MILESTONES",
    image: "/assets/generated/category-milestones.dim_600x600.jpg",
  },
];

const mothersDayDetails = [
  "30 minutes session",
  "Includes up to 5 people",
  "1 outfit change",
  "5 final retouched images via online gallery",
  "Option to purchase additional retouched images — $15/photo",
  "Option to purchase all unedited images (color corrected)",
];

export function ServicesSection({ bookingUrl }: ServicesSectionProps) {
  const [mothersDayExpanded, setMothersDayExpanded] = useState(false);

  return (
    <section
      id="services"
      className="py-20 md:py-28"
      style={{ background: "oklch(var(--background))" }}
      aria-labelledby="services-title"
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
            WHAT WE OFFER
          </p>
          <h2
            id="services-title"
            className="font-display text-4xl md:text-5xl font-bold text-foreground uppercase tracking-wide"
          >
            SELECT YOUR SESSION
          </h2>
          <div
            className="mt-5 mx-auto w-20 h-0.5"
            style={{ background: "oklch(var(--gold))" }}
          />
        </motion.div>

        {/* Mother's Day Special Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div
            className="relative overflow-hidden rounded-xl"
            style={{
              border: "2px solid oklch(var(--gold))",
              background: "oklch(var(--card-bg))",
              boxShadow: "0 0 40px oklch(var(--gold) / 0.15)",
            }}
            data-ocid="services.mothers_day.card"
          >
            <div className="md:flex">
              <div className="md:w-1/3 relative">
                <img
                  src="/assets/generated/category-mothers-day.dim_600x600.jpg"
                  alt="Mother's Day Special"
                  className="w-full h-56 md:h-full object-cover"
                />
                <div
                  className="absolute inset-0 md:hidden"
                  style={{
                    background:
                      "linear-gradient(to top, oklch(var(--card-bg)) 0%, transparent 60%)",
                  }}
                />
              </div>

              <div className="flex-1 p-8 md:p-10">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <span
                      className="inline-block text-xs font-bold tracking-[0.25em] uppercase px-3 py-1 rounded mb-3"
                      style={{
                        background: "oklch(var(--gold) / 0.15)",
                        color: "oklch(var(--gold))",
                        border: "1px solid oklch(var(--gold) / 0.3)",
                      }}
                    >
                      SPECIAL OFFER
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wide">
                      Mother&apos;s Day Special
                    </h3>
                    <p
                      className="mt-1 text-sm"
                      style={{ color: "oklch(var(--muted-foreground))" }}
                    >
                      Mother&apos;s Day Minis — celebrate the ones who matter
                      most
                    </p>
                  </div>
                  <div className="text-right">
                    <span
                      className="font-display text-4xl font-bold"
                      style={{ color: "oklch(var(--gold))" }}
                    >
                      $250
                    </span>
                    <p
                      className="text-xs"
                      style={{ color: "oklch(var(--muted-foreground))" }}
                    >
                      starting at
                    </p>
                  </div>
                </div>

                {/* Accordion toggle */}
                <button
                  type="button"
                  onClick={() => setMothersDayExpanded((v) => !v)}
                  className="mt-6 flex items-center gap-2 text-sm font-semibold tracking-widest uppercase transition-colors focus:outline-none"
                  style={{ color: "oklch(var(--gold))" }}
                  aria-expanded={mothersDayExpanded}
                  data-ocid="services.mothers_day.toggle"
                >
                  {mothersDayExpanded ? (
                    <>
                      HIDE DETAILS <ChevronUp size={16} />
                    </>
                  ) : (
                    <>
                      VIEW PACKAGE DETAILS <ChevronDown size={16} />
                    </>
                  )}
                </button>

                {/* Accordion content */}
                {mothersDayExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-5"
                    data-ocid="services.mothers_day.panel"
                  >
                    <ul className="space-y-2 mb-6">
                      {mothersDayDetails.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2 text-sm"
                        >
                          <span style={{ color: "oklch(var(--gold))" }}>✦</span>
                          <span
                            style={{ color: "oklch(var(--muted-foreground))" }}
                          >
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-3 text-sm font-bold tracking-widest uppercase rounded transition-all hover:brightness-110"
                      style={{
                        backgroundColor: "oklch(var(--gold))",
                        color: "oklch(var(--primary-foreground))",
                      }}
                      data-ocid="services.mothers_day.book_button"
                    >
                      BOOK THIS SESSION
                    </a>
                  </motion.div>
                )}

                {!mothersDayExpanded && (
                  <div className="mt-6">
                    <a
                      href={bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-3 text-sm font-bold tracking-widest uppercase rounded transition-all hover:brightness-110"
                      style={{
                        backgroundColor: "oklch(var(--gold))",
                        color: "oklch(var(--primary-foreground))",
                      }}
                      data-ocid="services.mothers_day.select_button"
                    >
                      SELECT
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="hb-card group cursor-pointer"
              data-ocid={`services.category.item.${index + 1}`}
            >
              {/* Card Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{ background: "oklch(var(--gold) / 0.1)" }}
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col items-center gap-4">
                <h3 className="font-display text-base font-bold text-foreground tracking-[0.2em] uppercase text-center">
                  {cat.name}
                </h3>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center px-6 py-2.5 text-xs font-bold tracking-[0.2em] uppercase rounded transition-all duration-200"
                  style={{
                    border: "1px solid oklch(var(--gold))",
                    color: "oklch(var(--gold))",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "oklch(var(--gold))";
                    e.currentTarget.style.color =
                      "oklch(var(--primary-foreground))";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "oklch(var(--gold))";
                  }}
                  data-ocid={`services.category.select_button.${index + 1}`}
                >
                  SELECT
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
