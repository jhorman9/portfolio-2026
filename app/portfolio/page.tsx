import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import Portfolio from "@/components/Portfolio";
import SiteContact from "@/components/SiteContact";
import { portfolioData } from "@/data";

export const metadata: Metadata = {
  title: "Portafolio | Jhorman Nieto",
  description: "Explora proyectos reales de desarrollo web, ecommerce y experiencias digitales creados por Jhorman Nieto.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portafolio | Jhorman Nieto",
    description: "Una selección de proyectos digitales desarrollados por Jhorman Nieto.",
    url: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="portfolio-page">
        <section className="portfolio-page-hero" aria-labelledby="portfolio-page-title">
          <div className="site-container">
            <p className="section-kicker">PORTAFOLIO / TRABAJO SELECCIONADO</p>
            <div className="portfolio-page-hero-grid">
              <h1 id="portfolio-page-title">Ideas llevadas<br /><span>a la práctica.</span></h1>
              <div className="portfolio-page-hero-aside">
                <p>Una mirada a proyectos reales de ecommerce, plataformas web y experiencias digitales. Cada uno responde a una necesidad distinta y muestra cómo convierto una idea en un producto funcional.</p>
                <Link className="button button-primary" href="#portfolio">Explorar proyectos <span aria-hidden="true">↘</span></Link>
              </div>
            </div>
            <div className="portfolio-page-hero-foot">
              <span>DEVELOPMENT · MARKETING · CREATIVE</span>
              <span><strong>{String(portfolioData.length).padStart(2, "0")}</strong> proyectos publicados</span>
            </div>
          </div>
        </section>
        <Portfolio />
        <SiteContact />
      </main>
    </>
  );
}
