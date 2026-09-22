import { Bot, Brain, Code2, Database, Factory, Wrench } from 'lucide-react';
import { skillGroups } from '../data/portfolio';
import { Reveal, SectionHeading } from '../components/primitives';

const icons: Record<string, typeof Code2> = {
  code: Code2,
  brain: Brain,
  bot: Bot,
  db: Database,
  tool: Wrench,
  factory: Factory,
};

export function Skills() {
  return (
    <section id="stack" className="scroll-mt-20 border-t border-white/5 bg-black/20" aria-label="Skills">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="04"
          kicker="Technology stack"
          title="Every tool earned its place."
          lede="No percentage bars, no buzzword walls. Each technology below is tied to something I actually built — hover any tag to see where it was used."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => {
            const Icon = icons[g.icon] ?? Code2;
            return (
              <Reveal key={g.title} delay={(i % 3) * 0.07}>
                <article className="h-full rounded-2xl border border-[#26303D] bg-[#151B23] p-6 transition-colors hover:border-[#3B82F6]/25">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 text-[#3B82F6]">
                      <Icon size={19} />
                    </span>
                    <h3 className="font-display text-[17px] font-bold">{g.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {g.skills.map((s) => (
                      <span
                        key={s.name}
                        title={s.usedIn ? `Used in: ${s.usedIn}` : s.name}
                        className={`cursor-default rounded-full border px-2.5 py-1 font-mono text-[11.5px] transition ${
                          s.usedIn
                            ? 'border-[#3B82F6]/30 bg-[#3B82F6]/8 text-slate-200 hover:bg-[#3B82F6]/15'
                            : 'border-[#26303D] bg-white/[0.03] text-slate-400'
                        }`}
                      >
                        {s.name}
                        {s.usedIn && <span className="ml-1.5 text-[#3B82F6]">●</span>}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 font-mono text-[10.5px] text-slate-600">
                    <span className="text-[#3B82F6]">●</span> = battle-tested in a real build
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
