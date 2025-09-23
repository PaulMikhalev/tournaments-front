<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <!-- Имя пользователя -->
    <div>
      <label for="username" class="block text-sm font-medium text-text-primary mb-2">
        Имя пользователя
      </label>
      <UInput
        id="username"
        v-model="form.username"
        type="text"
        placeholder="Введите имя пользователя"
        :error="errors.username"
        class="w-full"
        size="lg"
      />
    </div>

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

    <!-- Подтверждение пароля -->
    <div>
      <label for="confirmPassword" class="block text-sm font-medium text-text-primary mb-2">
        Подтвердите пароль
      </label>
      <UInput
        id="confirmPassword"
        v-model="form.confirmPassword"
        type="password"
        placeholder="Подтвердите пароль"
        :error="errors.confirmPassword"
        class="w-full"
        size="lg"
      />
    </div>

    <!-- Команда (опционально) -->
    <div>
      <label for="team" class="block text-sm font-medium text-text-primary mb-2">
        Команда (необязательно)
      </label>
      <UInput
        id="team"
        v-model="form.team"
        type="text"
        placeholder="Название команды"
        :error="errors.team"
        class="w-full"
        size="lg"
      />
    </div>

    <!-- Согласие с условиями -->
    <div class="flex items-start space-x-3">
      <UCheckbox
        v-model="form.agreeToTerms"
        class="mt-1"
      />
      <div class="text-sm text-text-secondary">
        Я согласен с 
        <NuxtLink to="/terms" class="text-primary hover:text-primary/80 transition-colors">
          условиями использования
        </NuxtLink>
        и 
        <NuxtLink to="/privacy" class="text-primary hover:text-primary/80 transition-colors">
          политикой конфиденциальности
        </NuxtLink>
      </div>
    </div>

    <!-- Кнопка регистрации -->
    <UButton
      type="submit"
      :loading="isLoading"
      :disabled="!isFormValid"
      class="w-full bg-primary hover:bg-primary/90 text-black font-semibold py-3 rounded-xl transition-all duration-200"
      size="lg"
    >
      Зарегистрироваться
    </UButton>

    <!-- Социальные сети -->
    <div class="relative">
      <div class="relative flex justify-center text-sm">
        <span class="px-2 bg-surface text-text-muted">Или зарегистрируйтесь через</span>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-3">
      <UButton
        variant="outline"
        color="neutral"
        class="w-full border-border hover:bg-white/10"
        @click="registerWithGoogle"
      >
        <Icon name="logos:google-icon" class="w-5 h-5 mr-2" />
        Google
      </UButton>
      <UButton
        variant="outline"
        color="neutral"
        class="w-full border-border hover:bg-white/10"
        @click="registerWithDiscord"
      >
        <Icon name="logos:discord-icon" class="w-5 h-5 mr-2" />
        Discord
      </UButton>
    </div>

    <!-- Ссылка на логин -->
    <div class="text-center">
      <span class="text-text-secondary">Уже есть аккаунт? </span>
      <NuxtLink 
        to="/login" 
        class="text-primary hover:text-primary/80 transition-colors font-medium"
      >
        Войти
      </NuxtLink>
    </div>
  </form>
</template>

<script setup lang="ts">
import { registerSchema } from '@/schema/auth'
import type { RegisterFormValues, RegisterFormErrors } from '@/types/auth'

// События
const emit = defineEmits<{
  success: [user: any]
  error: [message: string]
}>()

// Реактивные данные
const form = reactive<RegisterFormValues>({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  team: '',
  agreeToTerms: false
})

const errors = reactive<RegisterFormErrors>({})
const isLoading = ref(false)

// Вычисляемые свойства
const isFormValid = computed(() => registerSchema.safeParse(form).success)

// Методы
const validateForm = (): boolean => {
  Object.keys(errors).forEach(key => delete (errors as any)[key])
  const result = registerSchema.safeParse(form)
  if (result.success) return true
  for (const issue of result.error.issues) {
    const field = issue.path[0] as keyof RegisterFormValues | undefined
    if (field) (errors as any)[field] = issue.message
  }
  return false
}

const handleSubmit = async () => {
  if (!validateForm()) return

  isLoading.value = true
  
  try {
    const { api, setToken } = useApi()
    
    const response = await api('/auth/register', {
      method: 'POST',
      body: {
        username: form.username,
        email: form.email,
        password: form.password,
        confirmPassword: form.confirmPassword
      }
    })
    
    if (response && (response as any)?.data?.token) {
      const token = (response as any)?.data?.token
      setToken(token)
    }
    emit('success', (response as any).user || { username: form.username, email: form.email })
    
  } catch (error: any) {
    emit('error', error.message || 'Ошибка при регистрации')
  } finally {
    isLoading.value = false
  }
}

const registerWithGoogle = () => {
  // Логика регистрации через Google
  console.log('Register with Google')
}

const registerWithDiscord = () => {
  // Логика регистрации через Discord
  console.log('Register with Discord')
}
</script>
