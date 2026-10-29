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
  jobTitle: "Full-Stack Developer",
  description:
    "Full-stack developer in Zagreb with 10+ years across SaaS, enterprise applications, and business systems. React, TypeScript, Node.js, supplier APIs, automated testing, and independent AI/Python projects.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Zagreb",
    addressCountry: "HR",
  },
  nationality: [
    { "@type": "Country", name: "Croatia" },
    { "@type": "Country", name: "Canada" },
  ],
  worksFor: { "@type": "Organization", name: "ProFIND" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Victoria" },
  subjectOf: { "@type": "CreativeWork", url: `${siteUrl}/resume.md`, name: "Professional résumé and recruiting guidance" },
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
    "Node.js",
    "Next.js",
    "REST APIs",
    "PostgreSQL",
    "Python",
    "Flask",
    "PyTorch projects",
    "Playwright",
    "Automated testing",
    "Java",
    "Spring Boot",
    "AI integration",
    "Retrieval-augmented generation",
    "LangGraph",
    "LangChain",
    "Three.js",
    "SpacetimeDB",
    "E-commerce",
  ],
  skills:
    "JavaScript, TypeScript, React, Node.js, Next.js, REST APIs, PostgreSQL, Python, Flask, AI integrations, RAG, LangGraph, LangChain, Playwright, Node.js test runner, Java, Spring Boot / MVC, GitLab CI/CD, Docker",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Martin Erlić | Full-Stack Developer | React, Node.js & Applied AI",
  description: "Full-stack developer in Zagreb with 10+ years across SaaS, enterprise applications, and business systems. React, TypeScript, Node.js, applied AI/Python, and automated testing.",
  keywords: [
    "Martin Erlić",
    "Full-Stack Developer",
    "React Developer",
    "TypeScript",
    "Node.js Developer",
    "Applied AI",
    "Python",
    "Playwright",
    "Zagreb"
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
