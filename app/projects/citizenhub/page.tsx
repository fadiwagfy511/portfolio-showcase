import { projects } from '@/data/projects';
import { ProjectDetailLayout } from '@/components/ProjectDetailLayout';
import { GenericSimulator } from '@/components/DemoSimulators';

export default function CitizenHubPage() {
    const project = projects.find(p => p.id === 'citizenhub')!;
    return <ProjectDetailLayout project={project} simulator={<GenericSimulator project={project} />} />;
}

export const metadata = {
    title: 'CitizenHub — Project Detail | Fadi Alwagfy Portfolio',
    description: 'Civic services and community engagement platform connecting residents with government agencies.',
};
