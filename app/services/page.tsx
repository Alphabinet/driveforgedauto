import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";
import { Button } from "@/components/buttons/button";
import { JsonLd } from "@/components/json-ld";
import { PricingCard } from "@/components/pricing-card/pricing-card";
import { Photo } from "@/components/ui/photo";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "PPF, Ceramic Coating & Paint Correction Prices",
  description: "Paint protection film from ₹42,999, ceramic coating from ₹7,500 and paint correction from ₹2,000 at DriveForgedAuto, Greater Noida.",
  path: "/services",
  keywords: ["paint protection film Greater Noida", "ceramic coating Greater Noida", "paint correction Greater Noida"],
});

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <Breadcrumbs items={[{ name: "Services", path: "/services" }]} />
      <JsonLd data={services.map(serviceSchema)} />
      <h1 className="text-4xl md:text-5xl">Services and pricing</h1>
      <p className="mt-3 max-w-xl text-muted">Clear prices for paint protection, coating and correction.</p>

      {services.map((s, i) => (
        <section key={s.slug} aria-labelledby={s.slug} className={`grid gap-8 py-12 md:grid-cols-[1fr_1.2fr] ${i < services.length - 1 ? "border-b border-line" : ""}`}>
          <Photo src={s.image} alt={`${s.short} at DriveForgedAuto`} label={s.short} className="aspect-[4/3] w-full self-start" sizes="(min-width: 768px) 40vw, 100vw" />
          <div>
            <h2 id={s.slug} className="text-3xl">{s.title}</h2>
            <p className="mt-2 text-muted">{s.description}</p>
            <ul className="my-4 grid list-disc gap-1 pl-5 sm:grid-cols-2">{s.features.map((f) => <li key={f}>{f}</li>)}</ul>
            <div className="mb-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{s.options.map((o) => <PricingCard key={o.label} option={o} />)}</div>
            <div className="flex flex-wrap items-center gap-4">
              <Button href={`/contact?service=${encodeURIComponent(s.bookAs)}`}>Book This Service</Button>
              <Link href={`/services/${s.slug}`} className="font-semibold underline">Service details</Link>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
