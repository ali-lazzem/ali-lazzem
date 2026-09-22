import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects, type Project } from '../data/portfolio';
import { Reveal, SectionHeading } from '../components/primitives';
import { SmartImage } from '../components/SmartImage';
import { Tilt } from '../components/Magnetic';

function FeaturedRow({
  project,
  flip,
  onOpen,
}: {
  project: Project;
  flip: boolean;
  onOpen: (p: Project) => void;
}) {
  return (
    <Reveal>
      <article
        id={`project-${project.id}`}
        className={`grid scroll-mt-24 gap-0 overflow-hidden rounded-2xl border border-[#26303D] bg-[#151B23] transition-colors hover:border-[#3B82F6]/30 md:grid-cols-2 ${
          flip ? 'md:[&>*:first-child]:order-2' : ''
        }`}
      >
        <button
          onClick={() => onOpen(project)}
          className="group relative block text-left"
          aria-label={`Open ${project.title} details`}
        >
          <SmartImage
            src={project.image}
            alt={project.alt}
            label={project.visualLabel}
            category={project.type}
            className="aspect-[16/10] w-full transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 font-mono text-[11px] tracking-widest text-[#3B82F6] backdrop-blur">
            {project.index} · FEATURED
          </span>
        </button>
        <div className="flex flex-col justify-center p-6 md:p-9">
          <p className="font-mono text-[11px] tracking-[0.2em] text-slate-500">{project.type.toUpperCase()}</p>
          <h3 className="font-display mt-2 text-2xl font-bold md:text-3xl">{project.title}</h3>
          <p className="mt-2 text-[14px] text-slate-400">{project.short}</p>
          <div className="mt-4 space-y-2.5 text-[13.5px] leading-relaxed">
            <p className="text-slate-400">
              <span className="font-mono text-[11px] text-[#3B82F6]">PROBLEM → </span>
              {project.problem}
            </p>
            <p className="text-slate-300">
              <span className="font-mono text-[11px] text-[#3B82F6]">BUILD → </span>
              {project.solution.split('.')[0]}.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 5).map((s) => (
              <span key={s} className="rounded-full border border-[#26303D] px-2.5 py-0.5 font-mono text-[11px] text-slate-400">
                {s}
              </span>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3">
            <button
              onClick={() => onOpen(project)}
              className="group flex items-center gap-1.5 rounded-lg bg-white px-4 py-2.5 text-[13px] font-bold text-black transition hover:bg-[#3B82F6]"
            >
              Case study <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </button>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 rounded-lg border border-white/15 px-4 py-2.5 text-[13px] text-slate-300 transition hover:border-[#3B82F6]/60 hover:text-white"
              >
                Code <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function SelectedWork({ onOpen }: { onOpen: (p: Project) => void }) {
  const featured = projects.filter((p) => p.featured);
  return (
    <section id="work" className="scroll-mt-20 border-t border-white/5 bg-black/20" aria-label="Selected work">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="02"
          kicker="Selected work"
          title="Evidence, not adjectives."
          lede="Four builds that show range: an industrial system that shipped, a FinTech app in progress, a grounded AI assistant, and a published book people paid for."
        />
        <div className="grid gap-6">
          {featured.map((p, i) => (
            <Tilt key={p.id} className="h-full">
              <FeaturedRow project={p} flip={i % 2 === 1} onOpen={onOpen} />
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
