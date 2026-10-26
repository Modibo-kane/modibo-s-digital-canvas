/** Classes des boutons « pilule » du site. */
export type PillVariant = "primary" | "outline";

export const pillBase =
  "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-4 text-sm font-semibold " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export const pillVariants: Record<PillVariant, string> = {
  primary: "bg-primary text-primary-foreground",
  outline: "border border-secondary text-secondary",
};

