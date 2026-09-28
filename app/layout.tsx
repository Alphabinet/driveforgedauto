import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { MobileCta } from "@/components/mobile-cta/mobile-cta";
import { site } from "@/data/site";
import { JsonLd } from "@/components/json-ld";
import { websiteSchema, businessSchema } from "@/lib/schema";

const body = Barlow({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body-loaded", display: "swap" });
const display = Barlow_Semi_Condensed({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display-loaded", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url || "https://driveforgedauto.com"),
  title: { default: `${site.name} | ${site.tagline}`, template: `%s | ${site.name}` },
  description: "PPF, ceramic coating and paint correction in Bisrakh, Greater Noida.",
  icons: {
    icon: "/favicon_io/favicon.ico",
    shortcut: "/favicon_io/favicon-16x16.png",
    apple: "/favicon_io/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon_io/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon_io/favicon-16x16.png",
      },
    ],
  },
  manifest: "/favicon_io/site.webmanifest",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#0f0f10" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body className="pb-14 md:pb-0">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:bg-white focus:p-3">Skip to content</a>
        <JsonLd data={[websiteSchema(), businessSchema()]} />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}