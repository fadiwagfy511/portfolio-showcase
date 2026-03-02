import { projects } from '@/data/projects';
import { ProjectDetailLayout } from '@/components/ProjectDetailLayout';
import { GenericSimulator } from '@/components/DemoSimulators';

export default function PressBailBondsPage() {
    const project = projects.find(p => p.id === 'press-bail-bonds')!;
    return <ProjectDetailLayout project={project} simulator={<GenericSimulator project={project} />} />;
}

export const metadata = {
    title: 'Press Bail Bonds — Project Detail | Fadi Alwagfy Portfolio',
    description: 'Full-service bail bond agency platform with posting agent dashboard and commission tracking.',
};
