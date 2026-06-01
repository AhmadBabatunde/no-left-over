import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./Layout-7fKJdN3P.mjs";
import { m as menuItems, f as formatNaira } from "./menu-54kNgO3T.mjs";
import { S as Search } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./real1-CH-S08wv.mjs";
import "./real3-GtM9XHg5.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const categories = ["All", "Signatures", "Starters", "Mains", "Sides", "Desserts", "Drinks"];
function MenuPage() {
  const [query, setQuery] = reactExports.useState("");
  const [cat, setCat] = reactExports.useState("All");
  const filtered = reactExports.useMemo(() => {
    return menuItems.filter((m) => {
      const matchesCat = cat === "All" || m.category === cat;
      const q = query.trim().toLowerCase();
      const matchesQ = !q || m.name.toLowerCase().includes(q) || m.description.toLowerCase().includes(q);
      return matchesCat && matchesQ;
    });
  }, [query, cat]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24 bg-ink text-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold", children: "À La Carte" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-5xl sm:text-7xl font-bold", children: "The Menu" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl mx-auto text-cream/80", children: "Seasonal, sourced, served with intention." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Search dishes...", className: "w-full rounded-full bg-card border border-border pl-11 pr-4 py-3 text-sm outline-none focus:border-brand-red" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 overflow-x-auto pb-2 -mx-1 px-1", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCat(c), className: `whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all ${cat === c ? "bg-brand-red text-white shadow-md" : "bg-card border border-border text-foreground/70 hover:text-brand-red"}`, children: c }, c)) })
      ] }),
      filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground py-20", children: "No dishes match your search." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: filtered.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { item: m, index: i }, m.id)) })
    ] }) })
  ] });
}
function Card({
  item,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
    opacity: 0,
    y: 20
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true
  }, transition: {
    delay: Math.min(index * 0.04, 0.3)
  }, className: "group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all", children: [
    item.image ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.name, loading: "lazy", className: "h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] bg-gradient-to-br from-brand-green/10 via-brand-gold/10 to-brand-red/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-5xl text-brand-red/30", children: item.name[0] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold leading-tight", children: item.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-red font-bold whitespace-nowrap", children: formatNaira(item.price) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: item.description }),
      item.tags && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-1.5", children: item.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-brand-green/10 text-brand-green", children: t }, t)) })
    ] })
  ] });
}
export {
  MenuPage as component
};
