import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";
import { Button } from "@/components/buttons/button";
import { Photo } from "@/components/ui/photo";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About Us",
  description: "DriveForgedAuto is a unit of SN Automobiles Pvt. Ltd., a car care workshop in Bisrakh, Greater Noida focused on quality finish and protection.",
  path: "/about",
});

const blocks = [
  ["Commitment to quality", "We use quality materials and tell you what each one does before we apply it."],
  ["Skilled craftsmanship", "Detailing is careful, patient work. We pay attention to edges, corners and the final finish."],
  ["Vehicle protection", "PPF and ceramic coating protect paint from daily wear and make the car easier to maintain."],
  ["Customer satisfaction", "You should collect a car you are happy with, at a price you knew in advance."],
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <Breadcrumbs items={[{ name: "About Us", path: "/about" }]} />
      <h1 className="text-4xl md:text-5xl">About us</h1>
      <p className="mt-4 max-w-2xl text-lg"><strong>{site.name} is a unit of {site.parent}.</strong> We look after the finish and protection of your vehicle, from a single polish to full paint protection film.</p>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <Photo alt="The DriveForgedAuto workshop" label="Workshop photo" className="aspect-[4/3] w-full" />
        <div className="grid gap-6">{blocks.map(([t, d]) => <div key={t}><h2 className="text-2xl">{t}</h2><p className="mt-1 text-muted">{d}</p></div>)}</div>
      </div>
      <div className="mt-12"><Button href="/contact">Book an Appointment</Button></div>
    </div>
  );
}
