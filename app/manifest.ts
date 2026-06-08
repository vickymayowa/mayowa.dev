import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.shortTitle} — Portfolio`,
    short_name: siteConfig.shortTitle,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: siteConfig.themeColor.light,
    theme_color: siteConfig.themeColor.dark,
    lang: "en",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
