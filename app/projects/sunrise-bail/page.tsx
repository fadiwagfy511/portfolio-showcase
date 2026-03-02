import { projects } from '@/data/projects';
import { ProjectDetailLayout } from '@/components/ProjectDetailLayout';
import { SunriseBailSimulator } from '@/components/DemoSimulators';

export default function SunriseBailPage() {
    const project = projects.find(p => p.id === 'sunrise-bail')!;
    return <ProjectDetailLayout project={project} simulator={<SunriseBailSimulator />} />;
}

export const metadata = {
    title: 'Sunrise Bail Bonds — Project Detail | Fadi Alwagfy Portfolio',
    description: 'Legal SaaS platform with isolated AWS architecture for bail bond CRM.',
};
