import { Building2, Headset } from 'lucide-react';
import { experience } from '../data/portfolio';
import { Reveal, SectionHeading } from '../components/primitives';

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-white/5" aria-label="Experience">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="03"
          kicker="Experience"
          title="Tested inside real companies."
          lede="One internship building production-shaped software, one support role learning how users actually experience systems."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border border-[#26303D] bg-[#151B23] p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#3B82F6]/10 text-[#3B82F6]">
                    {i === 0 ? <Building2 size={22} /> : <Headset size={22} />}
                  </span>
                  <span className="rounded-full border border-[#26303D] px-3 py-1 font-mono text-[11px] text-slate-400">
                    {job.period}
                  </span>
                </div>
                <h3 className="font-display mt-5 text-2xl font-bold">{job.company}</h3>
                <p className="mt-1 text-sm font-medium text-[#3B82F6]">{job.role}</p>
                <p className="mt-3 border-l-2 border-[#3B82F6]/50 pl-3 font-mono text-[12px] leading-relaxed text-slate-500">
                  {job.narrative}
                </p>
                <ul className="mt-5 flex-1 space-y-3">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-[14px] leading-relaxed text-slate-300">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B82F6]" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-[#26303D] pt-5">
                  {job.stack.map((s) => (
                    <span key={s} className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-400">
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
