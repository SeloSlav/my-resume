import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://martinerlic.com";

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Martin Erlić",
  url: siteUrl,
  email: "mailto:martin.erlic@gmail.com",
  jobTitle: "Product Developer",
  description:
    "Product developer and technical product lead combining product strategy, full-stack engineering, AI systems, and hands-on execution.",
  sameAs: [
    "https://github.com/seloslav",
    "https://stackoverflow.com/users/4077513/martin-erlic",
    "https://www.x.com/seloslav",
  ],
  knowsAbout: [
    "Product strategy",
    "Product leadership",
    "Full-stack engineering",
    "TypeScript",
    "React",
    "Next.js",
    "AI integration",
    "Retrieval-augmented generation",
    "LangGraph",
    "LangChain",
    "Three.js",
    "SpacetimeDB",
    "E-commerce",
  ],
  skills:
    "Product strategy, roadmap planning, full-stack architecture, TypeScript, React, Next.js, AI integrations, RAG, LangGraph, LangChain, Three.js, SpacetimeDB, technical operations",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Martin Erlić | Product Lead & Technical Visionary",
  description: "Product Developer and Team Lead with deep Full-Stack expertise. Bridging the gap between high-level vision and technical execution.",
  keywords: [
    "Martin Erlić",
    "Product Manager",
    "Technical Lead",
    "Full-Stack Developer",
    "Product Strategy",
    "Team Lead",
    "AI Integration"
  ],  
  authors: [{ name: "Martin Erlić" }],
  creator: "Martin Erlić",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml', sizes: '32x32' }
    ],
    apple: '/icon.svg'
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profileJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable profile" />
        <link rel="alternate" type="text/markdown" href="/resume.md" title="Machine-readable résumé" />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
      <body className={`${jetbrainsMono.variable} light-mode`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
