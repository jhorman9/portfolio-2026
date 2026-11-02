import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteContact from "@/components/SiteContact";
import { services } from "@/data";
import { servicePages } from "@/data/servicePages";

export const metadata: Metadata = {
  title: "Servicios | Jhorman Nieto",
  description: "Explora servicios de desarrollo de software, marketing digital, Meta Ads, fotografía, video y gestión de redes sociales en Panamá.",
  alternates: { canonical: "/service" },
  openGraph: { title: "Servicios | Jhorman Nieto", description: "Development · Marketing · Creative. Soluciones digitales de la idea al lanzamiento.", url: "/service" },
};

const categories = [
  { id: "desarrollo", service: services[0], slug: "desarrollo-software" },
  { id: "marketing", service: services[1], slug: "marketing-digital" },
  { id: "fotografia", service: services[2], slug: "fotografia" },
  { id: "video", service: services[3], slug: "video" },
];
const specialties = servicePages.filter(({ slug }) => slug === "meta-ads" || slug === "redes-sociales");

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="services-page">
        <section className="services-page-hero" aria-labelledby="services-page-title">
          <div className="site-container">
            <p className="section-kicker">SERVICIOS / DEVELOPMENT · MARKETING · CREATIVE</p>
            <div className="services-page-hero-grid">
              <h1 id="services-page-title">Una idea.<br /><span>Muchas formas</span><br />de hacerla realidad.</h1>
              <div>
                <p>De la idea al lanzamiento. Combino desarrollo, estrategia y contenido para crear experiencias digitales coherentes con cada proyecto.</p>
                <Link className="button button-primary" href="#catalogo">Explorar servicios <span aria-hidden="true">↘</span></Link>
              </div>
            </div>
            <nav className="services-page-jump" aria-label="Áreas de servicio">
              {categories.map(({ id, service }) => <a href={`#${id}`} key={id}>{service.title} <span aria-hidden="true">↗</span></a>)}
            </nav>
          </div>
        </section>

        <section className="site-section services-page-catalog" id="catalogo" aria-labelledby="services-catalog-title">
          <div className="site-container">
            <div className="section-intro">
              <p className="section-kicker">01 / ÁREAS DE TRABAJO</p>
              <h2 id="services-catalog-title">Servicios para cada etapa de tu proyecto.</h2>
              <p>Explora cada área y entra en el detalle de lo que puedo desarrollar, planificar o producir.</p>
            </div>
            <div className="services-page-list">
              {categories.map(({ id, service, slug }) => (
                <article className="services-page-row" id={id} key={id}>
                  <div className="services-page-row-heading">
                    <span className="services-page-number">/{service.number}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link className="services-page-row-link" href={`/service/${slug}`}>Explorar servicio <span aria-hidden="true">↗</span></Link>
                  </div>
                  <div className="services-page-row-content">
                    <p>QUÉ PUEDO HACER</p>
                    <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
                    {id === "marketing" && <Link href="/service/meta-ads" className="services-page-sub-link">Profundizar en Meta Ads <span aria-hidden="true">↗</span></Link>}
                    {id === "video" && <Link href="/service/redes-sociales" className="services-page-sub-link">Ver gestión de redes sociales <span aria-hidden="true">↗</span></Link>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="site-section services-page-specialties" aria-labelledby="services-specialties-title">
          <div className="site-container">
            <div className="section-intro">
              <p className="section-kicker">02 / ESPECIALIDADES</p>
              <h2 id="services-specialties-title">Enfoques más específicos.</h2>
              <p>Cuando el proyecto necesita profundizar en publicidad o presencia social, estas áreas tienen su propio alcance.</p>
            </div>
            <div className="services-page-specialty-grid">
              {specialties.map((detail) => {
                return <Link href={`/service/${detail.slug}`} className="services-page-specialty" key={detail.slug}>
                  <span className="section-kicker">{detail.category}</span>
                  <h3>{detail.title}</h3>
                  <p>{detail.summary}</p>
                  <span className="services-page-specialty-action">Ver detalle <span aria-hidden="true">↗</span></span>
                </Link>;
              })}
            </div>
          </div>
        </section>
        <SiteContact />
      </main>
    </>
  );
}
