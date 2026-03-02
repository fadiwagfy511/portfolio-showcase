'use client';
import { useState } from 'react';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';

const categories = ['All', 'Legal SaaS', 'Beauty Tech', 'EdTech AI', 'Industrial Automation'];

const stats = [
    { label: 'Projects Delivered', value: '12+' },
    { label: 'Automation Workflows', value: '40+' },
    { label: 'Countries Served', value: '3' },
    { label: 'Languages Supported', value: '5' },
];

export default function HomePage() {
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const filtered = projects.filter(p => {
        const matchCat = activeCategory === 'All' || p.category === activeCategory;
        const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.description.toLowerCase().includes(search.toLowerCase()) ||
            p.businessValue.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchSearch;
    });

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-gray-950 to-purple-950" />
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(99,102,241,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(168,85,247,0.1) 0%, transparent 50%)',
                }} />
                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }} />
                <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm mb-8">
                        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                        Available for new projects — March 2026
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
                            Building Software
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            That Drives Business
                        </span>
                    </h1>
                    <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed">
                        I build <strong className="text-white">custom software & automation</strong> that saves your team time, cuts costs, and grows your business — from client portals to AI-powered booking platforms.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="#projects" className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg transition-colors shadow-lg shadow-indigo-500/20">
                            View Projects
                        </a>
                        <a href="mailto:contact@example.com" className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-lg transition-colors">
                            Get In Touch
                        </a>
                    </div>
                </div>
            </section>

            {/* Stats bar */}
            <section className="border-y border-gray-800 bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map(s => (
                        <div key={s.label} className="text-center">
                            <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
                            <div className="text-sm text-gray-500">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects section */}
            <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Project Showcase</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Real solutions, real results. Each project was built for a real client — click any card to see what it does and the impact it delivered.
                    </p>
                </div>

                {/* Search + Filter */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="relative flex-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search by industry, project name..."
                            className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                        />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {categories.map(c => (
                            <button
                                key={c}
                                onClick={() => setActiveCategory(c)}
                                className={`px-4 py-3 rounded-xl text-sm font-medium border transition-all ${activeCategory === c ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-gray-900 border-gray-800 text-gray-400 hover:border-gray-600 hover:text-white'}`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Cards grid */}
                {filtered.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
                    </div>
                ) : (
                    <div className="text-center py-20 text-gray-500">
                        <div className="text-4xl mb-4">🔍</div>
                        <p>No projects match your search. Try a different term.</p>
                    </div>
                )}
            </section>

            {/* CTA Footer */}
            <section className="border-t border-gray-800 bg-gradient-to-br from-indigo-950/50 to-purple-950/50">
                <div className="max-w-4xl mx-auto px-6 py-24 text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">Let's Build Something Together</h2>
                    <p className="text-gray-400 text-lg mb-8">Ready to scale your operations with custom software and automation?</p>
                    <a href="mailto:contact@example.com" className="inline-block px-10 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white font-semibold text-lg transition-opacity">
                        Start a Conversation →
                    </a>
                </div>
            </section>
        </div>
    );
}
