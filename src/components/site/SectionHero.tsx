import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  image: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative -mt-20 h-[60vh] min-h-[420px] w-full overflow-hidden flex items-end">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pb-16 pt-32 text-cream">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold"
          >
            {eyebrow}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mt-4 font-display text-4xl sm:text-6xl font-bold text-balance max-w-3xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-4 max-w-2xl text-base sm:text-lg text-cream/85"
          >
            {subtitle}
          </motion.p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
