import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { d as useLocation, L as Link } from "../_libs/tanstack__react-router.mjs";
import { X, e as Menu, a as MapPin, P as Phone, M as Mail, f as MessageCircle } from "../_libs/lucide-react.mjs";
const logo = "/assets/logo-brand-Bzq7G63i.png";
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const location = useLocation();
  const isImagePage = ["/", "/about"].includes(location.pathname);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const isWhiteNavbar = scrolled;
  const headerClass = scrolled ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-1" : isImagePage ? "bg-transparent py-3" : "bg-ink/95 backdrop-blur-md border-b border-neutral-800/80 shadow-md py-2";
  const brandTextClass = isWhiteNavbar ? "text-brand-red" : "text-white drop-shadow-md";
  const brandSubtextClass = isWhiteNavbar ? "text-brand-green" : "text-brand-gold drop-shadow";
  const logoBgClass = isWhiteNavbar ? "bg-white shadow-md ring-2 ring-brand-gold/40" : "bg-white/95 shadow-lg ring-2 ring-brand-gold/50";
  const navLinkClass = isWhiteNavbar ? "text-gray-700 hover:text-brand-red hover:bg-brand-red/5" : "text-white/90 hover:text-white hover:bg-white/10";
  const activeLinkClass = isWhiteNavbar ? "text-brand-red font-bold" : "text-brand-gold font-bold bg-white/5";
  const hamburgerClass = isWhiteNavbar ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${headerClass}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 group shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `relative flex items-center justify-center rounded-full transition-all duration-300 ${logoBgClass} w-14 h-14 sm:w-16 sm:h-16 group-hover:scale-105`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: logo,
            alt: "No Left-Overs Nigeria",
            className: "w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-full"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex flex-col leading-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-baseline", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-display text-2xl sm:text-3xl font-black tracking-tight transition-colors duration-300 ${brandTextClass}`, children: "No Left-Overs" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 mt-0.5 transition-colors duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-bold uppercase tracking-[0.3em] ${brandSubtextClass}`, children: "Nigeria" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden lg:flex items-center gap-0.5", children: [
        links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: l.to,
            className: `relative px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-full group ${navLinkClass}`,
            activeProps: { className: activeLinkClass },
            activeOptions: { exact: l.to === "/" },
            children: [
              l.label,
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-brand-red rounded-full transition-all duration-300 group-hover:w-4" })
            ]
          },
          l.to
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://wa.me/2349048858123",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "ml-4 inline-flex items-center gap-2 rounded-full bg-brand-green text-white px-5 py-2.5 text-sm font-bold shadow-lg shadow-brand-green/25 hover:bg-brand-green/90 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-green/30 transition-all duration-200",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "h-4 w-4", viewBox: "0 0 24 24", fill: "currentColor", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.099 1.51 5.828L.057 23.25l5.563-1.461A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.92c-1.902 0-3.67-.512-5.184-1.402l-.371-.221-3.857 1.013 1.033-3.77-.242-.385A9.917 9.917 0 012.08 12C2.08 6.515 6.515 2.08 12 2.08c5.485 0 9.92 4.435 9.92 9.92 0 5.485-4.435 9.92-9.92 9.92z" })
              ] }),
              "Order Now"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          "aria-label": "Toggle menu",
          id: "mobile-menu-btn",
          className: `lg:hidden p-2.5 rounded-full transition-all ${hamburgerClass}`,
          onClick: () => setOpen((v) => !v),
          children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-6 w-6" })
        }
      )
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `lg:hidden border-t ${isWhiteNavbar ? "border-gray-100 bg-white" : "border-neutral-800 bg-black/98"} backdrop-blur-xl shadow-xl`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-5 flex flex-col gap-1", children: [
      links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: l.to,
          onClick: () => setOpen(false),
          className: `flex items-center px-4 py-3 text-base font-semibold rounded-xl transition-all ${isWhiteNavbar ? "text-gray-700 hover:text-brand-red hover:bg-brand-red/5" : "text-gray-200 hover:text-brand-gold hover:bg-white/5"}`,
          activeProps: {
            className: isWhiteNavbar ? "text-brand-red bg-brand-red/5" : "text-brand-gold bg-white/5"
          },
          activeOptions: { exact: l.to === "/" },
          children: l.label
        },
        l.to
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://wa.me/2349048858123",
          target: "_blank",
          rel: "noopener noreferrer",
          onClick: () => setOpen(false),
          className: "mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-5 py-3.5 text-base font-bold text-white shadow-md",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "h-5 w-5", viewBox: "0 0 24 24", fill: "currentColor", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.099 1.51 5.828L.057 23.25l5.563-1.461A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.92c-1.902 0-3.67-.512-5.184-1.402l-.371-.221-3.857 1.013 1.033-3.77-.242-.385A9.917 9.917 0 012.08 12C2.08 6.515 6.515 2.08 12 2.08c5.485 0 9.92 4.435 9.92 9.92 0 5.485-4.435 9.92-9.92 9.92z" })
            ] }),
            "Order via WhatsApp"
          ]
        }
      )
    ] }) })
  ] });
}
const InstagramIcon = (p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "5" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "4" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "17.5", cy: "6.5", r: "1", fill: "currentColor" })
] });
const FacebookIcon = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", ...p, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M13 22v-8h3l1-4h-4V7.5c0-1.1.4-2 2-2h2V2h-3c-3 0-5 1.8-5 5v3H6v4h3v8h4z" }) });
const TwitterIcon = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", ...p, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18.244 2H21l-6.52 7.45L22 22h-6.83l-4.78-6.26L4.8 22H2l7.03-8.03L2 2h6.96l4.33 5.74L18.244 2zm-2.39 18h1.87L8.24 4H6.26l9.594 16z" }) });
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-ink text-cream mt-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-12 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "", className: "h-16 w-16 object-contain" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-bold", children: "No Left-Overs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.2em] text-brand-gold", children: "Nigeria" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-cream/70 max-w-xs", children: "From N1,000 and a pot of Moin-Moin to millions in annual turnover — the taste of Lagos's most beloved catering brand." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/noleftovers_ng", target: "_blank", rel: "noopener noreferrer", "aria-label": "Instagram", className: "p-2 rounded-full bg-brand-red/90 hover:bg-brand-red transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InstagramIcon, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Facebook", className: "p-2 rounded-full bg-brand-red/90 hover:bg-brand-red transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FacebookIcon, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Twitter", className: "p-2 rounded-full bg-brand-red/90 hover:bg-brand-red transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TwitterIcon, { className: "h-4 w-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold uppercase tracking-widest text-brand-gold mb-4", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-cream/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-brand-gold", children: "About" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/menu", className: "hover:text-brand-gold", children: "Menu" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/gallery", className: "hover:text-brand-gold", children: "Gallery" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-brand-gold", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold uppercase tracking-widest text-brand-gold mb-4", children: "Visit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-cream/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 mt-0.5 text-brand-red shrink-0" }),
            " By Corona School, 7 Sawyer Crescent, Gbagada, Lagos 100234"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 mt-0.5 text-brand-red shrink-0" }),
            " 09048858123"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 mt-0.5 text-brand-red shrink-0" }),
            " info@noleftovers-ng.com"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold uppercase tracking-widest text-brand-gold mb-4", children: "Order Online" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-cream/70 mb-4", children: "Order your favourite Nigerian dishes fresh from our kitchen." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://wa.me/2349048858123",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-green/90 transition-all",
            children: "Order via WhatsApp"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-cream/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " No Left-Overs Nigeria Ltd. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Made with pride in Gbagada, Lagos." })
    ] }) })
  ] });
}
function WhatsAppFab() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: "https://wa.me/2349048858123?text=Hello%20No%20Left-Overs!%20I%27d%20like%20to%20place%20an%20order.",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Order via WhatsApp",
      className: "fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-brand-green text-white px-4 py-3 shadow-2xl shadow-brand-green/30 hover:scale-105 transition-transform",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline text-sm font-semibold", children: "WhatsApp" })
      ]
    }
  );
}
function SiteLayout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 pt-20", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppFab, {})
  ] });
}
export {
  SiteLayout as S
};
