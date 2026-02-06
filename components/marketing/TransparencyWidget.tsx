import Container from "@/components/shared/Container"

export default function TransparencyWidget() {
  return (
    <section className="py-14 border-t border-gray-800 bg-gray-950">
      <Container>
        <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/70 to-gray-950 p-8">
          <h2 className="text-2xl font-black mb-2">Transparenz: Wie wir Geld verdienen</h2>
          <p className="text-gray-300 max-w-3xl">
            ClawGuru ist kostenlos. Einige Empfehlungen sind Affiliate-Links. Das ändert nichts an unseren
            Kriterien: wir listen nur Anbieter/Tools, die in realen OpenClaw-Deployments Sinn ergeben.
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="p-4 rounded-xl border border-gray-800 bg-black/30">
              <div className="font-bold text-gray-100">1) Affiliate-Erlöse</div>
              <div className="text-gray-400">Hosting, Security-Tools, Infrastruktur</div>
            </div>
            <div className="p-4 rounded-xl border border-gray-800 bg-black/30">
              <div className="font-bold text-gray-100">2) Managed Ops</div>
              <div className="text-gray-400">Wenn du willst, übernehmen wir Setup & Hardening</div>
            </div>
            <div className="p-4 rounded-xl border border-gray-800 bg-black/30">
              <div className="font-bold text-gray-100">3) Research/Reports</div>
              <div className="text-gray-400">Verdichtete Lageberichte als Download</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
