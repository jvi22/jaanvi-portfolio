import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "jaanvi's portfolio",
  description: "cute, minimalistic & nostalgic",
};

// Fix: Add the required RootLayout component as the default export
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