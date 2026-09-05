import { MapPin, Mail, Phone, Linkedin, Github } from "lucide-react";
import { contact, formation, langues } from "@/data/profile";

const ProfileSection = () => (
  <section id="profil" className="section-padding bg-muted/50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        À propos de <span className="text-primary">moi</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Contact info */}
        <div className="bg-card rounded-xl p-6 shadow-sm space-y-4">
          <h3 className="font-heading font-semibold text-lg text-secondary">Contact</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-primary shrink-0" />
              {contact.emplacement}
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-primary shrink-0" />
              <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors">
                {contact.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-primary shrink-0" />
              {contact.telephone}
            </li>
            <li className="flex items-center gap-3">
              <Linkedin size={16} className="text-primary shrink-0" />
              <a href={contact.linkedIn} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                @modibo-kane
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Github size={16} className="text-primary shrink-0" />
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                Modibo-kane
              </a>
            </li>
          </ul>
        </div>

        {/* Langues */}
        <div className="bg-card rounded-xl p-6 shadow-sm space-y-4">
          <h3 className="font-heading font-semibold text-lg text-secondary">Langues</h3>
          <ul className="space-y-3 text-sm">
            {langues.map((l) => (
              <li key={l.lang}>
                <div className="flex justify-between text-muted-foreground mb-1">
                  <span>{l.lang}</span>
                  <span className="text-xs">{l.level}</span>
                </div>
                <div className="h-1.5 rounded-full bg-muted">
                  <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${l.pct}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Intérêts */}
        <div className="bg-card rounded-xl p-6 shadow-sm space-y-4">
          <h3 className="font-heading font-semibold text-lg text-secondary">Intérêts</h3>
          <div className="flex flex-wrap gap-2">
            {["🏀 Basketball", "✈️ Mali", "✈️ Sénégal"].map((i) => (
              <span key={i} className="px-3 py-1.5 text-xs rounded-full bg-accent/20 text-accent-foreground font-medium">
                {i}
              </span>
            ))}
          </div>

          <h3 className="font-heading font-semibold text-lg text-secondary pt-2">Formation</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {formation.map((f) => (
              <li key={f.diplome}>
                <span className="font-medium text-foreground">{f.periode}</span> — {f.diplome}, {f.etablissement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ProfileSection;