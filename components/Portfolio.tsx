"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data";

const filters = ["Todos", "Desarrollo", "Marketing", "Fotografía", "Video"] as const;
type ProjectFilter = (typeof filters)[number];
const pageSize = 3;

export default function Portfolio({ limit = null }: { limit?: number | null }) {
  const [filter, setFilter] = useState<ProjectFilter>("Todos");
  const [page, setPage] = useState(1);
  const projectGridRef = useRef<HTMLDivElement>(null);
  const shouldFocusProject = useRef(false);
  const projects = limit ? portfolioData.slice(0, limit) : portfolioData;
  const visible = projects.filter(
    (project) => filter === "Todos" || (project.discipline || "Desarrollo") === filter,
  );
  const pageCount = Math.ceil(visible.length / pageSize);
  const pageProjects = visible.slice((page - 1) * pageSize, page * pageSize);

  useEffect(() => {
    if (!shouldFocusProject.current) return;
    shouldFocusProject.current = false;
    const firstProject = projectGridRef.current?.querySelector<HTMLAnchorElement>(".project-image");
    firstProject?.focus({ preventScroll: true });
    projectGridRef.current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
  }, [page]);

  function changePage(nextPage: number) {
    if (nextPage === page) return;
    shouldFocusProject.current = true;
    setPage(nextPage);
  }

  return (
    <section id="portfolio" className="site-section portfolio-section" aria-labelledby="portfolio-title">
      <div className="site-container">
        <div className="portfolio-heading">
          <div className="section-intro portfolio-intro">
            <p className="section-kicker">02 / PROYECTOS SELECCIONADOS</p>
            <h2 id="portfolio-title">Trabajo que habla<br />por sí mismo.</h2>
            <p>Soluciones digitales desarrolladas para necesidades reales. Cada proyecto tiene su propio contexto, enfoque y ejecución.</p>
          </div>
          <p className="portfolio-count"><strong>{String(visible.length).padStart(2, "0")}</strong><span>proyectos<br />en esta selección</span></p>
        </div>

        <div className="project-filters" role="group" aria-label="Filtrar proyectos">
          {filters.map((item) => (
            <button
              type="button"
              key={item}
              className={filter === item ? "is-active" : ""}
              aria-pressed={filter === item}
              onClick={() => {
                setFilter(item);
                setPage(1);
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {visible.length > 0 ? (
          <div className="project-grid" ref={projectGridRef}>
            {pageProjects.map((project, index) => (
              <article className="project-card" key={project.id}>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="project-image"
                  aria-label={`Ver proyecto ${project.title}`}
                >
                  <Image
                    src={`/${project.image.replace(/^\//, "")}`}
                    alt={project.title}
                    fill
                    sizes="(max-width: 850px) 100vw, 42vw"
                  />
                </Link>
                <div className="project-content">
                  <div className="project-meta">
                    <span>{String((page - 1) * pageSize + index + 1).padStart(2, "0")} / {project.discipline || "Desarrollo"}</span>
                    <span>{project.category}</span>
                  </div>
                  <h3><Link href={`/portfolio/${project.slug}`}>{project.title}</Link></h3>
                  <p>{project.description}</p>
                  <ul className="project-tags">
                    {project.technologies.slice(0, 4).map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                  <Link className="project-cta" href={`/portfolio/${project.slug}`}>
                    Ver proyecto <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="projects-empty" role="status">Aún no hay proyectos publicados en esta categoría.</p>
        )}
        {pageCount > 1 && (
          <nav className="project-pagination" aria-label="Paginación de proyectos">
            <button type="button" className="pagination-direction" onClick={() => changePage(page - 1)} disabled={page === 1}>
              <span aria-hidden="true">←</span> Anterior
            </button>
            <div className="pagination-pages">
              {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
                <button
                  type="button"
                  key={pageNumber}
                  className={page === pageNumber ? "is-active" : ""}
                  aria-label={`Página ${pageNumber}`}
                  aria-current={page === pageNumber ? "page" : undefined}
                  onClick={() => changePage(pageNumber)}
                >
                  {String(pageNumber).padStart(2, "0")}
                </button>
              ))}
            </div>
            <button type="button" className="pagination-direction" onClick={() => changePage(page + 1)} disabled={page === pageCount}>
              Siguiente <span aria-hidden="true">→</span>
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
