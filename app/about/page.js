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
      <About sectionTitle="ABOUT ME" nextSection="counter" />
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
              <span>// My experience</span>
            </div>
            <div className="center">
              <p>
                We believe in the transformative power of digital experiences.
                We craft websites and digital products that elevate your online
                presence but also drive real business value.
              </p>
            </div>
            <div className="right">
              <Link href="portfolio">(( Projects all ))</Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="extra_container">
            <div className="experience_in">
              <div className="list_inner">
                <div className="left">
                  <p>Designflow Studio</p>
                </div>
                <div className="center">
                  <p>Design, motion, 3D, art direction</p>
                </div>
                <div className="right">
                  <span>2023 - Present</span>
                </div>
              </div>
              <div className="list_inner">
                <div className="left">
                  <p>Moment Factory</p>
                </div>
                <div className="center">
                  <p>Senior UI/UX Designer</p>
                </div>
                <div className="right">
                  <span>2019 - 2022</span>
                </div>
              </div>
              <div className="list_inner">
                <div className="left">
                  <p>Brunodee Agency</p>
                </div>
                <div className="center">
                  <p>Framer Designer &amp; Developer</p>
                </div>
                <div className="right">
                  <span>2017 - 2018</span>
                </div>
              </div>
              <div className="list_inner">
                <div className="left">
                  <p>Envato Market</p>
                </div>
                <div className="center">
                  <p>Front-End WordPress Developer</p>
                </div>
                <div className="right">
                  <span>2016 - 2017</span>
                </div>
              </div>
              <div className="list_inner">
                <div className="left">
                  <p>Designflow Studio</p>
                </div>
                <div className="center">
                  <p>Webflow Developer &amp; Co-Founder</p>
                </div>
                <div className="right">
                  <span>2015 - 2016</span>
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
          <MarqueeTitle marqueeText="Awwwards" />
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
