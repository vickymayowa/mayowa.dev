import type { Metadata } from "next"
import { absoluteUrl, siteConfig } from "./site"

type PageMetadataOptions = {
  title: string
  description: string
  path: string
  keywords?: string[]
  ogImage?: string
  ogType?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  noIndex?: boolean
}

const defaultOgImage = "/opengraph-image"

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = defaultOgImage,
  ogType = "website",
  publishedTime,
  modifiedTime,
  authors,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path)
  const imageUrl = ogImage.startsWith("http") ? ogImage : absoluteUrl(ogImage)

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${title} | ${siteConfig.shortTitle}`,
      description,
      url: canonical,
      siteName: `${siteConfig.shortTitle} | Portfolio`,
      locale: siteConfig.locale,
      type: ogType,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && { authors }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.shortTitle}`,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  }
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.shortTitle}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  applicationName: siteConfig.shortTitle,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
    apple: [{ url: "/apple-icon", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: `${siteConfig.shortTitle} | Portfolio`,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: absoluteUrl(defaultOgImage),
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl(defaultOgImage)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}
