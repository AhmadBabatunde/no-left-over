import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/Layout";
import real1 from "@/assets/real1.jpg";
import real2 from "@/assets/real2.jpg";
import real3 from "@/assets/real3.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — No Left-Overs Nigeria" },
      { name: "description", content: "A visual feast — food photography and restaurant at No Left-Overs Nigeria in Gbagada, Lagos." },
      { property: "og:title", content: "Gallery — No Left-Overs Nigeria" },
      { property: "og:description", content: "See the food, the place, the moments." },
    ],
  }),
  component: Gallery,
});

const images = [
  { src: real1, alt: "Fresh Moin-Moin and Nigerian food packaging", span: "row-span-2" },
  { src: real2, alt: "Nigerian food buffet spread" },
  { src: real3, alt: "No Left-Overs restaurant interior", span: "col-span-2" },
  { src: real2, alt: "Assorted Nigerian dishes" },
  { src: real1, alt: "Signature Moin-Moin packaging" },
  { src: real3, alt: "Our dining space", span: "col-span-2" },
];

function Gallery() {
  return (
    <SiteLayout>
      <section className="py-16 sm:py-24 bg-ink text-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">Gallery</span>
          <h1 className="mt-3 font-display text-5xl sm:text-7xl font-bold">A Visual Feast</h1>
          <p className="mt-4 text-cream/80">Food, place, moments — all from our Gbagada kitchen.</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-3 auto-rows-[180px] sm:auto-rows-[240px] gap-3 sm:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-xl group ${img.span ?? ""}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-cream text-sm font-medium">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
