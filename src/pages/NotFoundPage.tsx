import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotFoundPage() {
  const { t } = useTranslation("common");
  return (
    <div className="min-h-screen bg-navy-800 flex items-center justify-center">
      <div className="text-center">
        <div className="text-gold-500 font-display text-8xl font-black mb-4">
          404
        </div>
        <h1 className="text-white font-display text-2xl font-bold mb-4">
          Page not found
        </h1>
        <p className="text-steel-400 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn-gold">
          {t("nav.home")} <span>→</span>
        </Link>
      </div>
    </div>
  );
}
