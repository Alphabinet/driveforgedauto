import { formatINR, type Option } from "@/data/services";

export function PricingCard({ option }: { option: Option }) {
  // Calculate discount percentage if an original price exists and is higher
  const hasDiscount = option.originalPrice && option.originalPrice > option.price;
  const discountPercent = hasDiscount
    ? Math.round(((option.originalPrice! - option.price) / option.originalPrice!) * 100)
    : 0;

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_8px_20px_-10px_rgba(0,0,0,0.1)]">
      
      {/* Top Section: Label & Warranty */}
      <div>
        <div className="flex items-start justify-between gap-4">
          <h4 className="text-lg font-semibold text-ink">{option.label}</h4>
          
          {/* Highlighted Savings Badge */}
          {hasDiscount && (
            <span className="shrink-0 rounded bg-red-50 px-2 py-1 text-xs font-bold uppercase tracking-wider text-red-600 ring-1 ring-inset ring-red-600/20">
              Save {discountPercent}%
            </span>
          )}
        </div>
        
        {/* Trust Signal: Warranty Shield */}
        {option.warranty && (
          <div className="mt-3 flex items-center gap-1.5 text-sm font-medium text-muted">
            <svg className="h-4 w-4 text-brand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            {option.warranty}
          </div>
        )}
      </div>

      {/* Bottom Section: Pricing */}
      <div className="mt-6 flex flex-wrap items-baseline gap-x-3">
        <span className="font-display text-3xl font-bold text-brand">
          {formatINR(option.price)}
        </span>
        
        {hasDiscount && (
          <span className="text-sm font-medium text-muted/70 line-through">
            <span className="sr-only">Original price </span>
            {formatINR(option.originalPrice!)}
          </span>
        )}
      </div>

      {/* Automotive accent line that slides in on hover */}
      <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-brand transition-transform duration-500 ease-out group-hover:scale-x-100" />
    </div>
  );
}