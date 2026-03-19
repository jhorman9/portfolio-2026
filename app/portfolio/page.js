"use client";
import Portfolio from "@/components/Portfolio";
import WorkingProcess from "@/components/WorkingProcess";
import NikolasLayout from "@/layouts/NikolasLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const page = () => {
  return (
    <NikolasLayout>
      {" "}
      {/* Page_title */}
      <div className="nicolas_sm_page_title">
        <div className="container">
          <div className="page_title_in">
            <h3>
              <span className="stroke_text">We design </span>
              <span className="underline">brands </span>
              <span className="stroke_text">&amp; </span>
              <span className="underline">websites </span>
              <span className="stroke_text">plus exceptional software </span>
              <span className="underline">platforms</span>
            </h3>
          </div>
        </div>
      </div>
      {/* /Page_title */}
      {/* Slider */}
      <div className="nicolas_sm_portfolio_slider swiper-section">
        <div className="slider_in">
          <Swiper
            {...sliderProps.nicolas_sm_portfolio_slider}
            className="swiper-container"
          >
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="list_inner">
                  <img src="img/slider/1.jpg" alt={1} />
                  <div className="details">
                    <div className="category">
                      <span>Designing</span>
                    </div>
                    <div className="title">
                      <h3>UI/UX Design Mockup</h3>
                    </div>
                  </div>
                  <Link
                    className="nicolas_sm_full_link"
                    href="portfolio_single"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="list_inner">
                  <img src="img/slider/2.jpg" alt={2} />
                  <div className="details">
                    <div className="category">
                      <span>Designing</span>
                    </div>
                    <div className="title">
                      <h3>UI/UX Design Mockup</h3>
                    </div>
                  </div>
                  <Link
                    className="nicolas_sm_full_link"
                    href="portfolio_single"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="list_inner">
                  <img src="img/slider/3.jpg" alt={3} />
                  <div className="details">
                    <div className="category">
                      <span>Designing</span>
                    </div>
                    <div className="title">
                      <h3>UI/UX Design Mockup</h3>
                    </div>
                  </div>
                  <Link
                    className="nicolas_sm_full_link"
                    href="portfolio_single"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="list_inner">
                  <img src="img/slider/4.jpg" alt={4} />
                  <div className="details">
                    <div className="category">
                      <span>Designing</span>
                    </div>
                    <div className="title">
                      <h3>UI/UX Design Mockup</h3>
                    </div>
                  </div>
                  <Link
                    className="nicolas_sm_full_link"
                    href="portfolio_single"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="list_inner">
                  <img src="img/portfolio/1.jpg" alt={1} />
                  <div className="details">
                    <div className="category">
                      <span>Designing</span>
                    </div>
                    <div className="title">
                      <h3>UI/UX Design Mockup</h3>
                    </div>
                  </div>
                  <Link
                    className="nicolas_sm_full_link"
                    href="portfolio_single"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="list_inner">
                  <img src="img/portfolio/2.jpg" alt={2} />
                  <div className="details">
                    <div className="category">
                      <span>Designing</span>
                    </div>
                    <div className="title">
                      <h3>UI/UX Design Mockup</h3>
                    </div>
                  </div>
                  <Link
                    className="nicolas_sm_full_link"
                    href="portfolio_single"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="list_inner">
                  <img src="img/portfolio/3.jpg" alt={3} />
                  <div className="details">
                    <div className="category">
                      <span>Designing</span>
                    </div>
                    <div className="title">
                      <h3>UI/UX Design Mockup</h3>
                    </div>
                  </div>
                  <Link
                    className="nicolas_sm_full_link"
                    href="portfolio_single"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="list_inner">
                  <img src="img/portfolio/4.jpg" alt={4} />
                  <div className="details">
                    <div className="category">
                      <span>Designing</span>
                    </div>
                    <div className="title">
                      <h3>UI/UX Design Mockup</h3>
                    </div>
                  </div>
                  <Link
                    className="nicolas_sm_full_link"
                    href="portfolio_single"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="list_inner">
                  <img src="img/portfolio/5.jpg" alt={5} />
                  <div className="details">
                    <div className="category">
                      <span>Designing</span>
                    </div>
                    <div className="title">
                      <h3>UI/UX Design Mockup</h3>
                    </div>
                  </div>
                  <Link
                    className="nicolas_sm_full_link"
                    href="portfolio_single"
                  />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
        <div className="nicolas_sm_swiper_progress fill">
          <div className="my_pagination_in">
            <span className="pagination_progress">
              <span className="all">
                <span className="all_span" />
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* /Slider */}
      {/* Portfolio */}
      <Portfolio noTitle={true} />
      {/* /Portfolio */}
      {/* Process */}
      <WorkingProcess />
      {/* /Process */}
    </NikolasLayout>
  );
};
export default page;
