import { projects } from '@/data/projects';
import { ProjectDetailLayout } from '@/components/ProjectDetailLayout';
import { GenericSimulator } from '@/components/DemoSimulators';

export default function SaasBizHubPage() {
    const project = projects.find(p => p.id === 'saasbizhub')!;
    return <ProjectDetailLayout project={project} simulator={<GenericSimulator project={project} />} />;
}

export const metadata = {
    title: 'SaasBizHub — Project Detail | Fadi Alwagfy Portfolio',
    description: 'All-in-one business operations and client management SaaS platform.',
};
