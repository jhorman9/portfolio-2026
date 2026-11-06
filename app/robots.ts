import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://jhorman.com/sitemap.xml",
    host: "https://jhorman.com",
  };
}
