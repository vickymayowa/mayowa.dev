import { ImageResponse } from "next/og"
import { siteConfig } from "@/lib/seo/site"

export const alt = siteConfig.title
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #09090b 0%, #18181b 50%, #1e1b4b 100%)",
          color: "#fafafa",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
            fontSize: 24,
            color: "#818cf8",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: "24px",
            maxWidth: "900px",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#a1a1aa",
            lineHeight: 1.4,
            maxWidth: "800px",
          }}
        >
          Core Software Engineer & Full-Stack Developer
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "48px",
            fontSize: 20,
            color: "#71717a",
          }}
        >
          TypeScript · React · Next.js · Node.js
        </div>
      </div>
    ),
    { ...size }
  )
}
