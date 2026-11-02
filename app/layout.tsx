import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@css/plugins.css";
import "@css/style.css";
import "./globals.css";
import "./site.css";

export const metadata: Metadata = {
  title: "Jhorman Nieto — Digital Solutions Specialist",
  description: "Jhorman Nieto, Digital Solutions Specialist en Panamá. Desarrollo web y aplicaciones, marketing digital, fotografía, video y contenido creativo.",
  metadataBase: new URL("https://jhorman.com"),
  openGraph: {
    title: "Jhorman Nieto — Digital Solutions Specialist",
    description: "Development · Marketing · Creative. Soluciones digitales desde Panamá.",
    url: "https://jhorman.com",
    siteName: "Jhorman Nieto",
    locale: "es_PA",
    type: "website",
  },
  keywords: [
    "Jhorman Nieto P",
    "Jhorman Nieto",
    "Frontend Developer",
    "React Developer",
    "Desarrollador Frontend",
    "Desarrollador React",
    "Diseño Web",
    "Desarrollo de Aplicaciones Móviles",
    "UI/UX",
    "Desarrollo Web",
    "Digital Solutions Specialist",
    "Marketing digital",
    "Meta Ads",
    "Fotografía comercial",
    "Producción audiovisual",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
