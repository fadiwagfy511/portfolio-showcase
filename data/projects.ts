export type Project = {
  id: string;
  name: string;
  tagline: string;
  category: 'Legal SaaS' | 'Beauty Tech' | 'EdTech AI' | 'Industrial Automation';
  categoryColor: string;
  status: 'Production' | 'Beta' | 'Live';
  description: string;
  businessValue: string;
  techStack: TechItem[];
  architecture: ArchLayer[];
  kpis: KPI[];
  slug: string;
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
  icon: string;
};

export type TechItem = {
  name: string;
  category: 'Backend' | 'Frontend' | 'Database' | 'Cloud' | 'AI' | 'Automation' | 'DevOps';
  color: string;
};

export type ArchLayer = {
  layer: string;
  components: string[];
  color: string;
};

export type KPI = {
  label: string;
  value: string;
  delta?: string;
};

export const projects: Project[] = [
  {
    id: 'sunrise-bail',
    slug: 'sunrise-bail',
    name: 'Sunrise Bail Bonds',
    tagline: 'Digital Bail Bond CRM with Isolated Multi-Tenant Architecture',
    category: 'Legal SaaS',
    categoryColor: 'from-amber-500 to-orange-600',
    status: 'Production',
    accentColor: '#f59e0b',
    gradientFrom: '#f59e0b',
    gradientTo: '#ea580c',
    icon: '⚖️',
    description: `A fully isolated Legal SaaS platform modernizing the bail bond intake process. Built on Laravel with a dedicated AWS-isolated database environment (u563640596_sunrise), preventing any cross-tenant data leakage. Features a React-powered client portal, real-time bond status tracking, and automated notification workflows.`,
    businessValue: `Digitizes the entire bail bond intake and management workflow — reducing manual paperwork processing time by ~80%, cutting client onboarding from 2 hours to under 15 minutes, and providing 24/7 self-service status tracking for families.`,
    kpis: [
      { label: 'Faster Intake', value: '8×', delta: 'vs paper process' },
      { label: 'Data Isolation', value: '100%', delta: 'AWS-isolated DB' },
      { label: 'Uptime SLA', value: '99.9%', delta: 'Hostinger production' },
      { label: 'Manual Steps Cut', value: '80%', delta: 'automated workflows' },
    ],
    techStack: [
      { name: 'Laravel 10', category: 'Backend', color: '#ef4444' },
      { name: 'React + Vite', category: 'Frontend', color: '#61dafb' },
      { name: 'MySQL (Isolated)', category: 'Database', color: '#00758f' },
      { name: 'Hostinger VPS', category: 'Cloud', color: '#7c3aed' },
      { name: 'REST API', category: 'Backend', color: '#10b981' },
      { name: 'TailwindCSS', category: 'Frontend', color: '#38bdf8' },
    ],
    architecture: [
      { layer: 'Client Portal', components: ['React/Vite SPA', 'Bond Status Tracker', 'Document Upload', 'Notification Center'], color: '#f59e0b' },
      { layer: 'Laravel API', components: ['Auth Middleware', 'Bond CRUD', 'Notification Service', 'PDF Generator'], color: '#ef4444' },
      { layer: 'Isolated Database', components: ['u563640596_sunrise DB', 'Full Isolation', 'Automated Backups', 'Migration System'], color: '#00758f' },
      { layer: 'Infrastructure', components: ['Hostinger VPS', '.env Isolation', 'SSL/TLS', 'Fail2Ban'], color: '#7c3aed' },
    ],
  },
  {
    id: 'nancy-beauty',
    slug: 'nancy-beauty',
    name: 'Nancy Beauty',
    tagline: 'Multilingual AI-Assisted Salon Booking Platform',
    category: 'Beauty Tech',
    categoryColor: 'from-pink-500 to-rose-600',
    status: 'Production',
    accentColor: '#ec4899',
    gradientFrom: '#ec4899',
    gradientTo: '#e11d48',
    icon: '💄',
    description: `A premium, multilingual beauty salon booking platform with an AI-assisted FAQ chatbot. Supports English, Spanish, and Arabic with runtime language detection — the chatbot automatically switches language mid-conversation. Built on React/Vite with a Laravel API backend and full GTM/SEO integration.`,
    businessValue: `Serves a diverse client base with zero language barrier friction. The multilingual chatbot handles 90%+ of pre-booking queries automatically, freeing staff from repetitive phone calls and enabling 24/7 booking across 3 languages.`,
    kpis: [
      { label: 'Languages Supported', value: '3', delta: 'EN / ES / AR' },
      { label: 'FAQ Queries Auto-Handled', value: '90%+', delta: 'chatbot coverage' },
      { label: 'Booking Conversion', value: '3.2×', delta: 'vs phone-only' },
      { label: 'SEO Score', value: '94/100', delta: 'Lighthouse audit' },
    ],
    techStack: [
      { name: 'React + Vite', category: 'Frontend', color: '#61dafb' },
      { name: 'Laravel API', category: 'Backend', color: '#ef4444' },
      { name: 'i18n (EN/ES/AR)', category: 'Frontend', color: '#8b5cf6' },
      { name: 'AI Chatbot', category: 'AI', color: '#10b981' },
      { name: 'Google Tag Manager', category: 'DevOps', color: '#4285f4' },
      { name: 'MySQL', category: 'Database', color: '#00758f' },
    ],
    architecture: [
      { layer: 'Multilingual Frontend', components: ['React/Vite SPA', 'i18next (EN/ES/AR)', 'Language Auto-Detect', 'RTL Support (Arabic)'], color: '#ec4899' },
      { layer: 'AI Chatbot', components: ['Language Detection Engine', 'FAQ Knowledge Base', '17 Q&A Pairs × 3 Languages', 'Fallback Logic'], color: '#8b5cf6' },
      { layer: 'Booking Engine', components: ['Service Catalog', 'Appointment Slots', 'Client Portal', 'SMS Reminders'], color: '#10b981' },
      { layer: 'Analytics & SEO', components: ['GTM Integration', 'GA4 Events', 'Hreflang Tags', 'Multilingual Sitemaps'], color: '#4285f4' },
    ],
  },
  {
    id: 'nursing-study',
    slug: 'nursing-study',
    name: 'NursingStudySource',
    tagline: 'AI-Powered NCLEX Exam Prep & Study Coach Platform',
    category: 'EdTech AI',
    categoryColor: 'from-teal-500 to-cyan-600',
    status: 'Beta',
    accentColor: '#14b8a6',
    gradientFrom: '#14b8a6',
    gradientTo: '#0891b2',
    icon: '🏥',
    description: `An AI-driven nursing exam preparation platform featuring a personalized study coach. The AI Content Engine generates adaptive study materials, quizzes, and targeted feedback based on each student's weak areas. Built as a Progressive Web App (PWA) for mobile-first nurses on the go.`,
    businessValue: `Addresses the $1.2B nursing exam prep market with personalized AI coaching unavailable in traditional textbooks. The adaptive quiz engine improves NCLEX pass rates by focusing study time on demonstrated weak areas rather than generic review.`,
    kpis: [
      { label: 'AI-Generated Questions', value: '10K+', delta: 'NCLEX-style' },
      { label: 'Study Efficiency', value: '4×', delta: 'vs generic prep' },
      { label: 'PWA Ready', value: '100%', delta: 'offline capable' },
      { label: 'Topic Categories', value: '47', delta: 'clinical domains' },
    ],
    techStack: [
      { name: 'React + PWA', category: 'Frontend', color: '#61dafb' },
      { name: 'Laravel API', category: 'Backend', color: '#ef4444' },
      { name: 'AI Content Engine', category: 'AI', color: '#10b981' },
      { name: 'Service Worker', category: 'Frontend', color: '#8b5cf6' },
      { name: 'MySQL', category: 'Database', color: '#00758f' },
      { name: 'Redis Cache', category: 'Cloud', color: '#dc2626' },
    ],
    architecture: [
      { layer: 'PWA Frontend', components: ['React SPA', 'Service Worker', 'Offline Cache', 'Push Notifications'], color: '#14b8a6' },
      { layer: 'AI Coach Engine', components: ['Content Generator', 'Adaptive Quiz Engine', 'Weakness Profiler', 'Study Plan Builder'], color: '#10b981' },
      { layer: 'Study Content', components: ['NCLEX Question Bank', '47 Clinical Domains', 'Video Explanations', 'Flashcard System'], color: '#0891b2' },
      { layer: 'Laravel Backend', components: ['User Progress API', 'Auth System', 'Content CRUD', 'Analytics Engine'], color: '#ef4444' },
    ],
  },
  {
    id: 'ocean-marine',
    slug: 'ocean-marine',
    name: 'Ocean Marine Automation',
    tagline: '15-Workflow Industrial Automation Suite on n8n',
    category: 'Industrial Automation',
    categoryColor: 'from-blue-500 to-indigo-600',
    status: 'Live',
    accentColor: '#3b82f6',
    gradientFrom: '#3b82f6',
    gradientTo: '#4f46e5',
    icon: '🚢',
    description: `A comprehensive industrial automation suite built on n8n, managing 15+ active workflows for a marine operations company. Workflows handle vessel departure alerts, daily operations reporting, compliance document tracking, and automated client notifications — all documented with Sticky Note nodes for future maintainability.`,
    businessValue: `Eliminates 40+ hours/week of manual reporting and logistics coordination. Zero-touch automated compliance tracking reduces regulatory risk while real-time vessel alerts give operations teams instant situational awareness across the fleet.`,
    kpis: [
      { label: 'Active Workflows', value: '15+', delta: 'fully documented' },
      { label: 'Hours Saved/Week', value: '40+', delta: 'manual reporting' },
      { label: 'Uptime', value: '99.7%', delta: 'n8n hosted' },
      { label: 'Integrations', value: '8', delta: 'Slack, Email, Sheets...' },
    ],
    techStack: [
      { name: 'n8n', category: 'Automation', color: '#ea4b71' },
      { name: 'Laravel Backend', category: 'Backend', color: '#ef4444' },
      { name: 'MySQL', category: 'Database', color: '#00758f' },
      { name: 'Webhook APIs', category: 'Backend', color: '#10b981' },
      { name: 'Google Sheets', category: 'Cloud', color: '#4285f4' },
      { name: 'Slack / Email', category: 'Automation', color: '#8b5cf6' },
    ],
    architecture: [
      { layer: 'Trigger Layer', components: ['Webhooks', 'CRON Schedules', 'Form Submissions', 'API Polling'], color: '#3b82f6' },
      { layer: 'Processing Layer', components: ['Data Transform', 'Condition Routing', 'MySQL Queries', 'PDF Generation'], color: '#4f46e5' },
      { layer: 'Action Layer', components: ['Slack Alerts', 'Email Reports', 'Google Sheets', 'SMS Notifications'], color: '#7c3aed' },
      { layer: 'Documentation', components: ['Sticky Note Nodes', 'Setup Guides', 'Credential Refs', 'Quick Reference'], color: '#10b981' },
    ],
  },
];
