import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Magnetic from "@/components/motion/Magnetic";
import { EASE_OUT, VIEWPORT_ONCE } from "@/lib/motion";

const Footer = () => {
  const mark = useRef<HTMLDivElement>(null);
  const show = useInView(mark, VIEWPORT_ONCE);
  return (
  <footer className="relative overflow-hidden border-t border-border px-6 pb-8 pt-16 md:px-12">
    <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 text-sm text-muted-foreground">
      <p>
        © {new Date().getFullYear()} <span className="font-heading font-semibold text-foreground">Modibo Kané</span> — Tous
        droits réservés
      </p>
      <Magnetic>
        <a
          href="#accueil"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-secondary hover:bg-secondary hover:text-secondary-foreground"
          aria-label="Revenir en haut de la page"
        >
          <ArrowUp size={18} aria-hidden="true" />
        </a>
      </Magnetic>
    </div>

    {/* Grand wordmark final : les lettres montent, le point tombe et rebondit */}
    <div ref={mark} aria-hidden="true" className="mx-auto mt-10 flex max-w-6xl select-none items-end justify-center font-heading font-bold leading-[0.8] tracking-[-0.06em] text-primary text-[clamp(8rem,34vw,26rem)]">
      {["M", "K"].map((l, i) => (
        <span key={l} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={{ y: show ? "0%" : "100%" }}
            transition={{ duration: 1.1, ease: EASE_OUT, delay: i * 0.1 }}
          >
            {l}
          </motion.span>
        </span>
      ))}
      <motion.span
        className="mb-[0.06em] ml-[0.03em] inline-block h-[0.17em] w-[0.17em] rounded-full bg-secondary"
        initial={{ y: "-2.5em", opacity: 0 }}
        animate={show ? { y: 0, opacity: 1 } : { y: "-2.5em", opacity: 0 }}
        transition={{ type: "spring", stiffness: 380, damping: 10, delay: 0.5 }}
      />
    </div>
  </footer>
  );
};

export default Footer;
