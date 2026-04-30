import { SITE_URL } from "../lib/site";

export default function Head() {
  return (
    <>
      <title>Projects | JB-tech</title>
      <meta
        name="description"
        content="Browse JB-tech projects: filtered portfolio examples in full stack, e-commerce, security, and IT."
      />
      <meta property="og:title" content="Projects | JB-tech" />
      <meta
        property="og:description"
        content="Explore project samples with filters, details, and practical build ideas."
      />
      <meta property="og:image" content="/og/projects.svg" />
      <link rel="canonical" href={`${SITE_URL}/projects`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Projects | JB-tech" />
      <meta
        name="twitter:description"
        content="Explore project samples with filters, details, and practical build ideas."
      />
      <meta name="twitter:image" content="/og/projects.svg" />
    </>
  );
}

