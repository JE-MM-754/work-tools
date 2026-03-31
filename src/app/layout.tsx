import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Work Tools',
  description: 'AI Agent Orchestration Dashboard and interview prep microsites',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
