import Container from "@/components/shared/Container"

export default function Setup() {
  return (
    <Container>
      <div className="py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-4">Einrichtung & Hardening</h1>
        <p className="text-gray-300 text-lg mb-10">
          Der Unterschied zwischen „läuft“ und „läuft sicher“ ist eine Checkliste – plus Disziplin.
        </p>

        <div className="space-y-6">
          {[
            ["1) Private Networking", "Deploy in privatem Subnetz, Zugriff nur via VPN/Tunnel (Tailscale/WireGuard)."],
            ["2) Auth & Origin", "Token‑Binding, Origin‑Validation für WebSockets, keine Wildcards."],
            ["3) Secrets", "ENV/Secret Manager statt Klartext. Rotation & Audit Logs."],
            ["4) Monitoring", "Uptime, Auth-Fails, ungewöhnliche Requests, Rate-Limits."],
            ["5) Updates", "Release-Disziplin, Rollback-Plan, Backups & Restore-Tests."]
          ].map(([t, d]) => (
            <div key={t} className="p-6 rounded-2xl border border-gray-800 bg-black/30">
              <div className="font-black text-xl mb-2">{t}</div>
              <div className="text-gray-300">{d}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-7 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/60 to-black">
          <div className="font-black text-2xl">Schnellstart</div>
          <p className="mt-2 text-gray-300">
            Nutze zuerst Tools/Validatoren, dann gehe in den Lagebericht, dann optimiere Kosten.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a className="px-5 py-3 rounded-xl bg-brand-cyan/15 border border-brand-cyan/30 hover:bg-brand-cyan/25 font-bold" href="/tools">
              Tools
            </a>
            <a className="px-5 py-3 rounded-xl bg-brand-orange/20 border border-brand-orange/30 hover:bg-brand-orange/30 font-bold" href="/openclaw-security-2026">
              Lagebericht
            </a>
          </div>
        </div>
      </div>
    </Container>
  )
}
