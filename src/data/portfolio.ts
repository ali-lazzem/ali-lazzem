/* ------------------------------------------------------------------ */
/*  ALI LAZZEM — portfolio source of truth                            */
/*  Edit everything here. UI components read from this file only.     */
/* ------------------------------------------------------------------ */

export const personal = {
  name: 'Ali Lazzem',
  shortName: 'Ali',
  labName: 'LAZZEM.LAB',
  role: 'Advanced Technology Engineering Student',
  altRole: 'Software • AI • Automation • Industrial Technology',
  tagline: 'I build software, AI and automation solutions for real-world problems.',
  support:
    'Advanced Technology Engineering student combining software engineering, artificial intelligence, automation and industrial technology to turn ideas and real-world problems into working systems.',
  location: 'Tunisia',
  availability: 'Open to internships · PFE · freelance builds',
  email: 'alilazzem.bus@gmail.com',
  github: 'https://github.com/ali-lazzem',
  instagram: 'https://www.instagram.com/counter_the_hacker/',
};

export const navLinks = [
  { label: 'About', href: '#about', hint: 'who I am' },
  { label: 'Work', href: '#work', hint: 'selected builds' },
  { label: 'Experience', href: '#experience', hint: 'companies' },
  { label: 'Stack', href: '#stack', hint: 'technologies' },
  { label: 'Journey', href: '#journey', hint: 'timeline' },
  { label: 'Projects', href: '#projects', hint: 'all builds' },
  { label: 'Beyond', href: '#beyond', hint: 'activities' },
  { label: 'Contact', href: '#contact', hint: "let's talk" },
] as const;

export type ProjectCategory =
  | 'AI'
  | 'Software'
  | 'FinTech'
  | 'Automation'
  | 'Cybersecurity'
  | 'Industrial';

export interface Project {
  id: string;
  index: string;
  title: string;
  short: string;
  type: string;
  categories: ProjectCategory[];
  problem: string;
  idea: string;
  solution: string;
  result: string;
  stack: string[];
  /** filename in /public/assets — SmartImage falls back to placeholder if missing */
  image?: string;
  alt: string;
  visualLabel: string; // text shown inside placeholder graphic
  github?: string;
  demo?: string;
  featured?: boolean;
  status: string;
  disclaimer?: string;
}

