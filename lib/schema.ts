import { site, links } from "@/data/site";
import { formatINR, type Service } from "@/data/services";

const abs = (p: string) => new URL(p, site.url).toString();

export const websiteSchema = () => ({
  "@context": "https://schema.org", "@type": "WebSite", name: site.name, url: site.url,
});

// schema.org has no "AutoDetailing" type; AutomotiveBusiness (a LocalBusiness subtype) is the closest valid match.
// Opening hours, geo, ratings and social profiles are intentionally omitted (not provided).
export const businessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "@id": abs("/#business"),
  name: site.name,
  url: site.url,
  description: "Paint protection film, ceramic coating and paint correction in Bisrakh, Greater Noida.",
  telephone: site.phones.map((p) => `+91${p}`),
  parentOrganization: { "@type": "Organization", name: site.parent },
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.street} (${site.address.landmark})`,
    addressLocality: site.address.locality,
    addressCountry: "IN",
  },
  hasMap: links.directions,
});

export const serviceSchema = (s: Service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.title,
  description: s.description,
  url: abs(`/services/${s.slug}`),
  provider: { "@id": abs("/#business") },
  areaServed: "Greater Noida",
  offers: s.options.map((o) => ({
    "@type": "Offer", name: o.label, price: o.price, priceCurrency: "INR",
    description: `${o.label}: ${formatINR(o.price)}`,
  })),
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: abs(it.path) })),
});
