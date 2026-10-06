import type { Metadata } from "next";
import { Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  variable: "--font-instrument",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

// Canonical site URL — custom domain in production, localhost in dev.
const siteUrl =
  process.env.NODE_ENV === "production"
    ? "https://madisondrennen.com"
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Madison in Marketing — Creative · Marketing · AI",
  description:
    "Portfolio of Madison Drennen — building polished brand systems, websites, and marketing assets for businesses ready to show up better.",
  keywords: [
    "Madison Drennen",
    "madison in marketing",
    "brand designer",
    "web designer",
    "digital marketer",
    "graphic designer",
    "content creator",
    "portfolio",
    "brand identity",
    "visual systems",
    "marketing portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Madison in Marketing — Creative · Marketing · AI",
    description:
      "Polished brand systems, websites, and marketing for businesses ready to show up better.",
    type: "website",
    siteName: "Madison in Marketing",
    url: "https://madisondrennen.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madison in Marketing — Creative · Marketing · AI",
    description:
      "Polished brand systems, websites, and marketing for businesses ready to show up better.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrument.variable} ${plexMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
