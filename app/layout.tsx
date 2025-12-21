import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
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
  viewport: "width=device-width, initial-scale=1",
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
      <head>
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
