import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { EASE_IN_OUT, EASE_OUT } from "@/lib/motion";

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "Profil", href: "#profil" },
  { label: "Compétences", href: "#competences" },
  { label: "Projets", href: "#projets" },
  { label: "Contact", href: "#contact" },
];

/** Suit la section visible pour placer la pastille active. */
const useActiveSection = () => {
  const [active, setActive] = useState(links[0].href);
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((s): s is HTMLElement => Boolean(s));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);
  return active;
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();
  const { scrollY } = useScroll();

  // Se cache en descendant, réapparaît dès qu'on remonte
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 160 && !open);
    setScrolled(y > 24);
  });

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
        animate={{ y: hidden ? "-120%" : "0%" }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
      >
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-5 py-3 transition-colors duration-500 ${
            scrolled ? "border-border bg-background/70 backdrop-blur-xl" : "border-transparent bg-transparent"
          }`}
          aria-label="Navigation principale"
        >
          <a href="#accueil" className="relative z-[70] font-heading text-xl font-bold text-primary" aria-label="Accueil — Modibo Kané">
            MK<span className="text-secondary">.</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href} className="relative">
                {active === l.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-primary/15"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <a
                  href={l.href}
                  aria-current={active === l.href ? "true" : undefined}
                  className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active === l.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Bouton menu mobile : deux traits qui se croisent */}
          <button
            className="relative z-[70] flex h-10 w-10 items-center justify-center rounded-full md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
          >
            <motion.span
              className="absolute h-0.5 w-6 rounded-full bg-foreground"
              animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
            />
            <motion.span
              className="absolute h-0.5 w-6 rounded-full bg-foreground"
              animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Menu mobile plein écran, ouvert en cercle depuis le bouton */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            className="fixed inset-0 z-[55] flex flex-col justify-center bg-card px-8 md:hidden"
            initial={{ clipPath: "circle(0% at calc(100% - 44px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 44px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 44px) 40px)" }}
            transition={{ duration: 0.7, ease: EASE_IN_OUT }}
          >
            <ul className="space-y-2">
              {links.map((l, i) => (
                <li key={l.href} className="overflow-hidden">
                  <motion.a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 font-heading text-5xl font-bold text-foreground"
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.2 + i * 0.06 }}
                  >
                    <span className="text-sm font-medium text-secondary">0{i + 1}</span>
                    {l.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
