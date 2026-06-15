export default function FinancialPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-text">Financeiro</h1>
        <button className="px-4 py-2 bg-electric text-white rounded-lg text-sm font-medium hover:opacity-90">
          + Novo Registro
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-panel border border-line rounded-lg p-6">
          <p className="text-muted text-sm mb-2">Receita do Mês</p>
          <h3 className="text-3xl font-bold text-mint">R$ 15.000</h3>
        </div>
        <div className="bg-panel border border-line rounded-lg p-6">
          <p className="text-muted text-sm mb-2">Pendente</p>
          <h3 className="text-3xl font-bold text-amber">R$ 5.000</h3>
        </div>
        <div className="bg-panel border border-line rounded-lg p-6">
          <p className="text-muted text-sm mb-2">Atrasado</p>
          <h3 className="text-3xl font-bold text-danger">R$ 2.000</h3>
        </div>
      </div>

      {/* Table */}
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
                <td className="px-6 py-4 text-text text-sm font-medium">R$ {(i * 1000).toLocaleString('pt-BR')},00</td>
                <td className="px-6 py-4">
                  <span className={`text-xs px-2 py-1 rounded ${i % 2 === 0 ? 'bg-green-500/20 text-mint' : 'bg-red-500/20 text-danger'}`}>
                    {i % 2 === 0 ? 'Pago' : 'Pendente'}
                  </span>
                </td>
                <td className="px-6 py-4 text-muted text-sm">15/06/2024</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-electric hover:text-electric/80 text-xs font-medium">Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
