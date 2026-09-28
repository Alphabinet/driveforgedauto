import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";
import { Button } from "@/components/buttons/button";
import { ContactButtons } from "@/components/buttons/contact-buttons";
import { JsonLd } from "@/components/json-ld";
import { PricingCard } from "@/components/pricing-card/pricing-card";
import { Photo } from "@/components/ui/photo";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));

const seo: Record<string, { title: string; description: string }> = {
  ppf: { title: "Paint Protection Film (PPF) in Greater Noida", description: "Self-healing, hydrophobic PPF with a 5-year warranty. Camio from ₹42,999 and Garware from ₹52,999 at DriveForgedAuto, Bisrakh." },
  "ceramic-coating": { title: "Ceramic Coating in Greater Noida", description: "High-gloss, water-repellent ceramic coating with 1, 3 or 5-year warranty options from ₹7,500 at DriveForgedAuto." },
  "paint-correction": { title: "Paint Correction & Polishing in Greater Noida", description: "Rubbing and polishing from ₹2,000 and paint correction from ₹4,000 at DriveForgedAuto, Bisrakh." },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = seo[slug];
  return s ? buildMetadata({ ...s, path: `/services/${slug}` }) : {};
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <Breadcrumbs items={[{ name: "Services", path: "/services" }, { name: s.short, path: `/services/${s.slug}` }]} />
      <JsonLd data={serviceSchema(s)} />
      <div className="grid gap-8 md:grid-cols-2">
        <Photo src={s.image} alt={`${s.short} at DriveForgedAuto`} label={s.short} className="aspect-[4/3] w-full self-start" priority sizes="(min-width: 768px) 50vw, 100vw" />
        <div>
          <h1 className="text-4xl">{s.title}</h1>
          <p className="mt-3 text-lg text-muted">{s.description}</p>
          <h2 className="mt-6 text-xl">What you get</h2>
          <ul className="mt-2 list-disc pl-5">{s.features.map((f) => <li key={f}>{f}</li>)}</ul>
        </div>
      </div>
      <h2 className="mb-4 mt-12 text-2xl">Pricing</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{s.options.map((o) => <PricingCard key={o.label} option={o} />)}</div>
      <div className="mt-8"><Button href={`/contact?service=${encodeURIComponent(s.bookAs)}`}>Book This Service</Button></div>
      <div className="mt-12 rounded bg-ink p-6 text-white"><p className="mb-4 text-lg font-semibold">Questions before you book?</p><ContactButtons /></div>
    </div>
  );
}
