import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@css/plugins.css";
import "@css/style.css";
import "./globals.css";
import "./site.css";

export const metadata: Metadata = {
  title: "Jhorman Nieto | Desarrollo web y marketing digital en Panamá",
  description:
    "Jhorman Nieto, Digital Solutions Specialist en Panamá. Desarrollo web y aplicaciones, marketing digital, fotografía, video y contenido creativo.",
  metadataBase: new URL("https://jhorman.com"),
  alternates: { canonical: "/" },
  applicationName: "Jhorman Nieto",
  authors: [{ name: "Jhorman Nieto", url: "https://jhorman.com/about" }],
  creator: "Jhorman Nieto",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Jhorman Nieto | Desarrollo web y marketing digital en Panamá",
    description:
      "Development · Marketing · Creative. Soluciones digitales desde Panamá.",
    url: "https://jhorman.com",
    siteName: "Jhorman Nieto",
    locale: "es_PA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jhorman Nieto | Desarrollo web y marketing digital en Panamá",
    description:
      "Desarrollo web, marketing digital y creatividad desde Panamá.",
    images: ["/opengraph-image"],
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
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://jhorman.com/#person",
    name: "Jhorman Nieto",
    url: "https://jhorman.com/",
    image: "https://jhorman.com/img/hero/jhorman-nieto.png",
    jobTitle: "Desarrollador frontend",
    description:
      "Desarrollador frontend en Panamá especializado en experiencias digitales, React y TypeScript.",
    homeLocation: { "@type": "Place", name: "Ciudad de Panamá, Panamá" },
    sameAs: [
      "https://www.linkedin.com/in/jhormandev",
      "https://github.com/jhorman9/",
    ],
  };
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://jhorman.com/#organization",
    name: "Jhorman Nieto",
    url: "https://jhorman.com/",
    logo: "https://jhorman.com/img/hero/jhorman-nieto.png",
    image: "https://jhorman.com/img/hero/jhorman-nieto.png",
    description:
      "Servicios de desarrollo web, aplicaciones, marketing digital y producción de contenido creativo desde Panamá.",
    areaServed: {
      "@type": "Country",
      name: "Panamá",
    },
    founder: { "@id": "https://jhorman.com/#person" },
    sameAs: [
      "https://www.linkedin.com/in/jhormandev",
      "https://github.com/jhorman9/",
    ],
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://jhorman.com/#website",
    name: "Jhorman Nieto",
    url: "https://jhorman.com/",
    inLanguage: "es-PA",
    publisher: { "@id": "https://jhorman.com/#organization" },
  };
  return (
    <html lang="es-PA">
      <body>
        <a className="skip-link" href="#main-content">
          Saltar al contenido principal
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([person, organization, website]).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
      </body>
    </html>
  );
}
