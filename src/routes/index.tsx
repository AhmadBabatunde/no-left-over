import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Award, UtensilsCrossed, Clock, Star } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import hero from "@/assets/real1.jpg";
import interior from "@/assets/real3.jpg";
import { menuItems, formatNaira } from "@/data/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "No Left-Overs Nigeria — Authentic Moi-Moi & Nigerian Cuisine, Gbagada Lagos" },
      { name: "description", content: "The home of authentic Nigerian Moi-Moi and catering. From a N1,000 beginning in 2007 to Nigeria's premier catering brand. Visit us in Gbagada, Lagos." },
      { property: "og:title", content: "No Left-Overs Nigeria — Gbagada, Lagos" },
      { property: "og:description", content: "Authentic Nigerian Moi-Moi & catering. Visit us in Gbagada, Lagos." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = menuItems.filter((m) => m.image).slice(0, 3);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative -mt-20 w-full overflow-hidden" style={{ minHeight: "100svh" }}>
        {/* Background image */}
        <img
          src={hero}
          alt="No Left-Overs — Authentic Nigerian Food"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 40%" }}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

        {/* Content — vertically centred, padded away from navbar & bottom */}
        <div className="relative flex flex-col justify-center min-h-screen px-4 sm:px-6 pt-24 pb-28 mx-auto max-w-5xl">

          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex self-start items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{
              background: "rgba(244,169,0,0.15)",
              border: "1px solid rgba(244,169,0,0.4)",
              color: "#F4A900",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-pulse shrink-0" />
            Est. 2007 &nbsp;·&nbsp; Gbagada, Lagos
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.75 }}
            className="font-display font-black text-white"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 4rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "820px",
            }}
          >
            We are the makers of the famous{" "}
            <span className="text-gradient-brand">
              gourmet moin-moin
            </span>{" "}
            that made it to the{" "}
            <span className="text-brand-gold">White House!</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7 }}
            className="mt-5 text-white/80 leading-relaxed"
            style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)", maxWidth: "560px" }}
          >
            From a humble N1,000 investment in 2007 to Nigeria's most celebrated
            catering brand — every dish we make carries our story.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.7 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="https://wa.me/2349048858123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-green text-white font-bold shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              style={{ padding: "0.85rem 1.75rem", fontSize: "0.875rem" }}
            >
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.099 1.51 5.828L.057 23.25l5.563-1.461A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.92c-1.902 0-3.67-.512-5.184-1.402l-.371-.221-3.857 1.013 1.033-3.77-.242-.385A9.917 9.917 0 012.08 12C2.08 6.515 6.515 2.08 12 2.08c5.485 0 9.92 4.435 9.92 9.92 0 5.485-4.435 9.92-9.92 9.92z"/>
              </svg>
              Order Now
            </a>

            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-brand-red text-white font-bold shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              style={{ padding: "0.85rem 1.75rem", fontSize: "0.875rem" }}
            >
              See Our Menu <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full text-white font-semibold hover:bg-white/15 transition-all duration-200"
              style={{
                padding: "0.85rem 1.75rem",
                fontSize: "0.875rem",
                border: "1px solid rgba(255,255,255,0.25)",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
              }}
            >
              Our Story
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.12)", maxWidth: "560px" }}
          >
            {[
              { val: "2007", label: "Founded" },
              { val: "N1K", label: "Starting capital" },
              { val: "₦M+", label: "Annual turnover" },
              { val: "Gbagada", label: "Lagos" },
            ].map((s) => (
              <div key={s.val}>
                <div className="font-display font-black text-white text-xl sm:text-2xl">{s.val}</div>
                <div className="text-white/50 text-xs uppercase tracking-widest mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1.5">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-start justify-center pt-1.5"
            style={{
              width: "1.25rem",
              height: "2.25rem",
              borderRadius: "999px",
              border: "2px solid rgba(255,255,255,0.25)",
            }}
          >
            <div className="rounded-full bg-white/60" style={{ width: "4px", height: "6px" }} />
          </motion.div>
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>Scroll</span>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="bg-ink text-cream py-6 border-y border-cream/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: Award, label: "Founded 2007" },
            { icon: UtensilsCrossed, label: "12+ Signature Dishes" },
            { icon: Star, label: "Millions in Annual Turnover" },
            { icon: Clock, label: "Open Daily 11am–10pm" },
          ].map((s, i) => (
            <div key={i} className="flex items-center justify-center gap-2 text-xs sm:text-sm">
              <s.icon className="h-4 w-4 text-brand-gold" />
              <span className="font-medium text-cream/85">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
            <img src={interior} alt="No Left-Overs restaurant interior" className="rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover" loading="lazy" />
            <div className="absolute -bottom-6 -right-6 bg-brand-red text-white rounded-2xl px-6 py-5 shadow-xl hidden sm:block">
              <div className="text-3xl font-display font-bold">Est. 2007</div>
              <div className="text-xs uppercase tracking-widest opacity-90">Gbagada, Lagos</div>
            </div>
          </motion.div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">Our Story</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-balance">
              From N1,000 and a dream — <span className="text-gradient-brand">No Left-Overs was born.</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              In 2007, Ayodeji Megbope was burdened about what to cook with the N1,000 her husband gave her for food. She decided to make Moin-Moin. That same day, her sister-in-law visited, tasted it, and gave her N1,000 to make more.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Word spread. Orders grew. What began as a simple pot of bean cakes has grown into <strong className="text-foreground">No Left-Overs Nig Ltd</strong> — a full-scale catering outfit with an annual turnover running into millions of naira.
            </p>
            <Link to="/about" className="mt-7 inline-flex items-center gap-2 font-semibold text-brand-red hover:gap-3 transition-all">
              Read our full story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED DISHES */}
      <section className="py-20 sm:py-28 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">Our Selection</span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Featured Dishes</h2>
            </div>
            <Link to="/menu" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:gap-3 transition-all">
              View full menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((d, i) => (
              <motion.article
                key={d.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={d.image} alt={d.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-bold leading-tight">{d.name}</h3>
                    <span className="text-brand-red font-bold whitespace-nowrap">{formatNaira(d.price)}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{d.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">Guest Voices</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Words from our customers</h2>

          <div className="mt-14 grid md:grid-cols-3 gap-6 text-left">
            {[
              { q: "The Moi-Moi is absolutely unmatched! Rich, flavourful and authentic — this is what Nigerian food should taste like.", a: "Adaobi N.", role: "Food Lover, Lagos" },
              { q: "I've been ordering from No Left-Overs for years. Every single time, the quality is consistent and the taste is amazing.", a: "Tunde A.", role: "Regular Customer" },
              { q: "Their catering for our event was flawless. Guests couldn't stop raving about the food. Will definitely use them again!", a: "Mrs. Okonkwo", role: "Event Client" },
            ].map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-card border border-border p-6 shadow-sm"
              >
                <div className="flex gap-0.5 text-brand-gold mb-3">
                  {[...Array(5)].map((_, k) => <Star key={k} className="h-4 w-4 fill-brand-gold" />)}
                </div>
                <blockquote className="text-foreground leading-relaxed">"{t.q}"</blockquote>
                <figcaption className="mt-5 text-sm">
                  <div className="font-semibold">{t.a}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 py-24 sm:py-32 text-center text-cream">
          <h2 className="font-display text-4xl sm:text-6xl font-bold text-balance">Ready to taste the best Moi-Moi in Lagos?</h2>
          <p className="mt-5 text-cream/80 max-w-2xl mx-auto">Visit us in Gbagada or order online through WhatsApp. Freshly made, delivered with love.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/2349048858123" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-8 py-4 font-semibold text-white shadow-xl hover:-translate-y-0.5 transition-all">
              Order via WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
            <a href="tel:+2349048858123" className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-8 py-4 font-semibold text-cream hover:bg-cream/10 transition-all">
              Call 09048858123
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
