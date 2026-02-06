import Container from "@/components/shared/Container"

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-800 py-10">
      <Container>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-400">
          <div>
            <div className="font-bold text-gray-200 mb-2">ClawGuru</div>
            <p>
              Unabhängiges Lage- & Ops-Zentrum für OpenClaw/Moltbot. Fokus: Sicherheit,
              Betrieb, Kostenkontrolle.
            </p>
          </div>
          <div>
            <div className="font-bold text-gray-200 mb-2">Navigation</div>
            <ul className="space-y-1">
              <li><a href="/openclaw-security-2026">Lagebericht</a></li>
              <li><a href="/security">Security</a></li>
              <li><a href="/tools">Tools</a></li>
              <li><a href="/einrichtung">Setup</a></li>
              <li><a href="/hosting-kosten">Kosten</a></li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-gray-200 mb-2">Rechtliches</div>
            <ul className="space-y-1">
              <li><a href="/impressum">Impressum</a></li>
              <li><a href="/datenschutz">Datenschutz</a></li>
              <li><a href="/agb">AGB</a></li>
            </ul>
            <div className="mt-4 text-xs text-gray-500">
              Affiliate-Hinweis: Einige Links können Provisionen enthalten. Transparenz bleibt Pflicht.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
