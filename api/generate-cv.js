import {
  contact, identite, competences, outils, qualitePro, langues, experiences, formation, projets,
} from "../src/data/profile.ts";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const cvData = {
    nom: identite.nom,
    titre: identite.titre,
    accroche: identite.accroche,
    emplacement: contact.emplacement,
    telephone: contact.telephone,
    email: contact.email,
    linkedIn: contact.linkedIn,
    portfolio: contact.portfolio,
    apropo: identite.apropo,
    competences,
    outils,
    qualitePro,
    langues,
    experiences,
    postes: formation,
    projets,
  };

  const reponse = await fetch("https://api-pdf-5p10.onrender.com/api/pdf/cv", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.API_PDF_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cvData),
  });

  if (!reponse.ok) {
    return res.status(reponse.status).json({ error: "Échec de la génération du CV" });
  }

  const buffer = await reponse.arrayBuffer();
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", 'attachment; filename="CV-Modibo-Kane.pdf"');
  res.send(Buffer.from(buffer));
}