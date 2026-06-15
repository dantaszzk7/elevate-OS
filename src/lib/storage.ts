import { Lead, Copy, Niche, Service, Proposal, Project, Task, FinancialRecord, CalendarEvent } from './types'

const STORAGE_KEYS = {
  leads: 'elevate_leads',
  copies: 'elevate_copies',
  niches: 'elevate_niches',
  services: 'elevate_services',
  proposals: 'elevate_proposals',
  projects: 'elevate_projects',
  tasks: 'elevate_tasks',
  financial: 'elevate_financial',
  calendar: 'elevate_calendar',
}

function getFromStorage<T>(key: string, defaultValue: T[] = []): T[] {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch {
    return defaultValue
  }
}

function saveToStorage<T>(key: string, data: T[]): void {
  localStorage.setItem(key, JSON.stringify(data))
}

export const leadsStorage = {
  getAll: () => getFromStorage<Lead>(STORAGE_KEYS.leads),
  add: (lead: Lead) => {
    const leads = getFromStorage<Lead>(STORAGE_KEYS.leads)
    leads.push(lead)
    saveToStorage(STORAGE_KEYS.leads, leads)
  },
  update: (id: string, updates: Partial<Lead>) => {
    const leads = getFromStorage<Lead>(STORAGE_KEYS.leads)
    const index = leads.findIndex(l => l.id === id)
    if (index !== -1) {
      leads[index] = { ...leads[index], ...updates }
      saveToStorage(STORAGE_KEYS.leads, leads)
    }
  },
  delete: (id: string) => {
    const leads = getFromStorage<Lead>(STORAGE_KEYS.leads)
    saveToStorage(STORAGE_KEYS.leads, leads.filter(l => l.id !== id))
  },
}

export const copiesStorage = {
  getAll: () => getFromStorage<Copy>(STORAGE_KEYS.copies),
  add: (copy: Copy) => {
    const copies = getFromStorage<Copy>(STORAGE_KEYS.copies)
    copies.push(copy)
    saveToStorage(STORAGE_KEYS.copies, copies)
  },
  update: (id: string, updates: Partial<Copy>) => {
    const copies = getFromStorage<Copy>(STORAGE_KEYS.copies)
    const index = copies.findIndex(c => c.id === id)
    if (index !== -1) {
      copies[index] = { ...copies[index], ...updates }
      saveToStorage(STORAGE_KEYS.copies, copies)
    }
  },
  delete: (id: string) => {
    const copies = getFromStorage<Copy>(STORAGE_KEYS.copies)
    saveToStorage(STORAGE_KEYS.copies, copies.filter(c => c.id !== id))
  },
}

export const nichesStorage = {
  getAll: () => getFromStorage<Niche>(STORAGE_KEYS.niches),
  add: (niche: Niche) => {
    const niches = getFromStorage<Niche>(STORAGE_KEYS.niches)
    niches.push(niche)
    saveToStorage(STORAGE_KEYS.niches, niches)
  },
}

export const servicesStorage = {
  getAll: () => getFromStorage<Service>(STORAGE_KEYS.services),
  add: (service: Service) => {
    const services = getFromStorage<Service>(STORAGE_KEYS.services)
    services.push(service)
    saveToStorage(STORAGE_KEYS.services, services)
  },
}

export const proposalsStorage = {
  getAll: () => getFromStorage<Proposal>(STORAGE_KEYS.proposals),
  add: (proposal: Proposal) => {
    const proposals = getFromStorage<Proposal>(STORAGE_KEYS.proposals)
    proposals.push(proposal)
    saveToStorage(STORAGE_KEYS.proposals, proposals)
  },
  update: (id: string, updates: Partial<Proposal>) => {
    const proposals = getFromStorage<Proposal>(STORAGE_KEYS.proposals)
    const index = proposals.findIndex(p => p.id === id)
    if (index !== -1) {
      proposals[index] = { ...proposals[index], ...updates }
      saveToStorage(STORAGE_KEYS.proposals, proposals)
    }
  },
}

export const projectsStorage = {
  getAll: () => getFromStorage<Project>(STORAGE_KEYS.projects),
  add: (project: Project) => {
    const projects = getFromStorage<Project>(STORAGE_KEYS.projects)
    projects.push(project)
    saveToStorage(STORAGE_KEYS.projects, projects)
  },
  update: (id: string, updates: Partial<Project>) => {
    const projects = getFromStorage<Project>(STORAGE_KEYS.projects)
    const index = projects.findIndex(p => p.id === id)
    if (index !== -1) {
      projects[index] = { ...projects[index], ...updates }
      saveToStorage(STORAGE_KEYS.projects, projects)
    }
  },
}

export const tasksStorage = {
  getAll: () => getFromStorage<Task>(STORAGE_KEYS.tasks),
  add: (task: Task) => {
    const tasks = getFromStorage<Task>(STORAGE_KEYS.tasks)
    tasks.push(task)
    saveToStorage(STORAGE_KEYS.tasks, tasks)
  },
  update: (id: string, updates: Partial<Task>) => {
    const tasks = getFromStorage<Task>(STORAGE_KEYS.tasks)
    const index = tasks.findIndex(t => t.id === id)
    if (index !== -1) {
      tasks[index] = { ...tasks[index], ...updates }
      saveToStorage(STORAGE_KEYS.tasks, tasks)
    }
  },
}

export const financialStorage = {
  getAll: () => getFromStorage<FinancialRecord>(STORAGE_KEYS.financial),
  add: (record: FinancialRecord) => {
    const records = getFromStorage<FinancialRecord>(STORAGE_KEYS.financial)
    records.push(record)
    saveToStorage(STORAGE_KEYS.financial, records)
  },
  update: (id: string, updates: Partial<FinancialRecord>) => {
    const records = getFromStorage<FinancialRecord>(STORAGE_KEYS.financial)
    const index = records.findIndex(r => r.id === id)
    if (index !== -1) {
      records[index] = { ...records[index], ...updates }
      saveToStorage(STORAGE_KEYS.financial, records)
    }
  },
}

export const calendarStorage = {
  getAll: () => getFromStorage<CalendarEvent>(STORAGE_KEYS.calendar),
  add: (event: CalendarEvent) => {
    const events = getFromStorage<CalendarEvent>(STORAGE_KEYS.calendar)
    events.push(event)
    saveToStorage(STORAGE_KEYS.calendar, events)
  },
  update: (id: string, updates: Partial<CalendarEvent>) => {
    const events = getFromStorage<CalendarEvent>(STORAGE_KEYS.calendar)
    const index = events.findIndex(e => e.id === id)
    if (index !== -1) {
      events[index] = { ...events[index], ...updates }
      saveToStorage(STORAGE_KEYS.calendar, events)
    }
  },
}

export const clearAllDemoData = () => {
  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key)
  })
}
