import { Button } from "@/components/buttons/button";
import { Photo } from "@/components/ui/photo";
import { formatINR, startingPrice, type Service } from "@/data/services";
import { site } from "@/data/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_12px_30px_-15px_rgba(0,0,0,0.15)]">
      
      <div className="relative overflow-hidden">
        <Photo 
          src={service.image} 
          alt={`${service.short} at ${site.name}`} 
          label={service.short} 
          className="aspect-[16/10] w-full transition-transform duration-700 ease-out group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-semibold tracking-tight">{service.short}</h3>
        
        <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-2">
          {service.description}
        </p>
        
        <div className="mb-6 mt-5 flex items-start gap-2 rounded-lg bg-surface/50 p-3 text-sm">
          <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <p className="font-medium text-ink/90">{service.benefit}</p>
        </div>

        <div className="mt-auto flex items-end justify-between gap-4 border-t border-line/60 pt-5">
          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-muted">Starting at</span>
            <span className="font-display text-3xl font-bold text-brand">
              {formatINR(startingPrice(service))}
            </span>
          </div>
          
          <Button href={`/services/${service.slug}`} className="shrink-0 px-4" variant="outlineDark">
            View Service
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-brand transition-transform duration-500 ease-out group-hover:scale-x-100" />
    </article>
  );
}