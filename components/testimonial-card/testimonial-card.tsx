import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-md">
      {t.placeholder && (
        <p className="mb-3 rounded bg-brand/10 px-2 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
          Sample text, not a real review
        </p>
      )}
      
      {/* 5-Star Rating */}
      <div className="mb-4 flex gap-1 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
        ))}
      </div>

      <blockquote className="relative flex-1 text-ink/80">
        {/* Subtle background quote icon */}
        <svg className="absolute -left-2 -top-2 h-8 w-8 -translate-x-2 -translate-y-2 text-line/50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <span className="relative z-10 leading-relaxed text-muted">{t.quote}</span>
      </blockquote>
      
      <figcaption className="mt-6 flex items-center gap-3 border-t border-line/60 pt-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-lg font-bold text-brand">
          {t.name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-ink">{t.name}</div>
          {t.detail && <div className="text-sm text-muted">{t.detail}</div>}
        </div>
      </figcaption>
    </figure>
  );
}