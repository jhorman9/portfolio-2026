import Marquee from "react-fast-marquee";
import { calculateAge } from "@/app/utils/calculateAge";

const About = ({
  sectionTitle = "02 // Sobre mi",
  nextSection = "service",
}) => {

  return (
    <div className="nicolas_sm_section" id="about">
      <div className="nicolas_sm_about">
        <div className="container">
          <div className="nicolas_sm_main_title">
            <div className="left">
              <span>{sectionTitle}</span>
            </div>
            <div className="center">
              <p>
              Radicado en Panamá, tengo {calculateAge("1997-08-12")} años y una pasión inquebrantable por la tecnología y el desarrollo web. Mi trayectoria profesional me ha permitido especializarme tanto en el frontend, patrones de diseño, arquitecturas, design system y buenas prácticas.
              </p>
            </div>
            <div className="right">
              <div className="scroll anchor">
                <a href={`#${nextSection}`} />
                <img className="sm_svg" src="img/svg/down_arrow.svg" alt={2} />
              </div>
            </div>
          </div>
          <div className="extra_container">
            <div className="biography">
              <ul>
                <li>
                  <div className="list_inner">
                    <span>Pais</span>
                    <h3>Panamá, Panamá City</h3>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <span>Experiencia</span>
                    <h3>{calculateAge("2020-01-01")} años de experiencia</h3>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <span>Fecha de nacimiento</span>
                    <h3>12 agosto, 1997</h3>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <span>Idioma</span>
                    <h3>Español, inglés básico</h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nicolas_sm_round">
          <Marquee className="marquee">
            <div className="wrap">
              <div>
                <img src="img/about/star.webp" alt={1} />
              </div>
              <div>
                <h3>50+ proyectos exitosos</h3>
              </div>
              <div>
                <img src="img/about/star.webp" alt={1} />
              </div>
              <div>
                <h3>50+ clientes satisfechos</h3>
              </div>
              <div>
                <img src="img/about/star.webp" alt={1} />
              </div>
              <div>
                <h3>30+ miembros del equipo</h3>
              </div>
              <div>
                <img src="img/about/star.webp" alt={1} />
              </div>
              <div>
                <h3>50+ proyectos exitosos</h3>
              </div>
              <div>
                <img src="img/about/star.webp" alt={1} />
              </div>
              <div>
                <h3>50+ clientes satisfechos</h3>
              </div>
              <div>
                <img src="img/about/star.webp" alt={1} />
              </div>
              <div>
                <h3>30+ team members</h3>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};
export default About;
