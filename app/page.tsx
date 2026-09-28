import { Hero } from "@/components/hero/hero";
import { Button } from "@/components/buttons/button";
import { ContactButtons } from "@/components/buttons/contact-buttons";
import { SectionHeader } from "@/components/section-header/section-header";
import { ServiceCard } from "@/components/service-card/service-card";
import { TestimonialSlider } from "@/components/testimonial-card/testimonial-slider";
import { Photo } from "@/components/ui/photo";

import { services } from "@/data/services";
import { gallery } from "@/data/gallery";
import { testimonials } from "@/data/testimonials";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: `${site.name} | ${site.tagline}`,
  description:
    "PPF, ceramic coating and paint correction in Bisrakh, Greater Noida. Clear prices and careful workmanship.",
  path: "/",
  keywords: [
    "car detailing Greater Noida",
    "PPF Greater Noida",
    "ceramic coating Greater Noida",
    "paint correction Greater Noida",
  ],
});

const why = [
  {
    number: "01",
    title: "Quality Materials",
    description:
      "Films and coatings selected for durability, finish and long-term protection, with warranty terms clearly explained.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M12 3 4.5 6.5v5.7c0 4.5 3.2 7.2 7.5 8.8 4.3-1.6 7.5-4.3 7.5-8.8V6.5L12 3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Skilled Craftsmanship",
    description:
      "Hands-on detailing with careful attention to edges, corners, panel alignment and the final finish.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="m14.5 6.5 3-3 3 3-3 3" />
        <path d="m16 5-7.5 7.5" />
        <path d="M5 19h14" />
        <path d="M7 15.5 4 18.5l1.5 1.5L8.5 17" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Precision Application",
    description:
      "Controlled preparation and application processes help create an even, clean and consistent result.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 4V2" />
        <path d="M12 22v-2" />
        <path d="M4 12H2" />
        <path d="M22 12h-2" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Customer Focused",
    description:
      "Clear pricing, straightforward communication and honest recommendations before any work begins.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M20 21a8 8 0 0 0-16 0" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Vehicle Protection",
    description:
      "Protection designed to help defend your paint from everyday road wear, UV exposure, scratches and stone chips.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M12 3 4 7v5c0 4.8 3.4 7.7 8 9 4.6-1.3 8-4.2 8-9V7l-8-4Z" />
        <path d="M8.5 12.5 11 15l4.5-5" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Professional Finish",
    description:
      "Every vehicle receives a final inspection so the finish is clean, consistent and ready for handover.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
        <path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" />
      </svg>
    ),
  },
];

export default function Home() {
  const featured = gallery.slice(0, 4);

  return (
    <main>
      <Hero />

      <section className="bg-surface py-24 shadow-inner">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeader
            title="Our services"
            intro="Premium paint protection (PPF), high-gloss ceramic coatings, and precision correction—priced clearly with no hidden surprises."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* WHY CHOOSE US - Connected Path Layout */}
      <section className="relative overflow-hidden bg-background py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5">
          <SectionHeader
            title={`Why choose ${site.name}?`}
            intro="More than just detailing. We combine quality materials, precision workmanship and a process built around protecting your vehicle properly."
          />

          <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {why.map((item, index) => (
              <div
                key={item.title}
                className="group relative flex flex-col items-center text-center px-2"
              >
                {/* Horizontal Connecting Path Line */}
                <div 
                  className={`absolute left-1/2 top-7 -z-10 h-[2px] w-full bg-border/60 transition-colors group-hover:bg-primary/40
                    ${index === why.length - 1 ? 'hidden' : ''} 
                    ${(index + 1) % 3 === 0 ? 'lg:hidden' : 'hidden lg:block'} 
                    ${(index + 1) % 2 === 0 ? 'sm:hidden' : 'hidden sm:block lg:hidden'}
                  `} 
                />

                {/* Icon Node */}
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-surface text-primary ring-8 ring-background transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white shadow-sm border border-line">
                  {item.icon}
                  
                  {/* Step Number Badge */}
                  <span className="absolute -bottom-2 rounded-full bg-ink px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
                    {item.number}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted max-w-[260px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-white">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <h2 className="flex items-center gap-3 text-3xl font-medium md:text-4xl">
                Featured work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="m9 11-6 6v3h9l3-3" />
                  <path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" />
                </svg>
              </h2>
              <p className="mt-3 text-white/70">
                See the real results: deep gloss, invisible PPF edges, and
                pristine reflections.
              </p>
            </div>

            <Button
              href="/gallery"
              variant="outline"
              className="shrink-0 border-white/20 text-white hover:bg-white hover:text-ink"
            >
              View Full Gallery
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((g) => (
              <Photo
                key={g.id}
                src={g.src}
                alt={g.alt}
                label={g.category}
                className="group aspect-[4/3] overflow-hidden rounded-lg bg-black ring-1 ring-white/10 transition-all hover:ring-primary/50"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            ))}
          </div>
        </div>
      </section>

      {testimonials.length > 0 && (
        <section className="mx-auto w-full max-w-6xl px-5 py-24">
          <SectionHeader
            title="What our customers say"
            intro="Don't just take our word for it. Here is what car owners in Greater Noida have experienced after visiting our studio."
          />

          <div className="mt-12 w-full">
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </section>
      )}

      <section className="relative overflow-hidden bg-ink py-24 text-center text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-ink to-ink" />

        <div className="relative mx-auto max-w-3xl px-5">
          <h2 className="text-3xl font-medium md:text-5xl">
            Give your car the finish it deserves.
          </h2>
          <p className="mx-auto mb-10 mt-6 max-w-xl text-lg text-white/70">
            Visit our Greater Noida detailing studio for a free paint
            inspection, or reach out online to get a transparent quote for
            your vehicle.
          </p>

          <div className="flex justify-center">
            <ContactButtons />
          </div>
        </div>
      </section>
    </main>
  );
}