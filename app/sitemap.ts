import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/services", ...services.map((s) => `/services/${s.slug}`), "/about", "/gallery", "/contact"];
  return paths.map((p) => ({ url: new URL(p || "/", site.url).toString(), lastModified: new Date() }));
}
