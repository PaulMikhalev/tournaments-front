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
interface RegisterForm {
  username: string
  email: string
  password: string
  confirmPassword: string
  team: string
  agreeToTerms: boolean
}

interface RegisterErrors {
  username?: string
  email?: string
  password?: string
  confirmPassword?: string
  team?: string
  agreeToTerms?: string
  general?: string
}

// События
const emit = defineEmits<{
  success: [user: any]
  error: [message: string]
}>()

// Реактивные данные
const form = reactive<RegisterForm>({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  team: '',
  agreeToTerms: false
})

const errors = reactive<RegisterErrors>({})
const isLoading = ref(false)

// Вычисляемые свойства
const isFormValid = computed(() => {
  return form.username && 
         form.email && 
         form.password && 
         form.confirmPassword && 
         form.agreeToTerms && 
         !Object.keys(errors).length
})

// Методы
const validateForm = (): boolean => {
  // Очистка предыдущих ошибок
  Object.keys(errors).forEach(key => delete errors[key as keyof RegisterErrors])

  let isValid = true

  // Валидация имени пользователя
  if (!form.username) {
    errors.username = 'Имя пользователя обязательно'
    isValid = false
  } else if (form.username.length < 3) {
    errors.username = 'Имя пользователя должно содержать минимум 3 символа'
    isValid = false
  } else if (!/^[a-zA-Z0-9_]+$/.test(form.username)) {
    errors.username = 'Имя пользователя может содержать только буквы, цифры и подчеркивания'
    isValid = false
  }

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
  } else if (form.password.length < 8) {
    errors.password = 'Пароль должен содержать минимум 8 символов'
    isValid = false
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(form.password)) {
    errors.password = 'Пароль должен содержать заглавные и строчные буквы, а также цифры'
    isValid = false
  }

  // Валидация подтверждения пароля
  if (!form.confirmPassword) {
    errors.confirmPassword = 'Подтверждение пароля обязательно'
    isValid = false
  } else if (form.password !== form.confirmPassword) {
    errors.confirmPassword = 'Пароли не совпадают'
    isValid = false
  }

  // Валидация согласия с условиями
  if (!form.agreeToTerms) {
    errors.agreeToTerms = 'Необходимо согласиться с условиями использования'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) return

  isLoading.value = true
  
  try {
    // Здесь будет API вызов для регистрации
    // const response = await $fetch('/api/auth/register', {
    //   method: 'POST',
    //   body: {
    //     username: form.username,
    //     email: form.email,
    //     password: form.password,
    //     team: form.team
    //   }
    // })

    // Имитация API вызова
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Успешная регистрация
    emit('success', {
      id: '1',
      username: form.username,
      email: form.email,
      team: form.team
    })
    
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
