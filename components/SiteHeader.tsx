"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { servicePages } from "@/data/servicePages";

const navigation = [
  { label: "Inicio", href: "/#home" },
  { label: "Proyectos", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Sobre mí", href: "/about" },
  { label: "Contacto", href: "/contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="site-container site-header-inner">
        <Link className="site-logo" href="/#home" aria-label="Jhorman Nieto, inicio" onClick={closeMenu}>
          <Image src="/img/jhorman-nieto-logo.svg" alt="" width={60} height={60} loading="eager" unoptimized />
        </Link>
        <button
          className="site-menu-toggle"
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => {
            setOpen(!open);
            if (open) setServicesOpen(false);
          }}
        ><span /><span /></button>
        <nav id="site-navigation" className={`site-nav${open ? " is-open" : ""}`} aria-label="Navegación principal">
          <Link href={navigation[0].href} onClick={closeMenu}>{navigation[0].label}</Link>
          <div className="site-nav-group">
            <Link className="site-services-link" href="/service" onClick={closeMenu}>Servicios <span aria-hidden="true">⌄</span></Link>
            <button
              className="site-submenu-toggle"
              type="button"
              aria-label={servicesOpen ? "Ocultar páginas de servicios" : "Mostrar páginas de servicios"}
              aria-expanded={servicesOpen}
              aria-controls="site-services-submenu"
              onClick={() => setServicesOpen(!servicesOpen)}
            ><span aria-hidden="true">⌄</span></button>
            <div id="site-services-submenu" className={`site-submenu${servicesOpen ? " is-open" : ""}`}>
              <div className="site-submenu-heading"><span>EXPLORAR SERVICIOS</span><Link href="/service" onClick={closeMenu}>Ver todos ↗</Link></div>
              <ul>
                {servicePages.map((service) => <li key={service.slug}><Link href={`/service/${service.slug}`} onClick={closeMenu}>{service.title}<span aria-hidden="true">↗</span></Link></li>)}
              </ul>
            </div>
          </div>
          {navigation.slice(1).map((item) => <Link href={item.href} key={item.label} onClick={closeMenu}>{item.label}</Link>)}
          <Link className="button button-primary site-nav-cta" href="/contact" onClick={closeMenu}>Hablemos <span aria-hidden="true">↗</span></Link>
        </nav>
      </div>
    </header>
  );
}
