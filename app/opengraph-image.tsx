import { ImageResponse } from "next/og";

export const alt = "DriveForgedAuto, Premium Car Detailing in Greater Noida";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Placeholder social card. Replace with app/opengraph-image.png (1200x630) when a brand asset exists.
export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#0f0f10", color: "#fff", borderLeft: "24px solid #a3121b" }}>
        <div style={{ fontSize: 96, fontWeight: 700 }}>DriveForgedAuto</div>
        <div style={{ fontSize: 40, marginTop: 16, color: "#d5d5d3" }}>Premium Car Detailing in Greater Noida</div>
        <div style={{ fontSize: 30, marginTop: 40, color: "#ff6b73" }}>PPF · Ceramic Coating · Paint Correction</div>
      </div>
    ),
    size,
  );
}
