export const contact = {
    emplacement: "Dakar, Sénégal",
    telephone: "+221 70 642 54 77",
    email: "modibokanebis@gmail.com",
    linkedIn: "https://sn.linkedin.com/in/modibo-kane",
    portfolio: "https://modibokaneporfolio.vercel.app/", 
    github: "https://github.com/Modibo-kane",
};

export const identite = {
    nom: "Modibo Kane",
    titre: "Développeur Web & Mobile Full Stack",
    accroche: "Front-end & back-end · React / Node · Passionné par la conception de produits digitaux",
    apropo:
        "Développeur Full Stack en formation, j'ai conçu et développé plusieurs applications web de bout en bout (front-end, back-end, base de données, déploiement) — dont ma propre plateforme SaaS. Curieux, autonome et à l'aise pour apprendre vite en équipe, je cherche un stage pour renforcer mes compétences techniques sur des projets concrets.",
};

export const competencesGroups = [
  { title: "Backend", color: "bg-green-light text-green-dark", skills: ["PHP / Laravel", "Architecture API REST", "Authentification (Sanctum, sessions)", "Génération de PDF (DomPDF, Blade)", "Sécurisation d'API (tokens, secrets)"] },
  { title: "Frontend", color: "bg-violet-light text-violet-dark", skills: ["React", "Blade", "JavaScript vanilla", "CSS (Flexbox, design system)"] },
  { title: "Architecture & intégration", color: "bg-yellow-light text-accent-foreground", skills: ["Multi-services (Laravel + Node.js/Puppeteer)", "Communication inter-services (HTTP, secret partagé)", "Schémas de données flexibles"] },
  { title: "Bases de données", color: "bg-green-light text-green-dark", skills: ["PostgreSQL", "MongoDB", "MySQL", "Modélisation relationnelle"] },
  { title: "DevOps / Déploiement", color: "bg-violet-light text-violet-dark", skills: ["Render (Docker)", "Vercel (serverless)", "Reverse proxy / HTTPS", "Variables d'environnement & secrets"] },
  { title: "Documentation & produit", color: "bg-yellow-light text-accent-foreground", skills: ["Documentation API publique", "Workflows d'intégration (pattern proxy)"] },
];

export const notions = ["Flutter", "Java", "C", "Swift", "Insomnia", "Figma", "Canva"];

const CV_GROUPS = ["Backend", "Frontend", "Architecture & intégration", "Bases de données"];
const OUTILS_GROUPS = ["DevOps / Déploiement", "Documentation & produit"];
export const competences = competencesGroups.filter((g) => CV_GROUPS.includes(g.title)).flatMap((g) => g.skills);
export const outils = competencesGroups.filter((g) => OUTILS_GROUPS.includes(g.title)).flatMap((g) => g.skills);

export const qualitePro = [
    "Autonomie et sens des responsabilités",
    "Esprit d'initiative et force de proposition",
    "Rigueur et organisation",
    "Aisance relationnelle et communication claire",
];

export const langues = [
  { lang: "Bambara", level: "Bilingue", pct: 100 },
  { lang: "Français", level: "Bilingue", pct: 100 },
  { lang: "Anglais", level: "Intermédiaire", pct: 55 },
];

export const experiences = [
  {
    titre: "Fondateur & Développeur", entreprise: "Wakanect", periode: "2025 - 2026",
    description: "Plateforme SaaS de vente via WhatsApp pour commerçants en Afrique. Front-end React/Vite/TailwindCSS (Cloudflare Workers), back-end Node.js (Render), MongoDB Atlas. Gating par abonnement, checkout et intégration paiement (PayDunya SoftPay). Revue de code et correction de failles de sécurité avant mise en production.",
    blurb: "Plateforme SaaS de vente via WhatsApp pour commerçants au Sénégal et au Mali. Conception produit et développement de l'architecture (front-end, back-end, paiement).",
    tags: ["React", "Node.js", "MongoDB"], accent: "border-secondary", link: "https://wakanect.com",
  },
  {
    titre: "Création de site portfolio", entreprise: "Projet client", periode: "2025",
    description: "Site portfolio personnalisé de bout en bout, avec CMS sur mesure et optimisation performance/référencement.",
    blurb: "Optimisation, CMS, déploiement d'un portfolio personnel professionnel.",
    tags: ["CMS", "Optimisation", "Déploiement"], accent: "border-primary", link: "https://ripolldarcia.com",
  },
  {
    titre: "Réalisation d'une mini-bibliothèque", entreprise: "Telly Tech", periode: "2025",
    description: "Projet de fin de module : front-end HTML/CSS/TailwindCSS/JavaScript, initiation à Render et PostgreSQL.",
    blurb: "Application web complète avec HTML, CSS/TailwindCSS, JavaScript, PHP, PostgreSQL. Déployée sur Render.",
    tags: ["PHP", "PostgreSQL", "TailwindCSS", "Render"], accent: "border-accent", link: "https://bibliotheque-by-mvkane.onrender.com",
  },
];

// Champ "formation" (diplome, periode, etablissement, description)
export const formation = [
    {
        diplome: "Licence 2 Développement d'application web et mobile",
        etablissement: "Université Numérique Cheikh Hamidou Kane (ex UVS)",
        periode: "2026",
        description: "",
    },
    {
        diplome: "Formation accélérée en développement web",
        etablissement: "Telly Tech",
        periode: "2025",
        description: "",
    },
    {
        diplome: "Baccalauréat scientifique (spécialité Biologie)",
        etablissement: "Lycée Privé Askia Douso",
        periode: "2023",
        description: "",
    },
];

// Champ "autresExperiences" (titre, periode, description)
export const autresExperiences = [
    {
        titre: "Vente e-commerce",
        periode: "Activité personnelle via WhatsApp",
        description: "Gestion autonome d'une activité de vente en ligne, prospection et relation client (clientèle malienne, gérée depuis le Sénégal, logistique de livraison 2 à 7 jours).",
    },
    {
        titre: "Coach formateur",
        periode: "Cours de renforcement",
        description: "Cours de renforcement en HTML, CSS, JavaScript et PHP à des étudiants, accompagnement continu.",
    },
];

export const projets = [
  {
    titre: "api-pdf", periode: "2026 — en cours",
    description: "API REST de génération de documents PDF à la demande (factures, reçus, CV), avec un dashboard web complet. Architecture à deux moteurs : DomPDF pour les documents rapides, microservice Node.js/Puppeteer séparé pour un rendu fiable des CV. Authentification double (Sanctum pour l'API, sessions pour le site). Déployé sur Render, Vercel et Neon (PostgreSQL).",
    blurb: "API REST de génération de documents PDF à la demande (factures, reçus, CV), avec dashboard web. Architecture à deux moteurs : DomPDF pour les documents rapides, microservice Node.js/Puppeteer pour un rendu fiable des CV.",
    tags: ["Laravel", "Node.js/Puppeteer", "PostgreSQL"], accent: "border-secondary", link: "https://api-pdf-5p10.onrender.com",
  },
];


export const siteProjects = [experiences[0], experiences[1], projets[0], experiences[2]];