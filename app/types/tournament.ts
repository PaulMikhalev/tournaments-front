export type TournamentCreateValues = {
  name: string
  description: string
  game: string
  prize: string | number
  startDate: string
  startTime: string
  maxParticipants: string | number
  format: 'elimination' | 'single-elimination' | 'double-elimination' | 'round-robin'
  isPublic: boolean
  registrationOpen: boolean
  rules: string
}


