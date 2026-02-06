import type { Metadata } from "next"
import "./globals.css"
import TrustBadge from "@/components/layout/TrustBadge"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "ClawGuru | OpenClaw Security & Ops Mission Control 2026",
  description:
    "Live-Lagezentrum für OpenClaw/Moltbot: Security-Checks, Notfall-Guides, Setup, Hosting-Kosten, Tools & Referenzdokumente.",
  keywords: [
    "openclaw",
    "moltbot",
    "security",
    "cve",
    "hosting",
    "mission control",
    "devops",
    "bot sicherheit"
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://clawguru.com",
    title: "ClawGuru | OpenClaw Security & Ops Command Center",
    description:
      "Prüfe Exposition, verstehe CVEs, härte Deployments und optimiere Kosten. Unabhängiges Lagezentrum.",
    images: ["/og-image.png"]
  },
  twitter: { card: "summary_large_image", creator: "@clawguru" }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "ClawGuru",
              url: "https://clawguru.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://clawguru.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen">
        <TrustBadge />
        <Header />
        <main className="pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
