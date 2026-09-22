import { useCallback, useEffect, useState } from 'react';
import { CommandPalette } from './components/CommandPalette';
import { Navbar } from './components/Navbar';
import { ProjectModal } from './components/ProjectModal';
import { About } from './sections/About';
import { Beyond } from './sections/Beyond';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { Footer } from './sections/Footer';
import { Hero } from './sections/Hero';
import { Journey } from './sections/Journey';
import { Projects } from './sections/Projects';
import { SelectedWork } from './sections/SelectedWork';
import { Skills } from './sections/Skills';
import type { Project } from './data/portfolio';
import { projects } from './data/portfolio';

export default function App() {
  const [palette, setPalette] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [eggCount, setEggCount] = useState(0);
  const [eggToast, setEggToast] = useState(false);

  const openProject = useCallback((p: Project) => setActiveProject(p), []);

  const triggerEgg = useCallback(() => {
    setEggCount((c) => c + 1);
    setEggToast(true);
    console.log(
      '%c LAZZEM.LAB %c access granted — you found the backdoor. An engineer who reads consoles is an engineer worth hiring. → alilazzem.bus@gmail.com ',
      'background:#3B82F6;color:#000;font-weight:bold',
      'background:#111;color:#3B82F6',
    );
    setTimeout(() => setEggToast(false), 3200);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPalette((v) => !v);
      }
    }
    window.addEventListener('keydown', onKey);
    // console easter egg for the curious
    console.log(
      "%c> LAZZEM.LAB — psst. Press Ctrl+K, then type 'sudo hire ali'.",
      'font-family:monospace;color:#3B82F6',
    );
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // deep-link support: #project-<id> opens the modal
  useEffect(() => {
    function check() {
      const m = window.location.hash.match(/^#project-(.+)$/);
      if (m) {
        const found = projects.find((p) => p.id === m[1]);
        if (found) setActiveProject(found);
      }
    }
    check();
    window.addEventListener('hashchange', check);
    return () => window.removeEventListener('hashchange', check);
  }, []);

  return (
    <div className="grain min-h-screen bg-[#080B10] text-[#F1F5F9] antialiased">
      <a href="#about" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SelectedWork onOpen={openProject} />
        <Experience />
        <Skills />
        <Journey />
        <Projects onOpen={openProject} />
        <Beyond />
        <Contact />
      </main>
      <Footer eggCount={eggCount} />
      <CommandPalette open={palette} onClose={() => setPalette(false)} onEgg={triggerEgg} />
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />

      {/* easter-egg toast */}
      {eggToast && (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 z-[90] w-max max-w-[92vw] -translate-x-1/2 rounded-xl border border-[#3B82F6]/50 bg-[#151B23] px-5 py-3.5 font-mono text-[13px] text-[#3B82F6] shadow-2xl"
        >
          <span className="text-slate-500">$</span> sudo hire ali → <span className="text-white">access granted.</span>{' '}
          Smart move — let's talk.
        </div>
      )}
    </div>
  );
}
