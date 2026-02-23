import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "Profil", href: "#profil" },
  { label: "Compétences", href: "#competences" },
  { label: "Projets", href: "#projets" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#accueil" className="font-heading text-xl font-bold text-primary">
          MK<span className="text-secondary">.</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-background border-b border-border px-6 pb-4 animate-fade-in">
          {links.map((l) => (
            <li key={l.href} className="py-2">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
