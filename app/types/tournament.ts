// Shared tournament constants and types
export const tournamentStatuses = {
  live: 'live',
  registration: 'registration',
  upcoming: 'upcoming',
  completed: 'completed'
} as const

export type TournamentStatus = typeof tournamentStatuses[keyof typeof tournamentStatuses]

export const tournamentFormats = {
  elimination: 'elimination',
  singleElimination: 'single-elimination',
  doubleElimination: 'double-elimination',
  roundRobin: 'round-robin'
} as const

export type TournamentFormat = typeof tournamentFormats[keyof typeof tournamentFormats]

// Form values used when creating a tournament
export type TournamentCreateValues = {
  name: string
  description: string
  game: string
  prize: string | number
  startDate: string
  startTime: string
  maxParticipants: string | number
  format: TournamentFormat
  isPublic: boolean
  registrationOpen: boolean
  rules: string
}

// Minimal tournament as returned by API for listing/details
export type TournamentDto = {
  id: number
  title: string
  game: string
  startDate?: string
  prizePool?: number
  participantsCount?: number
  maxParticipants?: number
  status?: TournamentStatus
  description?: string
  format?: TournamentFormat | string
  platform?: string
  region?: string
  organizer?: { id: number; username: string } | null
}

// View-model used across UI components on tournament page
export type TournamentView = {
  id: number
  title: string
  game: string
  date: string
  time?: string
  prize: string
  participants: number
  maxParticipants: number
  status: TournamentStatus
  progress: number
  image: string
  description: string
  format?: string
  platform?: string
  region?: string
  organizer?: string
}

