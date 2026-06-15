export default function ProposalsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-text">Propostas</h1>
        <button className="px-4 py-2 bg-electric text-white rounded-lg text-sm font-medium hover:opacity-90">
          + Nova Proposta
        </button>
      </div>

      <div className="bg-panel border border-line rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-line bg-card">
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted">Cliente</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted">Valor</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted">Status</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted">Data</th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-muted">Ações</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((i) => (
              <tr key={i} className="border-b border-line hover:bg-card/50 transition-colors">
                <td className="px-6 py-4 text-text text-sm">Cliente {i}</td>
                <td className="px-6 py-4 text-text text-sm">R$ 2.500,00</td>
                <td className="px-6 py-4">
                  <span className="bg-yellow-500/20 text-amber text-xs px-2 py-1 rounded">Enviada</span>
                </td>
                <td className="px-6 py-4 text-muted text-sm">15/06/2024</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-electric hover:text-electric/80 text-xs font-medium">Ver</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
