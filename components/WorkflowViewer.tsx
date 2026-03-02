'use client';
import { useState } from 'react';
import { Workflow, WorkflowNode } from '@/data/workflows';

function NodeBox({ node, selected, onClick }: { node: WorkflowNode; selected: boolean; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="absolute flex flex-col items-center gap-1 group cursor-pointer"
            style={{ left: node.x, top: node.y, width: 120 }}
        >
            <div
                className={`w-full rounded-xl border-2 p-2 text-center transition-all ${selected ? 'scale-105 shadow-lg' : 'hover:scale-102'}`}
                style={{
                    background: `${node.color}15`,
                    borderColor: selected ? node.color : `${node.color}50`,
                    boxShadow: selected ? `0 0 20px ${node.color}40` : 'none',
                }}
            >
                <div className="text-xl mb-1">{node.icon}</div>
                <div className="text-xs font-medium text-white leading-tight">{node.name}</div>
                <div className="text-xs mt-0.5 px-1.5 py-0 rounded-full" style={{ color: node.color, background: `${node.color}20` }}>
                    {node.typeLabel}
                </div>
            </div>
        </button>
    );
}

function ConnectionLines({ nodes, connections }: { nodes: WorkflowNode[]; connections: Workflow['connections'] }) {
    const getCenter = (id: string) => {
        const n = nodes.find(x => x.id === id);
        return n ? { x: n.x + 60, y: n.y + 48 } : { x: 0, y: 0 };
    };
    return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#4b5563" />
                </marker>
            </defs>
            {connections.map((c, i) => {
                const from = getCenter(c.from);
                const to = getCenter(c.to);
                const mx = (from.x + to.x) / 2;
                return (
                    <path
                        key={i}
                        d={`M${from.x},${from.y} C${mx},${from.y} ${mx},${to.y} ${to.x},${to.y}`}
                        fill="none"
                        stroke="#374151"
                        strokeWidth="2"
                        strokeDasharray="4 2"
                        markerEnd="url(#arrowhead)"
                    />
                );
            })}
        </svg>
    );
}

export function WorkflowViewer({ workflows }: { workflows: Workflow[] }) {
    const [activeWf, setActiveWf] = useState(workflows[0]);
    const [selectedNode, setSelectedNode] = useState<WorkflowNode | null>(null);

    const canvasHeight = Math.max(...activeWf.nodes.map(n => n.y)) + 160;

    return (
        <div className="space-y-4">
            {/* Workflow tabs */}
            <div className="flex flex-wrap gap-2">
                {workflows.map(wf => (
                    <button
                        key={wf.id}
                        onClick={() => { setActiveWf(wf); setSelectedNode(null); }}
                        className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${activeWf.id === wf.id
                            ? 'bg-indigo-600 border-indigo-500 text-white'
                            : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-600 hover:text-white'}`}
                    >
                        <span className="mr-2">{wf.status === 'active' ? '🟢' : '🔴'}</span>
                        {wf.name}
                    </button>
                ))}
            </div>

            {/* Workflow meta */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                    { label: 'Trigger', value: activeWf.trigger },
                    { label: 'Executions', value: activeWf.executions.toLocaleString() },
                    { label: 'Status', value: activeWf.status.toUpperCase() },
                    { label: 'Nodes', value: activeWf.nodes.length.toString() },
                ].map(s => (
                    <div key={s.label} className="bg-gray-800/60 rounded-xl p-3 border border-gray-700">
                        <div className="text-xs text-gray-500 mb-1">{s.label}</div>
                        <div className="text-white text-sm font-semibold">{s.value}</div>
                    </div>
                ))}
            </div>

            {/* Canvas */}
            <div className="relative bg-gray-900/80 rounded-2xl border border-gray-700 overflow-auto" style={{ minHeight: canvasHeight + 40 }}>
                {/* Grid pattern */}
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, #374151 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                    opacity: 0.4,
                }} />
                <div className="relative" style={{ height: canvasHeight + 40, minWidth: Math.max(...activeWf.nodes.map(n => n.x)) + 200 }}>
                    <ConnectionLines nodes={activeWf.nodes} connections={activeWf.connections} />
                    {activeWf.nodes.map(node => (
                        <NodeBox
                            key={node.id}
                            node={node}
                            selected={selectedNode?.id === node.id}
                            onClick={() => setSelectedNode(selectedNode?.id === node.id ? null : node)}
                        />
                    ))}
                </div>
            </div>

            {/* Node detail panel */}
            {selectedNode && (
                <div
                    className="rounded-xl border p-4 transition-all"
                    style={{ borderColor: `${selectedNode.color}50`, background: `${selectedNode.color}08` }}
                >
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{selectedNode.icon}</span>
                        <div>
                            <div className="text-white font-semibold">{selectedNode.name}</div>
                            <div className="text-xs" style={{ color: selectedNode.color }}>{selectedNode.typeLabel}</div>
                        </div>
                    </div>
                    <p className="text-gray-400 text-sm">{selectedNode.description}</p>
                </div>
            )}

            {/* Sticky note */}
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                <div className="text-yellow-400 text-xs font-semibold mb-1">📌 Developer Sticky Note</div>
                <p className="text-yellow-200/70 text-sm">{activeWf.stickyNote}</p>
            </div>
        </div>
    );
}
