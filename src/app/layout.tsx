import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Work Tools",
  description: "Simple Kanban board for project management",
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