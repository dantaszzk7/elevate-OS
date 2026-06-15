import { Bell, Search, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-panel border-b border-line px-6 py-4 flex items-center justify-between">
      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" size={18} />
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full bg-card border border-line rounded-lg pl-10 pr-4 py-2 text-sm text-text placeholder-muted focus:outline-none focus:border-electric"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4 ml-8">
        {/* Notifications */}
        <button className="relative p-2 hover:bg-card rounded-lg transition-colors">
          <Bell size={20} className="text-text" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full"></span>
        </button>

        {/* User Profile */}
        <button className="flex items-center gap-2 p-2 hover:bg-card rounded-lg transition-colors">
          <div className="w-8 h-8 bg-electric rounded-full flex items-center justify-center">
            <User size={16} className="text-white" />
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-xs font-medium text-text">Usuário</p>
            <p className="text-xs text-muted">Admin</p>
          </div>
        </button>
      </div>
    </header>
  )
}
