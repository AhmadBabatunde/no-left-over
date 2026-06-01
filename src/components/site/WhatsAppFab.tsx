import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/2349048858123?text=Hello%20No%20Left-Overs!%20I%27d%20like%20to%20place%20an%20order."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order via WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-brand-green text-white px-4 py-3 shadow-2xl shadow-brand-green/30 hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
    </a>
  );
}
