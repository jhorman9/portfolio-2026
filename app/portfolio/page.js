"use client";
import Portfolio from "@/components/Portfolio";
import WorkingProcess from "@/components/WorkingProcess";
import NikolasLayout from "@/layouts/NikolasLayout";
import { sliderProps } from "@/utility/sliderProps";
import { portfolioData } from "@/data/portfolioData";
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
              {portfolioData.map((project) => (
                <SwiperSlide key={project.id} className="swiper-slide">
                  <div className="list_inner">
                    <img src={project.image} alt={project.title} />
                    <div className="details">
                      <div className="category">
                        <span>{project.category}</span>
                      </div>
                      <div className="title">
                        <h3>{project.title}</h3>
                      </div>
                    </div>
                    <Link
                      className="nicolas_sm_full_link"
                      href={`/portfolio/${project.slug}`}
                    />
                  </div>
                </SwiperSlide>
              ))}
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
