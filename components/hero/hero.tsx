import { Button } from "@/components/buttons/button";
import { Photo } from "@/components/ui/photo"; // Added import for the Photo component

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* Background Ambient Glow (Studio Lighting Effect) */}
      <div className="pointer-events-none absolute left-0 top-0 h-[800px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr] md:py-24">
        <div className="relative z-10 rise">
          {/* Trust Badge */}
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold tracking-wide text-primary">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            Greater Noida's Premium Detailing Studio
          </span>

          <h1 className="text-4xl font-medium leading-[1.1] md:text-6xl">
            Flawless gloss. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">Ultimate protection.</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
            Give your vehicle the mirror finish it deserves with our globally recognized PPF, ceramic coating, and precision paint correction treatments.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" className="px-8 shadow-[0_0_20px_rgba(var(--primary),0.3)]">
              Book Free Inspection
            </Button>
            <Button href="/services" variant="outline" className="border-white/20 hover:bg-white/10">
              Explore Services
            </Button>
          </div>

          {/* Service Tags */}
          <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-white/10 pt-8 text-sm text-white/60">
            <span className="font-semibold text-white/90">Specializing in:</span>
            {["Self-Healing PPF", "9H Ceramic Coating", "Paint Correction"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 border border-white/5 transition-colors hover:bg-white/10 hover:text-white">
                <svg className="h-3 w-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 block pb-6 md:pb-0">
          {/* Replaced SVG with Photo component for a high-end photographic feel */}
          <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl md:aspect-square">
            {/* Colored overlay to blend image with the dark theme */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent opacity-60 z-10 transition-opacity duration-500 group-hover:opacity-40" />

            {/* Uses the actual Photo component. Just drop a real image into public/images/hero-detailing.jpg */}
            <Photo
              src="/images/hero1.jpg"
              alt="Car receiving premium ceramic coating and paint protection"
              label="Premium Detailing"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              priority={true}
              sizes="(min-width: 768px) 50vw, 100vw"
            />

            {/* Decorative studio light reflection overlay */}
            <div className="absolute -inset-full top-0 z-20 block h-full w-[150%] -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 ease-out group-hover:left-[120%]" />
          </div>
        </div>
      </div>
    </section>
  );
}