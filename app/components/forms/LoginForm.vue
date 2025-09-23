<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <!-- Email -->
    <div>
      <label for="email" class="block text-sm font-medium text-text-primary mb-2">
        Email
      </label>
      <UInput
        id="email"
        v-model="form.email"
        type="email"
        placeholder="Введите ваш email"
        :error="errors.email"
        class="w-full"
        size="lg"
      />
    </div>

    <!-- Пароль -->
    <div>
      <label for="password" class="block text-sm font-medium text-text-primary mb-2">
        Пароль
      </label>
      <UInput
        id="password"
        v-model="form.password"
        type="password"
        placeholder="Введите пароль"
        :error="errors.password"
        class="w-full"
        size="lg"
      />
    </div>

    <!-- Запомнить меня -->
    <div class="flex items-center justify-between">
      <UCheckbox
        v-model="form.rememberMe"
        label="Запомнить меня"
        class="text-text-secondary"
      />
      <NuxtLink 
        to="/forgot-password" 
        class="text-sm text-primary hover:text-primary/80 transition-colors"
      >
        Забыли пароль?
      </NuxtLink>
    </div>

    <!-- Кнопка входа -->
    <UButton
      type="submit"
      :loading="isLoading"
      :disabled="!isFormValid"
      class="w-full bg-primary hover:bg-primary/90 text-black font-semibold py-3 rounded-xl transition-all duration-200"
      size="lg"
    >
      Войти
    </UButton>

    <!-- Социальные сети -->
    <div class="relative">
      <div class="relative flex justify-center text-sm">
        <span class="px-2 bg-surface text-text-muted">Или войдите через</span>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-3">
      <UButton
        variant="outline"
        color="neutral"
        class="w-full border-border hover:bg-white/10"
        @click="loginWithGoogle"
      >
        <Icon name="logos:google-icon" class="w-5 h-5 mr-2" />
        Google
      </UButton>
      <UButton
        variant="outline"
        color="neutral"
        class="w-full border-border hover:bg-white/10"
        @click="loginWithDiscord"
      >
        <Icon name="logos:discord-icon" class="w-5 h-5 mr-2" />
        Discord
      </UButton>
    </div>

    <!-- Ссылка на регистрацию -->
    <div class="text-center">
      <span class="text-text-secondary">Нет аккаунта? </span>
      <NuxtLink 
        to="/register" 
        class="text-primary hover:text-primary/80 transition-colors font-medium"
      >
        Зарегистрироваться
      </NuxtLink>
    </div>
  </form>
</template>

<script setup lang="ts">
import { loginSchema } from '@/app/schema/auth'
import type { LoginFormValues, LoginFormErrors } from '@/app/types/auth'

// События
const emit = defineEmits<{
  success: [user: any]
  error: [message: string]
}>()

// Реактивные данные
const form = reactive<LoginFormValues>({
  email: '',
  password: '',
  rememberMe: false
})

const errors = reactive<LoginFormErrors>({})
const isLoading = ref(false)

// Вычисляемые свойства
const isFormValid = computed(() => loginSchema.safeParse(form).success)

// Методы
const validateForm = (): boolean => {
  Object.keys(errors).forEach(key => delete (errors as any)[key])
  const result = loginSchema.safeParse(form)
  if (result.success) return true
  for (const issue of result.error.issues) {
    const field = issue.path[0] as keyof LoginFormValues | undefined
    if (field) errors[field] = issue.message
  }
  return false
}

const handleSubmit = async () => {
  if (!validateForm()) return

  isLoading.value = true
  
  try {
    const { api, setToken } = useApi()
    const response = await api('/auth/login', {
      method: 'POST',
      body: {
        email: form.email,
        password: form.password
      }
    })
    
    if (response && (response as any)?.data?.token) {
      const token = (response as any)?.data?.token
      setToken(token)
    }
    emit('success', (response as any).user || { email: form.email })
    
  } catch (error: any) {
    emit('error', error.message || 'Ошибка при входе в систему')
  } finally {
    isLoading.value = false
  }
}

const loginWithGoogle = () => {
  // Логика входа через Google
  console.log('Login with Google')
}

const loginWithDiscord = () => {
  // Логика входа через Discord
  console.log('Login with Discord')
}
</script>
