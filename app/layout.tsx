import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import ThemeToggle from "./components/ThemeToggle";

export const metadata: Metadata = {
  title: "JB-tech | Personal Portfolio",
  description: "Full stack websites, e-commerce builds, and general IT support.",
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

