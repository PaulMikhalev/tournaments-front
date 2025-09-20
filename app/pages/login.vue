<template>
  <div class="min-h-screen bg-home-gradient flex items-center justify-center px-4">
    <div class="w-full max-w-md">
      <!-- Логотип/заголовок -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-white mb-2">Добро пожаловать!</h1>
        <p class="text-text-secondary">Войдите в свой аккаунт</p>
      </div>

      <!-- Форма логина -->
      <div class="bg-surface rounded-2xl p-8 shadow-2xl">
        <LoginForm @success="handleLoginSuccess" @error="handleLoginError" />
        
        <!-- Ссылка на регистрацию -->
        <div class="mt-6 text-center">
          <p class="text-text-secondary">
            Нет аккаунта? 
            <NuxtLink to="/register" class="text-primary hover:text-primary/80 font-medium transition-colors">
              Зарегистрироваться
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Мета-данные страницы
useHead({
  title: 'Вход в аккаунт - Tournaments',
  meta: [
    { name: 'description', content: 'Войдите в свой аккаунт для участия в турнирах' }
  ]
})

// Обработчики событий
const handleLoginSuccess = (user: any) => {
  // Перенаправление после успешного входа
  navigateTo('/profile')
}

const handleLoginError = (error: string) => {
  // Показ ошибки через уведомления
  const toast = useToast()
  toast.add({
    title: 'Ошибка входа',
    description: error,
    color: 'red'
  })
}
</script>
