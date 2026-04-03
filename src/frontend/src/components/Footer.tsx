import { Globe, Instagram, Mail, Phone } from "lucide-react";

interface FooterProps {
  onScrollTo: (id: string) => void;
}

export function Footer({ onScrollTo }: FooterProps) {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? window.location.hostname
      : "homebasefilms.com";

  return (
    <footer
      className="pt-16 pb-8"
      style={{
        background: "oklch(var(--section-bg))",
        borderTop: "1px solid oklch(var(--border))",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Column 1: Logo + tagline */}
          <div className="flex flex-col items-start gap-4">
            <img
              src="/assets/homebase_photography-019d53bc-3022-7495-89ed-8fac3fad61e7.png"
              alt="Homebase Films"
              className="h-14 w-auto object-contain"
              onError={(e) => {
                const el = e.currentTarget;
                el.style.display = "none";
                const span = el.nextElementSibling as HTMLElement | null;
                if (span) span.style.display = "block";
              }}
            />
            <span
              className="hidden font-display text-lg font-bold tracking-widest"
              style={{ color: "oklch(var(--gold))", display: "none" }}
            >
              HOMEBASE FILMS
            </span>
            <p
              className="text-sm"
              style={{ color: "oklch(var(--muted-foreground))" }}
            >
              Luxury photography for life&apos;s milestones.
              <br />
              Every moment captured with purpose.
            </p>
            <a
              href="https://www.instagram.com/homebasefilms"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: "oklch(var(--gold))" }}
              aria-label="Follow on Instagram"
              data-ocid="footer.instagram.link"
            >
              <Instagram size={18} />
              @Homebasefilms
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              className="text-xs font-bold tracking-[0.25em] uppercase mb-5"
              style={{ color: "oklch(var(--gold))" }}
            >
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Services", id: "services" },
                { label: "Packages", id: "packages" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => onScrollTo(link.id)}
                    className="text-sm transition-colors focus:outline-none"
                    style={{ color: "oklch(var(--muted-foreground))" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "oklch(var(--foreground))";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color =
                        "oklch(var(--muted-foreground))";
                    }}
                    data-ocid={`footer.${link.id}.link`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4
              className="text-xs font-bold tracking-[0.25em] uppercase mb-5"
              style={{ color: "oklch(var(--gold))" }}
            >
              CONTACT
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:Homebasemg@gmail.com"
                  className="flex items-center gap-2 text-sm transition-colors"
                  style={{ color: "oklch(var(--muted-foreground))" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "oklch(var(--foreground))";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      "oklch(var(--muted-foreground))";
                  }}
                  data-ocid="footer.email.link"
                >
                  <Mail size={14} style={{ color: "oklch(var(--gold))" }} />
                  Homebasemg@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.homebasefilms.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors"
                  style={{ color: "oklch(var(--muted-foreground))" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "oklch(var(--foreground))";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      "oklch(var(--muted-foreground))";
                  }}
                  data-ocid="footer.website.link"
                >
                  <Globe size={14} style={{ color: "oklch(var(--gold))" }} />
                  www.homebasefilms.com
                </a>
              </li>
              <li>
                <a
                  href="tel:9196857780"
                  className="flex items-center gap-2 text-sm transition-colors"
                  style={{ color: "oklch(var(--muted-foreground))" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "oklch(var(--foreground))";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      "oklch(var(--muted-foreground))";
                  }}
                  data-ocid="footer.phone.link"
                >
                  <Phone size={14} style={{ color: "oklch(var(--gold))" }} />
                  (919) 685-7780
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{
            borderTop: "1px solid oklch(var(--border))",
            color: "oklch(var(--muted-foreground))",
          }}
        >
          <p>&copy; {year} Homebase Films. All rights reserved.</p>
          <p>
            Built with ❤ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
