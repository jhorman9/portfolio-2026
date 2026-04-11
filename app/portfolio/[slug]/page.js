import NikolasLayout from "@/layouts/NikolasLayout";
import { portfolioData, getProjectBySlug, getAllProjectSlugs } from "@/data/portfolioData";
import Link from "next/link";
import { notFound } from "next/navigation";

const PortfolioSinglePage = ({ params }) => {
  const project = getProjectBySlug(params.slug);

  // Si el proyecto no existe, mostrar página 404
  if (!project) {
    notFound();
  }

  return (
    <NikolasLayout>
      <div className="nicolas_sm_portfolio_single">
        <div className="nicolas_sm_service_details">
          <div className="nicolas_sm_page_title">
            <div className="container">
              <div className="nicolas_sm_breadcrumbs">
                <span>
                  <Link href="/">Home</Link>
                </span>
                <span>
                  <Link href="/portfolio">Portfolio</Link>
                </span>
                <span>{project.title}</span>
              </div>
              <div className="page_title_in">
                <h3>{project.title}</h3>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="extra_container">
              <div className="service_details_in">
                <div className="image anchor">
                  <a href="#text">
                    <img
                      className="sm_svg"
                      src="/img/svg/down_arrow.svg"
                      alt="Down Arrow"
                    />
                  </a>
                  <img src={`/${project.image}`} alt={project.title} />
                </div>
                <div className="single_list">
                  <ul>
                    <li>
                      <div className="list_inner">
                        <h3>Cliente:</h3>
                        <p>{project.client}</p>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <h3>Categoría:</h3>
                        <p>{project.category}</p>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <h3>Fecha:</h3>
                        <p>{project.date}</p>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <h3>Ubicación:</h3>
                        <p>{project.location}</p>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <h3>Compartir:</h3>
                        <ul>
                          <li>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                              <img
                                className="sm_svg"
                                src="/img/svg/facebook.svg"
                                alt="Facebook"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                              <img
                                className="sm_svg"
                                src="/img/svg/twitter.svg"
                                alt="Twitter"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                              <img
                                className="sm_svg"
                                src="/img/svg/instagram.svg"
                                alt="Instagram"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                              <img
                                className="sm_svg"
                                src="/img/svg/linkedin.svg"
                                alt="LinkedIn"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="text" id="text">
                  <div dangerouslySetInnerHTML={{ __html: project.fullDescription }} />
                  
                  {project.features && project.features.length > 0 && (
                    <div className="features-section" style={{ marginTop: '2rem' }}>
                      <h4>Características principales:</h4>
                      <ul style={{ listStyle: 'disc', paddingLeft: '2rem' }}>
                        {project.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.technologies && project.technologies.length > 0 && (
                    <div className="technologies-section" style={{ marginTop: '2rem' }}>
                      <h4>Tecnologías utilizadas:</h4>
                      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index} 
                            style={{ 
                              padding: '0.5rem 1rem', 
                              background: '#f0f0f0', 
                              borderRadius: '5px',
                              fontSize: '0.9rem'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="project-links" style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="nicolas_sm_button"
                        style={{ padding: '1rem 2rem', background: '#000', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}
                      >
                        Ver Proyecto en Vivo
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="nicolas_sm_button"
                        style={{ padding: '1rem 2rem', background: '#333', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}
                      >
                        Ver en GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navegación a otros proyectos */}
          <div className="container" style={{ marginTop: '4rem' }}>
            <div className="extra_container">
              <div className="navigation-projects">
                <h4 style={{ marginBottom: '2rem' }}>Otros Proyectos</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                  {portfolioData
                    .filter(p => p.slug !== project.slug)
                    .slice(0, 3)
                    .map((otherProject) => (
                      <Link 
                        key={otherProject.id} 
                        href={`/portfolio/${otherProject.slug}`}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <div style={{ cursor: 'pointer' }}>
                          <img 
                            src={`/${otherProject.image}`} 
                            alt={otherProject.title}
                            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '5px' }}
                          />
                          <h5 style={{ marginTop: '1rem' }}>{otherProject.title}</h5>
                          <p style={{ fontSize: '0.9rem', color: '#666' }}>{otherProject.category}</p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NikolasLayout>
  );
};

// Esta función genera las rutas estáticas en build time para mejor rendimiento
export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug: slug,
  }));
}

export default PortfolioSinglePage;
