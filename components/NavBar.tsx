'use client';
import Link from 'next/link';
import { useState } from 'react';

export function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">F</div>
                    <span className="text-white font-semibold text-lg">Fadi Alwagfy</span>
                    <span className="ml-2 text-xs text-indigo-400 font-medium px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">Portfolio</span>
                </Link>
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">Dashboard</Link>
                    <Link href="/projects/sunrise-bail" className="text-gray-400 hover:text-white text-sm transition-colors">Sunrise Bail</Link>
                    <Link href="/projects/nancy-beauty" className="text-gray-400 hover:text-white text-sm transition-colors">Nancy Beauty</Link>
                    <Link href="/projects/nursing-study" className="text-gray-400 hover:text-white text-sm transition-colors">Nursing AI</Link>
                    <Link href="/projects/ocean-marine" className="text-gray-400 hover:text-white text-sm transition-colors">Ocean Marine</Link>
                    <a href="mailto:contact@example.com" className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors">
                        Contact Me
                    </a>
                </div>
                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                    </svg>
                </button>
            </div>
            {menuOpen && (
                <div className="md:hidden bg-gray-950 border-t border-gray-800 px-6 py-4 flex flex-col gap-4">
                    <Link href="/" className="text-gray-300 text-sm">Dashboard</Link>
                    <Link href="/projects/sunrise-bail" className="text-gray-300 text-sm">Sunrise Bail Bonds</Link>
                    <Link href="/projects/nancy-beauty" className="text-gray-300 text-sm">Nancy Beauty</Link>
                    <Link href="/projects/nursing-study" className="text-gray-300 text-sm">NursingStudySource</Link>
                    <Link href="/projects/ocean-marine" className="text-gray-300 text-sm">Ocean Marine Automation</Link>
                </div>
            )}
        </nav>
    );
}
