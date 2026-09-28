import { links } from "@/data/site";
import { Button } from "./button";

export function ContactButtons({ dark = true, text = false }: { dark?: boolean; text?: boolean }) {
  const secondary = dark ? "outline" : "outlineDark";
  return (
    <div className="flex flex-wrap gap-3">
      <Button href={links.call}>Call</Button>
      <Button href={links.whatsapp} variant={secondary} external>WhatsApp</Button>
      {text && <Button href={links.text} variant={secondary}>Text</Button>}
      <Button href={links.directions} variant={secondary} external>Directions</Button>
    </div>
  );
}
