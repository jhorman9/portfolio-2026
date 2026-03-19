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
                    <img src="img/portfolio/1.jpg" alt={1} />
                    <Link
                      className="nicolas_sm_full_link"
                      href="portfolio_single"
                    />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <a href="#">// Product design</a>
                      <h3>
                        <Link href="portfolio_single">
                          Mobile application design
                        </Link>
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="portfolio_single">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/2.jpg" alt={2} />
                    <Link
                      className="nicolas_sm_full_link"
                      href="portfolio_single"
                    />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <a href="#">// Creative graphic design</a>
                      <h3>
                        <Link href="portfolio_single">
                          Marketing site design and build
                        </Link>
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="portfolio_single">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/3.jpg" alt={3} />
                    <Link
                      className="nicolas_sm_full_link"
                      href="portfolio_single"
                    />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <a href="#">// Design &amp; branding</a>
                      <h3>
                        <Link href="portfolio_single">
                          Creative Graphics Design
                        </Link>
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="portfolio_single">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/4.jpg" alt={4} />
                    <Link
                      className="nicolas_sm_full_link"
                      href="portfolio_single"
                    />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <a href="#">// Product design</a>
                      <h3>
                        <Link href="portfolio_single">
                          Brand Identity &amp; Motion Design
                        </Link>
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="portfolio_single">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/5.jpg" alt={5} />
                    <Link
                      className="nicolas_sm_full_link"
                      href="portfolio_single"
                    />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <a href="#">// Product design</a>
                      <h3>
                        <Link href="portfolio_single">
                          Marketing site design and build
                        </Link>
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="portfolio_single">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/6.jpg" alt={6} />
                    <Link
                      className="nicolas_sm_full_link"
                      href="portfolio_single"
                    />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <a href="#">// Graphic design</a>
                      <h3>
                        <Link href="portfolio_single">
                          Paper &amp; Book Covers Design
                        </Link>
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="portfolio_single">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
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
