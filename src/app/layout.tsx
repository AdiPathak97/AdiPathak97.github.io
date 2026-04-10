import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aditya Pathak — Senior Full-Stack Engineer',
  description:
    '6+ years building performant, distributed systems at scale. React, Rust, Node.js, microservices, real-time systems.',
  openGraph: {
    title: 'Aditya Pathak — Senior Full-Stack Engineer',
    description: '6+ years building performant, distributed systems at scale.',
    url: 'https://adipathak97.github.io',
    siteName: 'Aditya Pathak',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
