import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import Experience from "@/components/Experience";
import Tools from "@/components/Tools";
import SiteContact from "@/components/SiteContact";

export const metadata: Metadata = {
  title: "Sobre mí | Jhorman Nieto",
  description:
    "Conoce a Jhorman Nieto, desarrollador frontend en Panamá especializado en React, TypeScript, WordPress y experiencias digitales que integran tecnología, marketing y creatividad.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Sobre mí | Jhorman Nieto",
    description: "Development · Marketing · Creative. Conoce mi experiencia y enfoque de trabajo.",
    url: "/about",
  },
};

const pillars = [
  {
    number: "01",
    name: "Development",
    description: "Construyo experiencias web y aplicaciones con una base técnica sólida, atención al detalle y una arquitectura preparada para evolucionar.",
    areas: "React · TypeScript · Next.js · WordPress",
  },
  {
    number: "02",
    name: "Marketing",
    description: "Conecto la solución digital con su audiencia mediante estrategia, publicidad en Meta Ads y gestión de canales sociales.",
    areas: "Estrategia · Meta Ads · Redes sociales",
  },
  {
    number: "03",
    name: "Creative",
    description: "Creo contenido visual y audiovisual que comunica con claridad y da personalidad a cada proyecto.",
    areas: "Fotografía · Video · Contenido",
  },
];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://jhorman.com/about#profile",
    url: "https://jhorman.com/about",
    mainEntity: { "@id": "https://jhorman.com/#person" },
  };
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="about-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        <section className="about-page-hero" aria-labelledby="about-page-title">
          <div className="site-container about-page-hero-grid">
            <div className="about-page-hero-copy">
              <p className="section-kicker">SOBRE MÍ / JHORMAN NIETO</p>
              <h1 id="about-page-title">Tecnología, estrategia <span>y creatividad.</span></h1>
              <p className="about-page-lead">Soy Jhorman Nieto, desarrollador frontend radicado en Panamá. Creo soluciones digitales donde la ejecución técnica, la comunicación y la experiencia de las personas trabajan juntas.</p>
              <div className="about-page-actions">
                <Link className="button button-primary" href="/portfolio">Ver proyectos <span aria-hidden="true">↗</span></Link>
                <Link className="button button-outline" href="#contact">Hablemos <span aria-hidden="true">↗</span></Link>
              </div>
              <p className="about-page-signature">Digital Solutions Specialist <span aria-hidden="true">/</span> Ciudad de Panamá</p>
            </div>
            <div className="about-page-portrait">
              <Image src="/img/hero/jhorman-nieto.png" alt="Retrato de Jhorman Nieto" width={1130} height={1334} priority sizes="(max-width: 800px) 100vw, 40vw" />
              <span aria-hidden="true">JN / 2026</span>
            </div>
          </div>
        </section>

        <section className="site-section about-page-story" aria-labelledby="about-story-title">
          <div className="site-container about-page-story-grid">
            <div>
              <p className="section-kicker">MI PERFIL</p>
              <h2 id="about-story-title">Desarrollo como base. Una mirada más amplia.</h2>
            </div>
            <div className="about-page-story-copy">
              <p>Mi experiencia se centra en el desarrollo frontend con React y TypeScript, WordPress, arquitectura frontend, patrones de diseño y la creación de experiencias digitales funcionales y atractivas.</p>
              <p>Complemento esa base técnica con marketing digital, gestión de redes sociales, fotografía y contenido audiovisual. Esta combinación me permite pensar en el producto, en cómo se presenta y en la forma en que llega a las personas.</p>
              <dl className="about-page-details">
                <div><dt>Base</dt><dd>Ciudad de Panamá</dd></div>
                <div><dt>Enfoque</dt><dd>Development · Marketing · Creative</dd></div>
                <div><dt>Idiomas</dt><dd>Español · Inglés básico</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="site-section about-page-pillars" aria-labelledby="about-pillars-title">
          <div className="site-container">
            <div className="section-intro">
              <p className="section-kicker">MI ENFOQUE</p>
              <h2 id="about-pillars-title">Tres disciplinas. Una visión digital.</h2>
              <p>Cada proyecto necesita una solución propia. Estas son las áreas que conecto para llevar una idea a una experiencia real.</p>
            </div>
            <div className="about-page-pillar-grid">
              {pillars.map((pillar) => (
                <article className="about-page-pillar" key={pillar.number}>
                  <span className="about-page-pillar-number">/{pillar.number}</span>
                  <h3>{pillar.name}</h3>
                  <p>{pillar.description}</p>
                  <span className="about-page-pillar-areas">{pillar.areas}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Experience />
        <Tools />
        <SiteContact />
      </main>
    </>
  );
}
