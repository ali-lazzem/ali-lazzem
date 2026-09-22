import { useState } from 'react';
import { Cpu } from 'lucide-react';

/** Image with graceful fallback: if /assets/<src> is missing, show a premium placeholder. */
export function SmartImage({
  src,
  alt,
  label,
  category,
  className = '',
  eager = false,
}: {
  src?: string;
  alt: string;
  label: string;
  category: string;
  className?: string;
  eager?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={`${alt} (preview placeholder)`}
        className={`relative flex min-h-[220px] flex-col justify-between overflow-hidden bg-[#151B23] p-5 ${className}`}
      >
        <div className="bg-blueprint absolute inset-0" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="absolute -right-10 -top-10 h-44 w-44 rounded-full opacity-25 blur-2xl"
          style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)' }}
        />
        <div className="relative flex items-center justify-between font-mono text-[11px] tracking-widest text-slate-500">
          <span className="flex items-center gap-2">
            <Cpu size={13} className="text-[#3B82F6]" /> {category}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
            PREVIEW / SOON
          </span>
        </div>
        <div className="relative">
          <p className="font-display text-2xl font-bold tracking-tight text-slate-100">{label}</p>
          <p className="mt-1 font-mono text-[11px] text-slate-500">Add image → /public/assets/</p>
        </div>
      </div>
    );
  }
  return (
    <img
      src={`/assets/${src}`}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      onError={() => setFailed(true)}
      className={`bg-[#151B23] object-cover ${className}`}
    />
  );
}
