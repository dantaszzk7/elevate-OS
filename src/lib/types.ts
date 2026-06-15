// User & Auth
export interface User {
  id: string
  email: string
  name: string
  avatar_url?: string
  role: 'admin' | 'manager' | 'user'
  created_at: string
}

// CRM - Leads
export interface Lead {
  id: string
  name: string
  email: string
  phone: string
  company?: string
  niche: string
  status: 'prospect' | 'contacted' | 'qualified' | 'proposal_sent' | 'negotiation' | 'won' | 'lost'
  value?: number
  notes?: string
  created_at: string
  updated_at: string
  user_id: string
}

// Copies
export interface Copy {
  id: string
  title: string
  content: string
  niche: string
  type: 'initial' | 'followup' | 'proposal' | 'closing' | 'payment' | 'delivery' | 'aftersales'
  tags: string[]
  created_at: string
  updated_at: string
}

// Niches
export interface Niche {
  id: string
  name: string
  description?: string
  icon?: string
  created_at: string
}

// Services
export interface Service {
  id: string
  name: string
  description?: string
  price: number
  niche_id: string
  created_at: string
}

// Proposals
export interface Proposal {
  id: string
  lead_id: string
  title: string
  description?: string
  total_value: number
  status: 'draft' | 'sent' | 'approved' | 'rejected'
  valid_until?: string
  created_at: string
  updated_at: string
}

// Projects
export interface Project {
  id: string
  lead_id: string
  proposal_id?: string
  name: string
  description?: string
  status: 'planning' | 'in_progress' | 'completed' | 'on_hold' | 'cancelled'
  progress: number
  start_date?: string
  end_date?: string
  team_members: string[]
  created_at: string
  updated_at: string
}

export interface ProjectTask {
  id: string
  project_id: string
  title: string
  description?: string
  status: 'todo' | 'in_progress' | 'done'
  assigned_to?: string
  due_date?: string
  created_at: string
}

// Calendar Events
export interface CalendarEvent {
  id: string
  title: string
  description?: string
  type: 'meeting' | 'delivery' | 'follow_up' | 'financial' | 'other'
  start_date: string
  end_date?: string
  related_to?: string
  created_at: string
}

// Tasks
export interface Task {
  id: string
  title: string
  description?: string
  status: 'todo' | 'in_progress' | 'done'
  priority: 'low' | 'medium' | 'high'
  assigned_to: string
  due_date?: string
  created_at: string
  updated_at: string
}

// Financial
export interface FinancialRecord {
  id: string
  type: 'income' | 'expense'
  description: string
  amount: number
  category: string
  related_to?: string
  payment_method?: string
  status: 'pending' | 'paid' | 'overdue'
  due_date?: string
  paid_date?: string
  created_at: string
}

// Media Library
export interface MediaItem {
  id: string
  name: string
  url: string
  type: 'image' | 'video' | 'document'
  category?: string
  uploaded_at: string
}

// Dashboard Metrics
export interface DashboardMetrics {
  total_revenue: number
  pipeline_value: number
  active_projects: number
  pending_tasks: number
  conversion_rate: number
  leads_count: number
  proposals_count: number
}
