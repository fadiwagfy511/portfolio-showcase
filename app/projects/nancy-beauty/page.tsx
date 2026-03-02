import { projects } from '@/data/projects';
import { ProjectDetailLayout } from '@/components/ProjectDetailLayout';
import { NancyBeautySimulator } from '@/components/DemoSimulators';

export default function NancyBeautyPage() {
    const project = projects.find(p => p.id === 'nancy-beauty')!;
    return <ProjectDetailLayout project={project} simulator={<NancyBeautySimulator />} />;
}

export const metadata = {
    title: 'Nancy Beauty — Project Detail | Fadi Alwagfy Portfolio',
    description: 'Multilingual beauty salon booking platform with AI chatbot.',
};
