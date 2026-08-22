import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Wakanect",
    date: "2025 — présent",
    description: "Plateforme SaaS de vente via WhatsApp pour commerçants au Sénégal et au Mali. Conception produit et développement de l'architecture (front-end, back-end, paiement).",
    tags: ["React", "Node.js", "MongoDB"],
    accent: "border-secondary",
    link: "https://wakanect.com",
  },
  {
    title: "Site Portfolio",
    date: "12/12/2025",
    description: "Optimisation, CMS, déploiement d'un portfolio personnel professionnel.",
    tags: ["CMS", "Optimisation", "Déploiement"],
    accent: "border-primary",
    link: "https://ripolldarcia.com",
  },
  {
    title: "Site de vente de fruits",
    date: "12/09/2025",
    description: "Application e-commerce avec déploiement, hébergement, base de données et gestion Git/Github.",
    tags: ["Base de données", "Git/Github", "Hébergement"],
    accent: "border-secondary",
    link: "https://fruit-d-or-site.onrender.com",
  },
  {
    title: "Mini-bibliothèque",
    date: "04/08/2025",
    description: "Application web complète avec HTML, CSS/TailwindCSS, JavaScript, PHP, PostgreSQL. Déployée sur Render.",
    tags: ["PHP", "PostgreSQL", "TailwindCSS", "Render"],
    accent: "border-accent",
    link: "https://bibliotheque-by-mvkane.onrender.com",
  },
];

const ProjectsSection = () => (
  <section id="projets" className="section-padding bg-muted/50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Mes <span className="text-primary">projets</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-card rounded-xl overflow-hidden shadow-sm border-t-4 ${p.accent} hover:shadow-lg transition-shadow group block`}
          >
            <div className="aspect-video overflow-hidden bg-muted">
              <img
                src={`https://image.thum.io/get/width/600/crop/800/${p.link}`}
                alt={`Aperçu du site ${p.title}`}
                loading="lazy"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{p.date}</span>
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-muted text-muted-foreground font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;