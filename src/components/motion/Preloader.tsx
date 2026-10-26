import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE_IN_OUT, EASE_OUT } from "@/lib/motion";

const SEEN_KEY = "mk-intro-seen";

const alreadySeen = () => {
  try {
    return sessionStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
};

/**
 * Ouverture : « MK » monte, le point jaune tombe en rebondissant,
 * puis grossit jusqu'à couvrir l'écran et s'efface pour révéler la page.
 * Jouée une fois par session, jamais si l'utilisateur limite les animations.
 */
const Preloader = () => {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(() => !alreadySeen());
  const [phase, setPhase] = useState<"write" | "grow">("write");

  useEffect(() => {
    if (!visible) return;
    if (reduce) {
      setVisible(false);
      return;
    }
    document.documentElement.style.overflow = "hidden";
    const t1 = setTimeout(() => setPhase("grow"), 1300);
    const t2 = setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {
        /* stockage indisponible : l'intro rejouera, sans gravité */
      }
    }, 2100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.documentElement.style.overflow = "";
    };
  }, [visible, reduce]);

  return (
    <AnimatePresence onExitComplete={() => (document.documentElement.style.overflow = "")}>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          aria-hidden="true"
        >
          <div className="flex items-end font-heading text-7xl font-bold leading-none text-primary md:text-9xl">
            {["M", "K"].map((l, i) => (
              <span key={l} className="inline-block overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: phase === "grow" ? "-110%" : "0%" }}
                  transition={{ duration: 0.8, ease: EASE_IN_OUT, delay: phase === "grow" ? i * 0.05 : 0.1 + i * 0.08 }}
                >
                  {l}
                </motion.span>
              </span>
            ))}
            <motion.span
              className="mb-[0.12em] ml-1 inline-block h-[0.2em] w-[0.2em] rounded-full bg-secondary"
              initial={{ y: "-4em", scale: 1 }}
              animate={
                phase === "grow"
                  ? { y: 0, scale: 140 }
                  : { y: 0, scale: 1 }
              }
              transition={
                phase === "grow"
                  ? { duration: 0.8, ease: EASE_IN_OUT }
                  : { type: "spring", stiffness: 500, damping: 12, delay: 0.45 }
              }
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
