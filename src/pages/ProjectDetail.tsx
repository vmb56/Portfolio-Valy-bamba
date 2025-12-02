import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

const fade = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
} as const;

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-16">
        <p className="text-slate-600 dark:text-zinc-300">Projet introuvable.</p>
        <Link to="/" className="mt-4 inline-block text-indigo-600 hover:underline">
          ← Retour au portfolio
        </Link>
      </main>
    );
  }

  return (
    <motion.main
      initial="hidden"
      animate="show"
      className="mx-auto max-w-5xl px-4 py-12 md:py-16"
    >
      {/* Entête */}
      <motion.div variants={fade} className="mb-6">
        <Link to="/" className="text-sm text-indigo-600 hover:underline">← Retour</Link>
      </motion.div>

      <motion.header variants={fade} className="space-y-3">
        <h1 className="text-3xl font-extrabold">{project.title}</h1>
        <p className="text-slate-600 dark:text-zinc-300">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-700 dark:bg-zinc-800 dark:text-zinc-200"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.header>

      {/* Galerie */}
      <section className="mt-8 space-y-4">
        <motion.img
          variants={fade}
          src={project.cover}
          alt={project.title}
          className="w-full rounded-2xl border border-slate-200 object-cover dark:border-zinc-800"
        />
        {project.gallery && project.gallery.length > 1 && (
          <motion.div
            variants={fade}
            className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3"
          >
            {project.gallery.slice(1).map((src, i) => (
              <img
                key={src + i}
                src={src}
                alt={`${project.title} (${i + 2})`}
                className="h-40 w-full rounded-xl border border-slate-200 object-cover dark:border-zinc-800"
              />
            ))}
          </motion.div>
        )}
      </section>

      {/* Description longue */}
      {project.long && (
        <motion.section variants={fade} className="prose prose-sm mt-8 dark:prose-invert">
          <p>{project.long}</p>
        </motion.section>
      )}
    </motion.main>
  );
}
