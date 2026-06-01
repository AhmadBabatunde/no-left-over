import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { menuItems, formatNaira, type MenuItem } from "@/data/menu";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — No Left-Overs Nigeria" },
      { name: "description", content: "Browse our gourmet Nigerian menu — signature Moi-Moi, jollof, suya, and seasonal tasting selections in Lagos." },
      { property: "og:title", content: "Menu — No Left-Overs Nigeria" },
      { property: "og:description", content: "Gourmet Nigerian cuisine, plated for the discerning palate." },
    ],
  }),
  component: MenuPage,
});

const categories = ["All", "Signatures", "Starters", "Mains", "Sides", "Desserts", "Drinks"] as const;

function MenuPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    return menuItems.filter((m) => {
      const matchesCat = cat === "All" || m.category === cat;
      const q = query.trim().toLowerCase();
      const matchesQ = !q || m.name.toLowerCase().includes(q) || m.description.toLowerCase().includes(q);
      return matchesCat && matchesQ;
    });
  }, [query, cat]);

  return (
    <SiteLayout>
      <section className="py-16 sm:py-24 bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">À La Carte</span>
          <h1 className="mt-3 font-display text-5xl sm:text-7xl font-bold">The Menu</h1>
          <p className="mt-4 max-w-2xl mx-auto text-cream/80">Seasonal, sourced, served with intention.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Controls */}
          <div className="flex flex-col gap-4 mb-10">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search dishes..."
                className="w-full rounded-full bg-card border border-border pl-11 pr-4 py-3 text-sm outline-none focus:border-brand-red"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    cat === c ? "bg-brand-red text-white shadow-md" : "bg-card border border-border text-foreground/70 hover:text-brand-red"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* List */}
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-20">No dishes match your search.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((m, i) => (
                <Card key={m.id} item={m} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

function Card({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.04, 0.3) }}
      className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all"
    >
      {item.image ? (
        <div className="aspect-[4/3] overflow-hidden">
          <img src={item.image} alt={item.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
      ) : (
        <div className="aspect-[4/3] bg-gradient-to-br from-brand-green/10 via-brand-gold/10 to-brand-red/10 flex items-center justify-center">
          <span className="font-display text-5xl text-brand-red/30">{item.name[0]}</span>
        </div>
      )}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-bold leading-tight">{item.name}</h3>
          <span className="text-brand-red font-bold whitespace-nowrap">{formatNaira(item.price)}</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
        {item.tags && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {item.tags.map((t) => (
              <span key={t} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-brand-green/10 text-brand-green">{t}</span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
