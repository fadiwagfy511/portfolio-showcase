import { projects } from '@/data/projects';
import { ProjectDetailLayout } from '@/components/ProjectDetailLayout';
import { GenericSimulator } from '@/components/DemoSimulators';

export default function HaddadDecorationsPage() {
    const project = projects.find(p => p.id === 'haddad-decorations')!;
    return <ProjectDetailLayout project={project} simulator={<GenericSimulator project={project} />} />;
}

export const metadata = {
    title: 'Haddad Decorations — Project Detail | Fadi Alwagfy Portfolio',
    description: 'Premium interior design studio website and client management platform.',
};
