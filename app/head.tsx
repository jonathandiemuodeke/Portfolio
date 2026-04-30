import { SITE_URL } from "./lib/site";

export default function Head() {
  return (
    <>
      <title>JB-tech | Full Stack, E-commerce and IT Services</title>
      <meta
        name="description"
        content="JB-tech portfolio for full stack web development, e-commerce experiences, and practical general IT support."
      />
      <meta property="og:title" content="JB-tech | Full Stack, E-commerce and IT Services" />
      <meta
        property="og:description"
        content="Explore JB-tech services, projects, blog posts, and contact options."
      />
      <meta property="og:image" content="/og/home.svg" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={`${SITE_URL}/`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="JB-tech | Full Stack, E-commerce and IT Services" />
      <meta
        name="twitter:description"
        content="Explore JB-tech services, projects, blog posts, and contact options."
      />
      <meta name="twitter:image" content="/og/home.svg" />
    </>
  );
}

