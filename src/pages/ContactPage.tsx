import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactPage() {
  const { t } = useTranslation(["contact", "common"]);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const formRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const infoRef = useScrollReveal() as React.RefObject<HTMLDivElement>;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || "Portfolio Inquiry");
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:contact@elitesolutionusa.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const REASONS = ["r1", "r2", "r3", "r4"] as const;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
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
          <div className="max-w-2xl animate-fade-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-gold-500" />
              <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.3em]">
                {t("contact:hero.label")}
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none whitespace-pre-line">
              {t("contact:hero.title")}
            </h1>
            <p className="mt-8 text-steel-300 text-lg leading-relaxed">
              {t("contact:hero.sub")}
            </p>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* FORM */}
            <div ref={formRef} className="reveal lg:col-span-7">
              {sent ? (
                <div className="border-2 border-gold-500 p-12 text-center">
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="font-display font-bold text-2xl text-navy-800 mb-3">
                    {t("contact:form.success")}
                  </h3>
                  <p className="text-steel-500">{t("contact:form.note")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-steel-200">
                    {/* Name */}
                    <div className="bg-white">
                      <label className="block text-xs font-bold uppercase tracking-[0.2em] text-steel-500 px-6 pt-5 pb-2">
                        {t("contact:form.name")}
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder={t("contact:form.namePh")}
                        className="w-full px-6 pb-5 text-navy-800 bg-white text-sm focus:outline-none placeholder-steel-300 border-b-2 border-transparent focus:border-gold-500 transition-colors"
                      />
                    </div>
                    {/* Email */}
                    <div className="bg-white">
                      <label className="block text-xs font-bold uppercase tracking-[0.2em] text-steel-500 px-6 pt-5 pb-2">
                        {t("contact:form.email")}
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder={t("contact:form.emailPh")}
                        className="w-full px-6 pb-5 text-navy-800 bg-white text-sm focus:outline-none placeholder-steel-300 border-b-2 border-transparent focus:border-gold-500 transition-colors"
                      />
                    </div>
                    {/* Company */}
                    <div className="bg-white">
                      <label className="block text-xs font-bold uppercase tracking-[0.2em] text-steel-500 px-6 pt-5 pb-2">
                        {t("contact:form.company")}
                      </label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder={t("contact:form.companyPh")}
                        className="w-full px-6 pb-5 text-navy-800 bg-white text-sm focus:outline-none placeholder-steel-300 border-b-2 border-transparent focus:border-gold-500 transition-colors"
                      />
                    </div>
                    {/* Subject */}
                    <div className="bg-white">
                      <label className="block text-xs font-bold uppercase tracking-[0.2em] text-steel-500 px-6 pt-5 pb-2">
                        {t("contact:form.subject")}
                      </label>
                      <input
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder={t("contact:form.subjectPh")}
                        className="w-full px-6 pb-5 text-navy-800 bg-white text-sm focus:outline-none placeholder-steel-300 border-b-2 border-transparent focus:border-gold-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="bg-white border border-t-0 border-steel-200">
                    <label className="block text-xs font-bold uppercase tracking-[0.2em] text-steel-500 px-6 pt-5 pb-2">
                      {t("contact:form.message")}
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder={t("contact:form.messagePh")}
                      className="w-full px-6 pb-5 text-navy-800 bg-white text-sm focus:outline-none placeholder-steel-300 resize-none border-b-2 border-transparent focus:border-gold-500 transition-colors"
                    />
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      className="btn-primary w-full md:w-auto justify-center"
                    >
                      {t("contact:form.send")}{" "}
                      <span className="rtl-flip">→</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* INFO */}
            <div ref={infoRef} className="reveal lg:col-span-5 space-y-10">
              {/* Contact info */}
              <div>
                <h3 className="font-display font-bold text-xl text-navy-800 mb-6">
                  {t("contact:info.title")}
                </h3>
                <ul className="space-y-5">
                  {[
                    {
                      icon: "@",
                      label: t("contact:info.email"),
                      value: "contact@elitesolutionusa.com",
                      href: "mailto:contact@elitesolutionusa.com",
                    },
                    {
                      icon: "◎",
                      label: t("contact:info.location"),
                      value: "United States of America",
                    },
                    {
                      icon: "◷",
                      label: t("contact:info.hours"),
                      value: t("contact:info.hoursVal"),
                    },
                  ].map((item) => (
                    <li
                      key={item.label}
                      className="flex items-start gap-4 border-b border-steel-100 pb-5"
                    >
                      <span className="text-gold-500 text-lg flex-shrink-0 mt-0.5">
                        {item.icon}
                      </span>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-steel-400 mb-1">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-navy-800 text-sm font-medium hover:text-gold-600 transition-colors hover-underline"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-navy-800 text-sm font-medium">
                            {item.value}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why work with us */}
              <div className="bg-navy-800 p-8">
                <h4 className="font-display font-bold text-white mb-6">
                  {t("contact:reason.title")}
                </h4>
                <ul className="space-y-4">
                  {REASONS.map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-3 text-sm text-steel-300"
                    >
                      <span className="text-gold-500 flex-shrink-0 font-bold">
                        ✓
                      </span>
                      {t(`contact:reason.${r}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
