import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return <section className="site-hero" id="home" aria-labelledby="hero-title"><div className="site-container hero-grid">
    <div className="hero-copy">
      <p className="eyebrow"><span className="status-dot" /> DESARROLLADOR &amp; CREATIVO DIGITAL · PANAMÁ</p>
      <h1 id="hero-title">Ideas digitales.<br /><span>Experiencias reales.</span></h1>
      <p className="hero-description">Combino desarrollo web, marketing digital y creatividad audiovisual para transformar ideas en experiencias que conectan con las personas.</p>
      <div className="hero-actions"><Link className="button button-primary" href="#portfolio">Explorar proyectos <span aria-hidden="true">↗</span></Link><Link className="button button-outline" href="#service">Descubrir servicios <span aria-hidden="true">↗</span></Link></div>
      <div className="hero-foot"><span>Jhorman Nieto — Digital Solutions Specialist</span><span>Development · Marketing · Creative</span></div>
    </div>
    <div className="hero-visual" aria-hidden="true"><div className="hero-visual-ring" /><Image src="/img/hero/jhorman-nieto.png" alt="" fill priority sizes="(max-width: 900px) 80vw, 36vw" className="hero-portrait" /><span className="hero-visual-label">JN / 01</span></div>
  </div></section>;
}
