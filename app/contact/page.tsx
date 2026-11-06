import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteContact from "@/components/SiteContact";

export const metadata: Metadata = {
  title: "Contacto | Jhorman Nieto",
  description: "Hablemos de tu proyecto de desarrollo web, marketing digital, fotografía o producción audiovisual en Panamá.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contacto | Jhorman Nieto",
    description: "Cuéntame tu idea y conversemos sobre cómo llevarla a una experiencia digital real.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="contact-page">
        <section className="contact-page-hero" aria-labelledby="contact-page-title">
          <div className="site-container">
            <p className="section-kicker">CONTACTO / JHORMAN NIETO</p>
            <div className="contact-page-hero-grid">
              <h1 id="contact-page-title">Las buenas ideas<br /><span>empiezan hablando.</span></h1>
              <div className="contact-page-hero-aside">
                <p>¿Tienes un proyecto en mente? Conversemos sobre desarrollo, marketing o contenido creativo y encontremos la mejor manera de llevarlo adelante.</p>
                <a className="button button-primary" href="#contact">Cuéntame tu idea <span aria-hidden="true">↘</span></a>
              </div>
            </div>
            <div className="contact-page-hero-foot"><span>DEVELOPMENT · MARKETING · CREATIVE</span><span>PANAMÁ / DISPONIBLE EN LÍNEA</span></div>
          </div>
        </section>
        <SiteContact page />
      </main>
    </>
  );
}
