import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
          borderRadius: "36px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: "28px",
            background: "rgba(99, 102, 241, 0.2)",
            border: "2px solid rgba(99, 102, 241, 0.5)",
            fontSize: 64,
            fontWeight: 700,
            color: "#818cf8",
          }}
        >
          FM
        </div>
      </div>
    ),
    { ...size }
  )
}
