import Link from "next/link";
import { services } from "@/data";

export default function Service() {
  return (
    <section id="service" className="section-dark site-section" aria-labelledby="services-title">
      <div className="site-container">
        <div className="section-intro">
          <p className="section-kicker">01 / SERVICIOS</p>
          <h2 id="services-title">Una visión digital.<br /><span>Múltiples soluciones.</span></h2>
          <p>De la idea al lanzamiento. Tecnología, estrategia y contenido trabajando juntos.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card-top">
                <span className="service-icon" aria-hidden="true">{service.icon}</span>
                <span className="service-number">/{service.number}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
              {service.href && <Link className="text-link" href={service.href}>Más información <span aria-hidden="true">↗</span></Link>}
            </article>
          ))}
        </div>
        <Link className="button button-outline services-all-link" href="/service">Ver todos los servicios <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  );
}
