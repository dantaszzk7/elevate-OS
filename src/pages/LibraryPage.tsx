export default function LibraryPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-text">Biblioteca</h1>
        <button className="px-4 py-2 bg-electric text-white rounded-lg text-sm font-medium hover:opacity-90">
          + Fazer Upload
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="bg-panel border border-line rounded-lg overflow-hidden hover:border-electric transition-colors cursor-pointer">
            <div className="bg-gradient-to-br from-electric/20 to-violet/20 h-32 flex items-center justify-center">
              <div className="text-4xl text-electric/50">📸</div>
            </div>
            <div className="p-4">
              <h3 className="text-text text-sm font-medium mb-1">Arquivo {i}</h3>
              <p className="text-muted text-xs">Imagem • 2.3MB</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
