"use client";
import { useState } from "react";

const faqData = [
  {
    id: 1,
    title: "Why should I choose Nicolas?",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised open ininwords which don't look even again is there anyone who loves slightly believable.",
  },
  {
    id: 2,
    title: "Unique brand identity and strategy",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised open ininwords which don't look even again is there anyone who loves slightly believable.",
  },
  {
    id: 3,
    title: "Tailor-made digital products",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised open ininwords which don't look even again is there anyone who loves slightly believable.",
  },
  {
    id: 4,
    title: "Are you open for new projects?",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised open ininwords which don't look even again is there anyone who loves slightly believable.",
  },
  {
    id: 5,
    title: "Do you currently have career openings?",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised open ininwords which don't look even again is there anyone who loves slightly believable.",
  },
];

const Faq = ({ limit = 10 }) => {
  const [active, setActive] = useState(1);
  const onClick = (value) => setActive(active == value ? null : value);
  return (
    <div className="accordion_wrap ready">
      {faqData.map(
        (item) =>
          item.id <= limit && (
            <div
              className={`accordion ${active === item.id ? "active" : ""}`}
              key={item.id}
            >
              <div
                className="accordion_header"
                onClick={() => onClick(item.id)}
              >
                <div className="title">
                  <h3>{item.title}</h3>
                </div>
                <div className="arrow">
                  <img
                    className="sm_svg"
                    src="img/svg/down_arrow.svg"
                    alt={1}
                  />
                </div>
              </div>
              <div
                className="accordion_content"
                style={{ display: active == item.id ? "block" : "none" }}
              >
                <p>{item.content}</p>
              </div>
            </div>
          )
      )}
    </div>
  );
};
export default Faq;
