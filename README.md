# Elevate OS

Painel interno para a agência digital Elevate controlar leads, clientes, copies, nichos, serviços, propostas, projetos, calendário, tarefas, financeiro, biblioteca, relatórios e configurações.

## Stack

- React + TypeScript + Vite
- Tailwind CSS
- React Router
- Supabase Auth e schema SQL para banco
- Recharts para gráficos
- Lucide React para ícones
- Persistência demo em `localStorage` para testar sem backend

## Funcionalidades do MVP

✅ **Login via Supabase** quando `.env` está configurado; modo demo local quando não está.  
✅ **Dashboard** calculado automaticamente com receita, pipeline, projetos, tarefas e conversão.  
✅ **CRM Kanban** com cadastro, filtro, exclusão e mudança de status.  
✅ **Propostas** com status e ação para transformar proposta aprovada em projeto.  
✅ **Projetos** com progresso, detalhes e checklist operacional.  
✅ **Tarefas** com kanban de status (À Fazer, Em Progresso, Concluído).  
✅ **Calendário** de entregas, reuniões, follow-ups e financeiro.  
✅ **Financeiro** com registro de pagamentos, baixa e cálculos.  
✅ **Biblioteca** de imagens/mockups/templates.  
✅ **Configurações** para restaurar dados demo.  

## Como Rodar Localmente

### 1. Instalação
```bash
git clone https://github.com/seu-usuario/elevate-os.git
cd elevate-os
npm install
```

### 2. Modo Demo (sem Supabase)
```bash
npm run dev
```

Acesse `http://localhost:5173` e clique em "Entrar". Os dados serão armazenados em `localStorage`.

### 3. Configurar Supabase (com banco de dados real)

**Passo 1: Criar projeto no Supabase**
- Acesse [supabase.com](https://supabase.com)
- Crie um novo projeto
- Copie a URL e chave anon pública

**Passo 2: Configurar banco de dados**
- Abra o SQL Editor do Supabase
- Cole o conteúdo de `supabase/schema.sql`
- Clique em "Execute"

**Passo 3: Variáveis de ambiente**
```bash
cp .env.example .env
```

Edite `.env` e preencha:
```bash
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-publica
```

**Passo 4: Criar usuário de teste**
- No Supabase, vá em Authentication > Users
- Clique em "Create New User"
- Defina email e senha

**Passo 5: Rodar localmente**
```bash
npm run dev
```

## Build para Produção

```bash
npm run build
```

Isso gera a pasta `dist/` pronta para deploy.

## Deploy na Vercel

### Opção 1: Via GitHub

1. **Fazer push para GitHub**
```bash
git push origin main
```

2. **Conectar no Vercel**
- Acesse [vercel.com](https://vercel.com)
- Clique em "New Project"
- Selecione seu repositório GitHub
- Clique em "Import"

3. **Configurar variáveis de ambiente**
- Em "Environment Variables", adicione:
  - `VITE_SUPABASE_URL`: Sua URL do Supabase
  - `VITE_SUPABASE_ANON_KEY`: Sua chave anon do Supabase

4. **Deploy automático**
- Clique em "Deploy"
- Pronto! A aplicação está online

### Opção 2: Via CLI

```bash
npm i -g vercel
vercel login
vercel
```

Siga as instruções e configure as variáveis de ambiente.

## Estrutura de Pastas

```
src/
├── main.tsx              # Entry point
├── App.tsx               # Componente raiz com autenticação
├── index.css             # Estilos globais
├── layouts/
│   └── DashboardLayout.tsx   # Layout principal
├── components/
│   ├── Sidebar.tsx       # Menu lateral
│   └── Header.tsx        # Barra superior
├── pages/
│   ├── LoginPage.tsx     # Tela de login
│   ├── Dashboard.tsx     # Dashboard com gráficos
│   ├── CRMPage.tsx       # Leads em Kanban
│   ├── ProposalsPage.tsx # Propostas em tabela
│   ├── ProjectsPage.tsx  # Projetos em cards
│   ├── CalendarPage.tsx  # Calendário
│   ├── TasksPage.tsx     # Tarefas em kanban
│   ├── FinancialPage.tsx # Financeiro
│   ├── LibraryPage.tsx   # Biblioteca de mídia
│   └── SettingsPage.tsx  # Configurações
└── lib/
    ├── supabase.ts       # Cliente Supabase
    ├── api.ts            # Camada de API
    ├── types.ts          # Types TypeScript
    ├── storage.ts        # LocalStorage (demo)
    └── constants.ts      # Constantes
```

## Scripts

```bash
npm run dev      # Servidor local (http://localhost:5173)
npm run build    # Build de produção
npm run preview  # Preview do build
npm run lint     # Verificar erros de código
```

## Modo Demo vs. Produção

### Modo Demo (sem Supabase)
- Dados armazenados em `localStorage`
- Sem login necessário
- Perfeito para testes e prototipagem
- Dados são perdidos ao limpar cache do navegador

### Modo Produção (com Supabase)
- Dados armazenados no banco de dados
- Login via email e senha
- Cada usuário vê apenas seus dados
- Segurança com Row Level Security (RLS)

## Funcionalidades Implementadas

### CRM
- ✅ Criar, editar, deletar leads
- ✅ Filtrar por nicho e status
- ✅ Kanban visual com status
- ✅ Valores de proposta
- ✅ Observações e histórico

### Propostas
- ✅ Criar propostas vinculadas a leads
- ✅ Status: Rascunho, Enviada, Aprovada, Rejeitada
- ✅ Data de validade
- ✅ Valores e descrição

### Tarefas
- ✅ Criar tarefas com prioridade
- ✅ Kanban: À Fazer, Em Progresso, Concluído
- ✅ Datas de vencimento
- ✅ Atribuição de responsável

### Dashboard
- ✅ KPIs de receita, leads, projetos
- ✅ Gráficos de vendas e status
- ✅ Atividades recentes
- ✅ Cálculos automáticos

## Segurança

- ✅ Row Level Security (RLS) no Supabase
- ✅ Autenticação via email e senha
- ✅ Cada usuário vê apenas seus dados
- ✅ Endpoints CORS configurados
- ✅ Variáveis sensíveis em `.env`

## Próximas Melhorias

- [ ] Autenticação social (Google, GitHub)
- [ ] Uploads de imagem
- [ ] Integração com WhatsApp
- [ ] Notificações em tempo real
- [ ] Exportação de relatórios (PDF, Excel)
- [ ] Integração com IA para gerar copies
- [ ] App mobile (React Native)
- [ ] Webhooks para automação

## Troubleshooting

### "Erro ao conectar com Supabase"
- Verifique se as variáveis em `.env` estão corretas
- Confira se o projeto no Supabase está ativo
- Teste em modo demo removendo as variáveis de ambiente

### "Dados não são salvos"
- Verifique se as políticas RLS estão corretas
- Confirme se o usuário está autenticado
- Verifique o console do navegador para erros

### "Erro 401 - Unauthorized"
- Crie um novo usuário no Supabase
- Faça logout e login novamente
- Limpe o cache do navegador

## Licença

MIT - Livre para usar e modificar.

## Suporte

Para dúvidas, abra uma issue no GitHub.

---

Desenvolvido com ❤️ pela Elevate