export const projects: Project[] = [
  {
    id: 'stenet',
    index: '01',
    title: 'STE NET — Inventory OS',
    short: 'Full-stack inventory management platform for real operations.',
    type: 'Industrial Software · Internship build',
    categories: ['Software', 'Industrial'],
    problem:
      'Stock was tracked by hand and memory: quantities drifted, low-stock was discovered too late, and nobody had a single view of products, brands and categories.',
    idea: 'Treat inventory as an operating system — one dashboard where every product, movement and alert lives.',
    solution:
      'Designed and built a Django + DRF backend with a React dashboard: product CRUD, search & filtering, stock-quantity management, low-stock detection, categories, brands, product images, auth and analytics views with Recharts.',
    result:
      'A working internal tool the company could actually use: structured data, traceable stock movements and a dashboard instead of scattered records.',
    stack: ['React', 'Django', 'DRF', 'SQLite', 'REST API', 'Tailwind', 'Recharts', 'JavaScript'],
    image: 'stenet-dashboard.png',
    alt: 'STE NET inventory management dashboard preview',
    visualLabel: 'STENET / INV.OS',
    featured: true,
    status: 'Shipped · internship',
  },
  {
    id: 'wini-flousik',
    index: '02',
    title: 'Wini Flousik',
    short: 'Personal finance manager with AI-assisted planning.',
    type: 'FinTech × AI',
    categories: ['FinTech', 'AI', 'Software'],
    problem:
      'Most people have no clear picture of where money goes — spending, income and savings live in different places and planning feels abstract.',
    idea: 'One calm app where spending, income, saving and planning sit together, with AI helping you read your own patterns.',
    solution:
      'React Native front-end on a Django backend. Expense/income tracking, budgets, savings goals and financial analytics, plus AI-assisted planning and predictive insights.',
    result:
      'A personal FinTech platform combining solid software engineering with applied AI — built to be genuinely usable day to day.',
    stack: ['React Native', 'Django', 'AI features', 'REST API', 'Analytics'],
    image: 'winiflousik.jpg',
    alt: 'Wini Flousik personal finance app preview',
    visualLabel: 'WINI / FLOUSIK',
    featured: true,
    status: 'In active development',
    disclaimer: 'Planning assistance only — not financial advice, no guaranteed outcomes.',
  },
  {
    id: 'medirag',
    index: '03',
    title: 'MediRAG',
    short: 'RAG chatbot for studying and exploring medical knowledge.',
    type: 'AI · Retrieval-Augmented Generation',
    categories: ['AI', 'Software'],
    problem:
      'Studying from dense documents is slow: keyword search misses meaning, and generic chatbots hallucinate without sources.',
    idea: 'Ground the LLM in your own documents — retrieve first, then answer from what was actually found.',
    solution:
      'Django RAG pipeline: documents embedded and indexed with FAISS for semantic search, retrieved context fed to LLaMA via Ollama, served through a clean HTML/CSS/JS chat interface with source-aware answers.',
    result:
      'A working study assistant that answers from indexed material instead of inventing — a real lesson in grounding LLMs.',
    stack: ['Django', 'RAG', 'FAISS', 'Ollama', 'LLaMA', 'Embeddings', 'JavaScript'],
    image: 'medirag.png',
    alt: 'MediRAG retrieval augmented generation chat preview',
    visualLabel: 'MEDI / RAG',
    featured: true,
    status: 'Working prototype',
    disclaimer: 'Educational information assistant — not a diagnostic tool, not a substitute for doctors.',
  },
  {
    id: 'hand-scroll',
    index: '04',
    title: 'Hand Detector → Scroll',
    short: 'Scroll the screen with hand gestures. No mouse, no keys.',
    type: 'Computer Vision · Interaction',
    categories: ['Automation', 'AI'],
    problem: 'Pointer input assumes hands on a device. What if the camera could be the input?',
    idea: 'Hand gesture → computer vision → scroll action. A contactless way to move through a page.',
    solution:
      'Computer-vision pipeline detecting the hand in the camera feed, tracking gesture position and mapping it to scroll events on screen.',
    result: 'A working gesture-scroll demo — interaction design meets vision engineering.',
    // stack intentionally configurable — update when implementation is final
    stack: ['Python', 'Computer Vision', 'Gesture mapping'],
    image: 'hand-detector.png',
    alt: 'Hand gesture scroll detection preview',
    visualLabel: 'GESTURE / SCROLL',
    status: 'Prototype',
  },
  {
    id: 'trading-bot',
    index: '05',
    title: 'Triangular Arbitrage Bot',
    short: 'Algorithmic path-finder for triangular trading opportunities.',
    type: 'Algorithmic Trading · Python',
    categories: ['FinTech', 'Automation'],
    problem:
      'Triangular arbitrage means checking huge combinations of pairs by hand — impossible to do systematically.',
    idea: 'Generate every possible pair combination, test every triangular path, price each one, flag the opportunities.',
    solution:
      'Python engine: generates possible trading pairs, searches combinations, tests triangular paths, computes potential profitability and can route execution from the results.',
    result: 'A working optimization/automation project that reasons over markets like a graph problem.',
    stack: ['Python', 'Algorithms', 'Automation', 'NumPy', 'Pandas'],
    image: 'trading-bot.png',
    alt: 'Triangular arbitrage trading bot graph preview',
    visualLabel: 'ARB / GRAPH',
    status: 'Research build',
    disclaimer: 'Experimental algorithmic project — no guaranteed profit, not trading advice.',
  },
  {
    id: 'security-book',
    index: '06',
    title: 'Online Security Book',
    short: 'A practical guide to protecting yourself online. 20+ copies sold.',
    type: 'Cybersecurity · Published',
    categories: ['Cybersecurity'],
    problem: 'Most people know the internet is dangerous but have no plain-language guide to act on.',
    idea: 'Turn real cybersecurity knowledge into a short, practical book people actually finish.',
    solution:
      'Wrote and self-published an educational book covering VPNs, proxies, common malware, social engineering, common online attacks and everyday protection habits.',
    result: '20+ copies sold — proof I can turn technical knowledge into content people pay for.',
    stack: ['Cybersecurity', 'Technical writing', 'VPNs', 'Social engineering'],
    image: 'book-cover.png',
    alt: 'Online security book cover preview',
    visualLabel: 'SEC / BOOK · 20+ SOLD',
    featured: true,
    status: 'Published · 20+ sold',
  },
];

