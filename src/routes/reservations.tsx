import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Order & Contact — No Left-Overs Nigeria" },
      { name: "description", content: "Order authentic Nigerian food from No Left-Overs Nigeria in Gbagada, Lagos. Order via WhatsApp or call us directly." },
    ],
  }),
  component: OrderPage,
});

function OrderPage() {
  return (
    <SiteLayout>
      <section className="py-16 sm:py-24 bg-ink text-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">Order</span>
          <h1 className="mt-3 font-display text-5xl sm:text-7xl font-bold">Order From Us</h1>
          <p className="mt-4 text-cream/80">Gbagada, Lagos · By Corona School, 7 Sawyer Crescent</p>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center space-y-8">
          <p className="text-lg text-muted-foreground">The easiest way to order from No Left-Overs is via WhatsApp or phone call. We'll confirm your order and delivery details with you directly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/2349048858123" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-8 py-4 font-semibold text-white shadow-xl hover:-translate-y-0.5 transition-all">
              Order via WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
            <a href="tel:+2349048858123" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-4 font-semibold text-white shadow-xl hover:-translate-y-0.5 transition-all">
              Call 09048858123
            </a>
          </div>
          <div className="pt-4">
            <Link to="/menu" className="text-brand-red font-semibold hover:underline">Browse our menu first →</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
