import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteContact from "@/components/SiteContact";
import { portfolioData, getProjectBySlug, getAllProjectSlugs } from "@/data";
import type { Metadata } from "next";

interface PortfolioPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() { return getAllProjectSlugs().map((slug) => ({ slug })); }
export async function generateMetadata({ params }: PortfolioPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return project ? { title: `${project.title} | Jhorman Nieto`, description: project.description } : {};
}

export default async function PortfolioSinglePage({ params }: PortfolioPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const others = portfolioData.filter((item) => item.slug !== project.slug).slice(0, 3);
  return <><SiteHeader /><main>
    <article className="site-section project-detail"><div className="site-container">
      <div className="detail-heading"><div><p className="section-kicker">PROYECTO / {project.category}</p><h1>{project.title}</h1><p>{project.description}</p></div><Link className="text-link" href="/portfolio">← Todos los proyectos</Link></div>
      <div className="detail-cover"><Image src={`/${project.image.replace(/^\//, "")}`} alt={project.title} fill priority sizes="100vw" /></div>
      <div className="detail-grid"><aside aria-label="Datos del proyecto"><dl><div><dt>Cliente</dt><dd>{project.client}</dd></div><div><dt>Categoría</dt><dd>{project.category}</dd></div><div><dt>Fecha</dt><dd>{project.date}</dd></div><div><dt>Ubicación</dt><dd>{project.location}</dd></div></dl></aside><div className="detail-content"><div dangerouslySetInnerHTML={{ __html: project.fullDescription }} />{project.features?.length > 0 && <><h2>Características principales</h2><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></>}{project.technologies?.length > 0 && <><h2>Tecnologías utilizadas</h2><ul className="project-tags">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></>}<div className="detail-links">{project.liveUrl && project.liveUrl !== "#" && <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Ver proyecto ↗</a>}{project.githubUrl && project.githubUrl !== "#" && <a className="button button-outline" href={project.githubUrl} target="_blank" rel="noopener noreferrer">Ver código ↗</a>}</div></div></div>
      <div className="related-projects"><h2>Otros proyectos</h2><div>{others.map((item) => <Link href={`/portfolio/${item.slug}`} key={item.slug}><span className="related-image"><Image src={`/${item.image.replace(/^\//, "")}`} alt="" fill sizes="(max-width: 650px) 100vw, 33vw" /></span><strong>{item.title} ↗</strong></Link>)}</div></div>
    </div></article>
    <SiteContact />
  </main></>;
}
