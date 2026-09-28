// Temporary text wordmark. Swap this component's body for an <Image> when a real logo exists.
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display text-2xl font-bold tracking-tight ${className}`}>
      Drive<span className="text-brand-light">Forged</span>Auto
    </span>
  );
}
