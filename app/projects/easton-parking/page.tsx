import { projects } from '@/data/projects';
import { ProjectDetailLayout } from '@/components/ProjectDetailLayout';
import { GenericSimulator } from '@/components/DemoSimulators';

export default function EastonParkingPage() {
    const project = projects.find(p => p.id === 'easton-parking')!;
    return <ProjectDetailLayout project={project} simulator={<GenericSimulator project={project} />} />;
}

export const metadata = {
    title: 'Easton Parking — Project Detail | Fadi Alwagfy Portfolio',
    description: 'Smart parking management and real-time space availability system.',
};
