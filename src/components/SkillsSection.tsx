const skillGroups = [
  {
    title: "Front-End",
    color: "bg-green-light text-green-dark",
    skills: ["HTML", "CSS", "JavaScript ES6"],
  },
  {
    title: "Back-End",
    color: "bg-violet-light text-violet-dark",
    skills: ["PHP", "Node.js"],
  },
  {
    title: "Bases de données",
    color: "bg-yellow-light text-accent-foreground",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Frameworks",
    color: "bg-green-light text-green-dark",
    skills: ["TailwindCSS", "Express", "Bootstrap"],
  },
  {
    title: "Autres langages",
    color: "bg-violet-light text-violet-dark",
    skills: ["Java", "C", "Swift"],
  },
  {
    title: "Outils",
    color: "bg-yellow-light text-accent-foreground",
    skills: ["Git & Github", "Insomnia", "Canvas"],
  },
];

const SkillsSection = () => (
  <section id="competences" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Mes <span className="text-secondary">compétences</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((g) => (
          <div key={g.title} className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
            <h3 className="font-heading font-semibold text-base mb-4">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span
                  key={s}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full ${g.color}`}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
