import { CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

export function ContactSection() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!actor) {
      toast.error("Not connected. Please try again.");
      return;
    }
    setSubmitting(true);
    try {
      await actor.submitContactForm(name.trim(), email.trim(), message.trim());
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message sent! We'll be in touch soon.");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28"
      style={{ background: "oklch(var(--background))" }}
      aria-labelledby="contact-title"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            className="text-xs font-semibold tracking-[0.35em] uppercase mb-3"
            style={{ color: "oklch(var(--gold))" }}
          >
            GET IN TOUCH
          </p>
          <h2
            id="contact-title"
            className="font-display text-4xl md:text-5xl font-bold text-foreground uppercase tracking-wide"
          >
            LET&apos;S CONNECT
          </h2>
          <div
            className="mt-5 mx-auto w-20 h-0.5"
            style={{ background: "oklch(var(--gold))" }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center text-center py-16 rounded-xl"
                style={{
                  background: "oklch(var(--card-bg))",
                  border: "1px solid oklch(var(--gold) / 0.3)",
                }}
                data-ocid="contact.form.success_state"
              >
                <CheckCircle2
                  size={48}
                  style={{ color: "oklch(var(--gold))" }}
                  className="mb-4"
                />
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-foreground mb-2">
                  MESSAGE SENT!
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "oklch(var(--muted-foreground))" }}
                >
                  Thank you for reaching out. We&apos;ll be in touch soon.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs font-semibold tracking-widest uppercase underline"
                  style={{ color: "oklch(var(--gold))" }}
                  data-ocid="contact.form.send_another.button"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                data-ocid="contact.form"
                noValidate
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold tracking-widest uppercase mb-2"
                    style={{ color: "oklch(var(--muted-foreground))" }}
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    className="w-full px-4 py-3 text-sm rounded-lg bg-transparent text-foreground placeholder-muted-foreground focus:outline-none transition-colors"
                    style={{
                      background: "oklch(var(--card-bg))",
                      border: "1px solid oklch(var(--border))",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "oklch(var(--gold))";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "oklch(var(--border))";
                    }}
                    data-ocid="contact.name.input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold tracking-widest uppercase mb-2"
                    style={{ color: "oklch(var(--muted-foreground))" }}
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    autoComplete="email"
                    required
                    className="w-full px-4 py-3 text-sm rounded-lg text-foreground focus:outline-none transition-colors"
                    style={{
                      background: "oklch(var(--card-bg))",
                      border: "1px solid oklch(var(--border))",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "oklch(var(--gold))";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "oklch(var(--border))";
                    }}
                    data-ocid="contact.email.input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold tracking-widest uppercase mb-2"
                    style={{ color: "oklch(var(--muted-foreground))" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your session..."
                    rows={5}
                    required
                    className="w-full px-4 py-3 text-sm rounded-lg text-foreground resize-none focus:outline-none transition-colors"
                    style={{
                      background: "oklch(var(--card-bg))",
                      border: "1px solid oklch(var(--border))",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "oklch(var(--gold))";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "oklch(var(--border))";
                    }}
                    data-ocid="contact.message.textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase rounded-lg transition-all hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: "oklch(var(--gold))",
                    color: "oklch(var(--primary-foreground))",
                  }}
                  data-ocid="contact.form.submit_button"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      SENDING...
                    </>
                  ) : (
                    "SEND MESSAGE"
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-display text-xl font-bold uppercase tracking-wide text-foreground mb-8">
              STAY IN TOUCH
            </h3>

            <div className="space-y-6">
              <ContactItem
                label="EMAIL"
                value="Homebasemg@gmail.com"
                href="mailto:Homebasemg@gmail.com"
              />
              <ContactItem
                label="WEBSITE"
                value="www.homebasefilms.com"
                href="https://www.homebasefilms.com"
              />
              <ContactItem
                label="INSTAGRAM"
                value="@Homebasefilms"
                href="https://www.instagram.com/homebasefilms"
              />
              <ContactItem
                label="PHONE"
                value="(919) 685-7780"
                href="tel:9196857780"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  label,
  value,
  href,
}: { label: string; value: string; href: string }) {
  return (
    <div>
      <p
        className="text-xs font-semibold tracking-[0.25em] uppercase mb-1"
        style={{ color: "oklch(var(--gold))" }}
      >
        {label}
      </p>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="text-sm transition-colors hover:underline"
        style={{ color: "oklch(var(--muted-foreground))" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "oklch(var(--foreground))";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "oklch(var(--muted-foreground))";
        }}
      >
        {value}
      </a>
    </div>
  );
}
