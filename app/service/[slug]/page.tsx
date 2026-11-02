import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteContact from "@/components/SiteContact";
import { getServiceBySlug, servicePages } from "@/data/servicePages";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} | Servicios | Jhorman Nieto`,
    description: `${service.summary} Conoce qué incluye este servicio y cómo puedo abordar tu proyecto en Panamá.`,
    alternates: { canonical: `/service/${slug}` },
    openGraph: { title: `${service.title} | Jhorman Nieto`, description: service.summary, url: `/service/${slug}` },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  const related = service.related.map(getServiceBySlug).filter((item) => item !== undefined);

  return (
    <>
      <SiteHeader />
      <main className="service-detail-page">
        <article>
          <header className="service-detail-hero">
            <div className="site-container">
              <nav className="service-breadcrumbs" aria-label="Ruta de navegación">
                <Link href="/">Inicio</Link><span aria-hidden="true">/</span><Link href="/service">Servicios</Link><span aria-hidden="true">/</span><span aria-current="page">{service.title}</span>
              </nav>
              <div className="service-detail-hero-grid">
                <div>
                  <p className="section-kicker">{service.category} / {service.eyebrow}</p>
                  <h1>{service.title}<span>.</span></h1>
                </div>
                <div className="service-detail-lead">
                  <p>{service.summary}</p>
                  <Link className="button button-primary" href="#contact">Hablemos de tu proyecto <span aria-hidden="true">↗</span></Link>
                </div>
              </div>
            </div>
          </header>

          <section className="site-section service-detail-intro" aria-labelledby="service-intro-title">
            <div className="site-container service-detail-intro-grid">
              <p className="section-kicker">01 / EL SERVICIO</p>
              <div><h2 id="service-intro-title">Una solución pensada para tu contexto.</h2><p>{service.introduction}</p></div>
            </div>
          </section>

          <section className="site-section service-detail-includes" aria-labelledby="service-includes-title">
            <div className="site-container">
              <div className="section-intro"><p className="section-kicker">02 / QUÉ INCLUYE</p><h2 id="service-includes-title">Áreas en las que puedo ayudarte.</h2><p>El alcance concreto se acuerda según los objetivos y recursos de tu proyecto.</p></div>
              <div className="service-detail-includes-grid">
                {service.includes.map((item, index) => <div className="service-detail-item" key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>)}
              </div>
            </div>
          </section>

          <section className="site-section service-detail-approach" aria-labelledby="service-approach-title">
            <div className="site-container service-detail-approach-grid">
              <div><p className="section-kicker">03 / ENFOQUE</p><h2 id="service-approach-title">Del objetivo a la ejecución.</h2></div>
              <ol>{service.approach.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>)}</ol>
            </div>
          </section>
        </article>

        {related.length > 0 && <section className="site-section service-detail-related" aria-labelledby="service-related-title"><div className="site-container">
          <div className="section-intro"><p className="section-kicker">TAMBIÉN PUEDE INTERESARTE</p><h2 id="service-related-title">Servicios que se conectan.</h2></div>
          <div className="service-detail-related-grid">{related.map((item) => <Link href={`/service/${item.slug}`} key={item.slug}><span>{item.category}</span><strong>{item.title}</strong><span aria-hidden="true">↗</span></Link>)}</div>
          <Link className="text-link" href="/service">← Ver todos los servicios</Link>
        </div></section>}
        <SiteContact />
      </main>
    </>
  );
}
