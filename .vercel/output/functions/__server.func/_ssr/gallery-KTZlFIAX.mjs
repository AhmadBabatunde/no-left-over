import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./Layout-7fKJdN3P.mjs";
import { h as hero } from "./real1-CH-S08wv.mjs";
import { r as real2, i as interior } from "./real3-GtM9XHg5.mjs";
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
import "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const images = [{
  src: hero,
  alt: "Fresh Moin-Moin and Nigerian food packaging",
  span: "row-span-2"
}, {
  src: real2,
  alt: "Nigerian food buffet spread"
}, {
  src: interior,
  alt: "No Left-Overs restaurant interior",
  span: "col-span-2"
}, {
  src: real2,
  alt: "Assorted Nigerian dishes"
}, {
  src: hero,
  alt: "Signature Moin-Moin packaging"
}, {
  src: interior,
  alt: "Our dining space",
  span: "col-span-2"
}];
function Gallery() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24 bg-ink text-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 sm:px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold", children: "Gallery" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-5xl sm:text-7xl font-bold", children: "A Visual Feast" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-cream/80", children: "Food, place, moments — all from our Gbagada kitchen." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 sm:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-3 auto-rows-[180px] sm:auto-rows-[240px] gap-3 sm:gap-4", children: images.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      scale: 0.95
    }, whileInView: {
      opacity: 1,
      scale: 1
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.05
    }, className: `relative overflow-hidden rounded-xl group ${img.span ?? ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img.src, alt: img.alt, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cream text-sm font-medium", children: img.alt }) })
    ] }, i)) }) })
  ] });
}
export {
  Gallery as component
};
