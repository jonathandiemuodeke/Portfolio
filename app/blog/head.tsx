import { SITE_URL } from "../lib/site";

export default function Head() {
  return (
    <>
      <title>Blog | JB-tech</title>
      <meta
        name="description"
        content="Read JB-tech blog posts about web development, e-commerce UX, IT support, and security checklists."
      />
      <meta property="og:title" content="Blog | JB-tech" />
      <meta
        property="og:description"
        content="Practical JB-tech notes for building better websites and IT workflows."
      />
      <meta property="og:image" content="/og/blog.svg" />
      <link rel="canonical" href={`${SITE_URL}/blog`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Blog | JB-tech" />
      <meta
        name="twitter:description"
        content="Practical JB-tech notes for building better websites and IT workflows."
      />
      <meta name="twitter:image" content="/og/blog.svg" />
    </>
  );
}

