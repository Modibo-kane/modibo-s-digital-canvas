import { useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { siteProjects, contact } from "@/data/profile";
import wakanectImg from "@/assets/projects/wakanect.png";
import sitePortfolioImg from "@/assets/projects/ripolldarci.png";
import apiPdfImg from "@/assets/projects/apipdf.png";
import SectionHeading from "@/components/SectionHeading";
import TiltCard from "@/components/motion/TiltCard";
import Reveal from "@/components/motion/Reveal";
import Magnetic from "@/components/motion/Magnetic";
import PillLink from "@/components/motion/PillLink";

const images = [wakanectImg, sitePortfolioImg, apiPdfImg];

type Project = (typeof siteProjects)[number];

const ProjectCard = ({ p, i }: { p: Project; i: number }) => {
  const accent = p.accent.includes("secondary") ? "bg-secondary" : p.accent.includes("accent") ? "bg-violet-light" : "bg-primary";
  return (
    <TiltCard className="h-full">
      <a
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="Ouvrir"
        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <img
            src={images[i] ?? `https://image.thum.io/get/width/800/crop/900/${p.link}`}
            alt={`Aperçu du site ${p.titre}`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
          {/* Pastille « voir » qui grossit au survol */}
          <span className="absolute right-5 top-5 flex h-12 w-12 scale-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-100">
            <ArrowUpRight size={20} aria-hidden="true" />
          </span>
          <span className="text-outline absolute bottom-2 left-5 font-heading text-7xl font-bold leading-none md:text-8xl">
            {String(i + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-6 md:p-8">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            <span aria-hidden="true" className={`h-2 w-2 rounded-full ${accent}`} />
            {p.periode}
          </div>
          <h3 className="font-heading text-2xl font-semibold leading-tight md:text-3xl">
            <span className="bg-gradient-to-r from-secondary to-secondary bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]">
              {p.titre}
            </span>
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
          <ul className="mt-auto flex flex-wrap gap-1.5 pt-3">
            {p.tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border bg-muted px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </a>
    </TiltCard>
  );
};

const MoreOnGithub = () => (
  <div className="flex h-full flex-col items-start justify-center gap-6">
    <p className="font-heading text-4xl font-bold leading-tight">
      Envie d'en voir <span className="text-secondary">plus</span> ?
    </p>
    <Magnetic>
      <PillLink href={contact.github} variant="outline" icon={<Github size={16} aria-hidden="true" />}>
        Mon GitHub
      </PillLink>
    </Magnetic>
  </div>
);

/** Ordinateur : la section s'épingle et les projets défilent à l'horizontale. */
const HorizontalProjects = () => {
  const target = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (!track.current) return;
      setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target, offset: ["start start", "end end"] });
  const x = useSpring(useTransform(scrollYProgress, [0, 1], [0, -distance]), { stiffness: 120, damping: 30, mass: 0.3 });
  const bar = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={target} style={{ height: `calc(100vh + ${distance}px)` }} className="relative">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <motion.div ref={track} style={{ x }} className="flex w-max items-stretch gap-8 px-16">
          <div className="flex w-[34vw] shrink-0 flex-col justify-center">
            <SectionHeading index="03" label="Projets" title="Mes" accent="projets." />
            <p className="max-w-sm text-muted-foreground">
              {siteProjects.length} projets en ligne, du SaaS au CMS. Continuez à défiler.
            </p>
          </div>
          {siteProjects.map((p, i) => (
            <div key={p.titre} className="w-[min(42vw,560px)] shrink-0 py-4">
              <ProjectCard p={p} i={i} />
            </div>
          ))}
          <div className="w-[28vw] shrink-0">
            <MoreOnGithub />
          </div>
        </motion.div>
        {/* Avancement du défilement horizontal */}
        <div className="mx-16 mt-10 h-px bg-border">
          <motion.div className="h-px origin-left bg-secondary" style={{ scaleX: bar }} />
        </div>
      </div>
    </div>
  );
};

/** Mobile, tablette ou animations réduites : simple grille. */
const StackedProjects = () => (
  <div className="section-padding mx-auto max-w-6xl">
    <SectionHeading index="03" label="Projets" title="Mes" accent="projets." />
    <div className="grid gap-6 sm:grid-cols-2">
      {siteProjects.map((p, i) => (
        <Reveal key={p.titre} delay={(i % 2) * 0.1}>
          <ProjectCard p={p} i={i} />
        </Reveal>
      ))}
    </div>
    <div className="mt-14">
      <MoreOnGithub />
    </div>
  </div>
);

const useIsDesktop = () => {
  const [desktop, setDesktop] = useState(() => typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches);
  useLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setDesktop(mq.matches);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return desktop;
};

const ProjectsSection = () => {
  const desktop = useIsDesktop();
  const reduce = useReducedMotion();
  return (
    <section id="projets" className="relative bg-muted/30">
      {desktop && !reduce ? <HorizontalProjects /> : <StackedProjects />}
    </section>
  );
};

export default ProjectsSection;
