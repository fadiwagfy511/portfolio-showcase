import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const STATS = [
  { value: "13+", labelKey: "stat1Label" },
  { value: "40+", labelKey: "stat2Label" },
  { value: "3", labelKey: "stat3Label" },
  { value: "5", labelKey: "stat4Label" },
];

const SERVICES = [
  { key: "s1", icon: "⬡" },
  { key: "s2", icon: "⟳" },
  { key: "s3", icon: "◈" },
  { key: "s4", icon: "⬕" },
  { key: "s5", icon: "◭" },
  { key: "s6", icon: "◉" },
];

export default function HomePage() {
  const { t } = useTranslation(["home", "common"]);
  const featuredProjects = projects.slice(0, 4);
  const servicesRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const featuredRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const ctaRef = useScrollReveal() as React.RefObject<HTMLDivElement>;

  return (
    <div className="min-h-screen bg-white">
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-navy-800 flex flex-col justify-center overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Gold accent line — top */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold-500" />

        <div className="section-container relative z-10 py-32 pt-40">
          {/* Badge */}
          <div className="animate-fade-in mb-10 inline-flex items-center gap-3">
            <div className="h-px w-10 bg-gold-500" />
            <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.3em]">
              {t("home:hero.badge")}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black leading-tight mb-8 animate-fade-up delay-100">
            <span className="text-white">{t("home:hero.headline1")}</span>{" "}
            <span className="text-gold-500">{t("home:hero.headline2")}</span>
          </h1>

          {/* Sub */}
          <p className="text-steel-300 text-lg md:text-xl max-w-xl leading-relaxed mb-12 animate-fade-up delay-200">
            {t("home:hero.sub")}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-20 animate-fade-up delay-300">
            <Link to="/projects" className="btn-gold">
              {t("common:cta.viewProjects")}
              <span className="rtl-flip">→</span>
            </Link>
            <Link
              to="/contact"
              className="btn-outline border-white/20 text-white hover:bg-white hover:text-navy-800"
            >
              {t("common:cta.contactUs")}
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border-t border-white/10 animate-fade-up delay-400">
            {STATS.map((s) => (
              <div
                key={s.labelKey}
                className="bg-navy-800 px-6 py-6 first:pl-0"
              >
                <div className="text-4xl font-black font-display text-white">
                  {s.value}
                </div>
                <div className="text-xs text-steel-400 uppercase tracking-wider mt-1">
                  {t(`home:hero.${s.labelKey}`)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-500">
          <div className="w-px h-12 bg-white/20 relative overflow-hidden">
            <div
              className="absolute top-0 w-full bg-gold-500 animate-bounce"
              style={{ height: "40%" }}
            />
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <SectionHeader
            label={t("home:services.label")}
            title={t("home:services.title")}
            sub={t("home:services.sub")}
          />
          <div
            ref={servicesRef}
            className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-steel-200"
          >
            {SERVICES.map((svc, i) => (
              <div
                key={svc.key}
                className="bg-white p-8 group hover:bg-navy-800 transition-all duration-300 cursor-default"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="text-2xl text-gold-500 mb-5 group-hover:text-gold-400 transition-colors">
                  {svc.icon}
                </div>
                <h3 className="font-display font-bold text-navy-800 text-lg mb-3 group-hover:text-white transition-colors">
                  {t(`home:services.${svc.key}Title`)}
                </h3>
                <p className="text-steel-500 text-sm leading-relaxed group-hover:text-steel-300 transition-colors">
                  {t(`home:services.${svc.key}Desc`)}
                </p>
                <div className="mt-6 h-px bg-steel-200 group-hover:bg-white/20 transition-colors" />
                <Link
                  to="/services"
                  className="mt-4 text-xs font-bold uppercase tracking-widest text-gold-500 group-hover:text-gold-400 inline-flex items-center gap-2 transition-colors hover-underline"
                >
                  {t("common:cta.learnMore")}{" "}
                  <span className="rtl-flip">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ──────────────────────────────────────── */}
      <section className="py-24 bg-steel-100">
        <div className="section-container">
          <SectionHeader
            label={t("home:featured.label")}
            title={t("home:featured.title")}
            sub={t("home:featured.sub")}
          />
          <div
            ref={featuredRef}
            className="reveal grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {featuredProjects.map((project, i) => (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                className="group bg-white border border-steel-200 p-8 hover:border-navy-800 hover:shadow-xl transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-14 h-14 flex items-center justify-center border border-steel-200 group-hover:border-navy-800 transition-colors overflow-hidden"
                    style={{
                      background: project.logo
                        ? "#ffffff"
                        : `${project.accentColor}12`,
                    }}
                  >
                    {project.logo ? (
                      <img
                        src={project.logo}
                        alt={project.name}
                        className="w-full h-full object-contain p-1"
                      />
                    ) : (
                      <span className="text-2xl">{project.icon}</span>
                    )}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-steel-400 border border-steel-200 px-3 py-1 group-hover:border-navy-800 group-hover:text-navy-800 transition-all">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-navy-800 mb-3 group-hover:text-gold-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-steel-500 text-sm leading-relaxed line-clamp-3 mb-6">
                  {project.description}
                </p>

                {/* KPIs */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {project.kpis.slice(0, 2).map((kpi) => (
                    <div key={kpi.label} className="bg-steel-100 p-3">
                      <div
                        className="font-display font-bold text-xl"
                        style={{ color: project.accentColor }}
                      >
                        {kpi.value}
                      </div>
                      <div className="text-xs text-steel-500 mt-0.5">
                        {kpi.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm border-t border-steel-100 pt-4">
                  <div className="flex gap-2 flex-wrap">
                    {project.techStack.slice(0, 3).map((t) => (
                      <span
                        key={t.name}
                        className="text-xs px-2 py-0.5 bg-steel-100 text-steel-600 font-medium"
                      >
                        {t.name}
                      </span>
                    ))}
                  </div>
                  <span className="text-gold-500 font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    {t("common:cta.viewDetails")}{" "}
                    <span className="rtl-flip">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/projects" className="btn-outline">
              {t("common:cta.viewAll")} <span className="rtl-flip">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────────────────────────── */}
      <section className="bg-navy-800 border-t-2 border-gold-500">
        <div ref={ctaRef} className="reveal section-container py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="h-px w-12 bg-gold-500 mb-8" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              {t("home:cta.title")}
            </h2>
            <p className="text-steel-300 text-lg leading-relaxed mb-10 max-w-2xl">
              {t("home:cta.sub")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold">
                {t("home:cta.btn1")} <span className="rtl-flip">→</span>
              </Link>
              <Link
                to="/projects"
                className="btn-outline border-white/20 text-white hover:bg-white hover:text-navy-800"
              >
                {t("home:cta.btn2")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
