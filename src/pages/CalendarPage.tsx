export default function CalendarPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-text">Calendário</h1>
        <button className="px-4 py-2 bg-electric text-white rounded-lg text-sm font-medium hover:opacity-90">
          + Novo Evento
        </button>
      </div>

      <div className="bg-panel border border-line rounded-lg p-6">
        <div className="grid grid-cols-7 gap-2 mb-6">
          {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'].map((day) => (
            <div key={day} className="text-center font-semibold text-muted text-sm py-2">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 35 }).map((_, i) => (
            <div key={i} className="bg-card border border-line rounded-lg p-4 min-h-24 text-text text-sm">
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
