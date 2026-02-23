import { useState, FormEvent } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Me <span className="text-secondary">contacter</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <p className="text-muted-foreground">
              N'hésitez pas à me contacter pour toute opportunité ou collaboration !
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin size={18} className="text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Dakar, Scat Urbam</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail size={18} className="text-primary" />
                </div>
                <a href="mailto:modibokanebis@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  modibokanebis@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone size={18} className="text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">+221 70-642-54-77</span>
              </li>
            </ul>
          </div>

          {/* Form */}
          {sent ? (
            <div className="flex items-center justify-center bg-green-light rounded-xl p-8">
              <p className="font-heading font-semibold text-green-dark text-center">
                Merci ! Votre message a bien été envoyé. ✅
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Nom</label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Votre message..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                <Send size={16} /> Envoyer
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
