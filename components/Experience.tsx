import { experience } from "@/data";

export default function Experience() {
  return <section className="site-section experience-section" aria-labelledby="experience-title"><div className="site-container"><div className="section-intro"><p className="section-kicker">04 / EXPERIENCIA</p><h2 id="experience-title">Experiencia que da forma al trabajo.</h2><p>Desarrollo productos frontend escalables y mantenibles con React, TypeScript y una arquitectura preparada para crecer.</p></div><ol className="experience-list">{experience.map((item) => <li key={`${item.company}-${item.period}`}><span>{item.company}</span><strong>{item.role}</strong><time>{item.period}</time></li>)}</ol></div></section>;
}
