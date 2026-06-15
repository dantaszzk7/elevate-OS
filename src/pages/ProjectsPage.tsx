export default function ProjectsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-text">Projetos</h1>
        <button className="px-4 py-2 bg-electric text-white rounded-lg text-sm font-medium hover:opacity-90">
          + Novo Projeto
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-panel border border-line rounded-lg p-6">
            <h3 className="text-text font-semibold mb-2">Projeto {i}</h3>
            <p className="text-muted text-sm mb-4">Cliente {i}</p>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-muted">Progresso</span>
                <span className="text-xs text-electric font-medium">{i * 10}%</span>
              </div>
              <div className="w-full bg-card rounded-full h-2">
                <div className="bg-electric h-2 rounded-full" style={{ width: `${i * 10}%` }}></div>
              </div>
            </div>
            <span className="inline-block bg-electric/20 text-electric text-xs px-2 py-1 rounded">Em Progresso</span>
          </div>
        ))}
      </div>
    </div>
  )
}
