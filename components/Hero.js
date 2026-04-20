const Hero = () => {
  return (
    <div className="nicolas_sm_section" id="home">
      <div className="nicolas_sm_hero">
        <div className="container">
          <div className="hero_text">
            <div className="left">
              <h3 className="stroke_text">Mi nombre es</h3>
              <h3>
                <span className="inline_text">
                  Jhorman Nieto
                  <span className="arrow">
                    <div className="wings">
                      <div className="wing">
                        <span className="up" />
                      </div>
                      <div className="wing">
                        <span className="down" />
                      </div>
                    </div>
                  </span>
                </span>
              </h3>
            </div>
            <div className="right">
              <h3>
                <span className="inline_text">Frontend</span>
              </h3>
              <h3 className="stroke_text">React Developer</h3>
            </div>
          </div>
          <div className="hero_scroll_title">
            <span>
              01 // 09 - scroll{" "}
              <img
                className="sm_svg bounce"
                src="img/svg/down_arrow.svg"
                alt={1}
              />
            </span>
          </div>
          <div className="overlay_el">
            <div className="overlay_bg" />
            <div className="overlay_content">
              <div className="hero_info_area">
                <div className="left">
                  <div className="info_list">
                    <img src="img/hero/shape.webp" alt="shape" />
                    <h3>Sobre mí</h3>
                    <p>
                      Hola, mi nombre es Jhorman, soy un desarrollador frontend con experiencia en React. 
                      Me apasiona crear interfaces de usuario atractivas y funcionales, 
                      y siempre estoy buscando nuevas formas de mejorar mis habilidades y 
                      conocimientos en el desarrollo web.
                    </p>
                  </div>
                  <div className="info_list">
                    <img src="img/hero/shape.webp" alt="shape" />
                    <h3>Lo que hago</h3>
                    <p>
                      Diseño y desarrollo sitios web y aplicaciones móviles utilizando React, React-Native,
                      Wordpress y otras tecnologías web. Me especializo en crear interfaces de usuario atractivas y funcionales.
                    </p>
                  </div>
                </div>
                <div className="center">
                  <span>
                    <img src="img/hero/jhorman-nieto.png" alt={1} />
                  </span>
                </div>
                <div className="right">
                  <div className="info_list">
                    <img src="img/hero/shape.webp" alt="shape" />
                    <h3>Contáctame</h3>
                    <p>
                      Dirección: Panamá, Panamá City <br />
                      Email: developer@jhorman.com <br />
                      Teléfono: +507 6596-1547
                    </p>
                  </div>
                  <div className="info_list">
                    <img src="img/hero/shape.webp" alt="shape" />
                    <h3>Encuéntrame</h3>
                    <ul className="social">
                      <li>
                        <a href="https://www.facebook.com/Jhorman1D">
                          <img
                            className="sm_svg"
                            src="img/svg/facebook.svg"
                            alt={1}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com/jhorman1d">
                          <img
                            className="sm_svg"
                            src="img/svg/twitter.svg"
                            alt={2}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/jsnp97">
                          <img
                            className="sm_svg"
                            src="img/svg/instagram.svg"
                            alt={3}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/jhormandev">
                          <img
                            className="sm_svg"
                            src="img/svg/linkedin.svg"
                            alt={4}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/jhorman9">
                          <img
                            className="sm_svg"
                            src="img/svg/github.svg"
                            alt={5}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
