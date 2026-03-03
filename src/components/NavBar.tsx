import { Link } from "react-router-dom";
import { useState } from "react";
import { projects } from "@/data/projects";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
            E
          </div>
          <span className="text-white font-semibold text-lg">
            Elite Solution USA
          </span>
          <span className="ml-2 text-xs text-indigo-400 font-medium px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            LLC
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            Home
          </Link>

          {/* Projects dropdown */}
          <div className="relative" onMouseLeave={() => setDropdownOpen(false)}>
            <button
              onMouseEnter={() => setDropdownOpen(true)}
              className="flex items-center gap-1 text-gray-400 hover:text-white text-sm transition-colors"
            >
              Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl py-2 z-50">
                {projects.map((p) => (
                  <Link
                    key={p.id}
                    to={`/projects/${p.slug}`}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-800 transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span className="text-base">{p.icon}</span>
                    <div>
                      <div className="text-white text-sm font-medium leading-tight">
                        {p.name}
                      </div>
                      <div className="text-gray-500 text-xs">{p.category}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a
            href="mailto:contact@example.com"
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-400 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800 px-6 py-4 max-h-96 overflow-y-auto">
          <Link
            to="/"
            className="block text-gray-300 text-sm py-2"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <div className="text-xs text-gray-600 uppercase tracking-wider mt-3 mb-2">
            Projects
          </div>
          {projects.map((p) => (
            <Link
              key={p.id}
              to={`/projects/${p.slug}`}
              className="flex items-center gap-2 py-2 text-gray-300 text-sm hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              <span>{p.icon}</span>
              <span>{p.name}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
