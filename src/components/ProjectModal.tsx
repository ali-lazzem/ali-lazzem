import { AnimatePresence, motion } from 'framer-motion';
import { AlertTriangle, ArrowUpRight, X } from 'lucide-react';
import { useEffect } from 'react';
import type { Project } from '../data/portfolio';
import { SmartImage } from './SmartImage';

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (project) {
      window.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[75] overflow-y-auto bg-black/75 p-4 backdrop-blur-sm md:p-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} details`}
        >
          <motion.article
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 32, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[#26303D] bg-[#0D1218]"
          >
            <div className="relative">
              <SmartImage
                src={project.image}
                alt={project.alt}
                label={project.visualLabel}
                category={project.type}
                className="aspect-[16/8] w-full"
                eager
              />
              <button
                onClick={onClose}
                aria-label="Close project details"
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-[#3B82F6] hover:text-black"
              >
                <X size={17} />
              </button>
            </div>
            <div className="p-6 md:p-9">
              <p className="font-mono text-xs tracking-[0.2em] text-[#3B82F6]">
                {project.index} / {project.type.toUpperCase()}
              </p>
              <h3 className="font-display mt-2 text-2xl font-bold md:text-4xl">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{project.short}</p>

              <dl className="mt-7 grid gap-5 md:grid-cols-2">
                {[
                  ['Problem', project.problem],
                  ['Idea', project.idea],
                  ['Solution', project.solution],
                  ['Result', project.result],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-xl border border-[#26303D] bg-white/[0.02] p-4">
                    <dt className="mb-1.5 font-mono text-[11px] tracking-[0.2em] text-slate-500">{k.toUpperCase()}</dt>
                    <dd className="text-[13.5px] leading-relaxed text-slate-300">{v}</dd>
                  </div>
                ))}
              </dl>

              {project.disclaimer && (
                <p className="mt-5 flex gap-2 rounded-xl border border-sky-400/20 bg-sky-400/5 p-3.5 text-[13px] leading-relaxed text-sky-200/90">
                  <AlertTriangle size={15} className="mt-0.5 shrink-0" />
                  {project.disclaimer}
                </p>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[#26303D] bg-white/5 px-3 py-1 font-mono text-xs text-slate-300"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-[#26303D] pt-6">
                <span className="font-mono text-xs text-slate-500">STATUS: {project.status}</span>
                <span className="flex-1" />
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 rounded-lg border border-white/15 px-4 py-2 text-sm text-white transition hover:border-[#3B82F6]"
                  >
                    GitHub <ArrowUpRight size={15} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 rounded-lg bg-[#3B82F6] px-4 py-2 text-sm font-bold text-black"
                  >
                    Live demo <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
