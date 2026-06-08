import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio — Développeur Freelance React / Next.js",
  description: "Développeur freelance spécialisé React, Next.js 15 et TypeScript. Disponible pour sous-traitance agence et projets directs. Paris, remote France.",
  keywords: ["développeur freelance", "React", "Next.js", "TypeScript", "sous-traitance", "Paris"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
