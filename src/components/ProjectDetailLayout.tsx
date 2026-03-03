import { Link } from "react-router-dom";
import { Project } from "@/data/projects";

const CATEGORY_BG: Record<string, string> = {
  Backend: "#0F2044",
  Frontend: "#1e3a5f",
  Database: "#0a2a1a",
  Cloud: "#1a1a3e",
  AI: "#1a3a2a",
  Automation: "#2a1a1a",
  DevOps: "#1a2a3a",
};

export function ProjectDetailLayout({
  project,
  simulator = null,
  extraContent,
}: {
  project: Project;
  simulator?: React.ReactNode;
  extraContent?: React.ReactNode;
}) {
  const capabilities = project.architecture.flatMap((layer) =>
    layer.components.filter(
      (c) =>
        !c.match(
          /API|SPA|Vite|Redis|MySQL|DB|u5636|\.env|Fail2Ban|SSL|TLS|CRUD|Worker|Schema|Migration/i,
        ),
    ),
  );

  const statusColor =
    project.status === "Production"
      ? "#10b981"
      : project.status === "Beta"
        ? "#f59e0b"
        : "#3b82f6";

  return (
    <div className="min-h-screen bg-white">
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-navy-800 pb-0 relative overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Gold top bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold-500" />

        <div className="section-container relative z-10 pt-10 pb-16">
          {/* Category + Status row */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500">
              {project.category}
            </span>
            <div className="h-3 w-px bg-white/20" />
            <div className="flex items-center gap-1.5">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: statusColor }}
              />
              <span className="text-xs text-steel-400 font-medium">
                {project.status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            {/* Title block */}
            <div className="lg:col-span-8">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none mb-4">
                {project.name}
              </h1>
              <p className="text-steel-300 text-xl leading-relaxed max-w-2xl">
                {project.tagline}
              </p>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 btn-gold"
                >
                  View Live Site <span className="rtl-flip">→</span>
                </a>
              )}
            </div>

            {/* Icon block */}
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div
                className="w-24 h-24 lg:w-28 lg:h-28 flex items-center justify-center text-5xl border-2"
                style={{
                  borderColor: `${project.accentColor}60`,
                  background: `${project.accentColor}10`,
                }}
              >
                {project.icon}
              </div>
            </div>
          </div>
        </div>

        {/* KPI strip — anchored to bottom of hero */}
        <div className="border-t border-white/10">
          <div className="section-container">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {project.kpis.map((kpi) => (
                <div key={kpi.label} className="px-6 py-8">
                  <div
                    className="font-display font-black text-4xl md:text-5xl leading-none"
                    style={{ color: project.accentColor }}
                  >
                    {kpi.value}
                  </div>
                  <div className="text-white font-semibold text-sm mt-2">
                    {kpi.label}
                  </div>
                  {kpi.delta && (
                    <div className="text-steel-500 text-xs mt-1">
                      {kpi.delta}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ──────────────────────────────────────────── */}
      <div className="section-container py-20 space-y-20">
        {/* ── OVERVIEW ──────────────────────────────────────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold-500" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-500">
                The Challenge
              </span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-800 mb-4">
              What We Were Solving
            </h2>
            <p className="text-steel-500 leading-loose">
              {project.description}
            </p>
          </div>

          <div className="border-l-0 lg:border-l border-steel-200 lg:pl-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold-500" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-500">
                Business Impact
              </span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-800 mb-4">
              Why It Matters
            </h2>
            <p className="text-steel-500 leading-loose">
              {project.businessValue}
            </p>
          </div>
        </section>

        {/* ── TECH STACK ──────────────────────────────────────────────── */}
        {project.techStack.length > 0 && (
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-8 bg-gold-500 flex-shrink-0" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-800">
                Technology Stack
              </h2>
              <div className="flex-1 h-px bg-steel-200" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-steel-200">
              {project.techStack.map((tech, i) => (
                <div
                  key={tech.name}
                  className="bg-white p-6 flex items-center gap-4 group hover:bg-navy-800 transition-colors duration-200"
                >
                  {/* Color dot */}
                  <div
                    className="w-2 h-10 flex-shrink-0"
                    style={{ background: tech.color }}
                  />
                  <div>
                    <div className="font-display font-bold text-navy-800 group-hover:text-white transition-colors">
                      {tech.name}
                    </div>
                    <div
                      className="text-xs font-bold uppercase tracking-widest mt-1 group-hover:text-steel-400 transition-colors"
                      style={{ color: tech.color }}
                    >
                      {tech.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── ARCHITECTURE ────────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-8 bg-gold-500 flex-shrink-0" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-800">
              System Architecture
            </h2>
            <div className="flex-1 h-px bg-steel-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-steel-200">
            {project.architecture.map((layer, i) => (
              <div
                key={layer.layer}
                className="bg-white p-8 group hover:bg-navy-800 transition-colors duration-200"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-3 h-3 flex-shrink-0"
                    style={{ background: layer.color }}
                  />
                  <h3 className="font-display font-bold text-navy-800 group-hover:text-white transition-colors">
                    {layer.layer}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {layer.components.map((comp) => (
                    <span
                      key={comp}
                      className="text-xs px-3 py-1.5 border font-medium transition-colors duration-200"
                      style={{
                        color: layer.color,
                        borderColor: `${layer.color}30`,
                        background: `${layer.color}08`,
                      }}
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── DELIVERABLES ────────────────────────────────────────────── */}
        {capabilities.length > 0 && (
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-8 bg-gold-500 flex-shrink-0" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-800">
                What We Delivered
              </h2>
              <div className="flex-1 h-px bg-steel-200" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-steel-200">
              {capabilities.map((cap) => (
                <div
                  key={cap}
                  className="bg-white px-6 py-4 flex items-center gap-4 group hover:bg-steel-100 transition-colors"
                >
                  <span className="font-bold text-gold-500 flex-shrink-0">
                    —
                  </span>
                  <span className="text-steel-700 text-sm font-medium">
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── SIMULATOR (if provided) ───────────────────────────────── */}
        {simulator && (
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-8 bg-gold-500 flex-shrink-0" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-800">
                Interactive Demo
              </h2>
              <div className="flex-1 h-px bg-steel-200" />
            </div>
            {simulator}
          </section>
        )}

        {/* Extra content slot */}
        {extraContent}

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <section className="bg-navy-800 p-12 md:p-16 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          <div className="absolute top-0 left-0 h-full w-1 bg-gold-500" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-4xl mb-4">{project.icon}</div>
              <h2 className="font-display text-3xl md:text-4xl font-black text-white leading-tight mb-3">
                Want something like this?
              </h2>
              <p className="text-steel-300 leading-relaxed">
                Every business has unique challenges. Let's talk about what a
                custom solution could do for yours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <a
                href="mailto:contact@elitesolutionusa.com"
                className="btn-gold"
              >
                Let's Talk <span className="rtl-flip">→</span>
              </a>
              <Link
                to="/projects"
                className="btn-outline border-white/20 text-white hover:bg-white hover:text-navy-800"
              >
                More Projects
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Suppress unused import
void CATEGORY_BG;
