import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";
import { Button } from "@/components/buttons/button";
import { BookingForm } from "@/components/contact/booking-form";
import { MapSection } from "@/components/contact/map-section";
import { links, site } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: `Book an Appointment | ${site.name}`,
  description: `Call, WhatsApp, or request an appointment at ${site.name}, ${site.address.street}, ${site.address.locality}.`,
  path: "/contact",
  keywords: ["car detailing near Bisrakh", "PPF near Greater Noida", "ceramic coating appointment"],
});

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service } = await searchParams;
  
  return (
    <main className="mx-auto max-w-6xl px-5 py-12 md:py-20">
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
      
      <div className="mb-10 max-w-2xl">
        <h1 className="text-4xl font-medium tracking-tight md:text-5xl">Book an appointment</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Ready to give your car the ultimate finish? Reach out to us directly for an immediate response, or fill out the form below.
        </p>
      </div>
      
      <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Button href={links.call} className="w-full">
          Call Us
        </Button>
        <Button href={links.whatsapp} variant="outlineDark" external className="w-full">
          WhatsApp
        </Button>
        <Button href={links.text} variant="outlineDark" className="w-full">
          SMS Text
        </Button>
        <Button href={links.directions} variant="outlineDark" external className="w-full">
          Directions
        </Button>
      </div>
      
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <section 
          aria-labelledby="form-h" 
          className="rounded-2xl border border-line bg-surface/50 p-6 shadow-sm md:p-8"
        >
          <h2 id="form-h" className="mb-6 text-2xl font-semibold tracking-tight text-ink">
            Request an appointment
          </h2>
          <BookingForm defaultService={service} />
        </section>
        
        <section 
          aria-labelledby="map-h" 
          className="rounded-2xl border border-line bg-surface/50 p-6 shadow-sm md:p-8"
        >
          <h2 id="map-h" className="mb-6 text-2xl font-semibold tracking-tight text-ink">
            Visit our studio
          </h2>
          <div className="overflow-hidden rounded-xl border border-line/60">
            <MapSection />
          </div>
        </section>
      </div>
    </main>
  );
}