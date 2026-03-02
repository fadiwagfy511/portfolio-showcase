'use client';
import Link from 'next/link';
import { Project } from '@/data/projects';

// Customer-friendly capability icons mapped to architecture layer names
const capabilityIcons: Record<string, string> = {
    default: '✅',
};

export function ProjectDetailLayout({
    project,
    simulator,
    extraContent,
}: {
    project: Project;
    simulator: React.ReactNode;
    extraContent?: React.ReactNode;
}) {
    // Build a flat list of plain-language capabilities from architecture layers
    const capabilities = project.architecture.flatMap(layer =>
        layer.components.filter(c =>
            // Strip out any obviously internal/technical names
            !c.match(/API|SPA|Vite|Redis|MySQL|DB|u5636|\.env|Fail2Ban|SSL|TLS|CRUD|Worker|Schema|Migration/i)
        )
    );

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${project.gradientFrom}18 0%, #030712 60%)` }} />
                <div className="relative max-w-7xl mx-auto px-6 py-20">
                    <div className="mb-6">
                        <Link href="/" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                            ← Back to Portfolio
                        </Link>
                    </div>
                    <div className="flex items-start gap-6 flex-wrap">
                        <div
                            className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0"
                            style={{ background: `${project.accentColor}18`, border: `1px solid ${project.accentColor}40` }}
                        >
                            {project.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 flex-wrap mb-2">
                                <span
                                    className="text-xs font-medium px-3 py-1 rounded-full border"
                                    style={{ color: project.accentColor, background: `${project.accentColor}15`, borderColor: `${project.accentColor}40` }}
                                >
                                    {project.category}
                                </span>
                                <span className="flex items-center gap-1.5 text-xs text-gray-500">
                                    <span className={`w-2 h-2 rounded-full ${project.status === 'Production' ? 'bg-green-400' : project.status === 'Beta' ? 'bg-yellow-400' : 'bg-blue-400'} animate-pulse`} />
                                    {project.status}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">{project.name}</h1>
                            <p className="text-gray-400 text-lg max-w-2xl">{project.tagline}</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 pb-20 space-y-16">

                {/* Results at a Glance */}
                <section>
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-5">Results at a Glance</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {project.kpis.map(kpi => (
                            <div key={kpi.label} className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                                <div className="text-3xl font-extrabold mb-1" style={{ color: project.accentColor }}>{kpi.value}</div>
                                <div className="text-white text-sm font-medium">{kpi.label}</div>
                                {kpi.delta && <div className="text-gray-500 text-xs mt-1">{kpi.delta}</div>}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Overview + Demo */}
                <section className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">The Challenge We Solved</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>
                        <div className="bg-gray-900/60 border rounded-2xl p-5" style={{ borderColor: `${project.accentColor}30` }}>
                            <h3 className="text-white font-semibold mb-2">💼 Business Impact</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{project.businessValue}</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">See It in Action</h2>
                        {simulator}
                    </div>
                </section>

                {/* What We Delivered — customer-friendly capabilities */}
                {capabilities.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-2">What We Delivered</h2>
                        <p className="text-gray-500 text-sm mb-6">A snapshot of the features and capabilities built into this solution.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {capabilities.map(cap => (
                                <div
                                    key={cap}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-colors"
                                >
                                    <span className="text-lg" style={{ color: project.accentColor }}>✓</span>
                                    <span className="text-gray-300 text-sm font-medium">{cap}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Extra content (e.g. workflow viewer for Ocean Marine) */}
                {extraContent}

                {/* CTA */}
                <section className="rounded-3xl p-10 text-center" style={{ background: `linear-gradient(135deg, ${project.gradientFrom}12, ${project.gradientTo}12)`, border: `1px solid ${project.accentColor}25` }}>
                    <div className="text-4xl mb-4">{project.icon}</div>
                    <h2 className="text-2xl font-bold text-white mb-3">Want something like this?</h2>
                    <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                        Every business has unique challenges. Let's talk about what a custom solution could do for yours.
                    </p>
                    <a
                        href="mailto:contact@example.com"
                        className="inline-block px-8 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90 shadow-lg"
                        style={{ background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})` }}
                    >
                        Let's Talk →
                    </a>
                </section>

            </div>
        </div>
    );
}
