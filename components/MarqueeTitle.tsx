"use client";
import Marquee from "react-fast-marquee";

const MarqueeTitle = ({ marqueeText = "News", length = 8 }) => {
  const indices = Array.from({ length }, (_, index) => index);
  return (
    <Marquee className="title marquee">
      <div className="wrap">
        {indices.map((i) => (
          <div key={i}>
            <h3 className={i % 2 !== 1 ? "stroke_text_bolder" : ""}>
              {marqueeText}
            </h3>
          </div>
        ))}
      </div>
    </Marquee>
  );
};
export default MarqueeTitle;
