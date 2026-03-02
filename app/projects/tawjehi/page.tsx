import { projects } from '@/data/projects';
import { ProjectDetailLayout } from '@/components/ProjectDetailLayout';
import { GenericSimulator } from '@/components/DemoSimulators';

export default function TawjehiPage() {
    const project = projects.find(p => p.id === 'tawjehi')!;
    return <ProjectDetailLayout project={project} simulator={<GenericSimulator project={project} />} />;
}

export const metadata = {
    title: 'Tawjehi Prep — Project Detail | Fadi Alwagfy Portfolio',
    description: 'AI-assisted Tawjihi exam preparation platform for Jordanian students in Arabic and English.',
};
