export const BRAND = {
  name: "ClawGuru",
  domain: "clawguru.com",
  twitter: "@clawguru"
}

export const SECURITY_STATS = {
  exposedInstances: 21639,
  bypassRate: 93.4,
  lastUpdated: "Feb 2026"
}

export const AFFILIATE_LINKS = {
  HETZNER: "https://hetzner.cloud/?ref=clawguru_pro",
  DIGITALOCEAN: "https://m.do.co/c/clawguru_vip",
  AWS: "https://aws.amazon.com/campaigns/startups/?ref=clawguru_aws",
  CLOUDFLARE: "https://cloudflare.com?ref=clawguru_cdn",
  ONEPASSWORD: "https://1password.com?ref=clawguru_pass",
  TAILSCALE: "https://tailscale.com?ref=clawguru_vpn",
  CLAWSYNDICATE: "https://clawsyndicate.com?ref=clawguru_main"
}

export const HOSTING_PROVIDERS = [
  {
    name: "Hetzner Cloud",
    badge: "BESTSELLER",
    price: "€4.51/Monat",
    specs: "2 vCPU · 4 GB RAM · 40 GB SSD",
    bestFor: "EU‑Daten & Preis/Leistung",
    commission: "Bis zu €100 pro Kunde",
    url: AFFILIATE_LINKS.HETZNER
  },
  {
    name: "DigitalOcean",
    badge: "EINFACH",
    price: "€6.00/Monat",
    specs: "1 vCPU · 1 GB RAM · 25 GB SSD",
    bestFor: "Einsteiger & Docs",
    commission: "$25 pro Qualified Signup",
    url: AFFILIATE_LINKS.DIGITALOCEAN
  },
  {
    name: "AWS Lightsail",
    badge: "ENTERPRISE",
    price: "€3.50/Monat",
    specs: "512 MB RAM · 20 GB SSD",
    bestFor: "AWS‑Teams",
    commission: "Bis zu $1000 Credits",
    url: AFFILIATE_LINKS.AWS
  }
]

export const LEGAL_INFO = {
  company: "Wissens-Bank",
  owner: "Rolf Schwertfechter",
  address: "Karklandsweg 1",
  city: "26553 Dornum",
  email: "rps-vertrieb@t-online.de",
  taxNote: "Steuerangaben auf Anfrage"
}
