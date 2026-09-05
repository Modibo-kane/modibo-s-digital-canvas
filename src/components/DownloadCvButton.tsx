import { useState } from "react";
import { Download, Loader2 } from "lucide-react";

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
        className="inline-flex items-center gap-2 p-6 w-[200px] h-[66px] rounded-lg border border-secondary text-secondary font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors disabled:opacity-60"
      >
        {loading ? <Loader2 className="animate-spin" size={18} /> : <Download size={18} />}
        {loading ? "Génération..." : "Télécharger mon CV"}
      </button>
      {error && <span className="text-xs text-destructive">Erreur, réessaie dans un instant.</span>}
    </div>
  );
};

export default DownloadCvButton;