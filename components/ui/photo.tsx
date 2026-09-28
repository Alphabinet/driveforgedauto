import Image from "next/image";

type Props = { src?: string; alt: string; label?: string; className?: string; priority?: boolean; sizes?: string };

// Renders a real image when `src` is set, otherwise a neutral placeholder block.
export function Photo({ src, alt, label, className = "", priority, sizes = "(min-width: 1024px) 33vw, 100vw" }: Props) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    );
  }
  return (
    <div role="img" aria-label={alt} className={`relative flex items-end bg-gradient-to-br from-charcoal to-ink p-3 text-sm text-white/60 ${className}`}>
      <span aria-hidden="true">{label ?? "Photo placeholder"}</span>
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] bg-brand" />
    </div>
  );
}
