import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, InstagramIcon } from '../components/icons';
import { personal } from '../data/portfolio';

export function Footer({ eggCount }: { eggCount: number }) {
  return (
    <footer className="border-t border-[#26303D]" aria-label="Footer">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-display text-lg font-bold">{personal.name}</p>
          <p className="font-mono text-[11px] tracking-widest text-slate-500">{personal.role.toUpperCase()}</p>
          <p className="mt-2 font-mono text-[11px] text-slate-600">
            © {new Date().getFullYear()} {personal.name} · Built with React
            {eggCount > 0 && <span className="text-[#3B82F6]"> · lab-rat lvl.{eggCount} 🐀</span>}
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          {[
            { icon: GithubIcon, href: personal.github, label: 'GitHub' },
            { icon: InstagramIcon, href: personal.instagram, label: 'Instagram' },
            { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-lg border border-[#26303D] text-slate-400 transition hover:border-[#3B82F6]/60 hover:text-[#3B82F6]"
            >
              <Icon size={17} />
            </a>
          ))}
          <a
            href="#top"
            aria-label="Back to top"
            className="grid h-10 w-10 place-items-center rounded-lg bg-[#3B82F6] text-black transition hover:brightness-110"
          >
            <ArrowUp size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
