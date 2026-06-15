import { Routes, Route } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Dashboard from '../pages/Dashboard'
import CRMPage from '../pages/CRMPage'
import ProposalsPage from '../pages/ProposalsPage'
import ProjectsPage from '../pages/ProjectsPage'
import CalendarPage from '../pages/CalendarPage'
import TasksPage from '../pages/TasksPage'
import FinancialPage from '../pages/FinancialPage'
import LibraryPage from '../pages/LibraryPage'
import SettingsPage from '../pages/SettingsPage'

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-midnight">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/crm" element={<CRMPage />} />
              <Route path="/proposals" element={<ProposalsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/financial" element={<FinancialPage />} />
              <Route path="/library" element={<LibraryPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  )
}
