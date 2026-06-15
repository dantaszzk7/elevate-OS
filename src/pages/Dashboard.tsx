import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const chartData = [
  { name: 'Jan', sales: 4000, revenue: 2400 },
  { name: 'Fev', sales: 3000, revenue: 1398 },
  { name: 'Mar', sales: 2000, revenue: 9800 },
  { name: 'Abr', sales: 2780, revenue: 3908 },
  { name: 'Mai', sales: 1890, revenue: 4800 },
]

const statusData = [
  { name: 'Prospecto', value: 45 },
  { name: 'Proposta', value: 30 },
  { name: 'Ganho', value: 25 },
]

const COLORS = ['#2d5bff', '#f7c948', '#4edea3']

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-text mb-6">Dashboard</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-panel border border-line rounded-lg p-6">
          <p className="text-muted text-sm mb-2">Receita Total</p>
          <h3 className="text-3xl font-bold text-electric">R$ 24.500</h3>
          <p className="text-xs text-mint mt-2">+12% este mês</p>
        </div>
        <div className="bg-panel border border-line rounded-lg p-6">
          <p className="text-muted text-sm mb-2">Leads</p>
          <h3 className="text-3xl font-bold text-violet">128</h3>
          <p className="text-xs text-mint mt-2">+8 hoje</p>
        </div>
        <div className="bg-panel border border-line rounded-lg p-6">
          <p className="text-muted text-sm mb-2">Projetos</p>
          <h3 className="text-3xl font-bold text-amber">12</h3>
          <p className="text-xs text-danger mt-2">3 vencendo</p>
        </div>
        <div className="bg-panel border border-line rounded-lg p-6">
          <p className="text-muted text-sm mb-2">Taxa de Conversão</p>
          <h3 className="text-3xl font-bold text-mint">24%</h3>
          <p className="text-xs text-mint mt-2">+2% vs mês passado</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Sales Chart */}
        <div className="bg-panel border border-line rounded-lg p-6">
          <h2 className="text-lg font-semibold text-text mb-4">Vendas por Mês</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#26364a" />
              <XAxis stroke="#9eacc2" />
              <YAxis stroke="#9eacc2" />
              <Tooltip contentStyle={{ backgroundColor: '#0b1c30', border: '1px solid #26364a' }} />
              <Legend />
              <Bar dataKey="sales" fill="#2d5bff" name="Vendas" />
              <Bar dataKey="revenue" fill="#4edea3" name="Receita" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Status Chart */}
        <div className="bg-panel border border-line rounded-lg p-6">
          <h2 className="text-lg font-semibold text-text mb-4">Leads por Status</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={statusData} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name}: ${value}`} outerRadius={80} fill="#8884d8" dataKey="value">
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-panel border border-line rounded-lg p-6">
        <h2 className="text-lg font-semibold text-text mb-4">Atividades Recentes</h2>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-card rounded-lg">
              <div>
                <p className="text-text text-sm">Novo lead cadastrado</p>
                <p className="text-muted text-xs">Há 2 horas</p>
              </div>
              <span className="bg-electric/20 text-electric text-xs px-2 py-1 rounded">Lead</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
