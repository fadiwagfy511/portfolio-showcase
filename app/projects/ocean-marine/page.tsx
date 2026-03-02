import { projects } from '@/data/projects';
import { oceanMarineWorkflows } from '@/data/workflows';
import { ProjectDetailLayout } from '@/components/ProjectDetailLayout';
import { OceanMarineSimulator } from '@/components/DemoSimulators';
import { WorkflowViewer } from '@/components/WorkflowViewer';

function WorkflowSection() {
    return (
        <section>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Live Automation Workflows</h2>
                <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-900 border border-gray-800 rounded-lg px-3 py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    n8n offline — showing schema snapshots
                </div>
            </div>
            <WorkflowViewer workflows={oceanMarineWorkflows} />
        </section>
    );
}

export default function OceanMarinePage() {
    const project = projects.find(p => p.id === 'ocean-marine')!;
    return (
        <ProjectDetailLayout
            project={project}
            simulator={<OceanMarineSimulator />}
            extraContent={<WorkflowSection />}
        />
    );
}

export const metadata = {
    title: 'Ocean Marine Automation — Project Detail | Fadi Alwagfy Portfolio',
    description: 'Industrial automation suite with 15+ n8n workflows for marine operations.',
};
