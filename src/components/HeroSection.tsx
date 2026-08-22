import heroImg from "@/assets/moi.jpeg";

const HeroSection = () => (
  <section
    id="accueil"
    className="min-h-screen flex items-center section-padding pt-28"
  >
    <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 animate-fade-in-up">
        <p className="text-sm font-medium text-secondary tracking-widest uppercase">
          Développeur Web & Mobile Full Stack
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Salut, je suis{" "}
          <span className="gradient-text">Modibo Kané</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-md">
          Déterminé, sérieux, autonome et conscient du travail qui m'attend, je
          suis persuadé que je serais un élément moteur au sein de votre
          structure !
        </p>
        <div className="flex gap-4 pt-2">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Me contacter
          </a>
          <a
            href="#projets"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-secondary text-secondary font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors"
          >
            Voir mes projets
          </a>
        </div>
      </div>

      <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-2xl" />
          <img
            src={heroImg}
            alt="Illustration de Modibo Kané développeur web"
            className="relative w-80 md:w-96 rounded-2xl"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;