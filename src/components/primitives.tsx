import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  index,
  kicker,
  title,
  lede,
}: {
  index: string;
  kicker: string;
  title: string;
  lede?: string;
}) {
  return (
    <Reveal>
      <div className="mb-10 max-w-3xl md:mb-14">
        <p className="mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-[#3B82F6]">
          <span className="text-slate-600">{index}</span>
          <span className="h-px w-10 bg-[#3B82F6]/60" aria-hidden="true" />
          {kicker.toUpperCase()}
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-balance md:text-5xl">{title}</h2>
        {lede && <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-400">{lede}</p>}
      </div>
    </Reveal>
  );
}
