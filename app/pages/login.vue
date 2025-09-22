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
        <FormsLoginForm @success="handleLoginSuccess" @error="handleLoginError" />
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
  // Получаем redirect параметр из URL
  const route = useRoute()
  const redirectTo = route.query.redirect as string || '/profile'
  
  // Перенаправление после успешного входа
  navigateTo(redirectTo)
}

const handleLoginError = (error: string) => {
  // Показ ошибки через уведомления
  const toast = useToast()
  toast.add({
    title: 'Ошибка входа',
    description: error,
    color: 'error'
  })
}
</script>
