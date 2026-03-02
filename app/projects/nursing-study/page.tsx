import { projects } from '@/data/projects';
import { ProjectDetailLayout } from '@/components/ProjectDetailLayout';
import { NursingAISimulator } from '@/components/DemoSimulators';

export default function NursingStudyPage() {
    const project = projects.find(p => p.id === 'nursing-study')!;
    return <ProjectDetailLayout project={project} simulator={<NursingAISimulator />} />;
}

export const metadata = {
    title: 'NursingStudySource — Project Detail | Fadi Alwagfy Portfolio',
    description: 'AI-powered NCLEX nursing exam preparation platform.',
};
