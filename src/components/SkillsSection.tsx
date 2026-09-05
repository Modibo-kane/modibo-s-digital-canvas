import { competencesGroups, notions } from "@/data/profile";

const SkillsSection = () => (
  <section id="competences" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Mes <span className="text-secondary">compétences</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {competencesGroups.map((g) => (
          <div key={g.title} className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
            <h3 className="font-heading font-semibold text-base mb-4">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span key={s} className={`px-3 py-1.5 text-xs font-medium rounded-full ${g.color}`}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <h3 className="text-sm font-medium text-muted-foreground mb-3">Également expérimentés (notions)</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {notions.map((s) => (
            <span key={s} className="px-3 py-1 text-xs rounded-full border border-border text-muted-foreground bg-transparent">{s}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;