import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { GithubIcon, InstagramIcon } from '../components/icons';
import { personal } from '../data/portfolio';
import { Reveal, SectionHeading } from '../components/primitives';

export function Contact() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard?.writeText(personal.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-white/5 bg-black/20" aria-label="Contact">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="08"
          kicker="Contact"
          title="Have a problem worth building a solution for?"
          lede="Internships, PFE projects, freelance builds, collaborations — or just a good technical conversation. My inbox is open."
        />
        <Reveal>
          <div className="mx-auto max-w-2xl rounded-2xl border border-[#26303D] bg-[#151B23] p-6 md:p-8">
            <p className="font-display text-3xl font-bold leading-tight md:text-4xl">
              Let's talk<span className="text-gradient">.</span>
            </p>
            <button
              onClick={copyEmail}
              className="group mt-5 flex w-full items-center justify-between gap-3 rounded-xl border border-[#26303D] bg-white/[0.03] px-4 py-3.5 font-mono text-[13px] text-slate-200 transition hover:border-[#3B82F6]/50"
              aria-label="Copy email address"
            >
              <span className="truncate">{personal.email}</span>
              {copied ? <Check size={15} className="shrink-0 text-cyan-400" /> : <Copy size={15} className="shrink-0 text-slate-500 group-hover:text-[#3B82F6]" />}
            </button>
            {copied && <p className="mt-2 font-mono text-[11px] text-cyan-400">copied to clipboard ✓</p>}
            <div className="mt-4 grid gap-2.5">
              {[
                { icon: GithubIcon, label: 'GitHub — @ali-lazzem', href: personal.github },
                { icon: InstagramIcon, label: 'Instagram — tech page', href: personal.instagram },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center justify-between rounded-xl border border-[#26303D] px-4 py-3 text-sm text-slate-300 transition hover:border-[#3B82F6]/50 hover:text-white"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[#3B82F6]"><Icon size={16} /></span> {label}
                  </span>
                  <ArrowUpRight size={15} className="text-slate-600" />
                </a>
              ))}
            </div>
            <p className="mt-6 font-mono text-[11px] leading-relaxed text-slate-600">
              AVG_RESPONSE: ~24H · LOCATION: TUNISIA (REMOTE OK)
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
