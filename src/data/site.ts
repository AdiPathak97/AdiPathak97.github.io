export const siteData = {
  name: 'Aditya Pathak',
  role: 'Senior Full-Stack Engineer',
  tagline: '6+ years building performant, distributed systems at scale. From Rust microservices handling millions of real-time events to React frontends with buttery-smooth UX.',
  email: 'apathak1997@gmail.com',
  github: 'https://github.com/AdiPathak97',
  linkedin: 'https://linkedin.com/in/aditya-pathak-tech',
  location: 'Mumbai, India',

  skills: [
    {
      category: 'Languages',
      items: ['Rust', 'TypeScript', 'JavaScript', 'Python'],
    },
    {
      category: 'Frontend',
      items: ['React', 'Redux', 'Preact', 'Next.js'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'FastAPI', 'Axum', 'Laravel'],
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'Neo4j'],
    },
    {
      category: 'Systems',
      items: ['Microservices', 'Event-driven', 'NATS', 'WebSockets'],
    },
    {
      category: 'Infrastructure',
      items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Playwright'],
    },
  ],

  experience: [
    {
      company: 'Commtel Networks',
      role: 'Senior Full Stack Developer',
      period: 'Jul 2025 — Present',
      current: true,
      bullets: [
        'Built high-performance microservices in <strong>Rust (Axum, Tokio)</strong> for real-time data handling across millions of assets — achieving a <strong>10× backend performance gain</strong> via query optimization and efficient data structures.',
        'Delivered end-to-end features across <strong>React, FastAPI, PostgreSQL, Redis, and NATS</strong>, including <strong>5× frontend performance improvements</strong> through virtualized lists and targeted rendering optimizations.',
        'Architected an <strong>event-driven monitoring system</strong> using message queues and caching layers for real-time asset telemetry at scale.',
      ],
    },
    {
      company: 'Bitkraft Technologies',
      role: 'Senior Software Engineer',
      period: 'Dec 2024 — Jun 2025',
      current: false,
      bullets: [
        'Scaled a high-traffic eLearning platform during a surge by eliminating <strong>N+1 queries</strong> and leveraging MongoDB aggregations — resolved CPU bottlenecks and enabled migration from vertical to <strong>horizontal EC2 scaling</strong>, significantly cutting infrastructure costs.',
        'Improved media-heavy frontend performance using <strong>Preact and AWS CloudFront CDN</strong> for low-latency image/video delivery.',
        'Optimized build pipelines with <strong>Webpack</strong> and implemented full test automation with <strong>Playwright</strong>.',
      ],
    },
    {
      company: 'Global Infocomm',
      role: 'Software Consultant',
      period: 'Jan 2024 — Nov 2024',
      current: false,
      bullets: [
        'Built and deployed a <strong>role-based vehicle management system</strong> used across multiple showrooms.',
        'Led <strong>ERPNext implementation</strong> end-to-end — deployment, customization, and client onboarding.',
      ],
    },
    {
      company: 'Indiana University',
      role: 'Web Developer (Freelance)',
      period: 'Oct 2022 — Sep 2023',
      current: false,
      bullets: [
        'Developed backend services for <strong>Canvas LMS</strong> using Laravel and <strong>LTI 1.3</strong>, enabling secure third-party tool integrations across the institution.',
      ],
    },
    {
      company: 'Bitkraft Technologies',
      role: 'Software Engineer',
      period: 'Aug 2019 — Apr 2022',
      current: false,
      bullets: [
        'Built scalable <strong>REST APIs in Node.js</strong> for healthcare SaaS platforms handling large datasets.',
        'Designed an <strong>ML workflow platform</strong> with drag-and-drop UI integrating Python, Neo4j, and MongoDB.',
        'Developed a high-throughput <strong>e-invoicing system</strong> generating <strong>50,000+ PDFs/hour</strong> for GST compliance.',
        'Automated <strong>CI/CD pipelines</strong> using Jenkins and Docker.',
      ],
    },
  ],

  projects: [
    {
      name: 'AdPulse',
      description:
        'Real-time campaign analytics platform streaming live metrics via room-based pub/sub. Modular backend with JWT auth, extended to React Native with shared services and WebSocket architecture for seamless cross-platform support.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'React Native', 'Docker', 'GitHub Actions'],
      link: 'https://github.com/AdiPathak97/adpulse',
      linkLabel: 'View on GitHub',
    },
  ],
}
