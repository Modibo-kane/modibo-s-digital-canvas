import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { formation, langues, identite, qualitePro, autresExperiences, siteProjects, competencesGroups } from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";
import ScrollWords from "@/components/motion/ScrollWords";
import Counter from "@/components/motion/Counter";
import Reveal from "@/components/motion/Reveal";
import { EASE_OUT, VIEWPORT_ONCE } from "@/lib/motion";

const stats = [
  { value: siteProjects.length, label: "projets en ligne", plus: false },
  { value: competencesGroups.reduce((n, g) => n + g.skills.length, 0), label: "compétences", plus: true },
  { value: langues.length, label: "langues parlées", plus: false },
  { value: 2, label: "pays : Sénégal & Mali", plus: false },
];

/** Frise verticale dont la ligne se dessine au rythme du scroll. */
const Timeline = () => {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.6"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <ol ref={ref} className="relative space-y-10 pl-8">
      <span aria-hidden="true" className="absolute left-[5px] top-2 h-[calc(100%-1rem)] w-px bg-border" />
      <motion.span
        aria-hidden="true"
        className="absolute left-[5px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-secondary"
        style={{ scaleY }}
      />
      {formation.map((f, i) => (
        <motion.li
          key={f.diplome}
          className="relative"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: i * 0.1 }}
        >
          <span aria-hidden="true" className="absolute -left-8 top-1.5 h-[11px] w-[11px] rounded-full border-2 border-secondary bg-background" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">{f.periode}</p>
          <h4 className="mt-1 font-heading text-xl font-semibold">{f.diplome}</h4>
          <p className="text-sm text-muted-foreground">{f.etablissement}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
        </motion.li>
      ))}
    </ol>
  );
};

const ProfileSection = () => (
  <section id="profil" className="section-padding relative">
    <div className="mx-auto max-w-6xl">
      <SectionHeading index="01" label="Profil" title="À propos de" accent="moi." />

      <ScrollWords
        text={identite.apropo}
        highlights={["SaaS", "stage", "bout"]}
        className="max-w-5xl font-heading text-[clamp(1.6rem,3.6vw,3rem)] font-medium leading-[1.2] tracking-[-0.01em]"
      />

      {/* Chiffres */}
      <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="flex flex-col-reverse bg-background p-6 md:p-8">
            <dt className="mt-2 text-sm text-muted-foreground">{s.label}</dt>
            <dd className="font-heading text-5xl font-bold text-primary md:text-6xl">
              <Counter to={s.value} />
              {s.plus && <span className="text-secondary">+</span>}
            </dd>
          </Reveal>
        ))}
      </dl>

      <div className="mt-24 grid gap-16 md:grid-cols-[1.3fr_1fr]">
        <div>
          <h3 className="mb-10 font-heading text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Parcours
          </h3>
          <Timeline />

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {autresExperiences.map((e, i) => (
              <Reveal key={e.titre} delay={i * 0.1} className="rounded-2xl border border-border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary">{e.periode}</p>
                <h4 className="mt-2 font-heading text-lg font-semibold">{e.titre}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.description}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="mb-6 font-heading text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Langues
            </h3>
            <ul className="space-y-5">
              {langues.map((l, i) => (
                <li key={l.lang}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium">{l.lang}</span>
                    <span className="text-muted-foreground">{l.level}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.pct}%` }}
                      viewport={VIEWPORT_ONCE}
                      transition={{ duration: 1.4, ease: EASE_OUT, delay: 0.2 + i * 0.15 }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-heading text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Qualités
            </h3>
            <ul className="space-y-3">
              {qualitePro.map((q, i) => (
                <motion.li
                  key={q}
                  className="flex items-start gap-3 text-sm"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT_ONCE}
                  transition={{ duration: 0.7, ease: EASE_OUT, delay: i * 0.08 }}
                >
                  <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                  {q}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-heading text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Intérêts
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Basketball", "Mali", "Sénégal"].map((t, i) => (
                <motion.span
                  key={t}
                  className="rounded-full border border-border px-4 py-2 text-sm"
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={VIEWPORT_ONCE}
                  transition={{ type: "spring", stiffness: 300, damping: 18, delay: i * 0.08 }}
                  whileHover={{ y: -3, borderColor: "hsl(var(--secondary))" }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProfileSection;
