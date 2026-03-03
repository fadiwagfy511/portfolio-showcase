import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";

const ALL_CATEGORIES = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export default function ProjectsPage() {
  const { t } = useTranslation(["projects", "common"]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = projects.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="bg-navy-800 pt-36 pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold-500" />
        <div className="section-container relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-gold-500" />
              <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.3em]">
                {t("projects:hero.label")}
              </span>
            </div>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none">
              {t("projects:hero.title")}
            </h1>
            <p className="mt-8 text-steel-300 text-lg leading-relaxed max-w-xl">
              {t("projects:hero.sub")}
            </p>
          </div>
        </div>
      </section>

      {/* ── FILTERS ───────────────────────────────────────────────── */}
      <div className="sticky top-20 z-30 bg-white border-b border-steel-200 shadow-sm">
        <div className="section-container py-4 flex flex-col md:flex-row gap-4 items-start md:items-center">
          {/* Search */}
          <div className="relative flex-shrink-0 w-full md:w-72">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-steel-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("projects:filter.search")}
              className="w-full pl-10 pr-4 py-2.5 border border-steel-200 text-sm focus:outline-none focus:border-navy-800 text-steel-800 placeholder-steel-400 bg-white"
            />
          </div>
          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-bold uppercase tracking-[0.12em] px-4 py-2 border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-navy-800 border-navy-800 text-white"
                    : "border-steel-200 text-steel-600 hover:border-navy-800 hover:text-navy-800"
                }`}
              >
                {cat === "All" ? t("projects:filter.all") : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── GRID ──────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="section-container">
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-steel-400">
              <div className="text-5xl mb-4">◎</div>
              <p className="text-lg">{t("projects:empty")}</p>
            </div>
          ) : (
            <>
              <p className="text-xs text-steel-400 uppercase tracking-widest mb-8 font-semibold">
                {filtered.length}{" "}
                {filtered.length === 1 ? "Project" : "Projects"}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-steel-200">
                {filtered.map((project) => (
                  <Link
                    key={project.id}
                    to={`/projects/${project.slug}`}
                    className="group bg-white p-8 hover:bg-navy-800 transition-all duration-300"
                  >
                    {/* Top */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className="w-12 h-12 flex items-center justify-center text-xl border border-steel-200 group-hover:border-white/20 transition-colors"
                        style={{ background: `${project.accentColor}15` }}
                      >
                        {project.icon}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            project.status === "Production"
                              ? "bg-emerald-400"
                              : project.status === "Beta"
                                ? "bg-amber-400"
                                : "bg-blue-400"
                          }`}
                        />
                        <span className="text-xs text-steel-400 group-hover:text-steel-300 transition-colors">
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs font-bold uppercase tracking-[0.15em] text-gold-500 mb-2">
                      {project.category}
                    </div>
                    <h3 className="font-display font-bold text-lg text-navy-800 group-hover:text-white mb-3 transition-colors leading-tight">
                      {project.name}
                    </h3>
                    <p className="text-steel-500 text-sm leading-relaxed line-clamp-2 mb-5 group-hover:text-steel-300 transition-colors">
                      {project.description}
                    </p>

                    {/* KPIs */}
                    <div className="flex gap-4 mb-5">
                      {project.kpis.slice(0, 2).map((kpi) => (
                        <div key={kpi.label}>
                          <div
                            className="font-display font-bold text-base"
                            style={{ color: project.accentColor }}
                          >
                            {kpi.value}
                          </div>
                          <div className="text-xs text-steel-400 group-hover:text-steel-500 transition-colors">
                            {kpi.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm border-t border-steel-100 group-hover:border-white/10 pt-4 transition-colors">
                      <div className="flex gap-1.5 flex-wrap">
                        {project.techStack.slice(0, 2).map((tt) => (
                          <span
                            key={tt.name}
                            className="text-xs px-1.5 py-0.5 bg-steel-100 text-steel-600 group-hover:bg-white/10 group-hover:text-steel-300 transition-colors"
                          >
                            {tt.name}
                          </span>
                        ))}
                      </div>
                      <span className="text-gold-500 font-bold text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                        {t("common:cta.viewDetails")}{" "}
                        <span className="rtl-flip">→</span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
