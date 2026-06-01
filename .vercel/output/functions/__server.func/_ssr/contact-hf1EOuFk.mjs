import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./Layout-7fKJdN3P.mjs";
import { P as Phone, M as Mail, a as MapPin, C as Clock, b as Check } from "../_libs/lucide-react.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function Contact() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24 bg-ink text-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 sm:px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-5xl sm:text-7xl font-bold", children: "Come See Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-cream/80", children: "By Corona School, 7 Sawyer Crescent, Gbagada, Lagos 100234" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: [{
          icon: Phone,
          t: "Phone",
          v: "09048858123",
          href: "tel:+2349048858123"
        }, {
          icon: Mail,
          t: "Email",
          v: "info@noleftovers-ng.com",
          href: "mailto:info@noleftovers-ng.com"
        }, {
          icon: MapPin,
          t: "Address",
          v: "By Corona School, 7 Sawyer Crescent, Gbagada, Lagos 100234"
        }, {
          icon: Clock,
          t: "Hours",
          v: "Daily · 11am – 10pm"
        }].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.a, { href: c.href, initial: {
          opacity: 0,
          y: 16
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          delay: i * 0.05
        }, className: "block rounded-2xl border border-border bg-card p-5 hover:border-brand-red transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-5 w-5 text-brand-red" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-xs uppercase tracking-wider text-muted-foreground", children: c.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-semibold", children: c.v })
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden border border-border aspect-[4/3] sm:aspect-[16/10]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Map to No Left-Overs Nigeria — Gbagada", src: "https://www.google.com/maps?q=7+Sawyer+Crescent+Gbagada+Lagos+Nigeria&output=embed", className: "w-full h-full", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.95
      }, animate: {
        opacity: 1,
        scale: 1
      }, className: "rounded-2xl bg-brand-green/10 border border-brand-green/30 p-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-14 w-14 rounded-full bg-brand-green text-white flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 font-display text-3xl font-bold", children: "Message Sent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "We'll get back to you within 24 hours." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
      }, className: "bg-card rounded-2xl border border-border p-6 sm:p-8 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold", children: "Send a message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, placeholder: "Your name", className: "contact-input" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", placeholder: "Your email", className: "contact-input" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Subject", className: "contact-input" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 5, placeholder: "Your message...", className: "contact-input resize-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full rounded-full bg-brand-red text-white py-3.5 font-semibold hover:bg-brand-red/90 transition-colors", children: "Send Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-center text-muted-foreground", children: [
          "Prefer chat? ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/2349048858123", target: "_blank", rel: "noopener noreferrer", className: "text-brand-green font-semibold", children: "Message us on WhatsApp" })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
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
      ` })
  ] });
}
export {
  Contact as component
};
