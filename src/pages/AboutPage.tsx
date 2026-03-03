import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const VALUES = ["v1", "v2", "v3", "v4"] as const;
const MILESTONES = ["m1", "m2", "m3", "m4", "m5", "m6"] as const;

export default function AboutPage() {
  const { t } = useTranslation("about");
  const storyRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const valuesRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const milestonesRef = useScrollReveal() as React.RefObject<HTMLDivElement>;

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
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none whitespace-pre-line">
              {t("hero.title")}
            </h1>
            <p className="mt-8 text-steel-300 text-lg leading-relaxed max-w-xl">
              {t("hero.sub")}
            </p>
          </div>
        </div>
      </section>

      {/* ── STORY ──────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="section-container">
          <div
            ref={storyRef}
            className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          >
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-6">
                {t("story.title")}
              </h2>
              <div className="h-0.5 w-12 bg-gold-500 mb-8" />
              <p className="text-steel-500 leading-relaxed mb-6">
                {t("story.p1")}
              </p>
              <p className="text-steel-500 leading-relaxed">{t("story.p2")}</p>
            </div>
            {/* Mission / Vision */}
            <div className="space-y-6">
              {(["mission", "vision"] as const).map((mv) => (
                <div key={mv} className="border-l-2 border-gold-500 pl-8 py-2">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500 mb-2">
                    {t(`${mv}.label`)}
                  </div>
                  <p className="text-navy-800 font-medium leading-relaxed text-lg">
                    {t(`${mv}.text`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ─────────────────────────────────────────────── */}
      <section className="py-24 bg-steel-100">
        <div className="section-container">
          <SectionHeader label={t("values.label")} title={t("values.title")} />
          <div
            ref={valuesRef}
            className="reveal grid grid-cols-1 md:grid-cols-2 gap-px bg-steel-200"
          >
            {VALUES.map((v, i) => (
              <div
                key={v}
                className="bg-white p-10 group hover:bg-navy-800 transition-all duration-300"
              >
                <div className="text-4xl font-black text-steel-100 font-display mb-6 group-hover:text-white/10 transition-colors">
                  0{i + 1}
                </div>
                <h3 className="font-display font-bold text-xl text-navy-800 mb-3 group-hover:text-white transition-colors">
                  {t(`values.${v}Title`)}
                </h3>
                <p className="text-steel-500 text-sm leading-relaxed group-hover:text-steel-300 transition-colors">
                  {t(`values.${v}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MILESTONES ──────────────────────────────────────────────── */}
      <section className="py-24 bg-navy-800">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "1px 80px",
          }}
        />
        <div className="section-container relative z-10">
          <SectionHeader
            label={t("milestones.label")}
            title={t("milestones.title")}
            light
          />
          <div
            ref={milestonesRef}
            className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10"
          >
            {MILESTONES.map((m) => (
              <div
                key={m}
                className="bg-navy-800 p-8 hover:bg-navy-950 transition-colors duration-200 group"
              >
                <div className="text-3xl font-black font-display text-gold-500 mb-4">
                  {t(`milestones.${m}Year`)}
                </div>
                <h4 className="font-display font-bold text-white mb-2">
                  {t(`milestones.${m}Title`)}
                </h4>
                <p className="text-steel-400 text-sm leading-relaxed">
                  {t(`milestones.${m}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
