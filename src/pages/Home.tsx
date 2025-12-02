// src/pages/Portfolio.tsx
import ContactDrawer from '../components/Drawer_contact';
import { motion, type Transition } from 'framer-motion';
import { Link } from 'react-router-dom';
import cv from '../assets/cv.pdf';
import PP2 from '../assets/PP2.jpg';

// Data centralisée des projets (avec slug)
import { projects } from '../data/projects';

/* -------------------- Données locales -------------------- */
const chips = [
  'React', 'TypeScript', 'Node.js', 'Laravel', 'WinDev', 'SQL', 'PostgreSQL', 'Power BI', 'SharePoint', 'Tailwind'
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

const competences = [
  'React','TypeScript','Node.js','Laravel','JavaScript','HTML5','CSS3','Bootstrap','WinDev','WinDev Mobile','SQL','PostgreSQL','Power BI','Power Automate','SharePoint','Tailwind'
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

/* -------------------- Animations -------------------- */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
} as const;

const staggerVariants = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.09 } },
} as const;

const EASE_IN_OUT_BEZIER: [number, number, number, number] = [0.42, 0, 0.58, 1];

const floatTransition: Transition = {
  duration: 6,
  repeat: Infinity,
  ease: EASE_IN_OUT_BEZIER,
};

const imgFloatTransition: Transition = {
  duration: 7,
  repeat: Infinity,
  ease: EASE_IN_OUT_BEZIER,
};

