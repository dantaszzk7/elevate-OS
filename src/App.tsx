import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import LoginPage from './pages/LoginPage'
import DashboardLayout from './layouts/DashboardLayout'
import { supabase, isDemoMode } from './lib/supabase'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (isDemoMode) {
          // In demo mode, always authenticated
          setIsAuthenticated(true)
        } else {
          const { data: { session } } = await supabase.auth.getSession()
          setIsAuthenticated(!!session)
        }
      } catch (error) {
        console.error('Auth check failed:', error)
        setIsAuthenticated(false)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()

    // Listen for auth changes
    if (!isDemoMode) {
      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setIsAuthenticated(!!session)
      })

      return () => subscription?.unsubscribe()
    }
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-midnight">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-electric mx-auto mb-4"></div>
          <p className="text-text">Carregando...</p>
        </div>
      </div>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={isAuthenticated ? <DashboardLayout /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  )
}

export default App
