import { ExternalLink, ArrowUpRight } from "lucide-react";
import { siteProjects } from "@/data/profile";
import wakanectImg from "@/assets/projects/wakanect.png";
import sitePortfolioImg from "@/assets/projects/ripolldarcia.png";
import apiPdfImg from "@/assets/projects/apipdf.png";

const images = [wakanectImg, sitePortfolioImg, apiPdfImg];

const ProjectsSection = () => (
  <section id="projets" className="section-padding bg-muted/50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Mes <span className="text-primary">projets</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {siteProjects.map((p, i) => (
          <a
            key={p.titre}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative bg-card rounded-xl overflow-hidden shadow-sm border-t-4 ${p.accent} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group block`}
          >
            <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-muted to-muted/50">
              <img
                src={images[i] ?? `https://image.thum.io/get/width/600/crop/800/${p.link}`}
                alt={`Aperçu du site ${p.titre}`}
                loading="lazy"
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
              <div className="absolute inset-0 flex items-center justify-center bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="flex items-center gap-2 text-primary-foreground font-medium text-sm">
                  Voir le projet <ArrowUpRight size={16} />
                </span>
              </div>
              <span className="absolute top-3 left-3 w-7 h-7 flex items-center justify-center rounded-full bg-background/90 backdrop-blur text-xs font-bold text-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{p.periode}</span>
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-lg leading-snug">{p.titre}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.blurb}</p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2.5 py-1 rounded-full bg-muted text-muted-foreground font-semibold tracking-wide border border-border"
                  >
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