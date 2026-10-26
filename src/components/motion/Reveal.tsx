import { motion, type HTMLMotionProps } from "framer-motion";
import { EASE_OUT, VIEWPORT_ONCE } from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

/** Fait apparaître son contenu (fondu + montée) quand il entre dans l'écran. */
const Reveal = ({ delay = 0, y = 40, children, ...rest }: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={VIEWPORT_ONCE}
    transition={{ duration: 0.9, ease: EASE_OUT, delay }}
    {...rest}
  >
    {children}
  </motion.div>
);

export default Reveal;
