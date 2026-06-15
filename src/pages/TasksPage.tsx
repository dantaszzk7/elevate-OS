export default function TasksPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-text">Tarefas</h1>
        <button className="px-4 py-2 bg-electric text-white rounded-lg text-sm font-medium hover:opacity-90">
          + Nova Tarefa
        </button>
      </div>

      <div className="space-y-4">
        {['Hoje', 'Esta Semana', 'Atrasadas'].map((section) => (
          <div key={section}>
            <h2 className="text-lg font-semibold text-text mb-3">{section}</h2>
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-panel border border-line rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4" />
                    <div>
                      <p className="text-text text-sm font-medium">Tarefa {i}</p>
                      <p className="text-muted text-xs">Projeto {i}</p>
                    </div>
                  </div>
                  <span className="bg-red-500/20 text-red-400 text-xs px-2 py-1 rounded">Alta</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
