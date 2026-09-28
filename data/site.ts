export const site = {
  name: "DriveForgedAuto",
  parent: "DriveForgedAuto",
  tagline: "Premium Car Detailing in Greater Noida",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://driveforgedauto.com",
  phones: ["9758000220", "9758000221"],
  address: {
    street: "Plot No. 475, Sector 1, Bisrakh",
    locality: "Greater Noida",
    landmark: "Near Indian Oil Petrol Pump",
  },
} as const;

const fullAddress = `${site.address.street}, ${site.address.locality}`;

export const links = {
  call: `tel:${site.phones[0]}`,
  whatsapp: `https://wa.me/91${site.phones[0]}`,
  text: `sms:+91${site.phones[1]}`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`,
  whatsappWith: (msg: string) => `https://wa.me/91${site.phones[0]}?text=${encodeURIComponent(msg)}`,
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;