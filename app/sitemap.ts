import { portfolioData } from "@/data/portfolioData";
import { servicePages } from "@/data/servicePages";
import { getBlogPosts } from "@/lib/blog";

export default function sitemap() {
  const base = "https://jhorman.com";
  const pages = ["", "/about", "/service", "/portfolio", "/contact", "/blog"];
  return [
    ...pages.map((path) => ({ url: `${base}${path}`, changeFrequency: "monthly", priority: path ? 0.7 : 1 })),
    ...portfolioData.map((project) => ({ url: `${base}/portfolio/${project.slug}`, changeFrequency: "yearly", priority: 0.6 })),
    ...servicePages.map((service) => ({ url: `${base}/service/${service.slug}`, changeFrequency: "monthly", priority: 0.7 })),
    ...getBlogPosts().map((post) => ({ url: `${base}/blog/${post.slug}`, lastModified: post.updated ?? post.published, changeFrequency: "monthly", priority: 0.7 })),
  ];
}
