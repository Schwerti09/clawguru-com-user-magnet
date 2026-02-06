import Container from "@/components/shared/Container"

export default function Emergency() {
  return (
    <Container>
      <div className="py-16 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-brand-red/30 bg-brand-red/10 text-brand-red text-xs font-bold">
          🔥 Notfall-Protokoll
        </div>
        <h1 className="mt-4 text-4xl md:text-5xl font-black">Wenn du exponiert bist: jetzt so</h1>
        <p className="mt-4 text-gray-300 text-lg">
          Ziel: Schaden stoppen, Zugang schließen, Schlüssel rotieren, Spuren sichern.
        </p>

        <div className="mt-10 space-y-6">
          {[
            ["0–5 Minuten", ["Instanz offline oder Firewall dicht (nur VPN).", "Admin-Ports schließen.", "Webhooks pausieren."]],
            ["5–20 Minuten", ["Alle API Keys rotieren (OpenAI/Anthropic/Messaging).", "Tokens/Passwörter ändern.", "Sessions invalidieren."]],
            ["20–60 Minuten", ["Logs sichern (Ingress, Gateway, Auth-Fails).", "Verdächtige Requests markieren.", "Skill-Repo auf Secrets scannen."]],
            ["Heute", ["Hardening umsetzen (private subnet, origin validation).", "Monitoring/Alerting hinzufügen.", "Backups prüfen + Restore-Test."]]
          ].map(([t, items]) => (
            <div key={t as string} className="p-6 rounded-2xl border border-gray-800 bg-black/30">
              <div className="font-black text-xl mb-3">{t}</div>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                {(items as string[]).map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/60 to-black">
          <div className="font-black text-2xl">Nächster Schritt: Hardening</div>
          <p className="mt-2 text-gray-300">
            Wenn du willst, dass das nicht wieder passiert: folge dem Setup-Guide oder nutze Tools.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a className="px-5 py-3 rounded-xl bg-brand-cyan/15 border border-brand-cyan/30 hover:bg-brand-cyan/25 font-bold" href="/einrichtung">
              Setup-Guide
            </a>
            <a className="px-5 py-3 rounded-xl bg-brand-orange/20 border border-brand-orange/30 hover:bg-brand-orange/30 font-bold" href="/tools">
              Tools
            </a>
          </div>
        </div>
      </div>
    </Container>
  )
}
