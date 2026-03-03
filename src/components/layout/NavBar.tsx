import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function NavBar() {
  const { t, i18n } = useTranslation("common");
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isRTL = i18n.language === "ar";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleLang = () => {
    const next = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(next);
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = next;
  };

  const navLinks = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/services", label: t("nav.services") },
    { to: "/projects", label: t("nav.projects") },
    { to: "/contact", label: t("nav.contact") },
  ];

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b border-steel-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-9 h-9 bg-navy-800 flex items-center justify-center">
              <span className="text-white font-bold text-sm font-display">
                E
              </span>
            </div>
            <div>
              <div
                className={`font-display font-bold text-base leading-tight tracking-tight transition-colors ${scrolled ? "text-navy-800" : "text-white"}`}
              >
                Elite Solution
              </div>
              <div className="text-gold-500 text-[10px] font-semibold uppercase tracking-[0.2em]">
                USA LLC
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover-underline ${
                  isActive(link.to)
                    ? "text-gold-500"
                    : scrolled
                      ? "text-steel-700 hover:text-navy-800"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 border transition-all duration-200 ${
                scrolled
                  ? "border-steel-300 text-steel-600 hover:border-navy-800 hover:text-navy-800"
                  : "border-white/30 text-white/70 hover:border-white hover:text-white"
              }`}
              aria-label="Switch language"
            >
              {t("lang.switchTo")}
            </button>

            <Link to="/contact" className="btn-primary text-xs py-2.5 px-6">
              {t("nav.getInTouch")}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={toggleLang}
              className={`text-xs font-bold px-2 py-1 border ${scrolled ? "border-steel-300 text-steel-600" : "border-white/30 text-white"}`}
            >
              {t("lang.current")}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2 transition-colors ${scrolled ? "text-navy-800" : "text-white"}`}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 7h16M4 12h16M4 17h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen border-t border-steel-200" : "max-h-0"
        } bg-white`}
      >
        <div className="section-container py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`py-3 text-sm font-medium border-b border-steel-100 last:border-0 transition-colors ${
                isActive(link.to)
                  ? "text-gold-500"
                  : "text-steel-700 hover:text-navy-800"
              } ${isRTL ? "text-right" : "text-left"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-primary mt-4 justify-center text-center"
          >
            {t("nav.getInTouch")}
          </Link>
        </div>
      </div>
    </header>
  );
}
