import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
      <JsonLd data={breadcrumbSchema(all)} />
      <ol className="flex flex-wrap gap-2">
        {all.map((c, i) => (
          <li key={c.path} className="flex gap-2">
            {i < all.length - 1 ? <Link className="underline" href={c.path}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}
            {i < all.length - 1 && <span aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
