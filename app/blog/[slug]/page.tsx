import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import SiteHeader from "@/components/SiteHeader";
import SiteContact from "@/components/SiteContact";
import { getBlogPost, getBlogPosts } from "@/lib/blog";

type BlogPostPageProps = { params: Promise<{ slug: string }> };

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("es-PA", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${value}T12:00:00Z`));

export function generateStaticParams() {
  return getBlogPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const url = `/blog/${post.slug}`;
  return {
    title: `${post.title} | Jhorman Nieto`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.published,
      modifiedTime: post.updated ?? post.published,
      authors: ["Jhorman Nieto"],
      locale: "es_PA",
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const related = getBlogPosts().filter((item) => item.slug !== post.slug).slice(0, 2);
  const url = `https://jhorman.com/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    inLanguage: "es-PA",
    datePublished: post.published,
    dateModified: post.updated ?? post.published,
    author: { "@type": "Person", name: "Jhorman Nieto", url: "https://jhorman.com/about" },
    publisher: { "@type": "Person", name: "Jhorman Nieto", url: "https://jhorman.com/about" },
  };

  return (
    <>
      <SiteHeader />
      <main className="blog-post-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        <article>
          <header className="blog-post-hero">
            <div className="site-container">
              <nav className="blog-breadcrumbs" aria-label="Ruta de navegación"><Link href="/">Inicio</Link><span aria-hidden="true">/</span><Link href="/blog">Blog</Link><span aria-hidden="true">/</span><span aria-current="page">{post.category}</span></nav>
              <p className="section-kicker">{post.category} / PANAMÁ</p>
              <h1>{post.title}</h1>
              <p className="blog-post-description">{post.description}</p>
              <div className="blog-post-meta"><span>Por <Link href="/about">Jhorman Nieto</Link></span><span><time dateTime={post.published}>{formatDate(post.published)}</time></span><span>{post.readingMinutes} min de lectura</span></div>
            </div>
          </header>
          <div className="site-container blog-post-layout">
            <aside className="blog-post-aside"><span>IDEAS DIGITALES</span><p>Una guía para tomar decisiones con más claridad.</p><Link href="/blog">← Todos los artículos</Link></aside>
            <div className="blog-post-body"><ReactMarkdown>{post.content}</ReactMarkdown></div>
          </div>
        </article>
        <section className="site-section blog-related" aria-labelledby="blog-related-title"><div className="site-container">
          <div className="blog-list-heading"><div><p className="section-kicker">SIGUE EXPLORANDO</p><h2 id="blog-related-title">Más ideas para tu proyecto.</h2></div></div>
          <div className="blog-related-grid">{related.map((item) => <Link key={item.slug} href={`/blog/${item.slug}`}><span>{item.category}</span><strong>{item.title}</strong><span aria-hidden="true">↗</span></Link>)}</div>
        </div></section>
        <SiteContact />
      </main>
    </>
  );
}
