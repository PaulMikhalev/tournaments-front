import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().min(1, 'Email обязателен').email('Некорректный email'),
  password: z.string().min(6, 'Пароль должен содержать минимум 6 символов'),
  rememberMe: z.boolean().default(false)
})

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, 'Имя пользователя должно содержать минимум 3 символа')
      .regex(/^[a-zA-Z0-9_]+$/, 'Имя пользователя может содержать только буквы, цифры и подчеркивания'),
    email: z.string().min(1, 'Email обязателен').email('Некорректный email'),
    password: z
      .string()
      .min(8, 'Пароль должен содержать минимум 8 символов')
      .regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Пароль должен содержать заглавные и строчные буквы, а также цифры'),
    confirmPassword: z.string().min(1, 'Подтверждение пароля обязательно'),
    team: z.string().optional().default(''),
    agreeToTerms: z.literal(true, {
      errorMap: () => ({ message: 'Необходимо согласиться с условиями использования' })
    })
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Пароли не совпадают'
  })

export type LoginSchema = typeof loginSchema
export type RegisterSchema = typeof registerSchema


