import { SITE_URL } from "../lib/site";

export default function Head() {
  return (
    <>
      <title>Thank You | JB-tech</title>
      <meta name="description" content="Thank you for contacting JB-tech. Your message has been received." />
      <meta property="og:title" content="Thank You | JB-tech" />
      <meta property="og:description" content="Your message has been received by JB-tech." />
      <meta property="og:image" content="/og/thank-you.svg" />
      <link rel="canonical" href={`${SITE_URL}/thank-you`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Thank You | JB-tech" />
      <meta name="twitter:description" content="Your message has been received by JB-tech." />
      <meta name="twitter:image" content="/og/thank-you.svg" />
    </>
  );
}

