import GSA1 from "../assets/GSA1.png";
import GSA2 from "../assets/GSA2.png";
import GSA3 from "../assets/GSA3.png";
import GSA4 from "../assets/GSA4.png";

export type Project = {
  slug: string;
  cover: string;
  title: string;
  description: string;
  tags: string[];
  gallery?: string[];
  long?: string;
};

export const projects: Project[] = [
  {
    slug: "bmvt-agence-voyage",
    cover: "/proj-bmvt.jpg", // => fichier dans public/
    title: "Gestion d’agence de voyage (BMVT)",
    description:
      "Application client/serveur pour l’enregistrement des pèlerins, paiements, hébergements et logistique (Hajj).",
    tags: ["WinDev", "SQL"],
    gallery: ["/proj-bmvt.jpg"],
  },
  {
    slug: "sotra-courriers",
    cover: "/proj-courrier.jpg", // => fichier dans public/
    title: "Gestion des courriers – SOTRA",
    description: "Application mobile pour la gestion et le suivi des courriers internes.",
    tags: ["Mobile", "WinDev Mobile"],
    gallery: ["/proj-courrier.jpg"],
  },
  {
    slug: "habitat-transactions",
    cover: "/proj-crud.jpg", // => fichier dans public/
    title: "Transactions – Habitat Constructor",
    description:
      "Application CRUD pour la gestion des transactions + supervision technique des chantiers.",
    tags: ["WinDev", "SQL"],
    gallery: ["/proj-crud.jpg"],
  },
  {
    slug: "site-vitrine-performant",
    cover: "/proj-site.jpg", // => fichier dans public/
    title: "Site vitrine performant",
    description: "Pages statiques optimisées, SEO de base, score Lighthouse 95+.",
    tags: ["Vite", "React", "SEO"],
    gallery: ["/proj-site.jpg"],
  },
  {
    slug: "app-statistiques-appels",
    cover: GSA1, // ✅ utiliser la variable importée
    title: "Application de gestion & statistiques des appels émis",
    description:
      "SPA React (Vite) connectée au backend : saisie/édition/suppression avec modale de confirmation, tri récent→ancien, recherche tolérante aux accents, pagination, toasts, filtres (dates, filière, Pigier, maîtrise IT), export CSV/Excel & import CSV, dashboards (KPIs, bar/pie SVG), responsive & dark mode.",
    tags: ["Vite", "React", "Axios", "React Router", "Tailwind CSS", "Charts SVG", "CSV/Excel"],
    gallery: [GSA1, GSA2, GSA3, GSA4], // ✅ déjà correct
    long:
      "Application complète de suivi des appels avec formulaires robustes, confirmation d’actions, tri/filtrage, et vues statistiques. Architecture front en React + Vite, intégration API, et design responsive + dark mode.",
  },
];
