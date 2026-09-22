import { ArrowUpRight } from 'lucide-react';
import { personal, stats } from '../data/portfolio';
import { Reveal, SectionHeading } from '../components/primitives';
import { PortraitFrame } from '../components/PortraitFrame';

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20" aria-label="About">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="01"
          kicker="Identity"
          title="An engineer who connects software to the real world."
          lede="I study Advanced Technology Engineering — but my formation happens in the lab: shipping Django backends, grounding LLMs with retrieval, automating what used to be manual, and explaining it all to 90,000 people."
        />
        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="mx-auto max-w-xs md:max-w-none">
              <PortraitFrame variant="about" />
              <div className="mt-4 rounded-2xl border border-[#26303D] bg-[#151B23] p-5">
                <p className="font-display text-lg font-bold">Ali Lazzem</p>
                <p className="font-mono text-xs text-slate-500">{personal.altRole}</p>
                <p className="mt-3 font-mono text-[11px] leading-relaxed text-slate-600">
                  TUNISIA · {personal.availability.toUpperCase()}
                </p>
              </div>
            </div>
          </Reveal>
          <div className="flex flex-col gap-6">
            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-[#26303D] bg-[#151B23] p-6 md:p-8">
                <p className="font-mono text-[11px] tracking-[0.2em] text-[#3B82F6]">OPERATING_PRINCIPLE</p>
                <p className="font-display mt-3 text-xl leading-snug md:text-2xl">
                  'Take a practical problem. Understand the system behind it. Turn it into a working technical
                  solution — then explain it so others can use it.'
                </p>
                <div className="mt-6 grid gap-4 text-[14px] leading-relaxed text-slate-400 sm:grid-cols-2">
                  <p>
                    My work sits between <strong className="text-slate-200">software, AI, automation</strong> and{' '}
                    <strong className='text-slate-200'>industrial technology</strong> — with detours into FinTech,
                    energy and cybersecurity.
                  </p>
                  <p>
                    Internship at <strong className="text-slate-200">STE NET</strong> taught me to build for real
                    operations. <strong className="text-slate-200">TOPNET</strong> taught me to listen to users. My
                    solo builds taught me everything else.
                  </p>
                </div>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={0.05 * i}>
                  <div className="h-full rounded-2xl border border-[#26303D] bg-white/[0.02] p-5">
                    <p className="font-display text-3xl font-bold text-white">
                      {s.value}
                      <span className="text-[#3B82F6]">{s.suffix}</span>
                    </p>
                    <p className="mt-1.5 text-[13px] font-medium leading-snug text-slate-300">{s.label}</p>
                    <p className="mt-1 font-mono text-[10.5px] leading-snug text-slate-600">{s.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1}>
              <a
                href={personal.instagram}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-[#3B82F6]/25 bg-[#3B82F6]/5 p-5 transition hover:border-[#3B82F6]/60"
              >
                <span>
                  <span className="font-mono text-[11px] tracking-[0.2em] text-[#3B82F6]">PROOF_OF_COMMUNICATION</span>
                  <span className="mt-1 block text-[15px] text-slate-200">
                    90K+ people follow my breakdowns of IT, AI, automation & security.
                  </span>
                </span>
                <ArrowUpRight className="shrink-0 text-[#3B82F6] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
