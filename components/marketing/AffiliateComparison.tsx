import { HOSTING_PROVIDERS } from "@/lib/constants"

export default function AffiliateComparison() {
  return (
    <div className="overflow-x-auto border border-gray-800 rounded-2xl">
      <table className="min-w-[800px] w-full text-sm">
        <thead className="bg-gray-900/60">
          <tr>
            <th className="text-left p-4">Anbieter</th>
            <th className="text-left p-4">Preis</th>
            <th className="text-left p-4">Specs</th>
            <th className="text-left p-4">Best for</th>
            <th className="text-left p-4">Deal</th>
          </tr>
        </thead>
        <tbody>
          {HOSTING_PROVIDERS.map((p) => (
            <tr key={p.name} className="border-t border-gray-800">
              <td className="p-4">
                <div className="font-bold">{p.name}</div>
                <div className="text-xs text-gray-400 inline-flex items-center gap-2">
                  <span className="px-2 py-1 rounded-full border border-gray-700 bg-black/30">{p.badge}</span>
                  <span>{p.commission}</span>
                </div>
              </td>
              <td className="p-4">{p.price}</td>
              <td className="p-4 text-gray-300">{p.specs}</td>
              <td className="p-4 text-gray-300">{p.bestFor}</td>
              <td className="p-4">
                <a className="px-3 py-2 rounded-lg bg-brand-cyan/15 border border-brand-cyan/30 hover:bg-brand-cyan/25" href={p.url} rel="nofollow">
                  Zum Anbieter
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
