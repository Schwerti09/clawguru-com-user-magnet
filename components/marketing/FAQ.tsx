'use client'
import { useState } from "react"

const ITEMS = [
  {
    q: "Speichert ClawGuru meine IP/Domain-Eingaben?",
    a: "Nein. Der Check läuft als schnelle Risiko-Heuristik ohne Persistenz. Du bekommst ein Ergebnis + Maßnahmen, fertig."
  },
  {
    q: "Ist das ein offizielles OpenClaw-Projekt?",
    a: "Nein. ClawGuru ist unabhängig. Genau das ist der Punkt: klarer Blick, keine PR."
  },
  {
    q: "Was ist das Wichtigste, wenn ich schon öffentlich deployed habe?",
    a: "Sofort: Keys rotieren, Zugang schließen (private networking), Origin/CSRF für WebSockets prüfen, Logs sichern."
  },
  {
    q: "Warum sollte ich nicht einfach DIY machen?",
    a: "Kannst du – wenn du Monitoring, Patch-Disziplin, Secrets-Management und Incident-Response wirklich sauber betreibst. Die meisten tun’s nicht."
  }
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="space-y-3">
      {ITEMS.map((it, idx) => (
        <div key={it.q} className="border border-gray-800 rounded-2xl overflow-hidden">
          <button
            className="w-full text-left px-5 py-4 bg-gray-900/40 hover:bg-gray-900/60 transition-colors flex items-center justify-between"
            onClick={() => setOpen(open === idx ? null : idx)}
          >
            <span className="font-bold">{it.q}</span>
            <span className="text-gray-400">{open === idx ? "–" : "+"}</span>
          </button>
          {open === idx && (
            <div className="px-5 py-4 text-gray-300 bg-black/20">
              {it.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
