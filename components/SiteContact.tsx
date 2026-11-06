import ContactForm from "@/components/ContactForm";

type SiteContactProps = {
  page?: boolean;
};

const contactMethods = [
  { label: "Correo electrónico", value: "softwaredeveloper@jhorman.com", href: "mailto:softwaredeveloper@jhorman.com" },
  { label: "Teléfono", value: "+507 6596-1547", href: "tel:+50765961547" },
  { label: "WhatsApp", value: "+507 6596-1547", href: "https://wa.me/50765961547" },
];

export default function SiteContact({ page = false }: SiteContactProps) {
  return (
    <section id="contact" className={`site-section contact-section${page ? " contact-section-page" : ""}`} aria-labelledby="contact-title">
      <div className="site-container">
        <div className="contact-grid">
          <div className="contact-copy">
            <p className="section-kicker">{page ? "01 / EMPECEMOS" : "06 / CONTACTO"}</p>
            <h2 id="contact-title">{page ? "Cuéntame qué tienes en mente." : "Construyamos algo que marque la diferencia."}</h2>
            <p>Háblame de tu idea, el servicio que necesitas y lo que quieres lograr. Me pondré en contacto contigo para conversar sobre el siguiente paso.</p>
            <div className="contact-methods" aria-label="Otras formas de contacto">
              {contactMethods.map(({ label, value, href }) => (
                <a className="contact-method" href={href} key={label} {...(href.startsWith("https") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  <span><small>{label}</small><strong>{value}</strong></span>
                  <span className="contact-method-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
            <p className="contact-location">Ciudad de Panamá, Panamá <span aria-hidden="true">·</span> Disponible para proyectos digitales</p>
          </div>
          <div className="contact-form-card">
            <div className="contact-form-heading"><span>HABLEMOS DE TU PROYECTO</span><span aria-hidden="true">↗</span></div>
            <h3>Empecemos por aquí.</h3>
            <p>Completa el formulario y cuéntame cómo puedo ayudarte.</p>
            <ContactForm />
          </div>
        </div>
        <footer className="site-footer">
          <span>© {new Date().getFullYear()} Jhorman Nieto</span>
          <span>Development · Marketing · Creative</span>
          <div>
            <a href="https://www.linkedin.com/in/jhormandev" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/jhorman9/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.instagram.com/jsnp97" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/Jhorman1D" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://x.com/jhorman1d" target="_blank" rel="noopener noreferrer">X</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
