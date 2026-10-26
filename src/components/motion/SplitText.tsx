import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE_OUT, VIEWPORT_ONCE } from "@/lib/motion";

type SplitTextProps = {
  text: string;
  className?: string;
  /** "letters" : lettre par lettre ; "words" : mot par mot */
  by?: "letters" | "words";
  delay?: number;
  stagger?: number;
  /** Anime au montage plutôt qu'à l'entrée dans l'écran */
  immediate?: boolean;
};

/**
 * Révèle un texte en faisant monter chaque lettre (ou mot) depuis un masque.
 * Le texte complet reste lisible par les lecteurs d'écran via aria-label.
 */
const SplitText = ({
  text,
  className,
  by = "letters",
  delay = 0,
  stagger = 0.035,
  immediate = false,
}: SplitTextProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  // On observe le conteneur, pas les lettres : masquées par overflow-hidden,
  // elles ne seraient jamais détectées comme visibles.
  const inView = useInView(ref, VIEWPORT_ONCE);
  const show = immediate || inView;
  const words = text.split(" ");
  let index = 0;

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      {words.map((word, wi) => (
        <span key={wi} aria-hidden="true" className="inline-block whitespace-nowrap">
          {(by === "letters" ? word.split("") : [word]).map((chunk, ci) => {
            const i = index++;
            return (
              <span key={ci} className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom">
                <motion.span
                  className="inline-block will-change-transform"
                  initial={{ y: "110%", rotate: 6 }}
                  animate={show ? { y: "0%", rotate: 0 } : { y: "110%", rotate: 6 }}
                  transition={{ duration: 0.9, ease: EASE_OUT, delay: delay + i * stagger }}
                >
                  {chunk}
                </motion.span>
              </span>
            );
          })}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
};

export default SplitText;
