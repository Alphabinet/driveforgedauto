export type Option = { 
  label: string; 
  warranty?: string; 
  price: number; 
  originalPrice?: number; 
};

export type Service = {
  slug: 
    | "ppf" 
    | "ceramic-coating" 
    | "teflon-coating"
    | "underbody-coating"
    | "paint-correction"
    | "interior-detailing"
    | "insurance-services"
    | "car-service-wash"
    | "dpf-cleaning"
    | "denting-painting"
    | "headlight-restoration"
    | "brake-pad-replacement";
  title: string;
  short: string;
  description: string;
  benefit: string;
  features: string[];
  options: Option[];
  bookAs: string;
  image?: string;
};

export const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export const services: Service[] = [
  {
    slug: "ppf",
    title: "Paint Protection Film (PPF)",
    short: "Paint Protection Film",
    description: "A clear film applied over your paint to guard against stone chips, scratches, and UV damage.",
    benefit: "Ultimate scratch resistance & self-healing",
    features: ["Self-Healing Technology", "High Scratch Resistance", "Stone Chip Protection", "UV Resistance"],
    options: [
      { label: "Camio PPF", warranty: "5 Years Warranty", price: 42999, originalPrice: 63000 },
      { label: "Garware PPF", warranty: "5 Years Warranty", price: 52999, originalPrice: 63000 },
    ],
    bookAs: "Paint Protection Film",
    image: "/services-img/ppf.jpg",
  },
  {
    slug: "ceramic-coating",
    title: "Ceramic Coating",
    short: "Ceramic Coating",
    description: "A hard, glossy liquid polymer layer that chemically bonds to the paint for long-term protection.",
    benefit: "Deep gloss & chemical resistance",
    features: ["Deep Gloss Finish", "Hydrophobic Effect", "UV & Chemical Resistance", "Long-Term Protection"],
    options: [
      { label: "1 Year Warranty", price: 7500 },
      { label: "3 Years Warranty", price: 9500 },
      { label: "5 Years Warranty", price: 11500 },
    ],
    bookAs: "Ceramic Coating",
    image: "/services-img/creamic.jpg",
  },
  {
    slug: "teflon-coating",
    title: "Teflon Coating",
    short: "Teflon Coating",
    description: "A protective synthetic wax layer that prevents dust accumulation and protects minor clear-coat scratches.",
    benefit: "Smooth finish & easy maintenance",
    features: ["Smooth Finish", "Water Repellency", "Dust Repellency", "Easy Maintenance"],
    options: [
      { label: "Standard Teflon Coating", price: 2500 },
      { label: "Premium Teflon Coating", price: 3500 },
    ],
    bookAs: "Teflon Coating",
    image: "/services-img/teflon.jpg",
  },
  {
    slug: "underbody-coating",
    title: "Underbody Coating",
    short: "Underbody Protection",
    description: "A thick, rubberized coating sprayed beneath the car to protect against rust, moisture, and road salts.",
    benefit: "Rust prevention & sound deadening",
    features: ["Rust & Corrosion Protection", "Sound Deadening", "Salt & Water Resistance", "Extended Chassis Life"],
    options: [
      { label: "Standard Anti-Rust", warranty: "2 Years", price: 2000 },
      { label: "Premium Rubberized", warranty: "5 Years", price: 3500 },
    ],
    bookAs: "Underbody Coating",
    image: "/services-img/underbody.jpg",
  },
  {
    slug: "paint-correction",
    title: "Rubbing, Polishing & Paint Correction",
    short: "Rubbing & Polishing",
    description: "Removes swirl marks, heavy oxidation, and faded spots to restore your car's original showroom shine.",
    benefit: "Restores original shine",
    features: ["Swirl Mark Removal", "Oxidation Removal", "Fading Correction", "Even Paint Finish"],
    options: [
      { label: "Rubbing / Polishing", price: 2000 },
      { label: "Advanced Paint Correction", price: 4000 },
    ],
    bookAs: "Rubbing & Polishing",
    image: "/services-img/rubbing.jpg",
  },
  {
    slug: "interior-detailing",
    title: "Car Interior Deep Detailing",
    short: "Interior Detailing",
    description: "Complete interior transformation including deep cleaning, vacuuming, and surface conditioning.",
    benefit: "Odor-free, spotless cabin",
    features: ["Deep Fabric/Leather Cleaning", "Stain & Odor Removal", "Dashboard Care", "AC Vent Sanitization"],
    options: [
      { label: "Basic Interior Dry Cleaning", price: 1500 },
      { label: "Premium Deep Detailing", price: 2500 },
    ],
    bookAs: "Interior Detailing",
    image: "/services-img/cleaning.jpg",
  },
  {
    slug: "denting-painting",
    title: "Denting & Painting",
    short: "Denting & Painting",
    description: "Professional dent removal and exact color-match painting to restore your car's body panels.",
    benefit: "Flawless OEM color matching",
    features: ["Precision Dent Removal", "Color Matching Technology", "Premium Clear Coat", "Panel-by-Panel Pricing"],
    options: [
      { label: "Per Panel Painting (Starting)", price: 2500 },
      { label: "Full Body Painting", price: 30000 },
    ],
    bookAs: "Denting & Painting",
    image: "/services-img/dent.jpg",
  },
  {
    slug: "car-service-wash",
    title: "Car Services & Washing",
    short: "Service & Wash",
    description: "Routine maintenance and premium foam washing to keep your vehicle running smooth and looking pristine.",
    benefit: "Thorough cleaning & fluid checks",
    features: ["Snow Foam Wash", "Undercarriage Wash", "Fluid Level Checks", "General Maintenance"],
    options: [
      { label: "Premium Foam Wash", price: 500 },
      { label: "General Periodic Service", price: 3500 },
    ],
    bookAs: "Car Services & Washing",
    image: "/services-img/washing.jpg",
  },
  {
    slug: "dpf-cleaning",
    title: "DPF & Carbon Cleaning",
    short: "DPF / Carbon Cleaning",
    description: "Advanced engine decarbonization and Diesel Particulate Filter cleaning to restore performance and mileage.",
    benefit: "Improves mileage & performance",
    features: ["Unclogs DPF", "Removes Engine Carbon", "Reduces Emissions", "Restores Pick-up"],
    options: [
      { label: "Carbon Cleaning", price: 2500 },
      { label: "DPF Cleaning", price: 4000 },
    ],
    bookAs: "DPF Cleaning",
    image: "/services-img/dpf.jpg",
  },
  {
    slug: "headlight-restoration",
    title: "Headlight Restoration",
    short: "Headlight Restoration",
    description: "Removes yellowing, fogginess, and oxidation from headlight housings for better nighttime visibility.",
    benefit: "Restores crystal clear visibility",
    features: ["Oxidation Removal", "Wet Sanding & Polishing", "UV Sealant Protection", "Improved Safety"],
    options: [
      { label: "Headlight Restoration (Pair)", price: 800 },
    ],
    bookAs: "Headlight Restoration",
    image: "/services-img/headlight.jpg",
  },
  {
    slug: "brake-pad-replacement",
    title: "Brake Pad Replacement",
    short: "Brake Pad Replacement",
    description: "Professional replacement of worn brake pads to ensure your vehicle stops safely and smoothly.",
    benefit: "Eliminates squeaks & ensures safety",
    features: ["OEM Quality Pads", "Caliper Greasing", "Rotor Inspection", "Brake Bleeding (if needed)"],
    options: [
      { label: "Front Brake Pads (Starting)", price: 1200 },
      { label: "Rear Brake Pads (Starting)", price: 1000 },
    ],
    bookAs: "Brake Pad Replacement",
    image: "/services-img/brake.jpg",
  },
  {
    slug: "insurance-services",
    title: "Insurance Claims & Renewals",
    short: "Insurance Services",
    description: "Hassle-free, cashless insurance claims for accidental damage, plus timely policy renewals.",
    benefit: "Zero-headache cashless facility",
    features: ["Cashless Claims", "Accidental Repairs", "Timely Renewals", "Paperwork Assistance"],
    options: [
      { label: "Claim Processing Fee", price: 0 }, 
      { label: "Policy Renewal", price: 0 },
    ],
    bookAs: "Insurance Services",
    image: "/services-img/insurance.jpg",
  },
];

export const startingPrice = (s: Service) => Math.min(...s.options.map((o) => o.price));

export const serviceOptions = [
  "Paint Protection Film", 
  "Ceramic Coating", 
  "Teflon Coating",
  "Underbody Coating",
  "Rubbing & Polishing",
  "Interior Detailing", 
  "Denting & Painting",
  "Car Services & Washing",
  "DPF Cleaning",
  "Headlight Restoration",
  "Brake Pad Replacement",
  "Insurance Services",
  "General Detailing", 
  "Other"
] as const;