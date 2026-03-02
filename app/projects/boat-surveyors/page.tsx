import { projects } from '@/data/projects';
import { ProjectDetailLayout } from '@/components/ProjectDetailLayout';
import { GenericSimulator } from '@/components/DemoSimulators';

export default function BoatSurveyorsPage() {
    const project = projects.find(p => p.id === 'boat-surveyors')!;
    return <ProjectDetailLayout project={project} simulator={<GenericSimulator project={project} />} />;
}

export const metadata = {
    title: 'OceanCheckPro — Project Detail | Fadi Alwagfy Portfolio',
    description: 'Marine survey platform with iOS and Android mobile app for boat surveyors.',
};
