import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string; children: ReactNode; variant?: "primary" | "outline" | "outlineDark";
  external?: boolean; className?: string; onClick?: () => void;
};

const base = "inline-flex min-h-12 items-center justify-center rounded border-2 px-6 font-semibold transition-colors";
const variants = {
  primary: "bg-brand border-brand text-white hover:bg-brand-dark hover:border-brand-dark",
  outline: "border-white/70 text-white hover:bg-white/10",
  outlineDark: "border-ink text-ink hover:bg-ink hover:text-white",
};

export function Button({ href, children, variant = "primary", external, className = "", onClick }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href.startsWith("/")) return <Link href={href} className={cls} onClick={onClick}>{children}</Link>;
  return (
    <a href={href} className={cls} onClick={onClick} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
    </a>
  );
}
