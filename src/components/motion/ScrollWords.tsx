import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const Word = ({
  children,
  progress,
  range,
  highlight,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  highlight: boolean;
}) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative mr-[0.25em] inline-block">
      <motion.span style={{ opacity }} className={highlight ? "text-secondary" : undefined}>
        {children}
      </motion.span>
    </span>
  );
};

type Props = { text: string; highlights?: string[]; className?: string };

/** Paragraphe dont les mots s'allument un à un pendant le scroll. */
const ScrollWords = ({ text, highlights = [], className }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.4"] });
  const words = text.split(" ");
  const clean = (w: string) => w.toLowerCase().replace(/[^\p{L}\d-]/gu, "");
  const hl = new Set(highlights.map(clean));

  return (
    <p ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((w, i) => {
          const start = i / words.length;
          return (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[start, start + 1 / words.length]}
              highlight={hl.has(clean(w))}
            >
              {w}
            </Word>
          );
        })}
      </span>
    </p>
  );
};

export default ScrollWords;
