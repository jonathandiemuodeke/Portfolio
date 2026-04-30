import { SITE_URL } from "../lib/site";

export default function Head() {
  return (
    <>
      <title>Contact | JB-tech</title>
      <meta
        name="description"
        content="Contact JB-tech for full stack development, e-commerce builds, and general IT service."
      />
      <meta property="og:title" content="Contact | JB-tech" />
      <meta
        property="og:description"
        content="Send your project details to JB-tech and receive a response quickly."
      />
      <meta property="og:image" content="/og/contact.svg" />
      <link rel="canonical" href={`${SITE_URL}/contact`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Contact | JB-tech" />
      <meta
        name="twitter:description"
        content="Send your project details to JB-tech and receive a response quickly."
      />
      <meta name="twitter:image" content="/og/contact.svg" />
    </>
  );
}

