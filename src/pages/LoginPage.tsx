import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase, isDemoMode } from '../lib/supabase'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (isDemoMode) {
        navigate('/')
        return
      }

      const { error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (authError) {
        setError(authError.message)
        return
      }

      navigate('/')
    } catch (err) {
      setError('Erro ao fazer login. Tente novamente.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-midnight flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-panel rounded-lg border border-line p-8 shadow-glow">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-electric mb-2">Elevate</h1>
            <p className="text-muted text-sm">Acesse o painel da Elevate</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="p-3 bg-danger/10 border border-danger rounded-lg text-danger text-sm">
                {error}
              </div>
            )}

            {isDemoMode && (
              <div className="p-3 bg-violet/10 border border-violet rounded-lg text-violet text-sm">
                <strong>Modo Demo:</strong> Clique em "Entrar" para acessar com dados em localStorage
              </div>
            )}

            {!isDemoMode && (
              <>
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    className="w-full bg-card border border-line rounded-lg px-4 py-2 text-text placeholder-muted focus:outline-none focus:border-electric"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">Senha</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-card border border-line rounded-lg px-4 py-2 text-text placeholder-muted focus:outline-none focus:border-electric"
                    required
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              disabled={loading || (!isDemoMode && (!email || !password))}
              className="w-full bg-electric hover:opacity-90 disabled:opacity-50 text-white font-medium py-2 rounded-lg transition-opacity mt-6"
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-muted">
            <p>© 2024 Elevate. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
