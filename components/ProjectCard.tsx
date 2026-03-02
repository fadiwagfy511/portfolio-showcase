'use client';
import Link from 'next/link';
import { Project } from '@/data/projects';

export function ProjectCard({ project }: { project: Project }) {
    const categoryBadge: Record<string, string> = {
        'Legal SaaS': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
        'Beauty Tech': 'bg-pink-500/10 text-pink-400 border-pink-500/20',
        'EdTech AI': 'bg-teal-500/10 text-teal-400 border-teal-500/20',
        'Industrial Automation': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    };
    const statusColor: Record<string, string> = {
        Production: 'bg-green-400',
        Beta: 'bg-yellow-400',
        Live: 'bg-blue-400',
    };
    return (
        <Link href={`/projects/${project.slug}`} className="group block">
            <div className="relative h-full bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-600 hover:shadow-2xl hover:-translate-y-1">
                {/* Gradient top bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${project.categoryColor}`} />

                {/* Card body */}
                <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                                style={{ background: `${project.accentColor}18`, border: `1px solid ${project.accentColor}30` }}
                            >
                                {project.icon}
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-base leading-tight group-hover:text-indigo-300 transition-colors">
                                    {project.name}
                                </h3>
                                <span className={`mt-1 inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-full border ${categoryBadge[project.category]}`}>
                                    {project.category}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div className={`w-2 h-2 rounded-full ${statusColor[project.status]} animate-pulse`} />
                            <span className="text-xs text-gray-500">{project.status}</span>
                        </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
                        {project.description}
                    </p>

                    {/* KPIs */}
                    <div className="grid grid-cols-2 gap-3 mb-5">
                        {project.kpis.slice(0, 2).map((kpi) => (
                            <div key={kpi.label} className="bg-gray-800/60 rounded-lg p-3">
                                <div className="text-lg font-bold" style={{ color: project.accentColor }}>{kpi.value}</div>
                                <div className="text-xs text-gray-500 mt-0.5">{kpi.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 4).map((t) => (
                            <span key={t.name} className="text-xs px-2 py-0.5 rounded-md bg-gray-800 text-gray-400 border border-gray-700">
                                {t.name}
                            </span>
                        ))}
                        {project.techStack.length > 4 && (
                            <span className="text-xs px-2 py-0.5 rounded-md bg-gray-800 text-gray-500">
                                +{project.techStack.length - 4} more
                            </span>
                        )}
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="px-6 pb-6">
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">View deep-dive →</span>
                        <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:translate-x-1"
                            style={{ background: `${project.accentColor}20` }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" style={{ color: project.accentColor }} viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
