import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./Layout-7fKJdN3P.mjs";
import { i as interior, r as real2 } from "./real3-GtM9XHg5.mjs";
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
function SectionHero({
  eyebrow,
  title,
  subtitle,
  image,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative -mt-20 h-[60vh] min-h-[420px] w-full overflow-hidden flex items-end", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image, alt: "", className: "absolute inset-0 h-full w-full object-cover" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 pb-16 pt-32 text-cream", children: [
      eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          className: "inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold",
          children: eyebrow
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h1,
        {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.05 },
          className: "mt-4 font-display text-4xl sm:text-6xl font-bold text-balance max-w-3xl",
          children: title
        }
      ),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.15 },
          className: "mt-4 max-w-2xl text-base sm:text-lg text-cream/85",
          children: subtitle
        }
      ),
      children && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children })
    ] })
  ] });
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHero, { eyebrow: "Our Story", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "From N1,000 & a pot of Moin-Moin ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "to millions." })
    ] }), subtitle: "The story of No Left-Overs Nig Ltd — started with love, grown through dedication, and served with pride in Gbagada, Lagos.", image: interior }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.25em] text-brand-red", children: "The Founder's Story" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-3xl sm:text-4xl font-bold mb-6", children: "AYODEJI MEGBOPE" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground leading-relaxed italic border-l-4 border-brand-gold pl-5 mb-6", children: `"AYODEJI MEGBOPE is the Founder, MD/CEO of NO LEFT-OVERS NIG LTD. A full-scale catering outfit which started with a takeoff capital of N1,000 in 2007, with the sale of local bean cakes known as 'moin-moin', but has grown the business into what today has an annual turn-over that runs into millions of naira."` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-8 font-display text-2xl font-bold mb-4", children: "When and why did you start No Left Overs?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: "The plan wasn't to start a business. In 2007, I was tearfully burdened about what to cook with the N1,000 my husband gave me for food. I decided to cook Moin-moin (local bean cake)." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 text-lg text-muted-foreground leading-relaxed", children: [
        "That same day, my sister-in-law visited, tasted the Moin-moin I made, liked it and eventually gave me N1,000 to make for her. And because others tasted it and liked it, I began the business of Moin-moin production which later evolved into the business ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "No Left Overs." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground leading-relaxed", children: "Today, No Left-Overs Nig Ltd is a full-scale catering outfit, serving authentic Nigerian cuisine — from our signature Moin-Moin to full event catering — out of our home in Gbagada, Lagos." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 sm:py-28 bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { initial: {
        opacity: 0,
        x: -20
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true
      }, src: real2, alt: "No Left-Overs food spread", loading: "lazy", className: "rounded-2xl w-full aspect-[4/5] object-cover shadow-xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.25em] text-brand-red", children: "Our Kitchen" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl sm:text-5xl font-bold", children: "Made Fresh, Every Day" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: "At No Left-Overs, we believe in the power of authentic Nigerian flavours. Every dish is made with the same love and passion that Ayodeji put into that first pot of Moin-Moin in 2007." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "From our signature Moin-Moin and jollof rice to full event catering packages, we bring the true taste of Nigeria to your table — no shortcuts, no compromises." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-2 gap-4", children: [{
          n: "2007",
          l: "Year Founded"
        }, {
          n: "N1,000",
          l: "Starting Capital"
        }, {
          n: "Millions",
          l: "Annual Turnover"
        }, {
          n: "Gbagada",
          l: "Home Base"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-card border border-border p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold text-brand-red", children: s.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: s.l })
        ] }, s.n)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.25em] text-brand-red", children: "Our Values" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl sm:text-5xl font-bold", children: "What we serve, and why." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [{
        t: "Authenticity",
        d: "Every dish honours the true flavours of Nigerian cuisine — Yoruba, Igbo, Hausa, Efik, Edo traditions."
      }, {
        t: "Quality",
        d: "Fresh ingredients, hand-crafted recipes. The same standards that turned N1,000 into millions."
      }, {
        t: "Hospitality",
        d: "Lagos warmth in every serving. You are family the moment you walk through our doors."
      }].map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.1
      }, className: "rounded-2xl border border-border bg-card p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-red text-white font-display font-bold", children: i + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-2xl font-bold", children: v.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: v.d })
      ] }, i)) })
    ] }) })
  ] });
}
export {
  About as component
};
