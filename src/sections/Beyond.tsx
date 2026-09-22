import { ArrowUpRight, BookOpen, Droplets, Users } from 'lucide-react';
import { beyond, personal } from '../data/portfolio';
import { Reveal, SectionHeading } from '../components/primitives';
import { SmartImage } from '../components/SmartImage';

const icons = [Droplets, Users, BookOpen];

export function Beyond() {
  return (
    <section id="beyond" className="scroll-mt-20 border-t border-white/5" aria-label="Beyond code">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="07"
          kicker="Beyond code"
          title="Engineer in the arena, not just the editor."
          lede="Hackathons, community organizing and audience building — the other half of engineering: teamwork, communication and showing up."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {beyond.map((b, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={b.title} delay={i * 0.08}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#26303D] bg-[#151B23]">
                  <SmartImage
                    src={b.image}
                    alt={b.alt}
                    label={b.title.toUpperCase().slice(0, 18)}
                    category={b.tag}
                    className="aspect-[16/8] w-full"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] text-[#3B82F6]">
                        <Icon size={13} /> {b.tag.toUpperCase()}
                      </span>
                      {b.link && (
                        <a
                          href={b.link}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Open Instagram page"
                          className="text-slate-500 transition hover:text-[#3B82F6]"
                        >
                          <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                    <h3 className="font-display mt-3 text-xl font-bold">{b.title}</h3>
                    <p className="mt-1 text-sm font-medium text-slate-300">{b.headline}</p>
                    <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-slate-400">{b.text}</p>
                    <div className="mt-5 flex flex-wrap items-center gap-1.5 border-t border-[#26303D] pt-4" aria-label="Process">
                      {b.flow.map((f, j) => (
                        <span key={f} className="flex items-center gap-1.5">
                          <span className="rounded-md bg-white/5 px-2 py-1 font-mono text-[11px] text-slate-300">{f}</span>
                          {j < b.flow.length - 1 && <span className="text-[#3B82F6]" aria-hidden="true">→</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-6 grid gap-5 rounded-2xl border border-[#3B82F6]/25 bg-gradient-to-br from-[#3B82F6]/10 to-transparent p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-[#3B82F6]">CONTENT / IMPACT</p>
              <p className="font-display mt-2 text-xl font-bold md:text-2xl">
                Two numbers that prove I ship and people respond: 90K+ followers · 20+ books sold.
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
                Code is half the job. The other half is turning knowledge into something people read, follow and pay
                for — I do both.
              </p>
            </div>
            <a
              href={personal.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 whitespace-nowrap rounded-xl bg-[#3B82F6] px-6 py-3.5 text-sm font-bold text-black transition hover:brightness-110"
            >
              See the page <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
