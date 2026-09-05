import { ExternalLink } from "lucide-react";
import { siteProjects } from "@/data/profile";

const ProjectsSection = () => (
  <section id="projets" className="section-padding bg-muted/50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Mes <span className="text-primary">projets</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {siteProjects.map((p) => (
          <a key={p.titre} href={p.link} target="_blank" rel="noopener noreferrer"
             className={`bg-card rounded-xl overflow-hidden shadow-sm border-t-4 ${p.accent} hover:shadow-lg transition-shadow group block`}>
            <div className="aspect-video overflow-hidden bg-muted">
              <img src={`https://image.thum.io/get/width/600/crop/800/${p.link}`} alt={`Aperçu du site ${p.titre}`} loading="lazy"
                   className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{p.periode}</span>
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-lg">{p.titre}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.blurb}</p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-muted text-muted-foreground font-medium">{t}</span>
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