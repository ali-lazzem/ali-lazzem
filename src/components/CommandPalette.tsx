import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, CornerDownLeft, Search } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { navLinks, personal, projects } from '../data/portfolio';

export function CommandPalette({
  open,
  onClose,
  onEgg,
}: {
  open: boolean;
  onClose: () => void;
  onEgg: () => void;
}) {
  const [q, setQ] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items = useMemo(() => {
    const base = [
      ...navLinks.map((l) => ({ label: `Go → ${l.label}`, hint: l.hint, href: l.href, external: false })),
      { label: 'GitHub → @ali-lazzem', hint: 'code', href: personal.github, external: true },
      { label: 'Instagram → tech page', hint: '90K audience', href: personal.instagram, external: true },
      { label: `Email → ${personal.email}`, hint: 'contact', href: `mailto:${personal.email}`, external: true },
      ...projects.map((p) => ({ label: `Project → ${p.title}`, hint: p.type, href: `#project-${p.id}`, external: false })),
    ];
    const query = q.trim().toLowerCase();
    if (query === 'sudo hire ali') return [{ label: 'EXECUTE: sudo hire ali', hint: 'easter egg', href: '#egg', external: false }];
    if (!query) return base;
    return base.filter((i) => (i.label + i.hint).toLowerCase().includes(query));
  }, [q]);

  useEffect(() => {
    if (open) {
      setQ('');
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open ]);

  useEffect(() => {
    setActive(0);
  }, [q]);

  function go(item: { href: string; external: boolean }) {
    onClose();
    if (item.href === '#egg') {
      onEgg();
      return;
    }
    if (item.external) {
      window.open(item.href, '_blank', 'noopener');
      return;
    }
    setTimeout(() => {
      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
    }, 60);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] bg-black/70 p-4 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-24 max-w-lg overflow-hidden rounded-2xl border border-[#26303D] bg-[#0D1218] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-[#26303D] px-4 py-3">
              <Search size={16} className="shrink-0 text-[#3B82F6]" />
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setActive((a) => Math.min(a + 1, items.length - 1));
                  } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    setActive((a) => Math.max(a - 1, 0));
                  } else if (e.key === 'Enter') {
                    const it = items[active];
                    if (it) go(it);
                  } else if (e.key === 'Escape') onClose();
                }}
                placeholder="Type a command… (try: sudo hire ali)"
                className="w-full bg-transparent font-mono text-sm text-white outline-none placeholder:text-slate-600"
                aria-label="Search commands"
              />
              <kbd className="rounded border border-[#26303D] px-1.5 py-0.5 font-mono text-[10px] text-slate-500">ESC</kbd>
            </div>
            <ul className="max-h-72 overflow-auto p-2" role="listbox">
              {items.length === 0 && (
                <li className="px-3 py-6 text-center font-mono text-xs text-slate-600">no matching command_</li>
              )}
              {items.map((it, i) => (
                <li key={it.label}>
                  <button
                    onClick={() => go(it)}
                    onMouseEnter={() => setActive(i)}
                    role="option"
                    aria-selected={i === active}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${
                      i === active ? 'bg-[#3B82F6]/10 text-white' : 'text-slate-400'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {it.external ? <ArrowUpRight size={14} /> : <CornerDownLeft size={13} className="text-slate-600" />}
                      {it.label}
                    </span>
                    <span className="font-mono text-[11px] text-slate-600">{it.hint}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
