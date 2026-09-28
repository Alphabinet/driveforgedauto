import { Button } from "@/components/buttons/button";

import { links, site } from "@/data/site";

export function MapSection() {
  const address = `${site.address.street}, ${site.address.locality}`;

  return (
    <div className="overflow-hidden rounded border border-line">
      <iframe
        title={`Map showing ${site.name}`}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2228554469834!2d77.43162867624731!3d28.563069975702707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef00036fddf9%3A0xea3041a5dfcc0ff5!2sDRIVE%20FORGED%20AUTO!5e0!3m2!1sen!2sin!4v1790593437652!5m2!1sen!2sin"
        width="600"
        height="450"
        className="h-72 w-full border-0"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />

      <div className="bg-white p-5">
        <h3 className="text-xl">{site.name}</h3>

        <p className="mt-1">
          {address}
          <br />
          {site.address.landmark}
        </p>

        <Button
          href={links.directions}
          external
          className="mt-4"
        >
          Get Directions
        </Button>
      </div>
    </div>
  );
}