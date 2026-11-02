import type { Settings } from "react-slick";

export const sliderProps = {
  testimonial: {
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    dots: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 991, settings: { slidesToShow: 1 } },
    ],
  },
  blogHeroSlider: {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    dots: false,
  },
} satisfies Record<string, Settings>;
