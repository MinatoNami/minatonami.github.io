export const links = {
  github: 'https://github.com/MinatoNami',
  linkedin: 'https://www.linkedin.com/in/lionel-chong',
  email: 'minato.nami.dev@gmail.com',
}

export const work = [
  {
    label: 'Fleet orchestration',
    title: 'Many vendors, one building',
    body: 'Integrating vendor robot APIs with Open-RMF so mixed fleets share maps, lifts, doors and one task queue.',
  },
  {
    label: 'Real-time ops',
    title: 'Monitoring & teleoperation',
    body: 'WebSocket services for live robot monitoring, teleoperation and remote intervention across global deployments.',
  },
  {
    label: 'Data pipelines',
    title: 'From telemetry to training data',
    body: 'Pipelines that turn robot telemetry, logs, video and sensor data into operational analytics and AI training sets.',
  },
  {
    label: 'On the robot',
    title: 'Operator panel & mapping',
    body: 'On-robot ROS 2 software at Griffin Labs: the operator panel, Nav2 mapping and localisation, and the ops platform behind them.',
  },
]

export const projects = [
  {
    name: 'ALENA',
    tagline: 'Local-first AI assistant with human-approved tools',
    body: 'On-device LLM and Whisper across web, CLI, voice and Telegram. A policy-controlled MCP tool framework with auto-discovery, native tool calling, approval gates and audit logs.',
    metric: 'MCP · approval gates',
    stack: ['Python', 'FastAPI', 'MCP', 'Whisper', 'Nuxt'],
    repo: 'https://github.com/MinatoNami/project-alena',
  },
  {
    name: 'Health Exporter',
    tagline: 'Personal health intelligence platform',
    body: 'A SwiftUI app syncs 100+ Apple Health data types to Django through idempotent NDJSON ingestion. Deterministic trend and anomaly analytics, plus a local LLM limited to 12 read-only tools.',
    metric: '397 tests',
    stack: ['SwiftUI', 'HealthKit', 'Django', 'PostgreSQL', 'Vue'],
    repo: 'https://github.com/MinatoNami/health-app',
  },
  {
    name: 'LumaIndex',
    tagline: 'Self-hosted PDF library and reader',
    body: 'Cross-device reading progress, full-text page search and annotations. Resumable uploads, content-addressed storage with dedup, and atomic deploys with health gates and rollback.',
    metric: '505 tests',
    stack: ['Nuxt 3', 'Django', 'PostgreSQL', 'PDF.js', 'Caddy'],
    repo: 'https://github.com/MinatoNami/luma-index',
  },
  {
    name: 'Project Athena',
    tagline: 'Security investigation, human-controlled fixes',
    body: 'Patrols codebases, hosts, containers and networks; checks whether a vulnerability actually applies here; and prepares evidence-backed remediation that a human approves.',
    metric: 'In progress',
    stack: ['Python', 'FastAPI', 'Nuxt 4', 'Docker'],
    repo: 'https://github.com/MinatoNami/project-athena',
  },
]

export const experience = [
  {
    role: 'Software Engineer',
    org: 'LionsBot International / Griffin Labs',
    when: 'Jul 2026 – now',
    body: 'Building Intelligence: Open-RMF middleware for multi-vendor robot fleets, teleoperation and telemetry pipelines. On-robot ROS 2 operator panel, Nav2 mapping and ops platform.',
  },
  {
    role: 'Software Lead',
    org: 'SenserBot',
    when: 'Sep 2025 – Jul 2026',
    body: 'Led Django and FastAPI services for autonomous robot fleets: real-time telemetry, video and alerts, plus speech-to-text and text-to-speech. Owned deployment and reliability on AWS.',
  },
  {
    role: 'Field Applications Engineer',
    org: 'Living Optics',
    when: 'Feb – Sep 2025',
    body: 'Hyperspectral-imaging proof of concept for a Home Team security use case through the Dimension X accelerator.',
  },
  {
    role: 'Frontend Developer',
    org: 'UP DevLabs',
    when: 'Aug 2023 – Nov 2024',
    body: 'PWAs for gaming clients, and a customer-service platform integrating LLM services over WebSockets.',
  },
  {
    role: 'Frontend Lead / Full-Stack',
    org: 'MarinaChain',
    when: 'Nov 2022 – Aug 2023',
    body: 'Led MarinaNet, a maritime carbon-emissions analytics platform; serverless document processing with OpenAI and AWS Step Functions.',
  },
]

export const stack = [
  { group: 'Robotics & real-time', items: ['ROS 2', 'Open-RMF', 'Nav2', 'WebSockets', 'MQTT'] },
  { group: 'Backend & data', items: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'DuckDB', 'Pandas'] },
  { group: 'AI', items: ['Local LLMs', 'MCP', 'RAG', 'Whisper', 'PyTorch'] },
  { group: 'Frontend & mobile', items: ['TypeScript', 'Vue', 'Nuxt', 'React', 'SwiftUI', 'Tailwind'] },
  { group: 'Infrastructure', items: ['Docker', 'AWS', 'Nginx', 'Caddy', 'Tailscale', 'Linux'] },
]
