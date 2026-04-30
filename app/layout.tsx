import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import ThemeToggle from "./components/ThemeToggle";
import { SITE_URL } from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "JB-tech | Personal Portfolio",
  description: "Full stack websites, e-commerce builds, and general IT support.",
  openGraph: {
    title: "JB-tech | Personal Portfolio",
    description: "Full stack websites, e-commerce builds, and general IT support.",
    images: ["/og/home.svg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JB-tech | Personal Portfolio",
    description: "Full stack websites, e-commerce builds, and general IT support.",
    images: ["/og/home.svg"],
  },
};

const themeInitScript = `
(function () {
  var key = "jbtech-theme";
  try {
    var stored = window.localStorage.getItem(key);
    if (stored === "dark" || stored === "light") {
      document.documentElement.setAttribute("data-theme", stored);
      return;
    }
  } catch (e) {}
  var prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  document.documentElement.setAttribute("data-theme", prefersLight ? "light" : "dark");
})();
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/css/styles.css" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body data-base=".">
        <script
          type="application/ld+json"
          // Organization + website schema for baseline SEO
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "JB-tech",
                  url: SITE_URL,
                  logo: `${SITE_URL}/og/home.svg`,
                  sameAs: ["https://github.com/", "https://www.linkedin.com/"],
                },
                {
                  "@type": "WebSite",
                  name: "JB-tech",
                  url: SITE_URL,
                  potentialAction: {
                    "@type": "SearchAction",
                    target: `${SITE_URL}/projects?q={search_term_string}`,
                    "query-input": "required name=search_term_string",
                  },
                },
              ],
            }),
          }}
        />

        {/* Netlify form detection fallback for Next.js builds */}
        <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="text" name="service" />
          <textarea name="message" />
          <input type="text" name="bot-field" />
        </form>

        <Header />
        <div className="floating-theme-toggle" aria-label="Theme controls">
          <ThemeToggle />
        </div>
        <main id="main">{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}

