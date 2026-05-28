import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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

// Canonical site URL — custom domain in production, localhost in dev.
const siteUrl =
  process.env.NODE_ENV === "production"
    ? "https://madisondrennen.com"
    : "http://localhost:3000";

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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Madison Drennen — Brand · Web · Marketing",
    description:
      "Polished brand systems, websites, and marketing for businesses ready to show up better.",
    type: "website",
    siteName: "Madison Drennen",
    url: "https://madisondrennen.com",
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
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
