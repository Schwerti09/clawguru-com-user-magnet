'use client'

import { useMemo, useState } from "react"

type CheckResult = {
  vulnerable: boolean
  risk: "low" | "medium" | "high"
  message: string
  details: string[]
  recommendations: string[]
  target: string
  fingerprint: string
  timestamp: string
}

function badge(risk: CheckResult["risk"]) {
  if (risk === "high") return "bg-brand-red/20 border-brand-red text-brand-red"
  if (risk === "medium") return "bg-brand-orange/20 border-brand-orange text-brand-orange"
  return "bg-brand-green/20 border-brand-green text-brand-green"
}

export default function HeroSecurityCheck() {
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<CheckResult | null>(null)

  const placeholder = useMemo(() => {
    const examples = ["123.123.123.123", "meinbot.example.com", "https://bot.example.com"]
    return examples[Math.floor(Math.random() * examples.length)]
  }, [])

  async function run() {
    if (!input.trim()) return
    setLoading(true)
    setResult(null)
    try {
      const res = await fetch("/api/security-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ target: input.trim() })
      })
      const data = await res.json()
      setResult(data)
    } catch (e) {
      setResult({
        vulnerable: false,
        risk: "medium",
        message: "Prüfung fehlgeschlagen. Bitte erneut versuchen.",
        details: [],
        recommendations: ["Später nochmal probieren."],
        target: input.trim(),
        fingerprint: "n/a",
        timestamp: new Date().toISOString()
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-28 pb-16">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="animate-fadeUp">
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-gray-800 bg-gray-900/30 text-xs text-gray-300">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulseSoft" />
            Security Alarm · OpenClaw/Moltbot
          </div>

          <h1 className="mt-4 text-5xl md:text-6xl font-black leading-tight">
            <span className="text-gray-200">Prüfe deine Instanz</span>{" "}
            <span className="bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent">
              in 30 Sekunden
            </span>
          </h1>

          <p className="mt-5 text-lg text-gray-300 max-w-xl">
            Kostenlose Risiko-Heuristik: Exposition, typische Misconfigs, WebSocket-Angriffsflächen.
            Keine Speicherung. Ergebnis + Maßnahmen sofort.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-300">
            <span className="px-3 py-2 rounded-xl border border-gray-800 bg-black/30">Privat: keine Logs deiner Eingabe</span>
            <span className="px-3 py-2 rounded-xl border border-gray-800 bg-black/30">12+ typische Fehlkonfigs</span>
            <span className="px-3 py-2 rounded-xl border border-gray-800 bg-black/30">Sofortmaßnahmen</span>
          </div>
        </div>

        <div className="border border-gray-800 rounded-2xl bg-gradient-to-br from-gray-900/70 to-gray-950 p-6 md:p-7 shadow-glow">
          <label className="text-sm font-bold text-gray-200">Deine IP, Domain oder Bot-URL</label>
          <div className="mt-3 flex flex-col sm:flex-row gap-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && run()}
              placeholder={placeholder}
              className="flex-1 px-4 py-3 rounded-xl bg-black/30 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 focus:border-brand-cyan"
            />
            <button
              onClick={run}
              disabled={loading || !input.trim()}
              className="px-5 py-3 rounded-xl font-black bg-gradient-to-r from-brand-orange to-brand-red hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Prüfe…" : "Kostenlos prüfen"}
            </button>
          </div>

          <div className="mt-4 text-xs text-gray-400">
            Hinweis: Das ist eine konservative Heuristik (keine aktive Exploitation). Für echte Audits braucht’s Tiefe.
          </div>

          {result && (
            <div className={"mt-6 p-5 rounded-2xl border " + badge(result.risk)}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs opacity-90">Target: {result.target}</div>
                  <div className="mt-1 text-xl font-black">
                    {result.vulnerable ? "⚠️ Risiko erkannt" : "✅ Keine roten Flags"}
                  </div>
                  <div className="mt-2 text-sm text-gray-200">{result.message}</div>
                </div>
                <div className="text-right text-xs opacity-80">
                  <div>Fingerprint</div>
                  <div className="font-mono">{result.fingerprint}</div>
                </div>
              </div>

              {result.details?.length > 0 && (
                <div className="mt-4">
                  <div className="font-bold text-sm mb-2">Details</div>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    {result.details.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                </div>
              )}

              {result.recommendations?.length > 0 && (
                <div className="mt-4">
                  <div className="font-bold text-sm mb-2">Sofortmaßnahmen</div>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    {result.recommendations.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a className="px-4 py-2 rounded-xl bg-black/30 border border-gray-700 hover:bg-black/40" href="/security/notfall-leitfaden">
                      Notfall-Leitfaden
                    </a>
                    <a className="px-4 py-2 rounded-xl bg-black/30 border border-gray-700 hover:bg-black/40" href="/einrichtung">
                      Setup-Guide
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
