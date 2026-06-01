import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

const InstagramIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
);
const FacebookIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.4-2 2-2h2V2h-3c-3 0-5 1.8-5 5v3H6v4h3v8h4z"/></svg>
);
const TwitterIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M18.244 2H21l-6.52 7.45L22 22h-6.83l-4.78-6.26L4.8 22H2l7.03-8.03L2 2h6.96l4.33 5.74L18.244 2zm-2.39 18h1.87L8.24 4H6.26l9.594 16z"/></svg>
);
import logo from "@/assets/logo-brand.png";

export function Footer() {
  return (
    <footer className="bg-ink text-cream mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-16 w-16 object-contain" />
            <div>
              <div className="font-display text-lg font-bold">No Left-Overs</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-brand-gold">Nigeria</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-cream/70 max-w-xs">
            From N1,000 and a pot of Moin-Moin to millions in annual turnover — the taste of Lagos's most beloved catering brand.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="https://www.instagram.com/noleftovers_ng" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-full bg-brand-red/90 hover:bg-brand-red transition-colors">
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-brand-red/90 hover:bg-brand-red transition-colors">
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Twitter" className="p-2 rounded-full bg-brand-red/90 hover:bg-brand-red transition-colors">
              <TwitterIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-gold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><Link to="/about" className="hover:text-brand-gold">About</Link></li>
            <li><Link to="/menu" className="hover:text-brand-gold">Menu</Link></li>
            <li><Link to="/gallery" className="hover:text-brand-gold">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-brand-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-gold mb-4">Visit</h4>
          <ul className="space-y-3 text-sm text-cream/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-brand-red shrink-0" /> By Corona School, 7 Sawyer Crescent, Gbagada, Lagos 100234</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-brand-red shrink-0" /> 09048858123</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-brand-red shrink-0" /> info@noleftovers-ng.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-gold mb-4">Order Online</h4>
          <p className="text-sm text-cream/70 mb-4">Order your favourite Nigerian dishes fresh from our kitchen.</p>
          <a
            href="https://wa.me/2349048858123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-green/90 transition-all"
          >
            Order via WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream/50">
          <span>© {new Date().getFullYear()} No Left-Overs Nigeria Ltd. All rights reserved.</span>
          <span>Made with pride in Gbagada, Lagos.</span>
        </div>
      </div>
    </footer>
  );
}
