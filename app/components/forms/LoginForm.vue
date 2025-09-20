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
interface LoginForm {
  email: string
  password: string
  rememberMe: boolean
}

interface LoginErrors {
  email?: string
  password?: string
  general?: string
}

// События
const emit = defineEmits<{
  success: [user: any]
  error: [message: string]
}>()

// Реактивные данные
const form = reactive<LoginForm>({
  email: '',
  password: '',
  rememberMe: false
})

const errors = reactive<LoginErrors>({})
const isLoading = ref(false)

// Вычисляемые свойства
const isFormValid = computed(() => {
  return form.email && form.password && !Object.keys(errors).length
})

// Методы
const validateForm = (): boolean => {
  // Очистка предыдущих ошибок
  Object.keys(errors).forEach(key => delete errors[key as keyof LoginErrors])

  let isValid = true

  // Валидация email
  if (!form.email) {
    errors.email = 'Email обязателен'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Некорректный email'
    isValid = false
  }

  // Валидация пароля
  if (!form.password) {
    errors.password = 'Пароль обязателен'
    isValid = false
  } else if (form.password.length < 6) {
    errors.password = 'Пароль должен содержать минимум 6 символов'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) return

  isLoading.value = true
  
  try {
    // Здесь будет API вызов для входа
    // const response = await $fetch('/api/auth/login', {
    //   method: 'POST',
    //   body: {
    //     email: form.email,
    //     password: form.password,
    //     rememberMe: form.rememberMe
    //   }
    // })

    // Имитация API вызова
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Успешный вход
    emit('success', {
      id: '1',
      email: form.email,
      username: 'User'
    })
    
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
