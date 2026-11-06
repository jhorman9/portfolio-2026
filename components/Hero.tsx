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
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual-ring" />
      <Image
        src="/img/hero/hero-banner-image.png"
        alt=""
        width={1320}
        height={1192}
        preload
        sizes="(max-width: 800px) min(110vw, 534px), (max-width: 1050px) 40vw, 44vw"
        className="hero-banner-image"
      />
      <span className="hero-visual-label">JN / 01</span>
    </div>
  </div></section>;
}
