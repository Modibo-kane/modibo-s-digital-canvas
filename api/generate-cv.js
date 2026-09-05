export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const cvData = {
    nom: "Modibo Kane",
    titre: "Développeur Web & Mobile Full Stack",
    accroche: "HTML5 · CSS3 · JavaScript ES6 · React · PHP · Node.js",
    emplacement: "Dakar, Sénégal",
    telephone: "70-642-54-77",
    email: "modibokanebis@gmail.com",
    linkedIn: "https://linkedin.com/in/modibo-kane",
    portfolio: "https://github.com/Modibo-kane",
    apropo: "Déterminé, sérieux et autonome, je suis persuadé que je serais un élément moteur au sein de votre structure.",
    competences: ["HTML", "CSS", "JavaScript ES6", "React", "PHP", "Node.js", "MySQL", "PostgreSQL", "MongoDB"],
    outils: ["Git & GitHub", "Insomnia", "Strapi", "Canvas", "TailwindCSS", "Express", "Bootstrap"],
    langues: ["Bambara (Bilingue)", "Français (Bilingue)", "Anglais (Intermédiaire)"],
    experiences: [
      // à compléter avec tes vraies expériences / stages
      { titre: "Développeur Web", periode: "2025 - 2026", entreprise: "Wakanect", description: "Développement d'une plateforme SaaS WhatsApp-to-commerce." },
    ],
    postes: [
      { titre: "Licence 2 Dév. Web & Mobile", periode: "2026", description: "UN Cheick Hamidou Kane" },
      { titre: "Formation accélérée", periode: "2025", description: "Telly Tech" },
      { titre: "Bac Scientifique", periode: "2023", description: "Askia Douso" },
    ],
  };

  const reponse = await fetch('https://api-pdf-5p10.onrender.com/api/pdf/cv', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.API_PDF_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cvData),
  });

  if (!reponse.ok) {
    return res.status(reponse.status).json({ error: 'Échec de la génération du CV' });
  }

  const buffer = await reponse.arrayBuffer();
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="CV-Modibo-Kane.pdf"');
  res.send(Buffer.from(buffer));
}