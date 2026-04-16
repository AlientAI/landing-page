import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Alient — Your AI Software Engineer',
  description: 'Alient is an AI software engineer with its own identity, memory, and judgment. Give it a laptop. It joins your team Monday.',
  openGraph: {
    title: 'Alient — Your AI Software Engineer',
    description: 'Your competitors aren\'t hiring more engineers. They\'re getting more output. Meet Alient.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
