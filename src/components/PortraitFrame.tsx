import { useState } from 'react';

/**
 * Technical portrait frame — Ali Lazzem identity unit.
 *
 * Tries `/assets/profile.png`, then `/assets/profile.webp` (change PROFILE_SOURCES
 * to reorder or add formats). If no file exists, renders a polished placeholder —
 * the site never shows a broken image.
 *
 * variant="hero"  → large, square, full status header + identity footer
 * variant="about" → smaller, cropped 4/5, condensed header
 */
const PROFILE_SOURCES = ['/assets/profile.png', '/assets/profile.webp'];

function Corner({ className = '' }: { className?: string }) {
  return <span aria-hidden="true" className={`absolute h-4 w-4 border-cyan-400/70 ${className}`} />;
}

function PlaceholderGraphic({ compact = false }: { compact?: boolean }) {
  return (
    <div
      role="img"
      aria-label="Portrait of Ali Lazzem (photo placeholder)"
      className="bg-blueprint relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[#0D1218]"
    >
      <div
        aria-hidden="true"
        className="absolute h-48 w-48 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, #3B82F6, transparent)' }}
      />
      {/* targeting reticle */}
      <svg
        aria-hidden="true"
        viewBox="0 0 120 120"
        className={`${compact ? 'h-20 w-20' : 'h-28 w-28'} text-[#26303D]`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="60" cy="60" r="44" />
        <circle cx="60" cy="60" r="30" strokeDasharray="4 5" className="text-[#3B82F6]/50" />
        <circle cx="60" cy="46" r="10" />
        <path d="M38 84c4-12 12-18 22-18s18 6 22 18" />
        <line x1="60" y1="2" x2="60" y2="12" className="text-cyan-400/70" />
        <line x1="60" y1="108" x2="60" y2="118" className="text-cyan-400/70" />
        <line x1="2" y1="60" x2="12" y2="60" className="text-cyan-400/70" />
        <line x1="108" y1="60" x2="118" y2="60" className="text-cyan-400/70" />
      </svg>
      <p className={`font-display mt-3 font-bold tracking-tight text-slate-100 ${compact ? 'text-base' : 'text-xl'}`}>
        ALI LAZZEM
      </p>
      <p className="mt-1 font-mono text-[10px] tracking-[0.25em] text-slate-500">
        ADD PHOTO → /assets/profile.png
      </p>
    </div>
  );
}

export function PortraitFrame({ variant = 'hero' }: { variant?: 'hero' | 'about' }) {
  const [srcIndex, setSrcIndex] = useState(0);
  const missing = srcIndex >= PROFILE_SOURCES.length;
  const hero = variant === 'hero';

  return (
    <figure
      aria-label="Portrait of Ali Lazzem"
      className="relative rounded-2xl border border-[#26303D] bg-[#0D1218] p-3 shadow-[0_24px_80px_-32px_rgba(59,130,246,0.35)]"
    >
      <Corner className="-left-px -top-px rounded-tl-2xl border-l-2 border-t-2" />
      <Corner className="-right-px -top-px rounded-tr-2xl border-r-2 border-t-2" />
      <Corner className="-bottom-px -left-px rounded-bl-2xl border-b-2 border-l-2" />
      <Corner className="-bottom-px -right-px rounded-br-2xl border-b-2 border-r-2" />

      {/* status header */}
      <div className="flex items-center justify-between px-1.5 pb-2.5 font-mono text-[10px] tracking-[0.2em]">
        <span className="flex items-center gap-1.5 text-slate-400">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping-soft absolute h-full w-full rounded-full bg-cyan-400" />
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          </span>
          {hero ? 'SYSTEM ONLINE' : 'ID.VERIFIED'}
        </span>
        <span className="text-slate-600">AL-01</span>
      </div>

      {/* photo well */}
      <div
        className={`relative overflow-hidden rounded-xl border border-[#3B82F6]/40 ${
          hero ? 'aspect-square' : 'aspect-[4/5]'
        }`}
      >
        {missing ? (
          <PlaceholderGraphic compact={!hero} />
        ) : (
          <img
            src={PROFILE_SOURCES[srcIndex]}
            alt="Portrait of Ali Lazzem"
            loading={hero ? 'eager' : 'lazy'}
            onError={() => setSrcIndex((i) => i + 1)}
            className="h-full w-full bg-[#0D1218] object-cover object-top"
          />
        )}
        {/* very subtle scan sweep — pure decoration, motion-safe */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-frame-sweep absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-transparent via-[#22D3EE]/[0.06] to-transparent" />
        </div>
        {/* bottom fade for legibility of nothing — keeps photo clear */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#080B10]/50 to-transparent"
        />
      </div>

      {/* identity footer */}
      <figcaption className="flex items-end justify-between px-1.5 pt-2.5">
        <span>
          <span className={`font-display block font-bold tracking-tight text-slate-100 ${hero ? 'text-lg' : 'text-sm'}`}>
            ALI LAZZEM
          </span>
          <span className="mt-0.5 block font-mono text-[9.5px] tracking-[0.22em] text-slate-500">
            {hero ? 'AI • SOFTWARE • AUTOMATION' : 'ENSTAB • TUNISIA'}
          </span>
        </span>
        <span aria-hidden="true" className="hairline-gradient mb-1 h-px w-14 opacity-70" />
      </figcaption>
    </figure>
  );
}
