export default function CRMPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-text">CRM - Leads</h1>
        <button className="px-4 py-2 bg-electric text-white rounded-lg text-sm font-medium hover:opacity-90">
          + Novo Lead
        </button>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {['Prospecto', 'Contatado', 'Qualificado', 'Ganho'].map((status) => (
          <div key={status} className="bg-panel border border-line rounded-lg p-4">
            <h3 className="font-semibold text-text mb-4">{status}</h3>
            <div className="space-y-3">
              {[1, 2].map((i) => (
                <div key={i} className="bg-card border border-line rounded-lg p-4 hover:border-electric transition-colors cursor-pointer">
                  <h4 className="text-text text-sm font-medium mb-2">Empresa {i}</h4>
                  <p className="text-muted text-xs mb-2">Contato: João Silva</p>
                  <p className="text-electric text-xs font-medium">R$ 2.500,00</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
