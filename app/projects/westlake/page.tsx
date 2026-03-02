import { projects } from '@/data/projects';
import { ProjectDetailLayout } from '@/components/ProjectDetailLayout';
import { GenericSimulator } from '@/components/DemoSimulators';

export default function WestlakePage() {
    const project = projects.find(p => p.id === 'westlake')!;
    return <ProjectDetailLayout project={project} simulator={<GenericSimulator project={project} />} />;
}

export const metadata = {
    title: 'Westlake Healthcare — Project Detail | Fadi Alwagfy Portfolio',
    description: 'HIPAA-compliant patient management and billing platform for home health and hospice agencies.',
};
