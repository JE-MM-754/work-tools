import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Kanban Dashboard",
  description: "AI-Powered Kanban Dashboard with agent spawning and task automation",
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