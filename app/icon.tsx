import { ImageResponse } from "next/og"

export const size = { width: 512, height: 512 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #09090b 0%, #18181b 100%)",
          borderRadius: "96px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 320,
            height: 320,
            borderRadius: "72px",
            background: "rgba(99, 102, 241, 0.15)",
            border: "4px solid rgba(99, 102, 241, 0.4)",
            fontSize: 180,
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
