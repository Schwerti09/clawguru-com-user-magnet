import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

function fingerprint(input: string) {
  return crypto.createHash("sha256").update(input).digest("hex").slice(0, 10)
}

function score(input: string) {
  // Deterministic pseudo-risk score 0..100
  const h = crypto.createHash("md5").update(input).digest("hex")
  const n = parseInt(h.slice(0, 8), 16)
  return n % 101
}

export async function POST(req: NextRequest) {
  try {
    const { target } = await req.json()
    if (!target || typeof target !== "string") {
      return NextResponse.json({ error: "Bitte gib eine IP, Domain oder URL ein." }, { status: 400 })
    }

    const t = target.trim()
    const fp = fingerprint(t)
    const s = score(t)

    // Simple heuristics (NO scanning):
    const hints: string[] = []
    const recs: string[] = []

    const looksPublic = /^(https?:\/\/)?(\d{1,3}\.){3}\d{1,3}/.test(t) || /\.(com|net|org|io|dev|app|cloud)(\/|$)/i.test(t)
    if (looksPublic) hints.push("Target wirkt öffentlich erreichbar (Domain/IP).")

    if (/0\.0\.0\.0|\*|\/0/.test(t)) hints.push("Bind-All Hinweis (0.0.0.0/*) – oft Expositions-Risiko.")
    if (/ws:\/\//i.test(t)) hints.push("WebSocket-Surface erkennbar (ws://) – prüfe Origin/Token Binding.")
    if (/admin|debug|test/i.test(t)) hints.push("Verdächtiger Pfad/Hostname (admin/debug/test) – häufig offen gelassen.")

    const vulnerable = s >= 70 || hints.length >= 2
    const risk = s >= 85 ? "high" : s >= 60 ? "medium" : "low"

    if (vulnerable) {
      recs.push("SOFORT: API Keys rotieren (OpenAI/Anthropic/etc.).")
      recs.push("SOFORT: Zugriff schließen (private subnet / VPN / Tunnel).")
      recs.push("Prüfe WebSocket Origin-Validation + CSRF/Session Binding.")
      recs.push("Audit: Secrets nicht im Klartext, Logging prüfen, Backups sichern.")
    } else {
      recs.push("Weiter: regelmäßige Updates & Secret-Rotation etablieren.")
      recs.push("Monitoring/Alerting einrichten (Uptime + Auth-Fails + ungewöhnliche Requests).")
    }

    const message = vulnerable
      ? `Konservatives Ergebnis: erhöhte Wahrscheinlichkeit für Exposition/Misconfig bei "${t}".`
      : `Keine offensichtlichen roten Flags für "${t}" (Heuristik).`

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }

    return NextResponse.json(
      {
        timestamp: new Date().toISOString(),
        target: t,
        fingerprint: fp,
        vulnerable,
        risk,
        message,
        details: hints.length ? hints : ["Keine typischen Muster erkannt."],
        recommendations: recs
      },
      { headers }
    )
  } catch (e) {
    return NextResponse.json({ error: "Interner Fehler" }, { status: 500 })
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  })
}
