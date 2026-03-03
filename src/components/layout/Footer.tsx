import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation("common");

  const companyLinks = [
    { to: "/about", label: t("nav.about") },
    { to: "/services", label: t("nav.services") },
    { to: "/projects", label: t("nav.projects") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <footer className="bg-navy-800 text-white">
      {/* Top section */}
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold-500 flex items-center justify-center">
                <span className="text-white font-bold font-display">E</span>
              </div>
              <div>
                <div className="font-display font-bold text-lg text-white leading-tight">
                  Elite Solution USA LLC
                </div>
              </div>
            </div>
            <p className="text-steel-300 text-sm leading-relaxed max-w-sm mb-8">
              {t("footer.tagline")}
            </p>
            {/* Social links placeholder */}
            <div className="flex gap-3">
              {["linkedin", "github", "twitter"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 border border-steel-600 flex items-center justify-center text-steel-400 hover:border-gold-500 hover:text-gold-500 transition-colors duration-200"
                  aria-label={s}
                >
                  <span className="text-xs font-bold uppercase">{s[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500 mb-6">
              {t("footer.company")}
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-steel-300 text-sm hover:text-white transition-colors duration-200 hover-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500 mb-6">
              {t("footer.contactUs")}
            </h4>
            <ul className="space-y-4 text-sm text-steel-300">
              <li className="flex items-start gap-3">
                <span className="text-gold-500 mt-0.5">@</span>
                <a
                  href="mailto:contact@elitesolutionusa.com"
                  className="hover:text-white transition-colors"
                >
                  contact@elitesolutionusa.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-500 mt-0.5">◎</span>
                <span>United States of America</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-500 mt-0.5">◷</span>
                <span>Mon – Fri, 9 AM – 6 PM EST</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-steel-700">
        <div className="section-container py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-steel-400 text-xs">
            &copy; {new Date().getFullYear()} Elite Solution USA LLC.{" "}
            {t("footer.rights")}
          </p>
          <p className="text-steel-500 text-xs">{t("footer.madeWith")}</p>
        </div>
      </div>
    </footer>
  );
}
