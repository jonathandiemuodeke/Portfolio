import { SITE_URL } from "../lib/site";

export default function Head() {
  return (
    <>
      <title>Services | JB-tech</title>
      <meta
        name="description"
        content="JB-tech services: full stack web development, e-commerce development, and general IT service."
      />
      <meta property="og:title" content="Services | JB-tech" />
      <meta
        property="og:description"
        content="See JB-tech service details for websites, e-commerce experiences, and practical IT support."
      />
      <meta property="og:image" content="/og/services.svg" />
      <link rel="canonical" href={`${SITE_URL}/services`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Services | JB-tech" />
      <meta
        name="twitter:description"
        content="See JB-tech service details for websites, e-commerce experiences, and practical IT support."
      />
      <meta name="twitter:image" content="/og/services.svg" />
    </>
  );
}