export const filters: Array<'All' | ProjectCategory> = [
  'All',
  'AI',
  'Software',
  'FinTech',
  'Automation',
  'Cybersecurity',
  'Industrial',
];

export const experience = [
  {
    company: 'STE NET',
    role: 'Engineering Intern — Full-Stack Developer',
    period: 'Internship',
    location: 'Tunisia',
    narrative: 'Real operational problem → observation → software solution → implementation → practical value.',
    points: [
      'Analyzed how stock was actually tracked day to day, then designed a web app around that reality.',
      'Built product & inventory management: CRUD, search, filtering, categories, brands, product images.',
      'Implemented stock-quantity management with low-stock detection and movement tracking.',
      'Shipped a dashboard with analytics and statistics (Recharts) plus auth and REST API (DRF + SQLite).',
    ],
    stack: ['React', 'Django', 'DRF', 'SQLite', 'Tailwind', 'Recharts'],
  },
  {
    company: 'TOPNET',
    role: 'Technical Support · Customer Service',
    period: 'Experience',
    location: 'Tunisia',
    narrative: 'Where I learned that systems are only as good as people understand them.',
    points: [
      'Supported customers on live technical systems — translating symptoms into diagnoses.',
      'Learned how users really interact with systems: capabilities, limits, misunderstandings.',
      'Built troubleshooting instincts and technical communication under pressure.',
      'Bridged the gap between technical problems and non-technical users.',
    ],
    stack: ['Troubleshooting', 'System analysis', 'Technical communication'],
  },
];

export const education = [
  {
    step: '01',
    title: 'Baccalaureate in Informatics',
    detail: 'Computer-science track — where programming stopped being a hobby and became a direction.',
  },
  {
    step: '02',
    title: 'Preparatory Studies — IPEIB',
    detail: 'Intensive math/physics/engineering prep. Rigor, workload, problem-solving under pressure.',
  },
  {
    step: '03',
    title: 'ENSTAB — Advanced Technology Engineering',
    detail:
      'Multidisciplinary engineering: digitalization, automation, AI, industrial tech, software, FinTech, energy, cybersecurity.',
  },
];

export const journey = [
  { year: 'Bac', title: 'Informatics Baccalaureate', text: 'Foundations in computing; first real programs.' },
  { year: 'Prépa', title: 'IPEIB Preparatory Studies', text: 'Two years of intense math, physics and engineering method.' },
  { year: 'ENSTAB', title: 'Advanced Technology Engineering', text: 'Software × AI × automation × industrial systems.' },
  { year: 'Field', title: 'STE NET + TOPNET', text: 'Real company exposure: build systems, support users.' },
  { year: 'Lab', title: 'Independent builds', text: 'Wini Flousik, MediRAG, trading bot, vision interfaces.' },
  { year: 'Arena', title: 'Hackathons & community', text: 'APEX1.0 green-tech build, ENSTAB Forum org, 90K audience.' },
  { year: 'Now', title: 'Current focus', text: 'Shipping useful systems. Open to internships, PFE and collaborations.' },
];

