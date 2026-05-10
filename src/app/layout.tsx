import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SearchOverlay from "@/components/layout/SearchOverlay";
import NewsletterModal from "@/components/layout/NewsletterModal";
import ChatbotWidget from "@/components/ai/ChatbotWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BlogVerse — Where Technology Meets Innovation",
    template: "%s | BlogVerse",
  },
  description:
    "Deep dives into AI, web development, cloud architecture, and emerging technologies. Written by engineers, for engineers.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blogverse.dev",
    siteName: "BlogVerse",
    title: "BlogVerse — Where Technology Meets Innovation",
    description:
      "Deep dives into AI, web development, cloud architecture, and emerging technologies.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "BlogVerse" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BlogVerse — Where Technology Meets Innovation",
    description:
      "Deep dives into AI, web development, cloud architecture, and emerging technologies.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://blogverse.dev" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Schema.org structured data placeholder */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "BlogVerse",
              url: "https://blogverse.dev",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://blogverse.dev/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        <Header />
        <SearchOverlay />
        <NewsletterModal />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}