export default function Portfolio() {
  return (
    <motion.main initial="hidden" animate="show" className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden py-20 md:py-24">
        {/* ✅ fond plus contrasté */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-100 to-white dark:from-zinc-950 dark:to-black" />
        <motion.div
          variants={staggerVariants}
          className="grid items-center gap-10 md:grid-cols-2"
          animate={{ y: [0, -6, 0] }}
          transition={floatTransition}
        >
          {/* Texte */}
          <motion.div variants={fadeInUp} className="pr-2">
            <p className="text-sm uppercase tracking-wider text-slate-600 dark:text-zinc-400">
              👋 Bonjour, moi c’est
            </p>
            {/* ✅ titres très lisibles */}
            <h1 className="mt-2 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl dark:text-zinc-100">
              Valy Bamba
            </h1>
            <p className="mt-2 text-lg text-slate-700 dark:text-zinc-200">
              Développeur • React / TypeScript • WinDev
            </p>
            {/* ✅ corps plus foncé en clair et plus clair en sombre */}
            <p className="mt-6 max-w-2xl text-slate-700 dark:text-zinc-200">
              Je conçois des interfaces modernes, rapides et accessibles, avec un fort souci
              de qualité de code et d’expérience utilisateur.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <motion.a
                href={cv}
                download
                className="inline-flex items-center justify-center rounded-xl border border-transparent bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:bg-indigo-600"
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.96, y: 0 }}
              >
                Télécharger mon CV
              </motion.a>

              <ContactDrawer
                triggerLabel={
                  <motion.span whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.96, y: 0 }}>
                    Me contacter
                  </motion.span>
                }
                dark
                triggerClassName="inline-flex items-center justify-center rounded-xl border border-slate-300 
                  px-6 py-3 text-sm font-medium text-slate-900 shadow hover:bg-slate-100
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500
                  dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
              />
            </div>

            {/* Chips (contraste renforcé) */}
            <motion.ul variants={staggerVariants} className="mt-8 flex flex-wrap gap-2">
              {chips.map((c) => (
                <motion.li
                  key={c}
                  variants={fadeInUp}
                  className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                  whileHover={{ scale: 1.06 }}
                >
                  {c}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Photo */}
          <motion.div variants={fadeInUp} className="flex justify-center md:justify-end">
            <motion.img
              src={PP2}
              alt="Photo de profil de Valy Bamba"
              className="h-56 w-56 md:h-64 md:w-64 rounded-full object-cover shadow-xl ring-4 ring-slate-300 dark:ring-zinc-700"
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0] }}
              transition={imgFloatTransition}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* PROJETS — cartes cliquables */}
      <motion.section
        variants={staggerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="pt-6 pb-16"
        animate={{ y: [0, -6, 0] }}
        transition={floatTransition}
      >
        <h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-100">Projets récents</h2>

        <motion.div variants={staggerVariants} className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to={`/projets/${p.slug}`}
              className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-900 rounded-2xl"
            >
              <motion.article
                variants={fadeInUp}
                className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition
                           hover:shadow-lg hover:-translate-y-1 dark:border-zinc-700/80 dark:bg-zinc-900 dark:hover:bg-zinc-800"
                whileHover={{ y: -6 }}
              >
                <img
                  src={p.cover}
                  alt={p.title}
                  className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
                <div className="space-y-3 p-5">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-zinc-100">{p.title}</h3>
                  <p className="text-sm text-slate-700 dark:text-zinc-200">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-800 transition-colors
                                   group-hover:bg-slate-200 dark:bg-zinc-800 dark:text-zinc-100 dark:group-hover:bg-zinc-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </motion.div>
      </motion.section>

      {/* COMPÉTENCES */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="py-16"
        animate={{ y: [0, -6, 0] }}
        transition={floatTransition}
      >
        <h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-100">Compétences</h2>
        <motion.div variants={staggerVariants} className="mt-8 grid gap-6 md:grid-cols-2">
          <motion.div
            variants={fadeInUp}
            className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900"
          >
            <h3 className="text-base font-semibold text-slate-900 dark:text-zinc-100">Tech & Frameworks</h3>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm sm:grid-cols-3">
              {competences.map((s) => (
                <li key={s} className="text-slate-800 dark:text-zinc-200">{s}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900"
          >
            <h3 className="text-base font-semibold text-slate-900 dark:text-zinc-100">Outils</h3>
            <ul className="mt-4 grid grid-cols-1 gap-y-2 text-sm sm:grid-cols-2">
              {[
                'Office 365 (Excel, Word, PowerPoint, OneDrive)',
                'Google (Drive, Docs, Gmail, Sheets, Slides)',
              ].map((s) => (
                <li key={s} className="text-slate-800 dark:text-zinc-200">{s}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* EXPÉRIENCES */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="py-16"
        animate={{ y: [0, -6, 0] }}
        transition={floatTransition}
      >
        <h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-100">Expériences</h2>
        <div className="mt-8 space-y-6">
          {experiences.map((e) => (
            <motion.div
              key={e.title + e.company}
              variants={fadeInUp}
              className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900"
            >
              <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
                <h3 className="text-base font-semibold text-slate-900 dark:text-zinc-100">
                  {e.title} ·{' '}
                  <span className="font-normal text-slate-700 dark:text-zinc-200">{e.company}</span>
                </h3>
                <span className="text-sm text-slate-600 dark:text-zinc-300">{e.period}</span>
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-800 dark:text-zinc-200">
                {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FORMATIONS */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="py-16"
        animate={{ y: [0, -6, 0] }}
        transition={floatTransition}
      >
        <h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-100">Formations</h2>
        <motion.ul
          variants={staggerVariants}
          className="mt-6 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-sm dark:divide-zinc-800 dark:border-zinc-700 dark:bg-zinc-900"
        >
          {education.map((ed) => (
            <motion.li
              key={ed.period}
              variants={fadeInUp}
              className="flex items-center justify-between gap-4 px-6 py-4"
            >
              <span className="text-sm text-slate-700 dark:text-zinc-300">{ed.period}</span>
              <span className="text-sm font-medium text-slate-900 dark:text-zinc-100">{ed.label}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>

      {/* LANGUES & QUALITÉS */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="py-16"
        animate={{ y: [0, -6, 0] }}
        transition={floatTransition}
      >
        <h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-100">Langues & Qualités</h2>
        <motion.div variants={staggerVariants} className="mt-6 grid gap-6 md:grid-cols-2">
          <motion.ul
            variants={fadeInUp}
            className="rounded-2xl border border-slate-300 bg-white p-6 text-sm text-slate-800 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
          >
            {languages.map((l) => <li key={l} className="leading-7">{l}</li>)}
          </motion.ul>
          <motion.ul
            variants={fadeInUp}
            className="rounded-2xl border border-slate-300 bg-white p-6 text-sm text-slate-800 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
          >
            {softSkills.map((s) => <li key={s} className="leading-7">{s}</li>)}
          </motion.ul>
        </motion.div>
      </motion.section>

      {/* CTA (cohérent clair/sombre) */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="pb-24 pt-10"
        animate={{ y: [0, -6, 0] }}
        transition={floatTransition}
      >
        <motion.div
          variants={fadeInUp}
          className="rounded-2xl bg-indigo-600 p-8 text-white shadow-sm dark:bg-indigo-600"
        >
          <h2 className="text-2xl font-bold">Un projet en tête ?</h2>
          <p className="mt-3 text-sm text-white/90">
            Je peux vous accompagner sur React/TypeScript, WinDev, SQL, BI et automatisations.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <motion.a
              href="mailto:valybamba56@gmail.com"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96, y: 0 }}
            >
              Écrire un mail
            </motion.a>
          </div>
        </motion.div>
      </motion.section>
    </motion.main>
  );
}
