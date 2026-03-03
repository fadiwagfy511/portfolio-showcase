import { useParams, Navigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { projects } from "@/data/projects";
import { ProjectDetailLayout } from "@/components/ProjectDetailLayout";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation("common");

  const project = projects.find((p) => p.slug === slug);
  if (!project) return <Navigate to="/projects" replace />;

  return (
    <div>
      {/* Back link */}
      <div className="bg-navy-800 pt-24 pb-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-steel-400 hover:text-gold-500 text-xs font-bold uppercase tracking-widest transition-colors"
          >
            <span className="rtl-flip">←</span> {t("cta.backToPortfolio")}
          </Link>
        </div>
      </div>
      <ProjectDetailLayout project={project} />
    </div>
  );
}
