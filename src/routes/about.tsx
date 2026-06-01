import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/Layout";
import { SectionHero } from "@/components/site/SectionHero";
import interior from "@/assets/real3.jpg";
import real2 from "@/assets/real2.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — No Left-Overs Nigeria" },
      { name: "description", content: "The story of Ayodeji Megbope and No Left-Overs Nig Ltd — from a N1,000 pot of Moin-Moin in 2007 to a full-scale catering brand in Gbagada, Lagos." },
      { property: "og:title", content: "About — No Left-Overs Nigeria" },
      { property: "og:description", content: "Our story, our founder, our mission." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <SectionHero
        eyebrow="Our Story"
        title={<>From N1,000 &amp; a pot of Moin-Moin <span className="text-gradient-brand">to millions.</span></>}
        subtitle="The story of No Left-Overs Nig Ltd — started with love, grown through dedication, and served with pride in Gbagada, Lagos."
        image={interior}
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">The Founder's Story</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold mb-6">AYODEJI MEGBOPE</h2>
          <p className="text-base text-muted-foreground leading-relaxed italic border-l-4 border-brand-gold pl-5 mb-6">
            "AYODEJI MEGBOPE is the Founder, MD/CEO of NO LEFT-OVERS NIG LTD. A full-scale catering outfit which started with a takeoff capital of N1,000 in 2007, with the sale of local bean cakes known as 'moin-moin', but has grown the business into what today has an annual turn-over that runs into millions of naira."
          </p>
          <h3 className="mt-8 font-display text-2xl font-bold mb-4">When and why did you start No Left Overs?</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The plan wasn't to start a business. In 2007, I was tearfully burdened about what to cook with the N1,000 my husband gave me for food. I decided to cook Moin-moin (local bean cake).
          </p>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            That same day, my sister-in-law visited, tasted the Moin-moin I made, liked it and eventually gave me N1,000 to make for her. And because others tasted it and liked it, I began the business of Moin-moin production which later evolved into the business <strong className="text-foreground">No Left Overs.</strong>
          </p>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Today, No Left-Overs Nig Ltd is a full-scale catering outfit, serving authentic Nigerian cuisine — from our signature Moin-Moin to full event catering — out of our home in Gbagada, Lagos.
          </p>
        </div>
      </section>

      {/* FOUNDER / PLACE */}
      <section className="py-20 sm:py-28 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src={real2}
            alt="No Left-Overs food spread"
            loading="lazy"
            className="rounded-2xl w-full aspect-[4/5] object-cover shadow-xl"
          />
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">Our Kitchen</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Made Fresh, Every Day</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              At No Left-Overs, we believe in the power of authentic Nigerian flavours. Every dish is made with the same love and passion that Ayodeji put into that first pot of Moin-Moin in 2007.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From our signature Moin-Moin and jollof rice to full event catering packages, we bring the true taste of Nigeria to your table — no shortcuts, no compromises.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { n: "2007", l: "Year Founded" },
                { n: "N1,000", l: "Starting Capital" },
                { n: "Millions", l: "Annual Turnover" },
                { n: "Gbagada", l: "Home Base" },
              ].map((s) => (
                <div key={s.n} className="rounded-xl bg-card border border-border p-4">
                  <div className="font-display text-2xl font-bold text-brand-red">{s.n}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">Our Values</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">What we serve, and why.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Authenticity", d: "Every dish honours the true flavours of Nigerian cuisine — Yoruba, Igbo, Hausa, Efik, Edo traditions." },
              { t: "Quality", d: "Fresh ingredients, hand-crafted recipes. The same standards that turned N1,000 into millions." },
              { t: "Hospitality", d: "Lagos warmth in every serving. You are family the moment you walk through our doors." },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-red text-white font-display font-bold">{i + 1}</div>
                <h3 className="mt-5 font-display text-2xl font-bold">{v.t}</h3>
                <p className="mt-2 text-muted-foreground">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
