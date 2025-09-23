import { z } from 'zod'

export const tournamentCreateSchema = z.object({
  name: z.string().min(1, 'Название обязательно'),
  description: z.string().optional().default(''),
  game: z.string().min(1, 'Игра обязательна'),
  prize: z
    .union([z.string(), z.number()])
    .optional()
    .transform((v) => (typeof v === 'string' ? Number(v.replace(/[^0-9.]/g, '')) : Number(v || 0)))
    .pipe(z.number().min(0, 'Призовой фонд не может быть отрицательным')),
  startDate: z.string().min(1, 'Дата начала обязательна'),
  startTime: z.string().min(1, 'Время начала обязательно'),
  maxParticipants: z
    .union([z.string(), z.number()])
    .transform((v) => Number(v))
    .pipe(z.number().int().min(2).max(1024)),
  format: z.enum(['elimination', 'single-elimination', 'double-elimination', 'round-robin']),
  isPublic: z.boolean(),
  registrationOpen: z.boolean(),
  rules: z.string().optional().default('')
})

export type TournamentCreateSchema = typeof tournamentCreateSchema


