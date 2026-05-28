import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

// Resolve the production URL — Vercel sets VERCEL_URL automatically on deploys.
// Falls back to localhost for dev. Replace with your custom domain once it's connected.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Madison Drennen — Brand · Web · Marketing",
  description:
    "Portfolio of Madison Drennen — a brand designer, web designer, and digital marketer building polished brand systems, websites, and campaigns for businesses ready to show up better.",
  keywords: [
    "Madison Drennen",
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
  openGraph: {
    title: "Madison Drennen — Brand · Web · Marketing",
    description:
      "Polished brand systems, websites, and marketing for businesses ready to show up better.",
    type: "website",
    siteName: "Madison Drennen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madison Drennen — Brand · Web · Marketing",
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
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${syne.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
