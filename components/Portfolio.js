import Link from "next/link";
import Marquee from "react-fast-marquee";
import { portfolioData } from "@/data/portfolioData";

const Portfolio = ({ noTitle = false, limit = null }) => {
  // Si se especifica un límite, mostrar solo esa cantidad de proyectos
  const projects = limit ? portfolioData.slice(0, limit) : portfolioData;

  return (
    <div className="nicolas_sm_section" id="portfolio">
      <div className="nicolas_sm_portfolio">
        <div className="nicolas_sm_extra_title">
          {!noTitle && (
            <div className="container">
              <div className="projects">
                <span>04 // Mis proyectos</span>
                <Link href="portfolio">(( todos los proyectos ))</Link>
              </div>
            </div>
          )}
          <Marquee className="title marquee">
            <div className="wrap">
              <div>
                <h3>Trabajos</h3>
              </div>
              <div>
                <h3 className="stroke_text_bolder">Trabajos</h3>
              </div>
              <div>
                <h3>Trabajos</h3>
              </div>
              <div>
                <h3 className="stroke_text_bolder">Trabajos</h3>
              </div>
              <div>
                <h3>Trabajos</h3>
              </div>
              <div>
                <h3 className="stroke_text_bolder">Trabajos</h3>
              </div>
              <div>
                <h3>Trabajos</h3>
              </div>
              <div>
                <h3 className="stroke_text_bolder">Trabajos</h3>
              </div>
            </div>
          </Marquee>
        </div>
        <div className="container">
          <div className="portfolio_in">
            <ul>
              {projects.map((project) => (
                <li key={project.id}>
                  <div className="list_inner">
                    <div className="image">
                      <img src={project.image} alt={project.title} />
                      <Link
                        className="nicolas_sm_full_link"
                        href={`/portfolio/${project.slug}`}
                      />
                    </div>
                    <div className="title_holder">
                      <div className="left">
                        <a href="#">// {project.category}</a>
                        <h3>
                          <Link href={`/portfolio/${project.slug}`}>
                            {project.title}
                          </Link>
                        </h3>
                      </div>
                      <div className="right">
                        <Link href={`/portfolio/${project.slug}`}>
                          <img
                            className="sm_svg"
                            src="img/svg/down_arrow.svg"
                            alt="Down Arrow"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
