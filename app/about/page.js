import About from "@/components/About";
import Counter from "@/components/Counter";
import MarqueeTitle from "@/components/MarqueeTitle";
import Partners from "@/components/Partners";
import TestimonialSlider from "@/components/TestimonialSlider";
import NikolasLayout from "@/layouts/NikolasLayout";
import Link from "next/link";
const page = () => {
  return (
    <NikolasLayout>
      {/* Page_title */}
      <div className="nicolas_sm_page_title" style={{marginBottom: "20px"}}>
        <div className="container">
          <div className="page_title_in">
            <h3>
              <span className="stroke_text">Hola mi nombre es </span>
              <span className="underline">Jhorman </span>
              <span className="stroke_text">Desarrollador WEB </span>{" "}
              <span className="underline">full-stack</span>
            </h3>
          </div>
        </div>
      </div>
      {/* /Page_title */}
      {/* About_video */}
      {/* <div className="nicolas_sm_about_video">
        <div className="container">
          <div className="extra_container">
            <div className="video_box">
              <img src="img/about/1.jpg" alt="" />
              <a
                className="popup-youtube"
                href="https://www.youtube.com/watch?v=7e90gBu4pas"
              >
                <img className="sm_svg" src="img/svg/playback.svg" alt={1} />
              </a>
            </div>
          </div>
        </div>
      </div> */}
      {/* /About_video */}
      {/* About_me */}
      <About sectionTitle="SOBRE MÍ" nextSection="counter" />
      {/* /About_me */}
      {/* Counter */}
      <div className="nicolas_sm_counter" id="counter">
        <div className="container">
          <div className="extra_container">
            <div className="counter_in">
              <ul>
                <li>
                  <div className="list_inner">
                    <div className="space" />
                    <div className="box">
                      <div className="icon">
                        <img src="img/about/1.png" alt={1} />
                      </div>
                      <div className="title">
                        <span>React / TypeScript</span>
                        <h3>
                          <span
                            className="sm_counter"
                            data-from={0}
                            data-to={96}
                            data-speed={1500}
                          >
                            <Counter end={96} />
                          </span>
                          %
                        </h3>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="space"></div>
                    <div className="box">
                      <div className="icon">
                        <img src="img/about/2.png" alt={2} />
                      </div>
                      <div className="title">
                        <span>React Native</span>
                        <h3>
                          <span
                            className="sm_counter"
                            data-from={0}
                            data-to={87}
                            data-speed={1500}
                          >
                            <Counter end={87} />
                          </span>
                          %
                        </h3>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="space"></div>
                    <div className="box">
                      <div className="icon">
                        <img src="img/about/3.png" alt={3} />
                      </div>
                      <div className="title">
                        <span>CSS</span>
                        <h3>
                          <span
                            className="sm_counter"
                            data-from={0}
                            data-to={94}
                            data-speed={1500}
                          >
                            <Counter end={94} />
                          </span>
                          %
                        </h3>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="space"></div>
                    <div className="box">
                      <div className="icon">
                        <img src="img/about/4.png" alt={4} />
                      </div>
                      <div className="title">
                        <span>WordPress</span>
                        <h3>
                          <span
                            className="sm_counter"
                            data-from={0}
                            data-to={92}
                            data-speed={1500}
                          >
                            <Counter end={92} />
                          </span>
                          %
                        </h3>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* /Counter */}
      {/* Experience */}
      <div className="nicolas_sm_experience">
        <div className="container">
          <div className="nicolas_sm_main_title">
            <div className="left">
              <span>// Mi experiencia</span>
            </div>
            <div className="center">
              <p>
              Desarrollo aplicaciones frontend escalables, mantenibles y enfocadas en 
              generar valor real para el negocio. Trabajo con React, TypeScript y una 
              arquitectura sólida para construir productos digitales reutilizables, 
              eficientes y preparados para crecer.
              </p>
            </div>
            <div className="right">
              <Link href="portfolio">(( Todos los proyectos ))</Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="extra_container">
            <div className="experience_in">
              <div className="list_inner">
                <div className="left">
                  <p>Web Studio Panamá</p>
                </div>
                <div className="center">
                  <p>Full Stack Developer</p>
                </div>
                <div className="right">
                  <span>2026 Marzo - Presente</span>
                </div>
              </div>
              <div className="list_inner">
                <div className="left">
                  <p>Alaz</p>
                </div>
                <div className="center">
                  <p>Frontend Developer</p>
                </div>
                <div className="right">
                  <span>2025 Febrero - 2026 Enero</span>
                </div>
              </div>
              <div className="list_inner">
                <div className="left">
                  <p>Web Studio Panamá</p>
                </div>
                <div className="center">
                  <p>Front-End Developer</p>
                </div>
                <div className="right">
                  <span>2022 Enero - 2025 Febrero</span>
                </div>
              </div>
              <div className="list_inner">
                <div className="left">
                  <p>Target Marketing</p>
                </div>
                <div className="center">
                  <p>Front-End WordPress</p>
                </div>
                <div className="right">
                  <span>2020 Junio - 2022 Enero</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Experience */}
      {/* Awards */}
      <div className="nicolas_sm_awards">
        <div className="nicolas_sm_extra_title">
          <MarqueeTitle marqueeText="Certificados" />
        </div>
        <div className="container">
          <div className="extra_container">
            <div className="awards_in">
              <div className="image_box">
                <img className="star" src="img/awards/1.png" alt={1} />
                <img src="img/awards/2.png" alt={2} />
              </div>
              <div className="awards_box">
                <div className="list_inner">
                  <div className="left">
                    <p>Webby Awards</p>
                  </div>
                  <div className="center">
                    <p>Awwwards</p>
                  </div>
                  <div className="right">
                    <span>
                      <img
                        className="sm_svg"
                        src="img/svg/down_arrow.svg"
                        alt={1}
                      />
                    </span>
                  </div>
                </div>
                <div className="list_inner">
                  <div className="left">
                    <p>CSS Design Awards</p>
                  </div>
                  <div className="center">
                    <p>Site of the Day</p>
                  </div>
                  <div className="right">
                    <span>
                      <img
                        className="sm_svg"
                        src="img/svg/down_arrow.svg"
                        alt={1}
                      />
                    </span>
                  </div>
                </div>
                <div className="list_inner">
                  <div className="left">
                    <p>Golden Pixel Awards</p>
                  </div>
                  <div className="center">
                    <p>Awwwards</p>
                  </div>
                  <div className="right">
                    <span>
                      <img
                        className="sm_svg"
                        src="img/svg/down_arrow.svg"
                        alt={1}
                      />
                    </span>
                  </div>
                </div>
                <div className="list_inner">
                  <div className="left">
                    <p>Developer Award</p>
                  </div>
                  <div className="center">
                    <p>TechnoWorld</p>
                  </div>
                  <div className="right">
                    <span>
                      <img
                        className="sm_svg"
                        src="img/svg/down_arrow.svg"
                        alt={1}
                      />
                    </span>
                  </div>
                </div>
                <div className="list_inner">
                  <div className="left">
                    <p>Motion Graphics</p>
                  </div>
                  <div className="center">
                    <p>TechnoWorld</p>
                  </div>
                  <div className="right">
                    <span>
                      <img
                        className="sm_svg"
                        src="img/svg/down_arrow.svg"
                        alt={1}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Awards */}
      {/* About_testimonials */}
      <TestimonialSlider sectionNumber="" />
      {/* /About_testimonials */}
      {/* About_partners */}
      <Partners sectionNumber="" />
      {/* About_partners */}
    </NikolasLayout>
  );
};
export default page;
