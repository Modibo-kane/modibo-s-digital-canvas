import { useEffect, useRef, useState, type PointerEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import heroImg from "@/assets/moi.jpeg";
import DownloadCvButton from "@/components/DownloadCvButton";
import SplitText from "@/components/motion/SplitText";
import Magnetic from "@/components/motion/Magnetic";
import PillLink from "@/components/motion/PillLink";
import { EASE_OUT } from "@/lib/motion";
import { identite } from "@/data/profile";

/** Heure locale de Dakar, mise à jour chaque minute. */
const useDakarTime = () => {
  const fmt = () =>
    new Intl.DateTimeFormat("fr-FR", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Dakar" }).format(new Date());
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 30_000);
    return () => clearInterval(id);
  }, []);
  return time;
};

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const time = useDakarTime();

  // Halo violet qui suit la souris
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.4);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const glowX = useTransform(sx, (v) => `${v * 100}%`);
  const glowY = useTransform(sy, (v) => `${v * 100}%`);
  const glow = useMotionTemplate`radial-gradient(600px circle at ${glowX} ${glowY}, hsl(var(--primary) / 0.22), transparent 60%)`;

  // Inclinaison 3D de la photo
  const rotX = useTransform(sy, [0, 1], [10, -10]);
  const rotY = useTransform(sx, [0, 1], [-14, 14]);

  // Au scroll : les deux lignes du nom s'écartent et la section s'estompe
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const line1X = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const line2X = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  return (
    <section
      id="accueil"
      ref={ref}
      onPointerMove={onMove}
      className="relative flex min-h-[100svh] flex-col overflow-hidden px-6 pb-10 pt-28 md:px-12 lg:px-16"
    >
      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: glow }} />
      <div aria-hidden="true" className="grain pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay" />

      {/* Ligne d'infos */}
      <motion.div
        className="relative flex flex-wrap items-center justify-between gap-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <span className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary" />
          </span>
          Disponible pour un stage
        </span>
        <span>
          Dakar · <time className="tabular-nums text-foreground">{time}</time> GMT
        </span>
      </motion.div>

      {/* Nom géant */}
      <motion.div style={{ opacity: fade }} className="relative my-auto py-10">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-secondary">
          <SplitText text={identite.titre} by="words" stagger={0.08} immediate delay={0.2} />
        </p>
        <h1 className="font-heading font-bold leading-[0.88] tracking-[-0.04em] text-[clamp(3.5rem,17vw,13rem)]">
          <motion.span className="block" style={{ x: line1X }}>
            <SplitText text="Modibo" immediate delay={0.35} stagger={0.05} />
          </motion.span>
          <motion.span className="flex items-center justify-end gap-[0.12em]" style={{ x: line2X }}>
            {/* Photo en pilule qui s'ouvre dans le titre */}
            <motion.span
              aria-hidden="true"
              className="relative inline-block h-[0.72em] overflow-hidden rounded-full [perspective:800px]"
              initial={{ width: 0 }}
              animate={{ width: "1.5em" }}
              transition={{ duration: 1.2, ease: EASE_OUT, delay: 0.9 }}
            >
              <motion.img
                src={heroImg}
                alt=""
                className="h-full w-full object-cover"
                style={{ rotateX: rotX, rotateY: rotY, scale: 1.15 }}
              />
            </motion.span>
            <span>
              <SplitText text="Kané" immediate delay={0.55} stagger={0.05} />
              <motion.span
                aria-hidden="true"
                className="ml-[0.04em] inline-block h-[0.16em] w-[0.16em] rounded-full bg-secondary"
                initial={{ y: "-3em", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 420, damping: 11, delay: 1.1 }}
              />
            </span>
          </motion.span>
        </h1>
      </motion.div>

      {/* Bas du hero */}
      <motion.div
        className="relative grid items-end gap-8 md:grid-cols-[1fr_auto]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE_OUT, delay: 1.2 }}
      >
        <p className="max-w-md text-base text-muted-foreground md:text-lg">
          Déterminé, sérieux, autonome et conscient du travail qui m'attend, je suis persuadé que je serais un
          élément moteur au sein de votre structure !
        </p>
        <div className="flex flex-wrap items-start gap-3">
          <Magnetic>
            <PillLink href="#contact" icon={<ArrowDownRight size={16} />}>
              Me contacter
            </PillLink>
          </Magnetic>
          <Magnetic>
            <PillLink href="#projets" variant="outline" cursor="Voir">
              Voir mes projets
            </PillLink>
          </Magnetic>
          <Magnetic>
            <DownloadCvButton />
          </Magnetic>
        </div>
      </motion.div>

      {/* Indicateur de scroll */}
      <a
        href="#profil"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground lg:flex"
        aria-label="Descendre vers le profil"
      >
        <span className="relative h-12 w-px overflow-hidden bg-border">
          <motion.span
            className="absolute left-0 top-0 h-3 w-px bg-secondary"
            animate={reduce ? undefined : { y: [-12, 48] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </a>
    </section>
  );
};

export default HeroSection;
