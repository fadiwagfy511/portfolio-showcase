import { projects } from '@/data/projects';
import { ProjectDetailLayout } from '@/components/ProjectDetailLayout';
import { GenericSimulator } from '@/components/DemoSimulators';

export default function EliteNetworkingPage() {
    const project = projects.find(p => p.id === 'elite-networking')!;
    return <ProjectDetailLayout project={project} simulator={<GenericSimulator project={project} />} />;
}

export const metadata = {
    title: 'Elite Networking — Project Detail | Fadi Alwagfy Portfolio',
    description: 'Professional networking and business connections platform for executives and entrepreneurs.',
};
