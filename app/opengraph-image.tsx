import { ImageResponse } from "next/og";

export const alt = "Jhorman Nieto: desarrollo web, marketing y creatividad en Panamá";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: 72, background: "#111315", color: "#f6f5f0", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", color: "#d9fa6c", fontSize: 28, fontWeight: 700 }}>JHORMAN NIETO · PANAMÁ</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ display: "flex", fontSize: 86, fontWeight: 800, lineHeight: 1 }}>Ideas digitales.</div>
        <div style={{ display: "flex", fontSize: 86, fontWeight: 800, lineHeight: 1, color: "#d9fa6c" }}>Experiencias reales.</div>
      </div>
      <div style={{ display: "flex", fontSize: 30 }}>Desarrollo web · Marketing digital · Creatividad</div>
    </div>,
    size,
  );
}
