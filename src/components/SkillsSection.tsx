import { type PointerEvent } from "react";
import { motion } from "framer-motion";
import { Server, LayoutTemplate, Network, Database, Cloud, FileText, type LucideIcon } from "lucide-react";
import { competencesGroups, notions } from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";
import { EASE_OUT, VIEWPORT_ONCE } from "@/lib/motion";

const icons: Record<string, LucideIcon> = {
  Backend: Server,
  Frontend: LayoutTemplate,
  "Architecture & intégration": Network,
  "Bases de données": Database,
  "DevOps / Déploiement": Cloud,
  "Documentation & produit": FileText,
};

// Grille « bento » : tailles variées pour rythmer la lecture
const spans = ["lg:col-span-2", "", "", "lg:col-span-2", "lg:col-span-2", ""];

/** Met à jour la position du halo lumineux dans la carte survolée. */
const trackSpotlight = (e: PointerEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
};

const SkillsSection = () => (
  <section id="competences" className="section-padding">
    <div className="mx-auto max-w-6xl">
      <SectionHeading index="02" label="Compétences" title="Ce que je" accent="maîtrise." accentClass="text-secondary" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {competencesGroups.map((g, i) => {
          const Icon = icons[g.title] ?? Server;
          return (
            <motion.article
              key={g.title}
              onPointerMove={trackSpotlight}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-7 ${spans[i] ?? ""}`}
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={VIEWPORT_ONCE}
              transition={{ duration: 0.9, ease: EASE_OUT, delay: (i % 3) * 0.1 }}
            >
              {/* Halo qui suit la souris */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), hsl(var(--primary) / 0.18), transparent 60%)",
                }}
              />
              <div className="relative flex h-full flex-col">
                <div className="mb-6 flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span className="font-heading text-sm font-semibold text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="font-heading text-2xl font-semibold">{g.title}</h3>
                <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                  {g.skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors duration-300 group-hover:border-primary/40 group-hover:text-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-14 flex flex-col items-center gap-4">
        <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">Également expérimentés</h3>
        <ul className="flex flex-wrap justify-center gap-2">
          {notions.map((s, i) => (
            <motion.li
              key={s}
              className="rounded-full border border-dashed border-border px-4 py-1.5 text-xs text-muted-foreground"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_ONCE}
              transition={{ duration: 0.5, ease: EASE_OUT, delay: i * 0.05 }}
            >
              {s}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default SkillsSection;
