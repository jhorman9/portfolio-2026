import "server-only";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "content", "blog");

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  published: string;
  updated?: string;
  readingMinutes: number;
  content: string;
};

function requiredText(value: unknown, field: string, filename: string): string {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Falta "${field}" en ${filename}`);
  }
  return value.trim();
}

export function getBlogPosts(): BlogPost[] {
  return readdirSync(blogDirectory)
    .filter((filename) => filename.endsWith(".md") && filename !== "README.md")
    .map((filename) => {
      const slug = filename.slice(0, -3);
      const { data, content } = matter(readFileSync(path.join(blogDirectory, filename), "utf8"));
      const published = requiredText(data.published, "published", filename);
      const updated = data.updated ? requiredText(data.updated, "updated", filename) : undefined;
      if (Number.isNaN(Date.parse(published)) || (updated && Number.isNaN(Date.parse(updated)))) {
        throw new Error(`Fecha inválida en ${filename}`);
      }
      if (!content.trim()) throw new Error(`Falta contenido en ${filename}`);
      return {
        slug,
        title: requiredText(data.title, "title", filename),
        description: requiredText(data.description, "description", filename),
        category: requiredText(data.category, "category", filename),
        published,
        updated,
        readingMinutes: Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200)),
        content,
      };
    })
    .sort((a, b) => b.published.localeCompare(a.published) || a.title.localeCompare(b.title));
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return getBlogPosts().find((post) => post.slug === slug);
}
