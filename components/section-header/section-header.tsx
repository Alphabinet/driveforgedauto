export function SectionHeader({ title, intro, as: Tag = "h2" }: { title: string; intro?: string; as?: "h1" | "h2" }) {
  return (
    <div className="mb-8 max-w-2xl">
      <Tag className={Tag === "h1" ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}>{title}</Tag>
      {intro && <p className="mt-3 text-muted">{intro}</p>}
    </div>
  );
}
