import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Gallery",
  description: "Paint protection film, ceramic coating, paint correction and detailing work from DriveForgedAuto, Greater Noida.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <Breadcrumbs items={[{ name: "Gallery", path: "/gallery" }]} />
      <h1 className="mb-6 text-4xl md:text-5xl">Gallery</h1>
      <GalleryGrid />
    </div>
  );
}
