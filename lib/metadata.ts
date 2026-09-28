import type { Metadata } from "next";
import { site } from "@/data/site";

type Input = { title: string; description: string; path: string; keywords?: string[] };

// OG/Twitter images come from app/opengraph-image.tsx and app/twitter-image.tsx.
// Reusable per-page metadata: title, description, canonical, Open Graph, Twitter.
export function buildMetadata({ title, description, path, keywords }: Input): Metadata {
  const url = new URL(path, site.url).toString();
  return {
    title, description, keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website", url, title, description, siteName: site.name, locale: "en_IN",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
