import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { FillLayer, RollLabel } from "@/components/motion/PillLink";
import { pillBase, pillVariants } from "@/lib/pill";

const DownloadCvButton = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/generate-cv", { method: "POST" });
      if (!res.ok) throw new Error("Échec");

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "CV-Modibo-Kane.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-start gap-1">
      <button
        onClick={handleDownload}
        disabled={loading}
        aria-busy={loading}
        data-cursor="PDF"
        className={`${pillBase} ${pillVariants.outline} disabled:opacity-60`}
      >
        <FillLayer />
        <span className="relative flex items-center gap-2 transition-colors duration-300 group-hover:text-secondary-foreground">
          {loading ? <Loader2 className="animate-spin" size={16} /> : <Download size={16} />}
          <RollLabel>{loading ? "Génération..." : "Télécharger mon CV"}</RollLabel>
        </span>
      </button>
      <span role="status" className="min-h-4 text-xs text-red-300">
        {error && "Erreur, réessaie dans un instant."}
      </span>
    </div>
  );
};

export default DownloadCvButton;
