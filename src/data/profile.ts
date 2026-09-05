// Source unique de vérité, utilisée par le site (composants React)
// ET par la fonction serverless api/generate-cv.js

export const contact = {
  emplacement: "Dakar, Sénégal",
  telephone: "+221 70 642 54 77",
  email: "modibokanebis@gmail.com",
  linkedIn: "https://sn.linkedin.com/in/modibo-kane",
  portfolio: "https://TON-DOMAINE.vercel.app", // TODO: remplace par ton URL Vercel réelle
  github: "https://github.com/Modibo-kane",
};

export const identite = {
  nom: "Modibo Kane",
  titre: "Développeur Web & Mobile Full Stack",
  accroche: "Front-end & back-end · React / Node · Passionné par la conception de produits digitaux",
  apropo:
    "Développeur Full Stack en formation, j'ai conçu et développé plusieurs applications web de bout en bout (front-end, back-end, base de données, déploiement) — dont ma propre plateforme SaaS. Curieux, autonome et à l'aise pour apprendre vite en équipe, je cherche un stage pour renforcer mes compétences techniques sur des projets concrets.",
};

export const competences = [
  "Développement web front-end (HTML, CSS, TailwindCSS, JavaScript, React)",
  "Développement back-end (Node.js/API, PHP, Laravel, gestion de bases de données PostgreSQL)",
  "Git / GitHub, déploiement (Render)",
  "Strapi, Insomnia (CMS headless, tests API)",
  "Pilotage de projet digital (stratégie, jalons, priorisation)",
];

export const outils = ["Notion, Trello", "Git et GitHub", "Canva", "Insomnia, Strapi"];

export const qualitePro = [
  "Autonomie et sens des responsabilités",
  "Esprit d'initiative et force de proposition",
  "Rigueur et organisation",
  "Aisance relationnelle et communication claire",
];

export const langues = ["Français : Bilingue", "Bambara : Bilingue", "Anglais : Niveau intermédiaire"];

export const experiences = [
  {
    titre: "Fondateur & Développeur",
    entreprise: "Wakanect",
    periode: "2025 - 2026",
    description:
      "Plateforme SaaS de vente via WhatsApp pour commerçants en Afrique. Front-end React/Vite/TailwindCSS (Cloudflare Workers), back-end Node.js (Render), MongoDB Atlas. Implémentation du gating par abonnement, checkout et intégration paiement (PayDunya SoftPay). Revue de code et correction de failles de sécurité avant mise en production.",
  },
  {
    titre: "Création de site portfolio",
    entreprise: "Projet client",
    periode: "2025",
    description:
      "Site portfolio personnalisé de bout en bout, avec CMS sur mesure et optimisation performance/référencement.",
  },
  {
    titre: "Création de site e-commerce (vente de fruits)",
    entreprise: "Projet",
    periode: "2025",
    description:
      "Site marchand complet (front-end, back-end, base de données), déployé, développé en équipe avec Git/GitHub.",
  },
  {
    titre: "Réalisation d'une mini-bibliothèque",
    entreprise: "Telly Tech",
    periode: "2025",
    description:
      "Projet de fin de module : front-end HTML/CSS/TailwindCSS/JavaScript, initiation à Render et PostgreSQL.",
  },
];

// Formation académique → envoyée dans le champ "postes" de l'API
export const formation = [
  { titre: "Licence 2 Développement d'application web et mobile", entreprise: "Université Numérique Cheikh Hamidou Kane (ex UVS)", periode: "2026", description: "" },
  { titre: "Formation accélérée en développement web", entreprise: "Telly Tech", periode: "2025", description: "" },
  { titre: "Baccalauréat scientifique (spécialité Biologie)", entreprise: "Lycée Privé Askia Douso", periode: "2023", description: "" },
];

// Projets perso + autres expériences → envoyés dans le champ "projets"
export const projets = [
  {
    titre: "API de génération de facture et CV dynamique",
    periode: "En cours de finalisation",
    description: "Projet personnel en Laravel (Sanctum, DomPdf) ; microservice pour la génération de PDF complexes.",
  },
  {
    titre: "Vente e-commerce",
    periode: "Activité personnelle via WhatsApp",
    description: "Vente en ligne, clientèle malienne gérée depuis le Sénégal, logistique de livraison 2 à 7 jours.",
  },
  {
    titre: "Coach formateur",
    periode: "Cours de renforcement",
    description: "Cours de renforcement en HTML, CSS, JavaScript et PHP, accompagnement continu d'étudiants.",
  },
];