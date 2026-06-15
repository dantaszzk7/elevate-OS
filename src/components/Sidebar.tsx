import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  FileText,
  Briefcase,
  Calendar,
  CheckSquare,
  DollarSign,
  Image,
  Settings,
  LogOut,
} from 'lucide-react'
import { supabase, isDemoMode } from '../lib/supabase'

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Users, label: 'CRM', path: '/crm' },
  { icon: FileText, label: 'Propostas', path: '/proposals' },
  { icon: Briefcase, label: 'Projetos', path: '/projects' },
  { icon: Calendar, label: 'Calendário', path: '/calendar' },
  { icon: CheckSquare, label: 'Tarefas', path: '/tasks' },
  { icon: DollarSign, label: 'Financeiro', path: '/financial' },
  { icon: Image, label: 'Biblioteca', path: '/library' },
  { icon: Settings, label: 'Configurações', path: '/settings' },
]

export default function Sidebar() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = async () => {
    if (!isDemoMode) {
      await supabase.auth.signOut()
    }
    navigate('/login')
  }

  return (
    <aside className="w-64 bg-panel border-r border-line flex flex-col h-screen">
      {/* Logo */}
      <div className="p-6 border-b border-line">
        <h1 className="text-2xl font-bold text-electric">Elevate</h1>
        <p className="text-xs text-muted">Control Panel</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                isActive
                  ? 'bg-electric/20 text-electric border-l-2 border-electric'
                  : 'text-text hover:bg-card'
              }`}
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-line">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-danger hover:bg-red-600 text-white rounded-lg text-sm font-medium transition-colors"
        >
          <LogOut size={18} />
          Sair
        </button>
      </div>
    </aside>
  )
}
