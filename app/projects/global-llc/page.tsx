import { projects } from '@/data/projects';
import { ProjectDetailLayout } from '@/components/ProjectDetailLayout';
import { GenericSimulator } from '@/components/DemoSimulators';

export default function GlobalLLCPage() {
    const project = projects.find(p => p.id === 'global-llc')!;
    return <ProjectDetailLayout project={project} simulator={<GenericSimulator project={project} />} />;
}

export const metadata = {
    title: 'GlobalLLC — Project Detail | Fadi Alwagfy Portfolio',
    description: 'Business formation and global LLC registration platform for international entrepreneurs.',
};
