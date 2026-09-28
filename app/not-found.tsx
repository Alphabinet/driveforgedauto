import { Button } from "@/components/buttons/button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24">
      <h1 className="text-4xl">Page not found</h1>
      <p className="mb-6 mt-3 text-muted">That page does not exist. Try the home page or our services.</p>
      <div className="flex gap-3"><Button href="/">Home</Button><Button href="/services" variant="outlineDark">Services</Button></div>
    </div>
  );
}
