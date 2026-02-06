import Container from "@/components/shared/Container"
import HeroSecurityCheck from "@/components/marketing/HeroSecurityCheck"
import AffiliateComparison from "@/components/marketing/AffiliateComparison"
import TransparencyWidget from "@/components/marketing/TransparencyWidget"
import CTAButton from "@/components/marketing/CTAButton"
import FAQ from "@/components/marketing/FAQ"
import { SECURITY_STATS } from "@/lib/constants"
import { formatNumber } from "@/lib/utils"

export default function Home() {
  return (
    <>
      <section className="border-b border-gray-800 bg-gradient-to-b from-gray-950 to-black">
        <Container>
          <HeroSecurityCheck />
        </Container>
      </section>

      <section className="py-10 bg-gray-900/25 border-b border-gray-800">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-5 rounded-2xl border border-gray-800 bg-black/30">
              <div className="text-3xl font-black text-brand-cyan">{formatNumber(SECURITY_STATS.exposedInstances)}</div>
              <div className="text-sm text-gray-400">exponierte Instanzen</div>
            </div>
            <div className="p-5 rounded-2xl border border-gray-800 bg-black/30">
              <div className="text-3xl font-black text-brand-orange">{SECURITY_STATS.bypassRate}%</div>
              <div className="text-sm text-gray-400">Auth‑Bypass Risiko</div>
            </div>
            <div className="p-5 rounded-2xl border border-gray-800 bg-black/30">
              <div className="text-3xl font-black text-brand-green">24/7</div>
              <div className="text-sm text-gray-400">Guides & Updates</div>
            </div>
            <div className="p-5 rounded-2xl border border-gray-800 bg-black/30">
              <div className="text-3xl font-black text-blue-400">#1</div>
              <div className="text-sm text-gray-400">Ops‑Fokus</div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="p-8 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/60 to-black">
              <h2 className="text-3xl font-black mb-3">Was wir hier wirklich machen</h2>
              <p className="text-gray-300">
                Nicht „Hosting“. Nicht „Tutorials“. Sondern: <strong>Operations-Realität</strong>.
                Wenn OpenClaw produktiv läuft, willst du: private Netzwerke, saubere Auth, Secrets‑Hygiene,
                Monitoring, Kostenkontrolle.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
                {[
                  ["Security Lage", "CVEs, reale Misconfigs, Notfall-Protokolle"],
                  ["Tools", "Validatoren & Checklisten (kostenlos)"],
                  ["Setup", "Deploy Patterns, Hardening, Updates"],
                  ["Kosten", "Provider-Vergleich & TCO-Denke"]
                ].map(([a, b]) => (
                  <div key={a} className="p-4 rounded-xl border border-gray-800 bg-black/30">
                    <div className="font-bold">{a}</div>
                    <div className="text-gray-400">{b}</div>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <CTAButton href="/openclaw-security-2026" label="Zum Lagebericht" />
                <CTAButton href="/tools" label="Tools öffnen" variant="outline" />
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-gray-800 bg-black/30">
              <h3 className="text-2xl font-black mb-4">Sofortmaßnahmen (wenn du schon öffentlich bist)</h3>
              <ol className="space-y-3 text-gray-300 list-decimal pl-5">
                <li><strong>Keys rotieren</strong> (OpenAI/Anthropic/Telegram/etc.) – alles.</li>
                <li><strong>Zugriff schließen</strong>: private subnet, VPN/Tunnel, Firewall.</li>
                <li><strong>WebSocket Hardening</strong>: Origin‑Validation, CSRF, Session Binding.</li>
                <li><strong>Secrets Hygiene</strong>: nichts im Klartext, Audit-Logs prüfen.</li>
                <li><strong>Forensik light</strong>: Logs sichern, ungewöhnliche Requests markieren.</li>
              </ol>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="px-5 py-3 rounded-xl bg-brand-red/90 hover:bg-brand-red font-bold" href="/security/notfall-leitfaden">
                  Notfall-Leitfaden
                </a>
                <a className="px-5 py-3 rounded-xl border border-gray-700 bg-gray-900/40 hover:bg-gray-900 rounded-xl" href="/einrichtung">
                  Setup-Guide
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-950 to-blue-950/30 border-y border-gray-800">
        <Container>
          <div className="text-center max-w-4xl mx-auto p-10 rounded-2xl border border-brand-cyan/20 bg-black/25">
            <h2 className="text-3xl md:text-4xl font-black">
              Keine Lust auf Setup, Updates, Panik?
              <span className="block bg-gradient-to-r from-brand-cyan to-brand-blue bg-clip-text text-transparent">
                Managed Ops ist eine Option.
              </span>
            </h2>
            <p className="mt-4 text-gray-300 text-lg">
              Wir übernehmen Hardening, Monitoring & Wartung deines OpenClaw-Stacks.
              Du bekommst „Mission Control“ statt Bauchschmerzen.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
              <CTAButton href="https://clawsyndicate.com/checkout?plan=pro" label="Managed Ops ansehen" />
              <CTAButton href="/hosting-kosten" label="Lieber selbst hosten (Kosten/Provider)" variant="outline" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-black mb-3 text-center">Getestet & empfohlen: Hosting für OpenClaw</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
            Nicht perfekt. Aber realistisch: Diese Anbieter sind häufige Baselines für stabile Deployments.
          </p>
          <AffiliateComparison />
        </Container>
      </section>

      <section className="py-16 border-t border-gray-800">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-black mb-3">FAQ (weil du’s sowieso fragst)</h2>
              <p className="text-gray-400 mb-6">
                Kurz und schmerzlos. Kein Marketing-Nebel.
              </p>
              <FAQ />
            </div>
            <div className="p-8 rounded-2xl border border-gray-800 bg-black/30">
              <h3 className="text-2xl font-black mb-2">Der Referenzanker</h3>
              <p className="text-gray-300">
                Wenn du nur eine Seite bookmarkst, dann diese:
                der <strong>lebende Lagebericht</strong> mit Maßnahmen, Checklisten, Links & Updates.
              </p>
              <div className="mt-6">
                <CTAButton href="/openclaw-security-2026" label="OpenClaw Security 2026 lesen" />
              </div>
              <div className="mt-6 text-sm text-gray-400">
                Pro-Tipp: Diese Pillar-Page ist das, was Reddit/Discord/GitHub später verlinken.
              </div>
            </div>
          </div>
        </Container>
      </section>

      <TransparencyWidget />
    </>
  )
}
