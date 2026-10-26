import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, Send, type LucideIcon } from "lucide-react";
import { contact } from "@/data/profile";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import Magnetic from "@/components/motion/Magnetic";
import { FillLayer, RollLabel } from "@/components/motion/PillLink";
import { pillBase, pillVariants } from "@/lib/pill";
import { EASE_OUT } from "@/lib/motion";

type Channel = { icon: LucideIcon; label: string; value: string; href?: string; external?: boolean };

const channels: Channel[] = [
  { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { icon: Phone, label: "Téléphone", value: contact.telephone, href: `tel:${contact.telephone.replace(/\s/g, "")}` },
  { icon: Linkedin, label: "LinkedIn", value: "modibo-kane", href: contact.linkedIn, external: true },
  { icon: Github, label: "GitHub", value: "Modibo-kane", href: contact.github, external: true },
  { icon: MapPin, label: "Basé à", value: contact.emplacement },
];

/** Champ avec label flottant : le label monte quand le champ est rempli ou actif. */
const Field = ({ id, label, type = "text", textarea = false }: { id: string; label: string; type?: string; textarea?: boolean }) => {
  const cls =
    "peer w-full border-0 border-b border-border bg-transparent px-0 pb-3 pt-7 text-base text-foreground " +
    "placeholder-transparent transition-colors focus:border-secondary focus:outline-none focus:ring-0";
  return (
    <div className="relative">
      {textarea ? (
        <textarea id={id} name={id} rows={4} required placeholder={label} className={`${cls} resize-none`} />
      ) : (
        <input id={id} name={id} type={type} required placeholder={label} className={cls} />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-0 top-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-7 peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-1 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-secondary"
      >
        {label}
      </label>
    </div>
  );
};

const Success = () => (
  <motion.div
    key="ok"
    className="flex h-full min-h-[360px] flex-col items-center justify-center gap-6 rounded-3xl bg-yellow-light p-10 text-center"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, ease: EASE_OUT }}
    role="status"
  >
    <motion.span
      className="flex h-20 w-20 items-center justify-center rounded-full bg-violet-dark"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
    >
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="hsl(var(--secondary))" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <motion.path
          d="M5 12.5l4.5 4.5L19 7.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.35 }}
        />
      </svg>
    </motion.span>
    <p className="font-heading text-2xl font-semibold text-violet-dark">Merci ! Votre message a bien été envoyé.</p>
  </motion.div>
);

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <Reveal y={16} className="mb-6 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          <span className="text-secondary">(04)</span>
          <span className="h-px w-12 bg-border" />
          Contact
        </Reveal>
        <h2 className="mb-20 font-heading text-[clamp(3rem,9vw,8.5rem)] font-bold leading-[0.9] tracking-[-0.04em]">
          <SplitText text="Parlons de" by="words" stagger={0.08} />
          <br />
          <span className="text-secondary">
            <SplitText text="votre projet." by="words" stagger={0.08} delay={0.16} />
          </span>
        </h2>

        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="mb-8 max-w-sm text-muted-foreground">
              N'hésitez pas à me contacter pour toute opportunité ou collaboration !
            </p>
            <ul className="border-t border-border">
              {channels.map((c, i) => {
                const Icon = c.icon;
                const inner = (
                  <>
                    <span className="flex items-center gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-secondary group-hover:text-secondary-foreground">
                        <Icon size={18} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{c.label}</span>
                        <span className="block text-sm text-foreground md:text-base">{c.value}</span>
                      </span>
                    </span>
                    {c.href && (
                      <ArrowUpRight
                        size={20}
                        aria-hidden="true"
                        className="text-muted-foreground transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-secondary"
                      />
                    )}
                  </>
                );
                const row = "group relative flex items-center justify-between gap-4 py-4";
                return (
                  <Reveal key={c.label} delay={i * 0.06} y={20} className="border-b border-border">
                    {c.href ? (
                      <a
                        href={c.href}
                        className={row}
                        {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className={row}>{inner}</div>
                    )}
                  </Reveal>
                );
              })}
            </ul>
          </div>

          <AnimatePresence mode="wait">
            {sent ? (
              <Success />
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-8"
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: EASE_OUT }}
              >
                <Field id="name" label="Votre nom" />
                <Field id="email" label="Votre email" type="email" />
                <Field id="message" label="Votre message" textarea />
                <Magnetic>
                  <button type="submit" className={`${pillBase} ${pillVariants.primary}`} data-cursor="Go">
                    <FillLayer />
                    <span className="relative flex items-center gap-2 transition-colors duration-300 group-hover:text-secondary-foreground">
                      <RollLabel>Envoyer</RollLabel>
                      <Send size={16} aria-hidden="true" />
                    </span>
                  </button>
                </Magnetic>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
