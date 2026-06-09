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
  title: 'Alient — the AI agent that does the work',
  description:
    'Not a chatbot that advises. An agent with compounding memory and true computer-use that operates your real tools and completes complex work end to end — proven by shipping production code autonomously. From the team behind Amazon’s foundational AI.',
  openGraph: {
    title: 'Alient — the AI agent that does the work',
    description:
      'An agent with compounding memory and true computer-use that operates your real tools and completes complex work end to end — proven by shipping production code autonomously. Private by design: your hardware, your VPC, or managed.',
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
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        {/* Async CSS pattern: General Sans must not block first paint
            (display=swap shows the fallback font until it arrives). */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap';document.head.appendChild(l);})();",
          }}
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
          />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
