import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "../../lib/posts";
import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: "Post not found | JB-tech",
      description: "This JB-tech blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | JB-tech Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | JB-tech Blog`,
      description: post.excerpt,
      images: ["/og/blog-post.svg"],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | JB-tech Blog`,
      description: post.excerpt,
      images: ["/og/blog-post.svg"],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}/og/blog-post.svg`,
    author: {
      "@type": "Organization",
      name: "JB-tech",
    },
    publisher: {
      "@type": "Organization",
      name: "JB-tech",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og/home.svg`,
      },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    dateModified: "2026-01-01",
    datePublished: "2026-01-01",
  };

  return (
    <section className="section" style={{ paddingTop: 40 }} aria-label={`Blog post: ${post.title}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container">
        <div className="section-header">
          <div className="eyebrow" data-reveal>
            <span className="dot" aria-hidden="true" />
            <span>Blog</span>
          </div>
          <h1 className="h1" style={{ fontSize: "clamp(26px, 3.2vw, 42px)" }} data-reveal>
            {post.title}
          </h1>
          <p className="lead" data-reveal>
            {post.excerpt}
          </p>
          <div className="post-meta" style={{ marginTop: 14 }} data-reveal>
            <span>{post.tags[0] ?? "Post"}</span>
            <span>{post.readTime}</span>
            <span>{post.updated.replace("Updated: ", "")}</span>
          </div>
        </div>

        <article className="card" data-reveal style={{ padding: 22, lineHeight: 1.85, fontWeight: 650 }}>
          {post.content.map((block, idx) => {
            if (block.type === "heading") {
              return (
                <h2 key={idx} style={{ marginTop: idx === 0 ? 0 : 18, letterSpacing: "-0.01em" }}>
                  {block.text}
                </h2>
              );
            }
            return (
              <p key={idx} className="muted" style={{ margin: "0 0 12px" }}>
                {block.text}
              </p>
            );
          })}

          <div className="divider" />

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link className="btn btn-accent" href="/contact">
              Ask about a JB-tech topic
            </Link>
            <Link className="btn" href="/blog">
              Back to Blog
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

