import { projects } from '@/data/projects';
import { ProjectDetailLayout } from '@/components/ProjectDetailLayout';
import { GenericSimulator } from '@/components/DemoSimulators';

export default function EssentialCarePage() {
    const project = projects.find(p => p.id === 'essential-care')!;
    return <ProjectDetailLayout project={project} simulator={<GenericSimulator project={project} />} />;
}

export const metadata = {
    title: 'Essential Care Home Health — Project Detail | Fadi Alwagfy Portfolio',
    description: 'Home health agency management and patient care platform.',
};
