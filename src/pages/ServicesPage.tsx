import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SERVICES = ["s1", "s2", "s3", "s4", "s5", "s6"] as const;
const PROCESS = ["p1", "p2", "p3", "p4", "p5", "p6"] as const;
const INDUSTRIES = ["i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8"] as const;

const SERVICE_ICONS: Record<string, string> = {
  s1: "⬡",
  s2: "⟳",
  s3: "◈",
  s4: "⬕",
  s5: "◭",
  s6: "◉",
};

export default function ServicesPage() {
  const { t } = useTranslation("services");
  const processRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const industriesRef = useScrollReveal() as React.RefObject<HTMLDivElement>;

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
                {t("hero.label")}
              </span>
            </div>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none">
              {t("hero.title")}
            </h1>
            <p className="mt-8 text-steel-300 text-lg leading-relaxed max-w-xl">
              {t("hero.sub")}
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICE CARDS ────────────────────────────────────────── */}
      <section className="py-24">
        <div className="section-container">
          <div className="space-y-0">
            {SERVICES.map((svc, i) => {
              const featureKeys = t(`${svc}.features`, {
                returnObjects: true,
              }) as string[];
              return (
                <div
                  key={svc}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-0 border border-steel-200 ${i > 0 ? "-mt-px" : ""} group hover:border-navy-800 hover:z-10 relative transition-colors duration-300`}
                >
                  {/* Number + icon column */}
                  <div className="lg:col-span-2 bg-steel-100 group-hover:bg-navy-800 transition-colors duration-300 p-8 flex flex-col items-start justify-between">
                    <span className="text-4xl font-black font-display text-steel-200 group-hover:text-white/20 transition-colors">
                      0{i + 1}
                    </span>
                    <span className="text-3xl text-gold-500">
                      {SERVICE_ICONS[svc]}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="lg:col-span-10 p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <h3 className="font-display font-bold text-2xl text-navy-800 mb-4 group-hover:text-navy-900 transition-colors">
                        {t(`${svc}.title`)}
                      </h3>
                      <p className="text-steel-500 leading-relaxed">
                        {t(`${svc}.desc`)}
                      </p>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500 mb-4">
                        Includes
                      </div>
                      <ul className="space-y-2">
                        {featureKeys.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2 text-sm text-steel-600"
                          >
                            <span className="text-gold-500 mt-0.5 flex-shrink-0">
                              —
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────── */}
      <section className="py-24 bg-navy-800">
        <div className="section-container">
          <SectionHeader
            label={t("process.label")}
            title={t("process.title")}
            light
          />
          <div
            ref={processRef}
            className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10"
          >
            {PROCESS.map((p) => (
              <div
                key={p}
                className="bg-navy-800 p-8 hover:bg-navy-950 transition-colors group"
              >
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500 mb-4">
                  {t(`process.${p}Title`).split("—")[0].trim()}
                </div>
                <h4 className="font-display font-bold text-white text-lg mb-3">
                  {t(`process.${p}Title`).split("—")[1]?.trim() ??
                    t(`process.${p}Title`)}
                </h4>
                <p className="text-steel-400 text-sm leading-relaxed">
                  {t(`process.${p}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────────────── */}
      <section className="py-24 bg-steel-100">
        <div className="section-container">
          <SectionHeader
            label={t("industries.label")}
            title={t("industries.label")}
          />
          <div ref={industriesRef} className="reveal flex flex-wrap gap-3">
            {INDUSTRIES.map((ind) => (
              <span
                key={ind}
                className="corp-tag border-steel-300 text-steel-700 bg-white hover:border-navy-800 hover:text-navy-800 hover:bg-white transition-all duration-200 cursor-default"
              >
                {t(`industries.${ind}`)}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
