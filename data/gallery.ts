export const galleryCategories = ["Before & After", "PPF", "Ceramic Coating", "Paint Correction", "Detailing"] as const;
export type GalleryCategory = (typeof galleryCategories)[number];
export type GalleryItem = { id: string; category: GalleryCategory; alt: string; caption: string; src?: string; ratio: "4/3" | "4/5" | "1/1" };

// Updated with local paths pointing to your public/gallery folder.
export const gallery: GalleryItem[] = [
  { 
    id: "g1", 
    category: "Before & After", 
    alt: "Paint surface before and after correction", 
    caption: "Before and after paint correction", 
    ratio: "4/5",
    src: "/gallery/before-after-correction.jpg" 
  },
  { 
    id: "g2", 
    category: "Ceramic Coating", 
    alt: "Reflection on a ceramic coated panel", 
    caption: "Ceramic coated finish", 
    ratio: "4/3",
    src: "/gallery/ceramic-reflection.jpg" 
  },
  { 
    id: "g3", 
    category: "PPF", 
    alt: "Paint protection film being installed on a car", 
    caption: "PPF installation", 
    ratio: "4/3",
    src: "/gallery/ppf-install.jpg" 
  },
  { 
    id: "g4", 
    category: "Paint Correction", 
    alt: "Polishing a panel during paint correction", 
    caption: "Paint correction in progress", 
    ratio: "1/1",
    src: "/gallery/paint-correction.jpg" 
  },
  { 
    id: "g5", 
    category: "Detailing", 
    alt: "Car during exterior detailing", 
    caption: "Detailing", 
    ratio: "4/5",
    src: "/gallery/exterior-detailing.jpg" 
  },
  { 
    id: "g6", 
    category: "PPF", 
    alt: "PPF applied on a car front end", 
    caption: "PPF on front end", 
    ratio: "4/3",
    src: "/gallery/ppf-front.jpg" 
  },
  { 
    id: "g7", 
    category: "Ceramic Coating", 
    alt: "Water beading on a coated bonnet", 
    caption: "Water beading after coating", 
    ratio: "1/1",
    src: "/gallery/water-beading.jpg" 
  },
  { 
    id: "g8", 
    category: "Before & After", 
    alt: "Swirl marks removed from paint", 
    caption: "Swirl marks removed", 
    ratio: "4/3",
    src: "/gallery/swirl-removal.jpg" 
  },
];