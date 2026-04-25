import type { Metadata } from 'next';
import { JetBrains_Mono, Source_Serif_4 } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-source-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Alient — Hire the AI Teammate, not the tool',
  description:
    'Alient is the other 80%. An AI Teammate with its own Slack, its own email, a real seat in the meeting, and memory that compounds from day one. From the team behind Amazon’s foundational AI.',
  openGraph: {
    title: 'Alient — Hire the AI Teammate, not the tool',
    description:
      'AI tools automate 20% of the job. Alient is the other 80% — meetings, memory, tickets, PRs. On-device by design.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${sourceSerif.variable}`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
