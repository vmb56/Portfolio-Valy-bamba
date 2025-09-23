import ContactDrawer from '../components/Drawer_contact';
import { motion } from 'framer-motion';
import cv from '../assets/cv.pdf';
import 'antd/dist/reset.css';

import PP2 from '../assets/PP2.jpg';


const chips = [
  'React', 'TypeScript', 'Node.js', 'Laravel', 'WinDev', 'SQL', 'PostgreSQL', 'Power BI', 'SharePoint','tailwind ' 
];

const projects = [
  {
    cover: '/proj-bmvt.jpg',
    title: "Gestion d’agence de voyage (BMVT)",
    description:
      "Application client/serveur pour l’enregistrement des pèlerins, paiements, hébergements et logistique (Hajj).",
    tags: ['WinDev', 'SQL'],
    link: undefined,
  },
  {
    cover: '/proj-courrier.jpg',
    title: 'Gestion des courriers – SOTRA',
    description: 'Application mobile pour la gestion et le suivi des courriers internes.',
    tags: ['Mobile', 'WinDev Mobile'],
  },
  {
    cover: '/proj-crud.jpg',
    title: 'Transactions – Habitat Constructor',
    description: 'Application CRUD pour la gestion des transactions + supervision technique des chantiers.',
    tags: ['WinDev', 'SQL'],
  },
  {
    cover: '/proj-site.jpg',
    title: 'Site vitrine performant',
    description: 'Pages statiques optimisées, SEO de base, score Lighthouse 95+.',
    tags: ['Vite', 'React', 'SEO'],
  },
];

const experiences = [
  {
    title: 'Assistant informatique',
    company: 'Pigier CI',
    period: 'Août 2024 — Présent',
    bullets: [
      'Support technique et outillage bureautique/Google Workspace',
      'Automatisations légères (Power Automate) et reporting',
    ],
  },
  {
    title: 'Développeur d’application & Superviseur de travaux (6 mois)',
    company: 'Habitat Constructor',
    period: '2023',
    bullets: [
      'App CRUD pour la gestion des transactions',
      'Supervision des travaux (ORANGE CI, CEI)',
    ],
  },
  {
    title: 'Stagiaire – Développement mobile',
    company: 'SOTRA',
    period: 'Oct. 2022 — Jan. 2023',
    bullets: ['App mobile pour gérer les courriers'],
  },
  {
    title: 'Projet perso',
    company: 'BMVT',
    period: 'Jan. 2025',
    bullets: ['App client/serveur pour gérer une agence de voyage (Hajj)'],
  },
];

const competences = ['React','TypeScript','Node.js','Laravel','JavaScript','HTML5','CSS3','Bootstrap','WinDev','WinDev Mobile','SQL','PostgreSQL','Power BI','Power Automate','SharePoint','tailwind '

];

const education = [
  { period: '2023 — 2024', label: 'Licence 3 Réseaux & Génie Logiciel – Pigier' },
  { period: '2022 — 2023', label: 'Admissibilité BTS Dév. d’application' },
  { period: '2022 — 2023', label: 'Licence 2 Réseaux & Génie Logiciel – Pigier' },
  { period: '2021 — 2022', label: 'Licence 1 Réseaux & Génie Logiciel – Pigier' },
  { period: '2019 — 2021', label: 'Licence 1 Médecine – Univ. Nangui Abrogoua' },
  { period: '2019', label: 'Baccalauréat série D – Groupe scolaire Avicenne' },
];

const languages = ['Français (parlé, écrit, lu)', 'Anglais (écrit, lu)'];
const softSkills = ['Esprit d’équipe', 'Rigueur', 'Détermination'];

// ---------- Animations (Framer Motion) ----------
const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

const stagger = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.09 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

