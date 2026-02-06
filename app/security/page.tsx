import Container from "@/components/shared/Container"

export default function Security() {
  return (
    <Container>
      <div className="py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-4">Security-Zentrale</h1>
        <p className="text-gray-300 text-lg mb-10">
          CVEs, reale Misconfigs, Maßnahmen. Keine Panik – nur Handlung.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <a className="p-6 rounded-2xl border border-gray-800 bg-black/30 hover:bg-black/40" href="/security/notfall-leitfaden">
            <div className="text-brand-red font-black">Notfall-Leitfaden</div>
            <div className="text-gray-400">Wenn du glaubst, du bist exponiert: Schritte, Reihenfolge, Prioritäten.</div>
          </a>
          <a className="p-6 rounded-2xl border border-gray-800 bg-black/30 hover:bg-black/40" href="/openclaw-security-2026#cves">
            <div className="text-brand-cyan font-black">CVE-Übersicht</div>
            <div className="text-gray-400">Was wirklich zählt + wie du es mitigierst.</div>
          </a>
          <a className="p-6 rounded-2xl border border-gray-800 bg-black/30 hover:bg-black/40" href="/tools">
            <div className="text-brand-orange font-black">Tools</div>
            <div className="text-gray-400">Config Validator, Checklisten, schnelle Risiko-Heuristiken.</div>
          </a>
          <a className="p-6 rounded-2xl border border-gray-800 bg-black/30 hover:bg-black/40" href="/einrichtung">
            <div className="text-green-400 font-black">Setup & Hardening</div>
            <div className="text-gray-400">Deploy Patterns, private networking, Secrets, Updates.</div>
          </a>
        </div>
      </div>
    </Container>
  )
}
