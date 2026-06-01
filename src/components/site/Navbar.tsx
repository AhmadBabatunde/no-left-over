import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-brand.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isImagePage = ["/", "/about"].includes(location.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The navbar has a white background ONLY when the user scrolls down
  const isWhiteNavbar = scrolled;

  // Header background class logic:
  // - When scrolled (all pages): white background with border and shadow
  // - When at the top:
  //   - Image-hero pages (Home & About): transparent background
  //   - Text-hero pages (Menu, Contact, Gallery, Reservations): solid dark bg-ink background
  const headerClass = scrolled
    ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-1"
    : isImagePage
    ? "bg-transparent py-3"
    : "bg-ink/95 backdrop-blur-md border-b border-neutral-800/80 shadow-md py-2";

  const brandTextClass = isWhiteNavbar
    ? "text-brand-red"
    : "text-white drop-shadow-md";

  const brandSubtextClass = isWhiteNavbar
    ? "text-brand-green"
    : "text-brand-gold drop-shadow";

  const logoBgClass = isWhiteNavbar
    ? "bg-white shadow-md ring-2 ring-brand-gold/40"
    : "bg-white/95 shadow-lg ring-2 ring-brand-gold/50";

  const navLinkClass = isWhiteNavbar
    ? "text-gray-700 hover:text-brand-red hover:bg-brand-red/5"
    : "text-white/90 hover:text-white hover:bg-white/10";

  const activeLinkClass = isWhiteNavbar
    ? "text-brand-red font-bold"
    : "text-brand-gold font-bold bg-white/5";

  const hamburgerClass = isWhiteNavbar
    ? "text-gray-700 hover:bg-gray-100"
    : "text-white hover:bg-white/10";

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${headerClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between gap-4">

        {/* BRAND */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          {/* Logo badge */}
          <div className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${logoBgClass} w-14 h-14 sm:w-16 sm:h-16 group-hover:scale-105`}>
            <img
              src={logo}
              alt="No Left-Overs Nigeria"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-full"
            />
          </div>

          {/* Brand wordmark */}
          <div className="hidden sm:flex flex-col leading-none">
            <div className="flex items-baseline">
              <span className={`font-display text-2xl sm:text-3xl font-black tracking-tight transition-colors duration-300 ${brandTextClass}`}>
                No Left-Overs
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5 transition-colors duration-300">
              <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${brandSubtextClass}`}>Nigeria</span>
            </div>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-full group ${navLinkClass}`}
              activeProps={{ className: activeLinkClass }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-brand-red rounded-full transition-all duration-300 group-hover:w-4" />
            </Link>
          ))}

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/2349048858123"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 inline-flex items-center gap-2 rounded-full bg-brand-green text-white px-5 py-2.5 text-sm font-bold shadow-lg shadow-brand-green/25 hover:bg-brand-green/90 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-green/30 transition-all duration-200"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.099 1.51 5.828L.057 23.25l5.563-1.461A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.92c-1.902 0-3.67-.512-5.184-1.402l-.371-.221-3.857 1.013 1.033-3.77-.242-.385A9.917 9.917 0 012.08 12C2.08 6.515 6.515 2.08 12 2.08c5.485 0 9.92 4.435 9.92 9.92 0 5.485-4.435 9.92-9.92 9.92z"/>
            </svg>
            Order Now
          </a>
        </nav>

        {/* MOBILE HAMBURGER */}
        <button
          aria-label="Toggle menu"
          id="mobile-menu-btn"
          className={`lg:hidden p-2.5 rounded-full transition-all ${hamburgerClass}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className={`lg:hidden border-t ${isWhiteNavbar ? "border-gray-100 bg-white" : "border-neutral-800 bg-black/98"} backdrop-blur-xl shadow-xl`}>
          <div className="px-4 py-5 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`flex items-center px-4 py-3 text-base font-semibold rounded-xl transition-all ${
                  isWhiteNavbar
                    ? "text-gray-700 hover:text-brand-red hover:bg-brand-red/5"
                    : "text-gray-200 hover:text-brand-gold hover:bg-white/5"
                }`}
                activeProps={{
                  className: isWhiteNavbar ? "text-brand-red bg-brand-red/5" : "text-brand-gold bg-white/5"
                }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://wa.me/2349048858123"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-5 py-3.5 text-base font-bold text-white shadow-md"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.099 1.51 5.828L.057 23.25l5.563-1.461A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.92c-1.902 0-3.67-.512-5.184-1.402l-.371-.221-3.857 1.013 1.033-3.77-.242-.385A9.917 9.917 0 012.08 12C2.08 6.515 6.515 2.08 12 2.08c5.485 0 9.92 4.435 9.92 9.92 0 5.485-4.435 9.92-9.92 9.92z"/>
              </svg>
              Order via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
