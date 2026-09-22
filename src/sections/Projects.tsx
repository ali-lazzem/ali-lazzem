import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { filters, projects, type Project, type ProjectCategory } from '../data/portfolio';
import { Reveal, SectionHeading } from '../components/primitives';
import { SmartImage } from '../components/SmartImage';

export function Projects({ onOpen }: { onOpen: (p: Project) => void }) {
  const [filter, setFilter] = useState<'All' | ProjectCategory>('All');
  const list = filter === 'All' ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <section id="projects" className="scroll-mt-20 border-t border-white/5 bg-black/20" aria-label="All projects">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="06"
          kicker="Project index"
          title="Six builds. Six problem statements."
          lede="Filter by domain. Every card opens a full case study: problem, idea, technology, result — no filler."
        />

        <Reveal>
          <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by domain">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`rounded-full px-4 py-2 font-mono text-xs tracking-wide transition ${
                  filter === f
                    ? 'bg-[#3B82F6] font-bold text-black'
                    : 'border border-white/12 text-slate-400 hover:border-[#3B82F6]/50 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={Math.min(i * 0.05, 0.2)}>
              <article
                id={`project-${p.id}`}
                className="group flex h-full scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-[#26303D] bg-[#151B23] transition-all hover:-translate-y-1 hover:border-[#3B82F6]/35 hover:shadow-[0_20px_60px_-20px_rgba(59,130,246,0.25)]"
              >
                <button onClick={() => onOpen(p)} className="block text-left" aria-label={`Open ${p.title} case study`}>
                  <SmartImage
                    src={p.image}
                    alt={p.alt}
                    label={p.visualLabel}
                    category={p.type}
                    className="aspect-[16/9] w-full"
                  />
                </button>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-[#3B82F6]">{p.index}</span>
                    <span className="text-slate-600">{p.categories.join(' · ').toUpperCase()}</span>
                  </div>
                  <h3 className="font-display mt-2 text-xl font-bold leading-tight">{p.title}</h3>
                  <p className="mt-1.5 flex-1 text-[13.5px] leading-relaxed text-slate-400">{p.short}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 4).map((s) => (
                      <span key={s} className="rounded bg-white/5 px-2 py-0.5 font-mono text-[11px] text-slate-400">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2 border-t border-[#26303D] pt-4">
                    <button
                      onClick={() => onOpen(p)}
                      className="flex-1 rounded-lg bg-white/8 py-2 text-[13px] font-semibold text-white transition group-hover:bg-[#3B82F6] group-hover:text-black"
                    >
                      Case study
                    </button>
                    {p.github ? (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.title} source code`}
                        onClick={(e) => e.stopPropagation()}
                        className="grid h-9 w-9 place-items-center rounded-lg border border-white/12 text-slate-400 transition hover:border-[#3B82F6]/60 hover:text-white"
                      >
                        <ArrowUpRight size={15} />
                      </a>
                    ) : (
                      <span className="grid h-9 px-2 place-items-center rounded-lg border border-[#26303D] font-mono text-[10px] text-slate-600">
                        {p.status.toUpperCase().slice(0, 14)}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-center font-mono text-xs text-slate-600">
            more experiments live on{' '}
            <a
              href="https://github.com/ali-lazzem"
              target="_blank"
              rel="noreferrer"
              className="text-[#3B82F6] underline-offset-4 hover:underline"
            >
              github.com/ali-lazzem
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
