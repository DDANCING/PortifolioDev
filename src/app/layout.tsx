import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./components/Footer";
import { Toaster } from "sonner";
import { personalSchema, websiteSchema, organizationSchema } from "@/lib/schemas";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Marcelo Mazzonetto - Desenvolvedor Full Stack",
    template: "%s | Marcelo Mazzonetto"
  },
  description: "Desenvolvedor Full Stack especializado em React, Next.js, TypeScript e Node.js. Criando soluções web modernas e eficientes. Explore meu portfólio e projetos.",
  keywords: [
    "desenvolvedor full stack",
    "react developer",
    "next.js",
    "typescript",
    "node.js",
    "javascript",
    "desenvolvedor web",
    "programador",
    "frontend",
    "backend",
    "marcelo mazzonetto"
  ],
  authors: [{ name: "Marcelo Mazzonetto" }],
  creator: "Marcelo Mazzonetto",
  publisher: "Marcelo Mazzonetto",
  metadataBase: new URL("https://marcelomazzonetto.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://marcelomazzonetto.vercel.app",
    title: "Marcelo Mazzonetto - Desenvolvedor Full Stack",
    description: "Desenvolvedor Full Stack especializado em React, Next.js, TypeScript e Node.js. Criando soluções web modernas e eficientes.",
    siteName: "Marcelo Mazzonetto Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Marcelo Mazzonetto - Desenvolvedor Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcelo Mazzonetto - Desenvolvedor Full Stack",
    description: "Desenvolvedor Full Stack especializado em React, Next.js, TypeScript e Node.js.",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "", // Adicione seu código de verificação do Google Search Console aqui
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personalSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://marcelomazzonetto.vercel.app" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar/>
         <main className="min-h-screen pt-24">
            {children}
           
          </main>
           <Toaster />
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
