import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteContact from "@/components/SiteContact";
import { getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog sobre desarrollo web y marketing digital en Panamá | Jhorman Nieto",
  description: "Guías prácticas para negocios en Panamá sobre ecommerce, Meta Ads, SEO, búsqueda con IA y experiencias digitales.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Ideas digitales para negocios en Panamá | Jhorman Nieto",
    description: "Artículos sobre desarrollo web, marketing digital y visibilidad en buscadores.",
    url: "/blog",
    type: "website",
  },
};

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("es-PA", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${value}T12:00:00Z`));

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="blog-page">
        <header className="blog-page-hero">
          <div className="site-container">
            <p className="section-kicker">BLOG / JHORMAN NIETO</p>
            <div className="blog-page-hero-grid">
              <h1>Ideas que ayudan a <span>decidir mejor.</span></h1>
              <p>Desarrollo, marketing y creatividad digital explicados desde las preguntas reales de los negocios en Panamá.</p>
            </div>
            <div className="blog-page-hero-foot"><span>DEVELOPMENT · MARKETING · CREATIVE</span><span>GUÍAS PARA PANAMÁ</span></div>
          </div>
        </header>

        <section className="site-section blog-list-section" aria-labelledby="blog-list-title">
          <div className="site-container">
            <div className="blog-list-heading">
              <div><p className="section-kicker">LECTURAS / {String(posts.length).padStart(2, "0")}</p><h2 id="blog-list-title">Artículos recientes.</h2></div>
              <p>Respuestas concretas para planear tu próximo paso digital.</p>
            </div>
            <div className="blog-card-grid">
              {posts.map((post, index) => (
                <article className="blog-card" key={post.slug}>
                  <div className="blog-card-top"><span>{post.category}</span><span>{String(index + 1).padStart(2, "0")} / {String(posts.length).padStart(2, "0")}</span></div>
                  <div className="blog-card-content">
                    <p className="blog-card-date"><time dateTime={post.published}>{formatDate(post.published)}</time><span aria-hidden="true">·</span>{post.readingMinutes} min de lectura</p>
                    <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                    <p>{post.description}</p>
                  </div>
                  <Link className="blog-card-link" href={`/blog/${post.slug}`} aria-label={`Leer: ${post.title}`}>Leer artículo <span aria-hidden="true">↗</span></Link>
                </article>
              ))}
            </div>
          </div>
        </section>
        <SiteContact />
      </main>
    </>
  );
}