export interface SkillGroup {
  title: string;
  icon: string; // lucide key resolved in component
  skills: Array<{ name: string; usedIn?: string }>;
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Software Engineering',
    icon: 'code',
    skills: [
      { name: 'React', usedIn: 'STE NET' },
      { name: 'React Native', usedIn: 'Wini Flousik' },
      { name: 'Django', usedIn: 'STE NET · MediRAG' },
      { name: 'Django REST Framework', usedIn: 'STE NET' },
      { name: 'Python', usedIn: 'Trading bot' },
      { name: 'JavaScript' },
      { name: 'HTML / CSS' },
      { name: 'REST APIs' },
      { name: 'CRUD' },
      { name: 'Authentication' },
      { name: 'Responsive Web Design' },
    ],
  },
  {
    title: 'AI / Data',
    icon: 'brain',
    skills: [
      { name: 'RAG', usedIn: 'MediRAG' },
      { name: 'LLMs', usedIn: 'MediRAG' },
      { name: 'FAISS', usedIn: 'MediRAG' },
      { name: 'Ollama', usedIn: 'MediRAG' },
      { name: 'LLaMA', usedIn: 'MediRAG' },
      { name: 'Embeddings' },
      { name: 'Semantic Search' },
      { name: 'Prompt Engineering' },
      { name: 'NumPy', usedIn: 'Trading bot' },
      { name: 'Pandas', usedIn: 'Trading bot' },
      { name: 'scikit-learn' },
    ],
  },
  {
    title: 'Automation / Vision',
    icon: 'bot',
    skills: [
      { name: 'Automation' },
      { name: 'Computer Vision', usedIn: 'Hand scroll' },
      { name: 'Web automation' },
      { name: 'Selenium' },
      { name: 'BeautifulSoup' },
      { name: 'Playwright' },
    ],
  },
  {
    title: 'Databases',
    icon: 'db',
    skills: [{ name: 'SQLite', usedIn: 'STE NET' }, { name: 'MySQL' }, { name: 'SQL' }],
  },
  {
    title: 'Tools',
    icon: 'tool',
    skills: [{ name: 'Git' }, { name: 'GitHub' }, { name: 'Node.js' }, { name: 'npm' }],
  },
  {
    title: 'Engineering Domains',
    icon: 'factory',
    skills: [
      { name: 'Industrial Technology' },
      { name: 'Digitalization' },
      { name: 'FinTech', usedIn: 'Wini Flousik' },
      { name: 'Cybersecurity', usedIn: 'Book · 90K page' },
      { name: 'Energy Technologies' },
    ],
  },
];

export const stats = [
  { value: 90, suffix: 'K+', label: 'Instagram tech audience', note: '@counter_the_hacker — IT · AI · automation · security' },
  { value: 20, suffix: '+', label: 'Security book copies sold', note: 'Self-written, self-published' },
  { value: 6, suffix: '', label: 'Software / AI builds shipped', note: 'Internship + independent projects' },
  { value: 2, suffix: '', label: 'Company experiences', note: 'STE NET · TOPNET' },
];

export const beyond = [
  {
    title: 'APEX1.0 Hackathon',
    tag: 'IoT · Green Tech',
    headline: 'Water-leak detection for a drier future.',
    text: 'Designed a water leak detection concept as a green-technology answer to water loss — sensing, detection, alert, conservation. Built under hackathon pressure with a team.',
    flow: ['Water', 'Sensor', 'Detection', 'Alert', 'Conservation'],
    image: 'apex-hackathon.jpg',
    alt: 'APEX1.0 hackathon water leak detection project',
  },
  {
    title: '8th ENSTAB Forum',
    tag: 'Community · Organization',
    headline: 'Helped run the forum engineers meet at.',
    text: 'Part of the team behind the 8th edition of the ENSTAB Forum — teamwork, logistics, communication and professional networking in the engineering community.',
    flow: ['Team', 'Logistics', 'Outreach', 'Event day'],
    image: 'enstab-forum.webp',
    alt: 'ENSTAB Forum 8th edition organization',
  },
  {
    title: '@counter_the_hacker — 90K+',
    tag: 'Content · Communication',
    headline: 'Technical ideas, translated for 90,000 people.',
    text: 'Built and ran a tech page on IT, AI, automation and cybersecurity to 90K+ followers. Proof that I can explain technology — not just write it.',
    flow: ['Explain', 'Publish', 'Grow', '90K+'],
    image: 'instagram-account.png',
    alt: 'Instagram technology account with 90K followers',
    link: 'https://www.instagram.com/counter_the_hacker/',
  },
];

export const heroNodes = ['Software', 'AI', 'Automation', 'Industry'];
