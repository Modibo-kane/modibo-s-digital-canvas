import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";

type Props = { index: string; label: string; title: string; accent: string; accentClass?: string };

/** En-tête de section : numéro + libellé, puis grand titre révélé lettre par lettre. */
const SectionHeading = ({ index, label, title, accent, accentClass = "text-primary" }: Props) => (
  <div className="mb-14 md:mb-20">
    <Reveal y={16} className="mb-6 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
      <span className="text-secondary">({index})</span>
      <span className="h-px w-12 bg-border" />
      {label}
    </Reveal>
    <h2 className="font-heading text-[clamp(2.75rem,7vw,6rem)] font-bold leading-[0.95] tracking-[-0.03em]">
      <SplitText text={title} stagger={0.03} />{" "}
      <span className={accentClass}>
        <SplitText text={accent} stagger={0.03} delay={0.15} />
      </span>
    </h2>
  </div>
);

export default SectionHeading;
