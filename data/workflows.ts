export type WorkflowNode = {
    id: string;
    name: string;
    type: string;
    typeLabel: string;
    color: string;
    icon: string;
    x: number;
    y: number;
    description: string;
};

export type WorkflowConnection = {
    from: string;
    to: string;
};

export type Workflow = {
    id: string;
    name: string;
    description: string;
    trigger: string;
    lastRun: string;
    executions: number;
    status: 'active' | 'inactive';
    nodes: WorkflowNode[];
    connections: WorkflowConnection[];
    stickyNote: string;
};

export const oceanMarineWorkflows: Workflow[] = [
    {
        id: 'wf-vessel-departure',
        name: 'Vessel Departure Alert System',
        description: 'Monitors AIS vessel data and triggers real-time alerts to the operations team whenever a vessel departs port.',
        trigger: 'Webhook (AIS Feed)',
        lastRun: '2026-03-02T07:05:00Z',
        executions: 1847,
        status: 'active',
        stickyNote: '📌 SETUP: Requires AIS_WEBHOOK_SECRET env var. Slack channel: #ops-alerts. Contact: ops@oceanmarine.com for API keys. Last updated by automation team Feb 2026.',
        nodes: [
            { id: 'n1', name: 'AIS Webhook', type: 'n8n-nodes-base.webhook', typeLabel: 'Webhook', color: '#ea4b71', icon: '🔗', x: 60, y: 120, description: 'Receives vessel position data from AIS feed' },
            { id: 'n2', name: 'Filter: Departure Event', type: 'n8n-nodes-base.filter', typeLabel: 'Filter', color: '#f59e0b', icon: '🔽', x: 220, y: 120, description: 'Filters only departure events (status=5)' },
            { id: 'n3', name: 'Format Alert Message', type: 'n8n-nodes-base.set', typeLabel: 'Set', color: '#8b5cf6', icon: '✏️', x: 380, y: 80, description: 'Builds human-readable alert with vessel name, time, destination' },
            { id: 'n4', name: 'Log to MySQL', type: 'n8n-nodes-base.mysql', typeLabel: 'MySQL', color: '#00758f', icon: '🗄️', x: 380, y: 160, description: 'Logs departure event to ocean_marine.vessel_events' },
            { id: 'n5', name: 'Slack: #ops-alerts', type: 'n8n-nodes-base.slack', typeLabel: 'Slack', color: '#4a154b', icon: '💬', x: 540, y: 80, description: 'Posts departure alert to operations Slack channel' },
            { id: 'n6', name: 'Email: Ops Manager', type: 'n8n-nodes-base.emailSend', typeLabel: 'Email', color: '#4285f4', icon: '📧', x: 540, y: 160, description: 'Sends summary email to ops manager' },
        ],
        connections: [
            { from: 'n1', to: 'n2' },
            { from: 'n2', to: 'n3' },
            { from: 'n2', to: 'n4' },
            { from: 'n3', to: 'n5' },
            { from: 'n4', to: 'n6' },
        ],
    },
    {
        id: 'wf-daily-report',
        name: 'Daily Operations Report',
        description: 'Runs every morning at 6am, queries the database for previous day statistics, generates a PDF report, and distributes to leadership.',
        trigger: 'CRON: 6:00 AM Daily',
        lastRun: '2026-03-02T06:00:00Z',
        executions: 312,
        status: 'active',
        stickyNote: '📌 SETUP: CRON runs at 0 6 * * *. PDF template at /templates/daily_ops.html. Distribution list in ops_email_list table. Requires SMTP credentials.',
        nodes: [
            { id: 'n1', name: 'CRON: 6am Daily', type: 'n8n-nodes-base.scheduleTrigger', typeLabel: 'Schedule', color: '#10b981', icon: '⏰', x: 60, y: 120, description: 'Fires every day at 06:00 local time' },
            { id: 'n2', name: 'Query Yesterday Stats', type: 'n8n-nodes-base.mysql', typeLabel: 'MySQL', color: '#00758f', icon: '🗄️', x: 220, y: 120, description: 'Fetches vessels moved, cargo weight, incidents from yesterday' },
            { id: 'n3', name: 'Calculate KPIs', type: 'n8n-nodes-base.code', typeLabel: 'Code', color: '#f59e0b', icon: '⚙️', x: 380, y: 120, description: 'JS: calculates efficiency scores and variance vs targets' },
            { id: 'n4', name: 'Generate PDF', type: 'n8n-nodes-base.html', typeLabel: 'HTML→PDF', color: '#8b5cf6', icon: '📄', x: 540, y: 120, description: 'Renders HTML template with KPI data, converts to PDF' },
            { id: 'n5', name: 'Get Distribution List', type: 'n8n-nodes-base.mysql', typeLabel: 'MySQL', color: '#00758f', icon: '🗄️', x: 380, y: 200, description: 'Fetches email recipients from ops_email_list' },
            { id: 'n6', name: 'Send Report Emails', type: 'n8n-nodes-base.emailSend', typeLabel: 'Email', color: '#4285f4', icon: '📧', x: 700, y: 120, description: 'Sends PDF attachment to all distribution list recipients' },
            { id: 'n7', name: 'Update Google Sheets', type: 'n8n-nodes-base.googleSheets', typeLabel: 'Google Sheets', color: '#34a853', icon: '📊', x: 700, y: 200, description: 'Appends daily KPIs to master Ocean Marine KPI tracker sheet' },
        ],
        connections: [
            { from: 'n1', to: 'n2' },
            { from: 'n2', to: 'n3' },
            { from: 'n3', to: 'n4' },
            { from: 'n3', to: 'n5' },
            { from: 'n4', to: 'n6' },
            { from: 'n5', to: 'n6' },
            { from: 'n4', to: 'n7' },
        ],
    },
    {
        id: 'wf-compliance-tracker',
        name: 'Compliance Document Tracker',
        description: 'Monitors vessel compliance document expiry dates, triggers approval workflows, and escalates overdue items to legal team.',
        trigger: 'Form Webhook + CRON Check',
        lastRun: '2026-03-01T14:22:00Z',
        executions: 98,
        status: 'active',
        stickyNote: '📌 SETUP: Form URL at /compliance-submit. Legal escalation after 72hrs. Approval emails go to harbor-master@oceanmarine.com. docs stored in /compliance_docs/ S3 bucket.',
        nodes: [
            { id: 'n1', name: 'Document Form Submit', type: 'n8n-nodes-base.formTrigger', typeLabel: 'Form Trigger', color: '#ea4b71', icon: '📋', x: 60, y: 120, description: 'Staff submits compliance doc via internal form' },
            { id: 'n2', name: 'Upload to S3', type: 'n8n-nodes-base.awsS3', typeLabel: 'AWS S3', color: '#f59e0b', icon: '☁️', x: 220, y: 120, description: 'Stores document in compliance_docs S3 bucket' },
            { id: 'n3', name: 'Update DB Record', type: 'n8n-nodes-base.mysql', typeLabel: 'MySQL', color: '#00758f', icon: '🗄️', x: 380, y: 120, description: 'Creates/updates compliance record with expiry date, doc URL' },
            { id: 'n4', name: 'Check: Expiry < 30 days?', type: 'n8n-nodes-base.if', typeLabel: 'IF', color: '#ef4444', icon: '⚡', x: 380, y: 200, description: 'Routes to renewal reminder if expiry within 30 days' },
            { id: 'n5', name: 'Request Approval Email', type: 'n8n-nodes-base.emailSend', typeLabel: 'Email', color: '#4285f4', icon: '📧', x: 540, y: 120, description: 'Sends harbor master approval request with doc link' },
            { id: 'n6', name: 'Send Renewal Reminder', type: 'n8n-nodes-base.emailSend', typeLabel: 'Email', color: '#4285f4', icon: '📧', x: 540, y: 200, description: 'Alerts vessel owner: document expiring soon' },
            { id: 'n7', name: 'Slack Legal Escalation', type: 'n8n-nodes-base.slack', typeLabel: 'Slack', color: '#4a154b', icon: '💬', x: 700, y: 200, description: 'Posts to #legal-alerts if doc expires and no renewal after 72hrs' },
        ],
        connections: [
            { from: 'n1', to: 'n2' },
            { from: 'n2', to: 'n3' },
            { from: 'n3', to: 'n4' },
            { from: 'n3', to: 'n5' },
            { from: 'n4', to: 'n6' },
            { from: 'n6', to: 'n7' },
        ],
    },
];
