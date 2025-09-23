// Shared tournament constants and types based on backend API
export const tournamentStatuses = {
  REGISTRATION: 'REGISTRATION',
  LIVE: 'LIVE',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
} as const

export type TournamentStatus = typeof tournamentStatuses[keyof typeof tournamentStatuses]

export const tournamentFormats = {
  SINGLE_ELIMINATION: 'SINGLE_ELIMINATION',
  DOUBLE_ELIMINATION: 'DOUBLE_ELIMINATION',
  ROUND_ROBIN: 'ROUND_ROBIN',
  SWISS: 'SWISS'
} as const

export type TournamentFormat = typeof tournamentFormats[keyof typeof tournamentFormats]

export const participantStatuses = {
  REGISTERED: 'REGISTERED',
  CONFIRMED: 'CONFIRMED',
  DISQUALIFIED: 'DISQUALIFIED',
  WITHDRAWN: 'WITHDRAWN'
} as const

export type ParticipantStatus = typeof participantStatuses[keyof typeof participantStatuses]

export const matchStatuses = {
  SCHEDULED: 'SCHEDULED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
} as const

export type MatchStatus = typeof matchStatuses[keyof typeof matchStatuses]

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

// Tournament as returned by API (matches backend TournamentResponse)
export type TournamentDto = {
  id: string
  title: string
  description?: string
  game: string
  image?: string
  status: TournamentStatus
  startDate: string
  endDate?: string
  prizePool: number
  maxParticipants: number
  currentParticipants: number
  format: TournamentFormat
  isPublic: boolean
  registrationOpen: boolean
  rules?: string
  organizer: {
    id: string
    username: string
    avatar?: string
  }
  participants: TournamentParticipant[]
  matches: MatchDto[]
  createdAt: string
  updatedAt: string
}

// Tournament participant type (matches backend TournamentParticipantResponse)
export type TournamentParticipant = {
  id: string
  user: {
    id: string
    username: string
    avatar?: string
    team?: string
  }
  status: ParticipantStatus
  joinedAt: string
}

// Match type (matches backend MatchResponse)
export type MatchDto = {
  id: string
  round: number
  matchNumber: number
  player1?: {
    id: string
    username: string
    avatar?: string
  }
  player2?: {
    id: string
    username: string
    avatar?: string
  }
  player1Score?: number
  player2Score?: number
  status: MatchStatus
  scheduledAt?: string
  startedAt?: string
  completedAt?: string
}

// View-model used across UI components on tournament page
export type TournamentView = {
  id: string
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
  participantsList?: TournamentParticipant[]
}

// Request types for API calls
export type JoinTournamentRequest = {
  character?: string
}

export type CreateTournamentRequest = {
  title: string
  description?: string
  game: string
  image?: string
  startDate: string
  endDate?: string
  prizePool?: number
  maxParticipants: number
  format: TournamentFormat
  isPublic: boolean
  registrationOpen: boolean
  rules?: string
}

export type UpdateTournamentRequest = {
  title?: string
  description?: string
  game?: string
  image?: string
  startDate?: string
  endDate?: string
  prizePool?: number
  maxParticipants?: number
  format?: TournamentFormat
  isPublic?: boolean
  registrationOpen?: boolean
  rules?: string
  status?: TournamentStatus
}

