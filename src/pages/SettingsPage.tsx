export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-text mb-6">Configurações</h1>

      <div className="max-w-2xl space-y-6">
        {/* Section */}
        <div className="bg-panel border border-line rounded-lg p-6">
          <h2 className="text-lg font-semibold text-text mb-4">Informações da Agência</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text mb-2">Nome da Agência</label>
              <input
                type="text"
                placeholder="Elevate"
                className="w-full bg-card border border-line rounded-lg px-4 py-2 text-text placeholder-muted focus:outline-none focus:border-electric"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text mb-2">WhatsApp</label>
              <input
                type="text"
                placeholder="(11) 99999-9999"
                className="w-full bg-card border border-line rounded-lg px-4 py-2 text-text placeholder-muted focus:outline-none focus:border-electric"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text mb-2">Email</label>
              <input
                type="email"
                placeholder="contato@elevate.com"
                className="w-full bg-card border border-line rounded-lg px-4 py-2 text-text placeholder-muted focus:outline-none focus:border-electric"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <button className="px-6 py-2 bg-electric text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
          Salvar Alterações
        </button>
      </div>
    </div>
  )
}
