import { links } from "@/data/site";

// Fixed bottom bar, mobile only. Layout adds bottom padding so it never hides content.
export function MobileCta() {
  const item = "flex min-h-14 flex-1 items-center justify-center font-semibold text-white";
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t-2 border-brand bg-ink pb-[env(safe-area-inset-bottom)] md:hidden">
      <a className={item} href={links.call}>Call</a>
      <a className={`${item} border-x border-white/15`} href={links.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
      <a className={item} href={links.directions} target="_blank" rel="noopener noreferrer">Directions</a>
    </div>
  );
}
