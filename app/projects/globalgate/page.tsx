import { projects } from '@/data/projects';
import { ProjectDetailLayout } from '@/components/ProjectDetailLayout';
import { GenericSimulator } from '@/components/DemoSimulators';

export default function GlobalGatePage() {
    const project = projects.find(p => p.id === 'globalgate')!;
    return <ProjectDetailLayout project={project} simulator={<GenericSimulator project={project} />} />;
}

export const metadata = {
    title: 'GlobalGate — Project Detail | Fadi Alwagfy Portfolio',
    description: 'International business gateway and operations portal for global teams.',
};
