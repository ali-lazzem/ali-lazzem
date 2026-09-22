import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navLinks, personal } from '../data/portfolio';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // scroll-spy: highlight the section currently in view
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        }
      },
      { rootMargin: '-35% 0px -60% 0px' },
    );
    navLinks.forEach((l) => {
      const el = document.getElementById(l.href.slice(1));
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open ]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all ${
          scrolled ? 'glass border-[#26303D]' : 'border-transparent bg-transparent'
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8"
        >
          <a href="#top" className="group flex items-center gap-3" aria-label="Back to top">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#3B82F6] font-mono text-sm font-bold text-black">
              AL
            </span>
            <span className="leading-tight">
              <span className="font-display block text-sm font-bold tracking-wide">{personal.labName}</span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-slate-500">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping-soft absolute h-full w-full rounded-full bg-cyan-400" />
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                </span>
                SYS.ONLINE
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={active === l.href ? 'true' : undefined}
                  className={`rounded-md px-3 py-2 text-[13px] transition ${
                    active === l.href
                      ? 'bg-[#3B82F6]/10 font-semibold text-[#3B82F6]'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden items-center gap-1 rounded-lg bg-[#3B82F6] px-4 py-2 text-[13px] font-semibold text-black transition hover:brightness-110 sm:flex"
            >
              Hire me <ArrowUpRight size={15} />
            </a>
            <button
              onClick={() => setOpen(true)}
              className="grid h-9 w-9 place-items-center rounded-lg border border-[#26303D] text-slate-200 lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu size={18} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-[#080B10]/95 backdrop-blur-xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <span className="font-mono text-xs tracking-[0.25em] text-[#3B82F6]">NAV.SYS</span>
              <button
                onClick={() => setOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-lg border border-[#26303D] text-white"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center gap-1 px-8">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.35 }}
                  className="group flex items-baseline gap-4 border-b border-white/5 py-4"
                >
                  <span className="font-mono text-xs text-[#3B82F6]">0{i + 1}</span>
                  <span
                    className={`font-display text-3xl font-bold group-active:text-[#3B82F6] ${
                      active === l.href ? 'text-[#3B82F6]' : 'text-white'
                    }`}
                  >
                    {l.label}
                  </span>
                  <span className="font-mono text-xs text-slate-600">{l.hint}</span>
                </motion.a>
              ))}
              <div className="mt-8 flex gap-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex-1 rounded-xl bg-[#3B82F6] py-3 text-center text-sm font-bold text-black"
                >
                  Email me
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-xl border border-white/15 py-3 text-center text-sm text-white"
                >
                  GitHub
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
