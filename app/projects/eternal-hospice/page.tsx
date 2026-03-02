import { projects } from '@/data/projects';
import { ProjectDetailLayout } from '@/components/ProjectDetailLayout';
import { GenericSimulator } from '@/components/DemoSimulators';

export default function EternalHospicePage() {
    const project = projects.find(p => p.id === 'eternal-hospice')!;
    return <ProjectDetailLayout project={project} simulator={<GenericSimulator project={project} />} />;
}

export const metadata = {
    title: 'Eternal Hospice — Project Detail | Fadi Alwagfy Portfolio',
    description: 'Compassionate hospice care operations and family communication portal.',
};
