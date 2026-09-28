"use client";
import { useRef, useState } from "react";
import { Photo } from "@/components/ui/photo";
import { gallery, galleryCategories, type GalleryItem } from "@/data/gallery";

const tabs = ["All", ...galleryCategories] as const;

export function GalleryGrid() {
  const [cat, setCat] = useState<(typeof tabs)[number]>("All");
  const [active, setActive] = useState<GalleryItem | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const items = cat === "All" ? gallery : gallery.filter((g) => g.category === cat);

  const open = (item: GalleryItem) => { setActive(item); dialog.current?.showModal(); };

  return (
    <div>
      <div role="group" aria-label="Filter gallery by category" className="mb-6 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button key={t} type="button" aria-pressed={cat === t} onClick={() => setCat(t)}
            className={`min-h-11 rounded-full border px-4 font-medium transition-colors ${cat === t ? "border-brand bg-brand text-white" : "border-line bg-white hover:border-ink"}`}>
            {t}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">{items.length} images shown</p>

      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((g) => (
          <li key={g.id} className="mb-4 break-inside-avoid">
            <button type="button" onClick={() => open(g)} aria-label={`Open image: ${g.caption}`} className="block w-full overflow-hidden rounded">
              <Photo src={g.src} alt={g.alt} label={g.category} className={`w-full ${g.ratio === "4/5" ? "aspect-[4/5]" : g.ratio === "1/1" ? "aspect-square" : "aspect-[4/3]"}`} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
              <span className="sr-only">{g.caption}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog ref={dialog} aria-label="Image preview" onClick={(e) => e.target === dialog.current && dialog.current?.close()}
        className="m-auto w-[min(92vw,800px)] rounded bg-ink p-4 text-white backdrop:bg-black/80">
        {active && (
          <div>
            <Photo src={active.src} alt={active.alt} label={active.category} className="aspect-[4/3] w-full" sizes="800px" />
            <p className="mt-3">{active.caption}</p>
          </div>
        )}
        <button type="button" onClick={() => dialog.current?.close()} className="mt-3 min-h-11 rounded border-2 border-white/60 px-5 font-semibold">Close</button>
      </dialog>
    </div>
  );
}
