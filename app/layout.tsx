import type { Metadata } from "next";
import { Playfair_Display, Crimson_Text, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const crimsonText = Crimson_Text({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Martin Erlic | Business Analyst & Full-Stack Developer | EU & Canada",
  description: "Experienced Business Analyst and Full-Stack Developer bridging business & technology. Proven expertise in e-commerce, AI integration, international operations, and digital transformation. Available for immediate work in EU and Canada.",
  keywords: [
    "Martin Erlic",
    "Business Analyst", 
    "Full-Stack Developer",
    "IT Business Analyst",
    "React Developer",
    "Next.js Developer",
    "AI Integration",
    "E-commerce Development",
    "Digital Transformation",
    "Business Strategy",
    "Technical Consultant",
    "EU Developer",
    "Canada Developer",
    "Croatia Developer",
    "Remote Developer",
    "Entrepreneur",
    "Product Development",
    "Requirements Analysis",
    "System Integration",
    "Database Design",
    "API Development"
  ],
  authors: [{ name: "Martin Erlic" }],
  creator: "Martin Erlic",
  publisher: "Martin Erlic",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://martinerlic.com",
    title: "Martin Erlic | Business Analyst & Full-Stack Developer",
    description: "Experienced Business Analyst and Full-Stack Developer bridging business & technology. Specializing in digital transformation, AI integration, and international operations.",
    siteName: "Martin Erlic Portfolio",
    images: [
      {
        url: "/me.png",
        width: 1200,
        height: 630,
        alt: "Martin Erlic - Business Analyst & Full-Stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin Erlic | Business Analyst & Full-Stack Developer",
    description: "Bridging business & technology. Experienced in digital transformation, AI integration, and international operations. Available in EU & Canada.",
    images: ["/me.png"],
    creator: "@seloslav"
  },
  alternates: {
    canonical: "https://martinerlic.com"
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml', sizes: '32x32' }
    ],
    apple: '/icon.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${crimsonText.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
