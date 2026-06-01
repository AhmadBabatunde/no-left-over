import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — No Left-Overs Nigeria" },
      { name: "description", content: "Visit us in Gbagada, Lagos. By Corona School, 7 Sawyer Crescent, Gbagada, Lagos 100234. Phone, email, and directions to No Left-Overs Nigeria." },
      { property: "og:title", content: "Contact — No Left-Overs Nigeria" },
      { property: "og:description", content: "Get in touch — Gbagada, Lagos." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="py-16 sm:py-24 bg-ink text-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">Contact</span>
          <h1 className="mt-3 font-display text-5xl sm:text-7xl font-bold">Come See Us</h1>
          <p className="mt-4 text-cream/80">By Corona School, 7 Sawyer Crescent, Gbagada, Lagos 100234</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
          {/* Info + Map */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Phone, t: "Phone", v: "09048858123", href: "tel:+2349048858123" },
                { icon: Mail, t: "Email", v: "info@noleftovers-ng.com", href: "mailto:info@noleftovers-ng.com" },
                { icon: MapPin, t: "Address", v: "By Corona School, 7 Sawyer Crescent, Gbagada, Lagos 100234" },
                { icon: Clock, t: "Hours", v: "Daily · 11am – 10pm" },
              ].map((c, i) => (
                <motion.a
                  key={i}
                  href={c.href}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="block rounded-2xl border border-border bg-card p-5 hover:border-brand-red transition-colors"
                >
                  <c.icon className="h-5 w-5 text-brand-red" />
                  <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">{c.t}</div>
                  <div className="mt-1 font-semibold">{c.v}</div>
                </motion.a>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden border border-border aspect-[4/3] sm:aspect-[16/10]">
              <iframe
                title="Map to No Left-Overs Nigeria — Gbagada"
                src="https://www.google.com/maps?q=7+Sawyer+Crescent+Gbagada+Lagos+Nigeria&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="rounded-2xl bg-brand-green/10 border border-brand-green/30 p-10 text-center">
                <div className="mx-auto h-14 w-14 rounded-full bg-brand-green text-white flex items-center justify-center">
                  <Check className="h-7 w-7" />
                </div>
                <h2 className="mt-5 font-display text-3xl font-bold">Message Sent</h2>
                <p className="mt-3 text-muted-foreground">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="bg-card rounded-2xl border border-border p-6 sm:p-8 space-y-4">
                <h2 className="font-display text-2xl font-bold">Send a message</h2>
                <input required placeholder="Your name" className="contact-input" />
                <input required type="email" placeholder="Your email" className="contact-input" />
                <input placeholder="Subject" className="contact-input" />
                <textarea required rows={5} placeholder="Your message..." className="contact-input resize-none" />
                <button className="w-full rounded-full bg-brand-red text-white py-3.5 font-semibold hover:bg-brand-red/90 transition-colors">Send Message</button>
                <p className="text-xs text-center text-muted-foreground">
                  Prefer chat? <a href="https://wa.me/2349048858123" target="_blank" rel="noopener noreferrer" className="text-brand-green font-semibold">Message us on WhatsApp</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .contact-input {
          width: 100%;
          border: 1px solid var(--color-border);
          background: var(--color-background);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          outline: none;
        }
        .contact-input:focus { border-color: var(--brand-red); }
      `}</style>
    </SiteLayout>
  );
}
