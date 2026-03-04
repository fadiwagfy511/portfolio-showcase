export type Project = {
  id: string;
  name: string;
  tagline: string;
  category:
    | "Legal SaaS"
    | "Beauty Tech"
    | "EdTech AI"
    | "Industrial Automation"
    | "Healthcare SaaS"
    | "Business SaaS"
    | "Marine Tech"
    | "Smart Parking"
    | "Professional Network";
  categoryColor: string;
  status: "Production" | "Beta" | "Live";
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
  logo?: string;
  liveUrl?: string;
};

export type TechItem = {
  name: string;
  category:
    | "Backend"
    | "Frontend"
    | "Database"
    | "Cloud"
    | "AI"
    | "Automation"
    | "DevOps";
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
    id: "sunrise-bail",
    slug: "sunrise-bail",
    name: "Sunrise Bail Bonds",
    tagline: "Digital Bail Bond CRM with Isolated Multi-Tenant Architecture",
    category: "Legal SaaS",
    categoryColor: "from-amber-500 to-orange-600",
    status: "Production",
    accentColor: "#f59e0b",
    gradientFrom: "#f59e0b",
    gradientTo: "#ea580c",
    icon: "⚖️",
    logo: "/logos/SunriseBailBonds.svg",
    description: `A fully isolated Legal SaaS platform modernizing the bail bond intake process. Built on Laravel with a dedicated AWS-isolated database environment (u563640596_sunrise), preventing any cross-tenant data leakage. Features a React-powered client portal, real-time bond status tracking, and automated notification workflows.`,
    businessValue: `Digitizes the entire bail bond intake and management workflow — reducing manual paperwork processing time by ~80%, cutting client onboarding from 2 hours to under 15 minutes, and providing 24/7 self-service status tracking for families.`,
    kpis: [
      { label: "Faster Intake", value: "8×", delta: "vs paper process" },
      { label: "Data Isolation", value: "100%", delta: "AWS-isolated DB" },
      { label: "Uptime SLA", value: "99.9%", delta: "Hostinger production" },
      { label: "Manual Steps Cut", value: "80%", delta: "automated workflows" },
    ],
    techStack: [
      { name: "Laravel 10", category: "Backend", color: "#ef4444" },
      { name: "React + Vite", category: "Frontend", color: "#61dafb" },
      { name: "MySQL (Isolated)", category: "Database", color: "#00758f" },
      { name: "Hostinger VPS", category: "Cloud", color: "#7c3aed" },
      { name: "REST API", category: "Backend", color: "#10b981" },
      { name: "TailwindCSS", category: "Frontend", color: "#38bdf8" },
    ],
    architecture: [
      {
        layer: "Client Portal",
        components: [
          "React/Vite SPA",
          "Bond Status Tracker",
          "Document Upload",
          "Notification Center",
        ],
        color: "#f59e0b",
      },
      {
        layer: "Laravel API",
        components: [
          "Auth Middleware",
          "Bond CRUD",
          "Notification Service",
          "PDF Generator",
        ],
        color: "#ef4444",
      },
      {
        layer: "Isolated Database",
        components: [
          "u563640596_sunrise DB",
          "Full Isolation",
          "Automated Backups",
          "Migration System",
        ],
        color: "#00758f",
      },
      {
        layer: "Infrastructure",
        components: ["Hostinger VPS", ".env Isolation", "SSL/TLS", "Fail2Ban"],
        color: "#7c3aed",
      },
    ],
  },
  {
    id: "nancy-beauty",
    slug: "nancy-beauty",
    name: "Nancy Beauty",
    tagline: "Multilingual AI-Assisted Salon Booking Platform",
    category: "Beauty Tech",
    categoryColor: "from-pink-500 to-rose-600",
    status: "Production",
    accentColor: "#ec4899",
    gradientFrom: "#ec4899",
    gradientTo: "#e11d48",
    icon: "💄",
    logo: "/logos/Nancy-Beauty.svg",
    description: `A premium, multilingual beauty salon booking platform with an AI-assisted FAQ chatbot. Supports English, Spanish, and Arabic with runtime language detection — the chatbot automatically switches language mid-conversation. Built on React/Vite with a Laravel API backend and full GTM/SEO integration.`,
    businessValue: `Serves a diverse client base with zero language barrier friction. The multilingual chatbot handles 90%+ of pre-booking queries automatically, freeing staff from repetitive phone calls and enabling 24/7 booking across 3 languages.`,
    kpis: [
      { label: "Languages Supported", value: "3", delta: "EN / ES / AR" },
      {
        label: "FAQ Queries Auto-Handled",
        value: "90%+",
        delta: "chatbot coverage",
      },
      { label: "Booking Conversion", value: "3.2×", delta: "vs phone-only" },
      { label: "SEO Score", value: "94/100", delta: "Lighthouse audit" },
    ],
    techStack: [
      { name: "React + Vite", category: "Frontend", color: "#61dafb" },
      { name: "Laravel API", category: "Backend", color: "#ef4444" },
      { name: "i18n (EN/ES/AR)", category: "Frontend", color: "#8b5cf6" },
      { name: "AI Chatbot", category: "AI", color: "#10b981" },
      { name: "Google Tag Manager", category: "DevOps", color: "#4285f4" },
      { name: "MySQL", category: "Database", color: "#00758f" },
    ],
    architecture: [
      {
        layer: "Multilingual Frontend",
        components: [
          "React/Vite SPA",
          "i18next (EN/ES/AR)",
          "Language Auto-Detect",
          "RTL Support (Arabic)",
        ],
        color: "#ec4899",
      },
      {
        layer: "AI Chatbot",
        components: [
          "Language Detection Engine",
          "FAQ Knowledge Base",
          "17 Q&A Pairs × 3 Languages",
          "Fallback Logic",
        ],
        color: "#8b5cf6",
      },
      {
        layer: "Booking Engine",
        components: [
          "Service Catalog",
          "Appointment Slots",
          "Client Portal",
          "SMS Reminders",
        ],
        color: "#10b981",
      },
      {
        layer: "Analytics & SEO",
        components: [
          "GTM Integration",
          "GA4 Events",
          "Hreflang Tags",
          "Multilingual Sitemaps",
        ],
        color: "#4285f4",
      },
    ],
  },
  {
    id: "nursing-study",
    slug: "nursing-study",
    name: "NursingStudySource",
    tagline: "AI-Powered NCLEX Exam Prep & Study Coach Platform",
    category: "EdTech AI",
    categoryColor: "from-teal-500 to-cyan-600",
    status: "Beta",
    accentColor: "#14b8a6",
    gradientFrom: "#14b8a6",
    gradientTo: "#0891b2",
    icon: "🏥",
    logo: "/logos/Nursing-Study-Source.png",
    description: `An AI-driven nursing exam preparation platform featuring a personalized study coach. The AI Content Engine generates adaptive study materials, quizzes, and targeted feedback based on each student's weak areas. Built as a Progressive Web App (PWA) for mobile-first nurses on the go.`,
    businessValue: `Addresses the $1.2B nursing exam prep market with personalized AI coaching unavailable in traditional textbooks. The adaptive quiz engine improves NCLEX pass rates by focusing study time on demonstrated weak areas rather than generic review.`,
    kpis: [
      { label: "AI-Generated Questions", value: "10K+", delta: "NCLEX-style" },
      { label: "Study Efficiency", value: "4×", delta: "vs generic prep" },
      { label: "PWA Ready", value: "100%", delta: "offline capable" },
      { label: "Topic Categories", value: "47", delta: "clinical domains" },
    ],
    techStack: [
      { name: "React + PWA", category: "Frontend", color: "#61dafb" },
      { name: "Laravel API", category: "Backend", color: "#ef4444" },
      { name: "AI Content Engine", category: "AI", color: "#10b981" },
      { name: "Service Worker", category: "Frontend", color: "#8b5cf6" },
      { name: "MySQL", category: "Database", color: "#00758f" },
      { name: "Redis Cache", category: "Cloud", color: "#dc2626" },
    ],
    architecture: [
      {
        layer: "PWA Frontend",
        components: [
          "React SPA",
          "Service Worker",
          "Offline Cache",
          "Push Notifications",
        ],
        color: "#14b8a6",
      },
      {
        layer: "AI Coach Engine",
        components: [
          "Content Generator",
          "Adaptive Quiz Engine",
          "Weakness Profiler",
          "Study Plan Builder",
        ],
        color: "#10b981",
      },
      {
        layer: "Study Content",
        components: [
          "NCLEX Question Bank",
          "47 Clinical Domains",
          "Video Explanations",
          "Flashcard System",
        ],
        color: "#0891b2",
      },
      {
        layer: "Laravel Backend",
        components: [
          "User Progress API",
          "Auth System",
          "Content CRUD",
          "Analytics Engine",
        ],
        color: "#ef4444",
      },
    ],
  },
  {
    id: "ocean-marine",
    slug: "ocean-marine",
    name: "Ocean Marine Automation",
    tagline: "15-Workflow Industrial Automation Suite on n8n",
    category: "Industrial Automation",
    categoryColor: "from-blue-500 to-indigo-600",
    status: "Live",
    accentColor: "#3b82f6",
    gradientFrom: "#3b82f6",
    gradientTo: "#4f46e5",
    icon: "🚢",
    logo: "/logos/OceanMarineAutomation.svg",
    description: `A comprehensive industrial automation suite managing 15+ active workflows for a marine operations company. Workflows handle vessel departure alerts, daily operations reporting, compliance document tracking, and automated client notifications — all documented for future maintainability.`,
    businessValue: `Eliminates 40+ hours/week of manual reporting and logistics coordination. Zero-touch automated compliance tracking reduces regulatory risk while real-time vessel alerts give operations teams instant situational awareness across the fleet.`,
    kpis: [
      { label: "Active Workflows", value: "15+", delta: "fully documented" },
      { label: "Hours Saved/Week", value: "40+", delta: "manual reporting" },
      { label: "Uptime", value: "99.7%", delta: "hosted automation" },
      { label: "Integrations", value: "8", delta: "Slack, Email, Sheets..." },
    ],
    techStack: [
      { name: "n8n", category: "Automation", color: "#ea4b71" },
      { name: "Laravel Backend", category: "Backend", color: "#ef4444" },
      { name: "MySQL", category: "Database", color: "#00758f" },
      { name: "Webhook APIs", category: "Backend", color: "#10b981" },
      { name: "Google Sheets", category: "Cloud", color: "#4285f4" },
      { name: "Slack / Email", category: "Automation", color: "#8b5cf6" },
    ],
    architecture: [
      {
        layer: "Trigger Layer",
        components: [
          "Webhook Triggers",
          "Scheduled Reports",
          "Form Submissions",
          "Real-Time Polling",
        ],
        color: "#3b82f6",
      },
      {
        layer: "Processing Layer",
        components: [
          "Data Transformation",
          "Condition Routing",
          "Report Generation",
          "Document Creation",
        ],
        color: "#4f46e5",
      },
      {
        layer: "Action Layer",
        components: [
          "Slack Alerts",
          "Email Reports",
          "Google Sheets Sync",
          "SMS Notifications",
        ],
        color: "#7c3aed",
      },
      {
        layer: "Documentation",
        components: [
          "Setup Guides",
          "Credential References",
          "Quick Reference Cards",
          "Maintenance Notes",
        ],
        color: "#10b981",
      },
    ],
  },
  // ── NEW PROJECTS ─────────────────────────────────────────────────────────
  {
    id: "westlake",
    slug: "westlake",
    name: "Westlake Healthcare",
    tagline: "HIPAA-Compliant Patient Management & Billing Platform",
    category: "Healthcare SaaS",
    categoryColor: "from-emerald-500 to-teal-600",
    status: "Production",
    accentColor: "#10b981",
    gradientFrom: "#10b981",
    gradientTo: "#0d9488",
    icon: "🏥",
    logo: "/logos/WestlakeHealthcare.svg",
    description: `A full-featured healthcare management platform built for home health and hospice agencies. Provides a patient portal, staff scheduling, care plan management, and a real-time billing dashboard — all in one HIPAA-compliant system accessible from any device.`,
    businessValue: `Replaces paper-based intake and billing workflows with a single digital system, cutting administrative overhead by 60% and reducing billing errors that cost agencies thousands per month. Staff spend more time on patient care and less time on paperwork.`,
    kpis: [
      { label: "Admin Time Saved", value: "60%", delta: "vs paper workflows" },
      {
        label: "Billing Accuracy",
        value: "99%+",
        delta: "automated validation",
      },
      {
        label: "Patient Records",
        value: "Instant",
        delta: "any device, any time",
      },
      { label: "HIPAA Compliant", value: "100%", delta: "fully audited" },
    ],
    techStack: [
      { name: "React", category: "Frontend", color: "#61dafb" },
      { name: "Laravel", category: "Backend", color: "#ef4444" },
      { name: "MySQL", category: "Database", color: "#00758f" },
    ],
    architecture: [
      {
        layer: "Patient Portal",
        components: [
          "Patient Profiles",
          "Care Plan Viewer",
          "Appointment Scheduling",
          "Document Upload",
        ],
        color: "#10b981",
      },
      {
        layer: "Staff Tools",
        components: [
          "Staff Scheduling",
          "Visit Tracking",
          "Task Management",
          "Shift Handover Notes",
        ],
        color: "#0d9488",
      },
      {
        layer: "Billing & Compliance",
        components: [
          "Insurance Claims",
          "Invoice Generation",
          "Billing Dashboard",
          "Audit Logs",
        ],
        color: "#047857",
      },
      {
        layer: "Admin Dashboard",
        components: [
          "Agency Overview",
          "Staff Performance",
          "Patient Census",
          "Revenue Reports",
        ],
        color: "#065f46",
      },
    ],
  },
  {
    id: "saasbizhub",
    slug: "saasbizhub",
    name: "SaasBizHub",
    tagline:
      "Elite Solution USA LLC's Own All-in-One Business Operations Platform",
    category: "Business SaaS",
    categoryColor: "from-violet-500 to-purple-600",
    status: "Production",
    accentColor: "#8b5cf6",
    gradientFrom: "#8b5cf6",
    gradientTo: "#7c3aed",
    icon: "🏢",
    logo: "/logos/Saasbizhub-logo.png",
    description: `SaasBizHub is the flagship platform built and operated by Elite Solution USA LLC. It consolidates client management, project tracking, invoicing, and team collaboration into one powerful hub — and is the same system we use to run our own business day-to-day. Built for small-to-mid businesses that want enterprise-level organization without enterprise-level complexity.`,
    businessValue: `Eliminates the chaos of managing clients across spreadsheets, email chains, and disconnected tools. Because Elite Solution USA LLC built and uses this platform internally, every feature is battle-tested in a real business environment. SaasBizHub gives owners a real-time view of every client, every project, and every dollar — from one dashboard.`,
    kpis: [
      { label: "Tools Replaced", value: "5+", delta: "one platform" },
      { label: "Invoicing Speed", value: "10×", delta: "automated billing" },
      { label: "Client Visibility", value: "360°", delta: "full history" },
      {
        label: "Team Efficiency",
        value: "+45%",
        delta: "reduced back-and-forth",
      },
    ],
    techStack: [
      { name: "React", category: "Frontend", color: "#61dafb" },
      { name: "Laravel", category: "Backend", color: "#ef4444" },
      { name: "MySQL", category: "Database", color: "#00758f" },
    ],
    architecture: [
      {
        layer: "Client Management",
        components: [
          "Client Profiles",
          "Contact History",
          "Deal Pipeline",
          "Follow-Up Reminders",
        ],
        color: "#8b5cf6",
      },
      {
        layer: "Project Tracking",
        components: [
          "Project Timelines",
          "Task Boards",
          "Milestone Tracking",
          "Team Assignments",
        ],
        color: "#7c3aed",
      },
      {
        layer: "Financial Tools",
        components: [
          "Invoice Generator",
          "Payment Tracking",
          "Expense Logging",
          "Revenue Dashboard",
        ],
        color: "#6d28d9",
      },
      {
        layer: "Admin Dashboard",
        components: [
          "Business Overview",
          "Staff Performance",
          "Client Reports",
          "Growth Analytics",
        ],
        color: "#5b21b6",
      },
    ],
  },
  {
    id: "globalgatetaxes",
    slug: "globalgatetaxes",
    name: "GlobalGate Taxes",
    tagline: "International Business Gateway & Operations Portal",
    category: "Business SaaS",
    categoryColor: "from-sky-500 to-blue-600",
    status: "Production",
    accentColor: "#0ea5e9",
    gradientFrom: "#0ea5e9",
    gradientTo: "#2563eb",
    icon: "🌐",
    logo: "/logos/globalGateTaxes.svg",
    description: `A centralized operations portal designed for businesses managing international clients, vendors, and teams. globalGate Taxes streamlines cross-border workflows, multi-currency transactions, document management, and team communication — from one secure control center.`,
    businessValue: `Removes the friction of managing global operations across time zones and currencies. globalGate Taxes gives leadership a live command center view of all international activity, reducing operational delays and costly miscommunications between teams.`,
    kpis: [
      {
        label: "Operational Delays Cut",
        value: "70%",
        delta: "vs manual coordination",
      },
      {
        label: "Countries Supported",
        value: "Multi-region",
        delta: "any timezone",
      },
      { label: "Document Turnaround", value: "3×", delta: "faster approvals" },
      {
        label: "Team Visibility",
        value: "Real-time",
        delta: "live status board",
      },
    ],
    techStack: [
      { name: "React", category: "Frontend", color: "#61dafb" },
      { name: "Laravel", category: "Backend", color: "#ef4444" },
      { name: "MySQL", category: "Database", color: "#00758f" },
    ],
    architecture: [
      {
        layer: "Operations Portal",
        components: [
          "Live Status Board",
          "Task Assignments",
          "Priority Queue",
          "Deadline Tracking",
        ],
        color: "#0ea5e9",
      },
      {
        layer: "Document Center",
        components: [
          "Contract Management",
          "E-Signatures",
          "Version Control",
          "Approval Workflows",
        ],
        color: "#2563eb",
      },
      {
        layer: "Finance Module",
        components: [
          "Multi-Currency Support",
          "Payment Tracking",
          "Budget Management",
          "Financial Reports",
        ],
        color: "#1d4ed8",
      },
      {
        layer: "Admin Dashboard",
        components: [
          "Executive Overview",
          "Team Performance",
          "Client Activity",
          "Audit Trail",
        ],
        color: "#1e40af",
      },
    ],
  },
  {
    id: "elite-networking",
    slug: "elite-networking",
    name: "Elite Networking",
    tagline: "Professional Networking & Business Connections Platform",
    category: "Professional Network",
    categoryColor: "from-orange-500 to-amber-600",
    status: "Live",
    accentColor: "#f97316",
    gradientFrom: "#f97316",
    gradientTo: "#d97706",
    icon: "🤝",
    description: `A curated professional networking platform that connects business owners, executives, and entrepreneurs in specific industries. Features verified member profiles, private event listings, a business directory, and a secure messaging system — all designed for serious business relationships, not casual social media.`,
    businessValue: `Gives members access to a vetted network of decision-makers they can trust. Unlike generic platforms, every connection on Elite Networking is a potential business partner, client, or referral — reducing the noise and increasing the quality of every interaction.`,
    kpis: [
      {
        label: "Network Quality",
        value: "Verified",
        delta: "all members screened",
      },
      { label: "Response Rate", value: "3×", delta: "vs cold outreach" },
      { label: "Event Listings", value: "Live", delta: "real-time updates" },
      { label: "Industries Served", value: "10+", delta: "cross-sector" },
    ],
    techStack: [
      { name: "React", category: "Frontend", color: "#61dafb" },
      { name: "Node.js", category: "Backend", color: "#68a063" },
    ],
    architecture: [
      {
        layer: "Member Profiles",
        components: [
          "Verified Business Profiles",
          "Skills & Specialties",
          "Portfolio Showcase",
          "Endorsements",
        ],
        color: "#f97316",
      },
      {
        layer: "Networking Tools",
        components: [
          "Smart Matching",
          "Secure Messaging",
          "Connection Requests",
          "Referral System",
        ],
        color: "#ea580c",
      },
      {
        layer: "Events & Directory",
        components: [
          "Business Events Calendar",
          "Industry Directory",
          "RSVP System",
          "Event Hosting",
        ],
        color: "#c2410c",
      },
      {
        layer: "Community Hub",
        components: [
          "Industry Forums",
          "News Feed",
          "Job Board",
          "Resource Library",
        ],
        color: "#9a3412",
      },
    ],
  },
  {
    id: "boat-surveyors",
    slug: "boat-surveyors",
    name: "OceanCheckPro",
    tagline: "Marine Survey Platform with iOS & Android Mobile App",
    category: "Marine Tech",
    categoryColor: "from-cyan-500 to-blue-600",
    status: "Production",
    accentColor: "#06b6d4",
    gradientFrom: "#06b6d4",
    gradientTo: "#2563eb",
    icon: "⚓",
    description: `A complete digital solution for marine surveying companies. The platform includes a public-facing booking website, a surveyor mobile app (iOS & Android) for on-vessel inspections, a company admin portal, and a commission management dashboard — built to replace paper-based survey workflows.`,
    businessValue: `Takes marine surveyors from clipboards and email chains to a fully digital workflow. Surveyors complete inspections on their phone, reports generate automatically, and clients receive signed documents the same day — cutting report delivery from 5 days to same-day.`,
    kpis: [
      {
        label: "Report Delivery",
        value: "Same Day",
        delta: "was 3–5 business days",
      },
      { label: "Platforms", value: "4", delta: "Web + iOS + Android + Admin" },
      { label: "Paper Eliminated", value: "100%", delta: "fully digital" },
      {
        label: "Surveyor Productivity",
        value: "2×",
        delta: "more surveys per day",
      },
    ],
    techStack: [
      { name: "React", category: "Frontend", color: "#61dafb" },
      { name: "Flutter", category: "Frontend", color: "#54c5f8" },
      { name: "Laravel", category: "Backend", color: "#ef4444" },
      { name: "MySQL", category: "Database", color: "#00758f" },
    ],
    architecture: [
      {
        layer: "Public Website",
        components: [
          "Service Overview",
          "Online Booking",
          "Quote Request",
          "Contact & Location",
        ],
        color: "#06b6d4",
      },
      {
        layer: "Mobile App (iOS & Android)",
        components: [
          "Digital Inspection Forms",
          "Photo Capture",
          "GPS Location Tagging",
          "Offline Mode",
        ],
        color: "#0891b2",
      },
      {
        layer: "Surveyor Portal",
        components: [
          "Job Queue",
          "Report Builder",
          "Digital Signatures",
          "Instant PDF Generation",
        ],
        color: "#0e7490",
      },
      {
        layer: "Admin & Commission",
        components: [
          "Company Dashboard",
          "Commission Calculator",
          "Job Analytics",
          "Revenue Reports",
        ],
        color: "#155e75",
      },
    ],
  },
  {
    id: "essential-care",
    slug: "essential-care",
    name: "Essential Care Home Health",
    tagline: "Home Health Agency Management & Patient Care Platform",
    category: "Healthcare SaaS",
    categoryColor: "from-rose-500 to-pink-600",
    status: "Production",
    accentColor: "#f43f5e",
    gradientFrom: "#f43f5e",
    gradientTo: "#ec4899",
    icon: "❤️",
    description: `A dedicated home health agency platform that digitizes the entire care delivery process — from patient intake and care plans to caregiver scheduling and compliance reporting. Designed specifically for home health providers who need to meet state licensing and billing requirements.`,
    businessValue: `Helps home health agencies grow their patient roster and stay compliant without adding administrative headcount. Automated care plan tracking, visit verification, and billing integration mean agencies can focus on care quality rather than paperwork.`,
    kpis: [
      {
        label: "Compliance Rate",
        value: "100%",
        delta: "automated visit logs",
      },
      { label: "Intake Time", value: "-75%", delta: "digital vs paper" },
      {
        label: "Billing Cycle",
        value: "2× Faster",
        delta: "auto-generated claims",
      },
      { label: "Caregiver App", value: "Mobile", delta: "iOS & Android ready" },
    ],
    techStack: [
      { name: "React", category: "Frontend", color: "#61dafb" },
      { name: "Python", category: "Backend", color: "#3572A5" },
      { name: "MySQL", category: "Database", color: "#00758f" },
    ],
    architecture: [
      {
        layer: "Patient Management",
        components: [
          "Digital Intake Forms",
          "Care Plan Builder",
          "Medication Tracking",
          "Progress Notes",
        ],
        color: "#f43f5e",
      },
      {
        layer: "Caregiver Tools",
        components: [
          "Schedule Calendar",
          "Visit Check-In/Out",
          "Task Completion Log",
          "Mileage Tracking",
        ],
        color: "#e11d48",
      },
      {
        layer: "Family Portal",
        components: [
          "Real-Time Updates",
          "Care Plan Access",
          "Caregiver Profiles",
          "Message Center",
        ],
        color: "#be123c",
      },
      {
        layer: "Agency Dashboard",
        components: [
          "Census Reports",
          "Payroll Integration",
          "Compliance Tracking",
          "Billing Exports",
        ],
        color: "#9f1239",
      },
    ],
  },
  {
    id: "eternal-hospice",
    slug: "eternal-hospice",
    name: "Eternal Hospice",
    tagline: "Compassionate Hospice Care Operations & Family Portal",
    category: "Healthcare SaaS",
    categoryColor: "from-purple-500 to-violet-600",
    status: "Production",
    accentColor: "#a855f7",
    gradientFrom: "#a855f7",
    gradientTo: "#7c3aed",
    icon: "🕊️",
    logo: "/logos/EternalHospice.png",
    description: `A dedicated hospice agency platform designed for the unique needs of end-of-life care. Features interdisciplinary care team coordination, family communication tools, medication management, and regulatory compliance tracking — all built around the dignity and comfort of patients and their families.`,
    businessValue: `Enables hospice teams to spend more time at the bedside and less time on administrative tasks. Family members get real-time updates and peace of mind through a private portal, while the agency stays fully compliant with Medicare and Medicaid reporting requirements.`,
    kpis: [
      {
        label: "Family Satisfaction",
        value: "95%+",
        delta: "transparent communication",
      },
      {
        label: "Regulatory Compliance",
        value: "100%",
        delta: "Medicare/Medicaid ready",
      },
      {
        label: "Care Team Coordination",
        value: "Real-time",
        delta: "instant updates",
      },
      { label: "Documentation Time", value: "-65%", delta: "automated notes" },
    ],
    techStack: [
      { name: "React", category: "Frontend", color: "#61dafb" },
      { name: "Laravel", category: "Backend", color: "#ef4444" },
      { name: "MySQL", category: "Database", color: "#00758f" },
    ],
    architecture: [
      {
        layer: "Care Team Portal",
        components: [
          "Patient Profiles",
          "Interdisciplinary Notes",
          "Medication Management",
          "Symptom Tracking",
        ],
        color: "#a855f7",
      },
      {
        layer: "Family Portal",
        components: [
          "Real-Time Care Updates",
          "Secure Messaging",
          "Appointment Schedules",
          "Bereavement Resources",
        ],
        color: "#9333ea",
      },
      {
        layer: "Compliance Center",
        components: [
          "Medicare Reporting",
          "OASIS Documentation",
          "Audit-Ready Records",
          "Automated Alerts",
        ],
        color: "#7e22ce",
      },
      {
        layer: "Agency Dashboard",
        components: [
          "Census Overview",
          "Staff Assignments",
          "Quality Metrics",
          "Billing Exports",
        ],
        color: "#6b21a8",
      },
    ],
  },
  {
    id: "easton-parking",
    slug: "easton-parking",
    name: "Easton Parking",
    tagline: "Smart Parking Management & Real-Time Space Availability System",
    category: "Smart Parking",
    categoryColor: "from-yellow-500 to-orange-500",
    status: "Live",
    accentColor: "#eab308",
    gradientFrom: "#eab308",
    gradientTo: "#f97316",
    icon: "🅿️",
    description: `A smart parking management platform that gives drivers real-time visibility into available parking spaces and lets property managers monitor occupancy, revenue, and violations from a central dashboard. Integrates with entry/exit systems for fully automated lot management.`,
    businessValue: `Eliminates the frustration of circling for parking and cuts the operational overhead of manually managed parking lots. Property managers see live occupancy data, automated violation tracking, and daily revenue reports — without hiring additional staff.`,
    kpis: [
      {
        label: "Search Time Reduced",
        value: "80%",
        delta: "real-time availability",
      },
      { label: "Revenue Leakage", value: "0", delta: "automated billing" },
      {
        label: "Violation Processing",
        value: "Automated",
        delta: "no manual review",
      },
      { label: "Live Occupancy", value: "Real-time", delta: "dashboard view" },
    ],
    techStack: [
      { name: "React", category: "Frontend", color: "#61dafb" },
      { name: "Laravel", category: "Backend", color: "#ef4444" },
      { name: "MySQL", category: "Database", color: "#00758f" },
    ],
    architecture: [
      {
        layer: "Driver App",
        components: [
          "Live Space Finder",
          "Space Reservation",
          "Mobile Payment",
          "Navigation Assistant",
        ],
        color: "#eab308",
      },
      {
        layer: "Entry/Exit System",
        components: [
          "License Plate Recognition",
          "QR Code Entry",
          "Automated Gates",
          "Time Stamping",
        ],
        color: "#ca8a04",
      },
      {
        layer: "Manager Dashboard",
        components: [
          "Live Occupancy Map",
          "Revenue Tracking",
          "Violation Management",
          "Peak Hour Reports",
        ],
        color: "#a16207",
      },
      {
        layer: "Billing Center",
        components: [
          "Automated Invoicing",
          "Monthly Pass Management",
          "Violation Fines",
          "Payment History",
        ],
        color: "#854d0e",
      },
    ],
  },
  {
    id: "tawjehi",
    slug: "tawjehi",
    name: "Tawjehi Prep",
    tagline:
      "AI-Assisted Tawjihi Exam Preparation Platform for Jordanian Students",
    category: "EdTech AI",
    categoryColor: "from-green-500 to-emerald-600",
    status: "Beta",
    accentColor: "#22c55e",
    gradientFrom: "#22c55e",
    gradientTo: "#059669",
    icon: "📚",
    description: `A specialized exam preparation platform built for Jordanian students preparing for the Tawjihi (General Secondary Certificate) exam. Provides subject-specific practice questions, personalized study plans, performance tracking, and on-demand tutoring — in both Arabic and English.`,
    businessValue: `Gives students in Jordan access to structured, data-driven exam preparation that was previously only available through expensive private tutors. The platform adapts to each student's weak areas, maximizing study efficiency and improving pass rates.`,
    kpis: [
      { label: "Languages", value: "2", delta: "Arabic + English" },
      { label: "Subjects Covered", value: "12+", delta: "all Tawjihi tracks" },
      { label: "Study Efficiency", value: "3×", delta: "vs generic review" },
      {
        label: "Practice Questions",
        value: "5,000+",
        delta: "past exam style",
      },
    ],
    techStack: [
      { name: "React", category: "Frontend", color: "#61dafb" },
      { name: "Laravel", category: "Backend", color: "#ef4444" },
      { name: "MySQL", category: "Database", color: "#00758f" },
    ],
    architecture: [
      {
        layer: "Student Portal",
        components: [
          "Subject Practice Tests",
          "Personalized Study Plan",
          "Performance Dashboard",
          "Streak Tracker",
        ],
        color: "#22c55e",
      },
      {
        layer: "Question Bank",
        components: [
          "Past Exam Questions",
          "Difficulty Levels",
          "Hints & Explanations",
          "Video Solutions",
        ],
        color: "#16a34a",
      },
      {
        layer: "Arabic/English Support",
        components: [
          "Full RTL Arabic UI",
          "Bilingual Content",
          "Language Toggle",
          "Bilingual Support Chat",
        ],
        color: "#15803d",
      },
      {
        layer: "Parent & Teacher View",
        components: [
          "Progress Reports",
          "Weak Area Alerts",
          "Study Time Tracking",
          "Score Predictions",
        ],
        color: "#166534",
      },
    ],
  },
  {
    id: "citizenhub",
    slug: "citizenhub",
    name: "CitizenHub",
    tagline: "Civic Services & Community Engagement Platform",
    category: "Business SaaS",
    categoryColor: "from-slate-500 to-gray-600",
    status: "Beta",
    accentColor: "#64748b",
    gradientFrom: "#64748b",
    gradientTo: "#475569",
    icon: "🏛️",
    description: `A civic engagement platform that connects government agencies and community organizations with the residents they serve. CitizenHub streamlines service requests, community announcements, public feedback collection, and local resource directories — making it easy for citizens to find help and for agencies to respond efficiently.`,
    businessValue: `Bridges the gap between government services and the communities that need them. Agencies reduce call volume and walk-in traffic by moving common requests online, while residents get 24/7 access to information and real-time status updates on their submissions.`,
    kpis: [
      {
        label: "Service Requests Online",
        value: "100%",
        delta: "no paper forms",
      },
      { label: "Response Time", value: "3× Faster", delta: "vs phone/walk-in" },
      {
        label: "Community Reach",
        value: "City-wide",
        delta: "all departments",
      },
      { label: "Languages", value: "2+", delta: "English & Arabic" },
    ],
    techStack: [
      { name: "React", category: "Frontend", color: "#61dafb" },
      { name: "Python", category: "Backend", color: "#3572A5" },
      { name: "MySQL", category: "Database", color: "#00758f" },
    ],
    architecture: [
      {
        layer: "Citizen Portal",
        components: [
          "Service Request Forms",
          "Status Tracker",
          "Community Announcements",
          "Local Resource Directory",
        ],
        color: "#64748b",
      },
      {
        layer: "Agency Tools",
        components: [
          "Request Management Board",
          "Department Routing",
          "Response Templates",
          "Workload Dashboard",
        ],
        color: "#475569",
      },
      {
        layer: "Community Features",
        components: [
          "Public Feedback Forms",
          "Event Calendar",
          "Neighborhood Alerts",
          "Polls & Surveys",
        ],
        color: "#374151",
      },
      {
        layer: "Admin Center",
        components: [
          "User Management",
          "Analytics Reports",
          "Content Management",
          "Multi-Department Access",
        ],
        color: "#1f2937",
      },
    ],
  },
  {
    id: "haddad-decorations",
    slug: "haddad-decorations",
    name: "Haddad Decorations",
    tagline: "Premium Interior Design Studio Website & Client Management",
    category: "Business SaaS",
    categoryColor: "from-amber-700 to-yellow-800",
    status: "Production",
    accentColor: "#b45309",
    gradientFrom: "#b45309",
    gradientTo: "#92400e",
    icon: "🎨",
    description: `A complete digital presence for a premium interior design and decoration studio. Includes a visually stunning portfolio website to attract high-end clients, an online consultation request system, a project gallery, and a backend dashboard for managing leads, projects, and client communications.`,
    businessValue: `Positions the studio as a premium brand online, attracting clients who are searching for professional designers. The consultation request system captures leads 24/7 — turning website visitors into booked appointments without any manual follow-up required.`,
    kpis: [
      { label: "Lead Capture", value: "24/7", delta: "automated intake" },
      { label: "Portfolio Projects", value: "50+", delta: "fully showcased" },
      { label: "Inquiry Conversion", value: "2.5×", delta: "vs no website" },
      {
        label: "Client Dashboard",
        value: "Full",
        delta: "CRM + project tracking",
      },
    ],
    techStack: [
      { name: "React", category: "Frontend", color: "#61dafb" },
      { name: "Laravel", category: "Backend", color: "#ef4444" },
      { name: "MySQL", category: "Database", color: "#00758f" },
    ],
    architecture: [
      {
        layer: "Studio Website",
        components: [
          "Project Portfolio Gallery",
          "Service Showcase",
          "Consultation Request Form",
          "Before & After Gallery",
        ],
        color: "#b45309",
      },
      {
        layer: "Client Experience",
        components: [
          "Design Mood Board",
          "Project Progress Updates",
          "Material Selections",
          "Approval Sign-offs",
        ],
        color: "#92400e",
      },
      {
        layer: "Lead Management",
        components: [
          "Consultation Requests",
          "Client Profiles",
          "Quote Builder",
          "Follow-Up Reminders",
        ],
        color: "#78350f",
      },
      {
        layer: "Studio Dashboard",
        components: [
          "Active Projects Board",
          "Revenue Tracking",
          "Team Assignments",
          "Client Communications",
        ],
        color: "#451a03",
      },
    ],
  },
  {
    id: "press-bail-bonds",
    slug: "press-bail-bonds",
    name: "Press Bail Bonds",
    tagline:
      "Full-Service Bail Bond Agency Platform with Posting Agent Dashboard",
    category: "Legal SaaS",
    categoryColor: "from-red-700 to-rose-800",
    status: "Production",
    accentColor: "#b91c1c",
    gradientFrom: "#b91c1c",
    gradientTo: "#9f1239",
    icon: "🔐",
    description: `A complete digital platform for a bail bond agency, featuring a public-facing website for client intake, a backend case management system, a posting agent dashboard for managing active bonds in the field, and a dedicated dashboard for tracking agent commissions and reporting.`,
    businessValue: `Gives the agency full digital control over every stage of the bail bond process — from the first client inquiry through to bond posting and court compliance tracking. Agents in the field use the mobile-ready posting dashboard to update case status in real time, eliminating end-of-day paperwork.`,
    kpis: [
      { label: "Agent Portals", value: "2", delta: "posting + commission" },
      {
        label: "Case Turnaround",
        value: "5× Faster",
        delta: "digital vs paper",
      },
      {
        label: "Field Updates",
        value: "Real-time",
        delta: "live status board",
      },
      {
        label: "Compliance Tracking",
        value: "Automated",
        delta: "court date alerts",
      },
    ],
    techStack: [
      { name: "React", category: "Frontend", color: "#61dafb" },
      { name: "Laravel", category: "Backend", color: "#ef4444" },
      { name: "MySQL", category: "Database", color: "#00758f" },
    ],
    architecture: [
      {
        layer: "Client Website",
        components: [
          "Bond Application Form",
          "Eligibility Checker",
          "Online Payment",
          "Document Upload",
        ],
        color: "#b91c1c",
      },
      {
        layer: "Posting Agent Dashboard",
        components: [
          "Active Bond Queue",
          "Court Appearance Tracker",
          "Field Status Updates",
          "Document Repository",
        ],
        color: "#991b1b",
      },
      {
        layer: "Agent Commission Portal",
        components: [
          "Commission Calculator",
          "Bond Performance Reports",
          "Territory Management",
          "Payout History",
        ],
        color: "#7f1d1d",
      },
      {
        layer: "Agency Dashboard",
        components: [
          "Case Overview Board",
          "Revenue Analytics",
          "Client History",
          "Compliance Calendar",
        ],
        color: "#450a0a",
      },
    ],
  },
  {
    id: "global-llc",
    slug: "global-llc",
    name: "GlobalLLC",
    tagline: "Business Formation & Global LLC Registration Platform",
    category: "Business SaaS",
    categoryColor: "from-indigo-600 to-blue-700",
    status: "Live",
    accentColor: "#4f46e5",
    gradientFrom: "#4f46e5",
    gradientTo: "#1d4ed8",
    icon: "🌍",
    description: `A streamlined platform for entrepreneurs and international investors looking to register a business entity in the United States. GlobalLLC guides users through the LLC formation process step by step, collects required documents, and manages the entire filing workflow — from name search to certificate of formation.`,
    businessValue: `Removes the confusion and expense of hiring a lawyer or attorney to form a US LLC. International clients especially benefit from a clear, guided process in their language, with transparent pricing and real-time status updates on their filing — all without ever setting foot in the US.`,
    kpis: [
      {
        label: "Formation Time",
        value: "48 hrs",
        delta: "vs weeks by attorney",
      },
      { label: "Cost Savings", value: "70%", delta: "vs legal fees" },
      { label: "Countries Served", value: "Global", delta: "any nationality" },
      { label: "Success Rate", value: "99%+", delta: "filing approvals" },
    ],
    techStack: [
      { name: "React", category: "Frontend", color: "#61dafb" },
      { name: "Laravel", category: "Backend", color: "#ef4444" },
      { name: "MySQL", category: "Database", color: "#00758f" },
    ],
    architecture: [
      {
        layer: "Formation Wizard",
        components: [
          "Business Name Search",
          "State Selector",
          "Guided Step-by-Step Form",
          "Document Checklist",
        ],
        color: "#4f46e5",
      },
      {
        layer: "Document Center",
        components: [
          "Article of Organization",
          "Registered Agent Assignment",
          "Operating Agreement",
          "EIN Application",
        ],
        color: "#4338ca",
      },
      {
        layer: "Client Portal",
        components: [
          "Formation Status Tracker",
          "Certificate Storage",
          "Annual Compliance Reminders",
          "Amendment Requests",
        ],
        color: "#3730a3",
      },
      {
        layer: "Admin Dashboard",
        components: [
          "Order Management",
          "State Filing Queue",
          "Revenue Reports",
          "Client Communications",
        ],
        color: "#312e81",
      },
    ],
  },
];
