import { education, journey } from '../data/portfolio';
import { Reveal, SectionHeading } from '../components/primitives';

export function Journey() {
  return (
    <section id="journey" className="scroll-mt-20 border-t border-white/5" aria-label="Engineering journey">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="05"
          kicker="Engineering journey"
          title="From Bac to building."
          lede="A multidisciplinary path: computer-science Bac, intensive IPEIB prep, then Advanced Technology Engineering at ENSTAB — layered with company work, solo builds and community."
        />

        <div className="mb-14 grid gap-4 md:grid-cols-3">
          {education.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.08}>
              <article className="relative h-full overflow-hidden rounded-2xl border border-[#26303D] bg-[#151B23] p-6">
                <span className="font-display text-5xl font-bold text-white/8" aria-hidden="true">
                  {e.step}
                </span>
                <h3 className="font-display -mt-2 text-lg font-bold">{e.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-slate-400">{e.detail}</p>
                {i < 2 && (
                  <span className="absolute right-5 top-6 font-mono text-[#3B82F6]" aria-hidden="true">
                    ↓
                  </span>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <ol className="relative ml-2 border-l border-[#26303D] pl-0 md:ml-4">
          {journey.map((j, i) => (
            <Reveal key={j.title} delay={Math.min(i * 0.04, 0.2)}>
              <li className="relative pb-8 pl-10 last:pb-0 md:pl-14">
                <span
                  className={`absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border-2 ${
                    j.year === 'Now' ? 'border-[#3B82F6] bg-[#3B82F6]' : 'border-[#3B82F6]/60 bg-[#080B10]'
                  }`}
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-baseline gap-3">
                  <span
                    className={`rounded-md px-2.5 py-1 font-mono text-[11px] tracking-widest ${
                      j.year === 'Now' ? 'bg-[#3B82F6] font-bold text-black' : 'bg-white/5 text-[#3B82F6]'
                    }`}
                  >
                    {j.year.toUpperCase()}
                  </span>
                  <h3 className="font-display text-lg font-bold md:text-xl">{j.title}</h3>
                </div>
                <p className="mt-1.5 max-w-2xl text-[14px] leading-relaxed text-slate-400">{j.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
