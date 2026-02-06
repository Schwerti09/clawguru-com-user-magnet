import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://clawguru.com"
  const now = new Date()
  return [
    { url: base + "/", lastModified: now },
    { url: base + "/openclaw-security-2026", lastModified: now },
    { url: base + "/security", lastModified: now },
    { url: base + "/security/notfall-leitfaden", lastModified: now },
    { url: base + "/tools", lastModified: now },
    { url: base + "/einrichtung", lastModified: now },
    { url: base + "/hosting-kosten", lastModified: now },
    { url: base + "/impressum", lastModified: now },
    { url: base + "/datenschutz", lastModified: now },
    { url: base + "/agb", lastModified: now }
  ]
}
