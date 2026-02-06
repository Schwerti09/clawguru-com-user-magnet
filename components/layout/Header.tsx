import Container from "@/components/shared/Container"

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    className="px-3 py-2 rounded-lg hover:bg-gray-900/60 transition-colors"
  >
    {label}
  </a>
)

export default function Header() {
  return (
    <div className="fixed top-10 left-0 right-0 z-40">
      <Container>
        <div className="flex items-center justify-between border border-gray-800 bg-gray-950/70 backdrop-blur rounded-2xl px-4 py-3 shadow-glow">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-blue" />
            <div className="leading-tight">
              <div className="font-black">ClawGuru</div>
              <div className="text-xs text-gray-400">Mission Control · Security · Ops</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1 text-sm">
            <NavLink href="/openclaw-security-2026" label="Lagebericht" />
            <NavLink href="/security" label="Security" />
            <NavLink href="/tools" label="Tools" />
            <NavLink href="/einrichtung" label="Setup" />
            <NavLink href="/hosting-kosten" label="Kosten" />
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/security/notfall-leitfaden"
              className="px-3 py-2 rounded-lg bg-brand-red/90 hover:bg-brand-red font-bold text-sm"
            >
              Notfall
            </a>
            <a
              href="/tools"
              className="px-3 py-2 rounded-lg bg-brand-cyan/15 hover:bg-brand-cyan/25 border border-brand-cyan/30 text-sm"
            >
              Jetzt prüfen
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}
