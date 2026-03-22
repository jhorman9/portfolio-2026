import Link from "next/link";
import Marquee from "react-fast-marquee";

const Portfolio = ({ noTitle = false }) => {
  return (
    <div className="nicolas_sm_section" id="portfolio">
      <div className="nicolas_sm_portfolio">
        <div className="nicolas_sm_extra_title">
          {!noTitle && (
            <div className="container">
              <div className="projects">
                <span>04 // let me show you</span>
                <Link href="portfolio">(( project all ))</Link>
              </div>
            </div>
          )}
          <Marquee className="title marquee">
            <div className="wrap">
              <div>
                <h3>Work</h3>
              </div>
              <div>
                <h3 className="stroke_text_bolder">Work</h3>
              </div>
              <div>
                <h3>Work</h3>
              </div>
              <div>
                <h3 className="stroke_text_bolder">Work</h3>
              </div>
              <div>
                <h3>Work</h3>
              </div>
              <div>
                <h3 className="stroke_text_bolder">Work</h3>
              </div>
              <div>
                <h3>Work</h3>
              </div>
              <div>
                <h3 className="stroke_text_bolder">Work</h3>
              </div>
            </div>
          </Marquee>
        </div>
        <div className="container">
          <div className="portfolio_in">
            <ul>
              <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/azumi-ecommerce.jpg" alt="Ecommerce AzumiPTY" />
                    <Link
                      className="nicolas_sm_full_link"
                      href="portfolio_single"
                    />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <a href="#">// Wordpress Development</a>
                      <h3>
                        <Link href="portfolio_single">
                          Ecommerce AzumiPTY
                        </Link>
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="portfolio_single">
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
              <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/utah-mechanical-school.jpg" alt="Ecommerce Utah Mechanical School" />
                    <Link
                      className="nicolas_sm_full_link"
                      href="portfolio_single"
                    />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <a href="#">// Wordpress Development</a>
                      <h3>
                        <Link href="portfolio_single">
                          Ecommerce Utah Mechanical School
                        </Link>
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="portfolio_single">
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
              <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/aikikaird.jpg" alt="Aikikaird" />
                    <Link
                      className="nicolas_sm_full_link"
                      href="portfolio_single"
                    />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <a href="#">// Wordpress Development</a>
                      <h3>
                        <Link href="portfolio_single">
                          Aikikaird
                        </Link>
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="portfolio_single">
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
              <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/cocolpan.jpg" alt="Cocolpan" />
                    <Link
                      className="nicolas_sm_full_link"
                      href="portfolio_single"
                    />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <a href="#">// HTML, CSS, JAVASCRIPT Y PHP</a>
                      <h3>
                        <Link href="portfolio_single">
                          Cocolpan
                        </Link>
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="portfolio_single">
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
              <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/elevideo.jpg" alt="Elevideo" />
                    <Link
                      className="nicolas_sm_full_link"
                      href="portfolio_single"
                    />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <a href="#">// ReactJS &amp; Typescript</a>
                      <h3>
                        <Link href="portfolio_single">
                          Elevideo
                        </Link>
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="portfolio_single">
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
              <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/azumi-menu-digital.jpg" alt="Azumi Menu Digital" />
                    <Link
                      className="nicolas_sm_full_link"
                      href="portfolio_single"
                    />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <a href="#">// ReactJS</a>
                      <h3>
                        <Link href="portfolio_single">
                          Azumi Menu Digital
                        </Link>
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="portfolio_single">
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
