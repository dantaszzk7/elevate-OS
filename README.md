# Elevate OS

Painel interno para a agencia digital Elevate controlar leads, clientes, copies, nichos, servicos, propostas, projetos, calendario, tarefas, financeiro, biblioteca, relatorios e configuracoes.

## Stack

- React + TypeScript + Vite
- Tailwind CSS
- React Router
- Supabase Auth e schema SQL para banco
- Recharts para graficos
- Persistencia demo em `localStorage` para testar sem backend

## Funcionalidades do MVP

- Login via Supabase quando `.env` esta configurado; modo demo local quando nao esta.
- Dashboard calculado automaticamente com receita, pipeline, projetos, tarefas e conversao.
- CRM kanban com cadastro, filtro, exclusao e mudanca de status.
- Detalhes do lead com edicao e geracao de proposta por servicos selecionados.
- Copies, nichos e servicos com cadastros.
- Propostas com status e acao para transformar proposta aprovada em projeto.
- Projetos com progresso, detalhes e checklist operacional.
- Calendario de entregas, reunioes, follow-ups e financeiro.
- Kanban de tarefas com mudanca de status.
- Financeiro com registro de pagamentos, baixa e calculos.
- Biblioteca de imagens/mockups/templates.
- Relatorios e configuracoes para restaurar dados demo.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereco exibido pelo Vite, normalmente `http://localhost:5173`.

## Supabase

1. Crie um projeto no Supabase.
2. No SQL Editor, rode `supabase/schema.sql`.
3. Copie `.env.example` para `.env`.
4. Preencha:

```bash
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-publica
```

5. Crie um usuario em Authentication > Users.
6. Rode `npm run dev` e entre com email/senha do usuario criado.

Observacao: o app ja esta preparado para Auth Supabase e traz o schema do banco. A camada demo usa `localStorage` para permitir validacao imediata do MVP sem depender de credenciais. Para evoluir, conecte as operacoes do store aos endpoints Supabase mantendo os mesmos tipos em `src/lib/types.ts`.

## Scripts

```bash
npm run dev      # servidor local
npm run build    # typecheck + build de producao
npm run preview  # preview do build
```
