export type LoginFormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export type LoginFormErrors = Partial<Record<keyof LoginFormValues | 'general', string>>

export type RegisterFormValues = {
  username: string
  email: string
  password: string
  confirmPassword: string
  team: string
  agreeToTerms: boolean
}

export type RegisterFormErrors = Partial<
  Record<keyof RegisterFormValues | 'general', string>
>