export default function Portfolio() {
  return (
    <motion.main initial="hidden" animate="show" className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/80 dark:to-slate-950"/>
        <motion.div
          variants={stagger}
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2 md:items-center"
        >
          {/* Texte */}
          <motion.div variants={fadeIn}>
            <p className="text-sm uppercase tracking-wider text-slate-500">👋 Bonjour, moi c’est</p>
            <h1 className="mt-2 text-4xl font-extrabold leading-tight sm:text-5xl">Valy Bamba</h1>
            <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">Développeur • React / TypeScript • WinDev</p>
            <p className="mt-6 max-w-2xl text-slate-600 dark:text-slate-300">
              Je conçois des interfaces modernes, rapides et accessibles, avec un fort souci de qualité
              de code et d’expérience utilisateur.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={cv}
                download
                className="inline-flex items-center justify-center rounded-xl border border-transparent bg-slate-900 px-4 py-4 text-sm font-medium text-white shadow hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 active:translate-y-0 transition-transform dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Télécharger mon CV
              </a>

   <ContactDrawer
    triggerLabel="Me contacter"
    // tu peux aussi passer dark={false} si tu veux le Drawer clair
    dark
    triggerClassName="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
  />
            </div>
            <motion.ul variants={stagger} className="mt-8 flex flex-wrap gap-2">
              {chips.map((c) => (
                <motion.li key={c} variants={fadeIn} className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-300">
                  {c}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Photo personnelle */}
          <motion.div variants={scaleIn} className="flex justify-center md:justify-end">
            <motion.img
              src={PP2}
              alt="Photo de profil de Valy Bamba"
              className="h-70 w-70 rounded-full object-cover shadow-lg ring-4 ring-slate-200 dark:ring-slate-800"
              initial={{ y: 0 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* PROJETS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold">Projets récents</h2>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeIn}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              whileHover={{ y: -4 }}
            >
              <img src={p.cover} alt={p.title} className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
              <div className="space-y-3 p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-700 transition-colors group-hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:group-hover:bg-slate-700">{t}</span>
                  ))}
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-medium text-slate-900 underline underline-offset-4 hover:no-underline dark:text-white">
                    Voir le projet →
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* COMPÉTENCES */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold">Compétences</h2>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-8 grid gap-6 md:grid-cols-2">
          <motion.div variants={fadeIn} className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800">
            <h3 className="text-base font-semibold">Tech & Frameworks</h3>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm sm:grid-cols-3">
              {competences.map((s) => (
                <li key={s} className="text-slate-700 dark:text-slate-300">{s}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={fadeIn} className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800">
            <h3 className="text-base font-semibold">Outils</h3>
            <ul className="mt-4 grid grid-cols-1 gap-y-2 text-sm sm:grid-cols-2">
              {[
                'Office 365 (Excel, Word, PowerPoint, OneDrive)',
                'Google (Drive, Docs, Gmail, Sheets, Slides)'
              ].map((s) => (
                <li key={s} className="text-slate-700 dark:text-slate-300">{s}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* EXPÉRIENCES */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold">Expériences</h2>
        <div className="mt-8 space-y-6">
          {experiences.map((e) => (
            <motion.div key={e.title + e.company} variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="rounded-2xl border border-slate-200 p-6 transition hover:shadow-md dark:border-slate-800">
              <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
                <h3 className="text-base font-semibold">
                  {e.title} · <span className="font-normal text-slate-600 dark:text-slate-300">{e.company}</span>
                </h3>
                <span className="text-sm text-slate-500">{e.period}</span>
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-300">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FORMATIONS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold">Formations</h2>
        <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-6 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 dark:divide-slate-800 dark:border-slate-800">
          {education.map((ed) => (
            <motion.li key={ed.period} variants={fadeIn} className="flex items-center justify-between gap-4 px-6 py-4">
              <span className="text-sm text-slate-500">{ed.period}</span>
              <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{ed.label}</span>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* LANGUES & QUALITÉS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold">Langues & Qualités</h2>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-6 grid gap-6 md:grid-cols-2">
          <motion.ul variants={fadeIn} className="rounded-2xl border border-slate-200 p-6 text-sm text-slate-700 dark:border-slate-800 dark:text-slate-300">
            {languages.map((l) => (
              <li key={l} className="leading-7">{l}</li>
            ))}
          </motion.ul>
          <motion.ul variants={fadeIn} className="rounded-2xl border border-slate-200 p-6 text-sm text-slate-700 dark:border-slate-800 dark:text-slate-300">
            {softSkills.map((s) => (
              <li key={s} className="leading-7">{s}</li>
            ))}
          </motion.ul>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        <motion.div variants={scaleIn} className="rounded-2xl bg-slate-900 p-8 text-white dark:bg-white dark:text-slate-900">
          <h2 className="text-2xl font-bold">Un projet en tête ?</h2>
          <p className="mt-3 text-sm opacity-90">
            Je peux vous accompagner sur React/TypeScript, WinDev, SQL, BI et automatisations.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            
            <a
              href="mailto:valybamba56@gmail.com"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white/50 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 dark:focus:ring-slate-400 transition"
            >
              Écrire un mail
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-3 text-sm font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 dark:border-slate-300/50 transition"
            >
              Formulaire de contact
            </a>
          </div>
        </motion.div>
      </section>
    </motion.main>
  );
}
