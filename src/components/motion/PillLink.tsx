import type { ReactNode } from "react";

import { pillBase as base, pillVariants as variants, type PillVariant as Variant } from "@/lib/pill";

/** Libellé qui « roule » vers le haut au survol, doublé par une copie. */
export const RollLabel = ({ children }: { children: ReactNode }) => (
  <span className="relative block overflow-hidden">
    <span className="block transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-full">
      {children}
    </span>
    <span
      aria-hidden="true"
      className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-y-0"
    >
      {children}
    </span>
  </span>
);

/** Fond jaune qui monte depuis le bas au survol. */
export const FillLayer = () => (
  <span
    aria-hidden="true"
    className="absolute inset-0 translate-y-[101%] rounded-full bg-secondary transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-y-0"
  />
);

type PillLinkProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: Variant;
  cursor?: string;
};

/** Bouton-lien principal du site : remplissage jaune + libellé roulant. */
const PillLink = ({ href, children, icon, variant = "primary", cursor }: PillLinkProps) => (
  <a href={href} className={`${base} ${variants[variant]}`} data-cursor={cursor}>
    <FillLayer />
    <span className="relative flex items-center gap-2 transition-colors duration-300 group-hover:text-secondary-foreground">
      <RollLabel>{children}</RollLabel>
      {icon}
    </span>
  </a>
);

export default PillLink;
