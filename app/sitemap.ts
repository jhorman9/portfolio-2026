import { portfolioData } from "@/data/portfolioData";
import { servicePages } from "@/data/servicePages";

export default function sitemap() {
  const base = "https://jhorman.com";
  const pages = ["", "/about", "/service", "/portfolio", "/contact"];
  return [
    ...pages.map((path) => ({ url: `${base}${path}`, changeFrequency: "monthly", priority: path ? 0.7 : 1 })),
    ...portfolioData.map((project) => ({ url: `${base}/portfolio/${project.slug}`, changeFrequency: "yearly", priority: 0.6 })),
    ...servicePages.map((service) => ({ url: `${base}/service/${service.slug}`, changeFrequency: "monthly", priority: 0.7 })),
  ];
}
