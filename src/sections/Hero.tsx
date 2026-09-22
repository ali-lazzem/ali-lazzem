import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { heroNodes, personal } from '../data/portfolio';
import { Magnetic } from '../components/Magnetic';
import { GithubIcon, InstagramIcon } from '../components/icons';
import { PortraitFrame } from '../components/PortraitFrame';

function useTypewriter(words: string[]) {
  const [text, setText] = useState('');
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) {
      setText(words[0]);
      return;
    }
    let wi = 0;
    let ci = 0;
    let del = false;
    let t: ReturnType<typeof setTimeout>;
    function tick() {
      const word = words[wi];
      ci += del ? -1 : 1;
      setText(word.slice(0, ci));
      let ms = del ? 32 : 62;
      if (!del && ci === word.length) {
        ms = 1600;
        del = true;
      } else if (del && ci === 0) {
        del = false;
        wi = (wi + 1) % words.length;
        ms = 350;
      }
      t = setTimeout(tick, ms);
    }
    tick();
    return () => clearTimeout(t);
  }, [reduce]);
  return text;
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const typed = useTypewriter(['inventory systems', 'RAG assistants', 'fintech tools', 'vision interfaces', 'trading algorithms']);

  return (
    <section ref={ref} id="top" className="relative overflow-hidden pt-16" aria-label="Introduction">
      <motion.div style={{ y: yBg }} aria-hidden="true" className="bg-blueprint absolute inset-0" />
      <div aria-hidden="true" className="atmos-glow absolute inset-x-0 top-0 h-72" />
      <div aria-hidden="true" className="hairline-gradient absolute inset-x-0 top-0 h-px opacity-70" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-12 md:grid-cols-[1.12fr_0.88fr] md:items-center md:gap-14 md:px-8 md:pt-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex flex-wrap items-center gap-2 rounded-full border border-[#26303D] bg-[#151B23] px-4 py-1.5 font-mono text-[11px] tracking-[0.18em] text-slate-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            {personal.role.toUpperCase()}
            <span className="hidden items-center gap-1 text-slate-500 sm:flex">
              · <MapPin size={11} /> {personal.location}
            </span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display text-[13vw] font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl"
          >
            ALI LAZZEM
            <span className="mt-3 block max-w-xl text-balance text-[5.4vw] font-medium leading-tight text-slate-300 sm:text-2xl md:text-[1.7rem]">
              {personal.tagline}
            </span>
          </motion.h1>

          {/* portrait — mobile order: name → headline → portrait → description → buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14 }}
            className="mx-auto mt-8 max-w-sm md:hidden"
          >
            <PortraitFrame variant="hero" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate-400"
          >
            {personal.support}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-5 h-6 font-mono text-[13px] text-[#3B82F6]"
            aria-live="polite"
          >
            <span className="text-slate-600">$ currently_building — </span>
            {typed}
            <span className="animate-caret ml-0.5 inline-block h-4 w-[7px] translate-y-[3px] bg-cyan-400" />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <a
                href="#work"
                className="group flex items-center gap-2 rounded-lg bg-[#3B82F6] px-6 py-3.5 text-sm font-bold text-black transition hover:bg-[#5a94f7] hover:shadow-[0_8px_32px_-8px_rgba(59,130,246,0.6)]"
              >
                View My Work
                <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="flex items-center gap-2 rounded-lg border border-[#26303D] bg-transparent px-6 py-3.5 text-sm font-semibold text-slate-100 transition hover:border-[#3B82F6]"
              >
                Let's Connect <ArrowUpRight size={16} />
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-8 flex items-center gap-4"
          >
            {[
              { icon: GithubIcon, href: personal.github, label: 'GitHub profile' },
              { icon: InstagramIcon, href: personal.instagram, label: 'Instagram tech page' },
              { icon: Mail, href: `mailto:${personal.email}`, label: 'Email Ali' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-lg border border-[#26303D] text-slate-400 transition hover:border-[#3B82F6] hover:text-[#3B82F6]"
              >
                <Icon size={17} />
              </a>
            ))}
            <span className="hidden font-mono text-[11px] text-slate-600 sm:block">press CTRL+K to navigate_</span>
          </motion.div>
        </div>

        {/* portrait — desktop right column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:block"
        >
          <PortraitFrame variant="hero" />
          <div className="mt-4 flex flex-wrap gap-2">
            {heroNodes.map((n) => (
              <span key={n} className="rounded-full bg-[#151B23] px-3 py-1 font-mono text-[11px] text-slate-400">
                {n}
              </span>
            ))}
          </div>
          <p className="mt-3 font-mono text-[11px] leading-relaxed text-slate-600">
            {'// every domain above is backed by a shipped project — scroll to inspect'}
          </p>
        </motion.div>
      </div>

      <div className="relative border-y border-[#26303D] bg-black/30">
        <div className="flex overflow-hidden" aria-hidden="true">
          <div className="animate-marquee flex shrink-0 items-center gap-8 whitespace-nowrap py-3 pr-8 font-mono text-xs tracking-[0.2em] text-slate-500">
            {Array.from({ length: 2 }).flatMap((_, k) =>
              ['REACT', 'DJANGO', 'RAG / LLMs', 'FAISS', 'AUTOMATION', 'COMPUTER VISION', 'FINTECH', 'CYBERSECURITY', 'TRADING ALGOS', 'INDUSTRIAL TECH'].map(
                (t, i) => (
                  <span key={`${k}-${i}`} className="flex items-center gap-8">
                    {t} <span className="text-[#3B82F6]">✦</span>
                  </span>
                ),
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
