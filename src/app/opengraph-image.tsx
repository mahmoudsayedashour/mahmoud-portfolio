import { ImageResponse } from "next/og";

export const alt = "Mahmoud Sayed Ashour — Data Analyst & Business Intelligence Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg,#050914 0%,#0a1a3a 60%,#06303b 100%)",
          color: "#e8eefc",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 26, color: "#22d3ee", letterSpacing: 4, textTransform: "uppercase" }}>
          Portfolio
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 20 }}>Mahmoud Sayed Ashour</div>
        <div style={{ fontSize: 40, marginTop: 16, color: "#9aa8c7" }}>
          Data Analyst &amp; Business Intelligence Developer
        </div>
        <div style={{ fontSize: 28, marginTop: 40, color: "#60a5fa" }}>
          Python · SQL · Power BI · Analytics Automation
        </div>
      </div>
    ),
    size,
  );
}
